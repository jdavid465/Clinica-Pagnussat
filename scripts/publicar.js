import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const raiz = process.cwd();
const dist = path.join(raiz, 'dist');
const docs = path.join(raiz, 'docs');

const indexHtml = path.join(docs, 'index.html');
const templateHtml = path.join(docs, 'index.template.html');
const mainJsx = path.join(docs, 'src', 'main.jsx');
const assetsDocs = path.join(docs, 'assets');

function executar(comando, argumentos) {
  const resultado = spawnSync(comando, argumentos, {
    cwd: raiz,
    stdio: 'inherit',
    shell: false
  });

  if (resultado.error) {
    throw resultado.error;
  }

  if (resultado.status !== 0) {
    throw new Error(
      `Falha ao executar: ${comando} (código ${resultado.status})`
    );
  }
}

function validarArquivos() {
  if (!fs.existsSync(docs)) {
    throw new Error('Pasta docs não encontrada.');
  }

  if (!fs.existsSync(templateHtml)) {
    throw new Error('Arquivo docs/index.template.html não encontrado.');
  }

  if (!fs.existsSync(mainJsx)) {
    throw new Error('Arquivo docs/src/main.jsx não encontrado.');
  }

  const template = fs.readFileSync(templateHtml, 'utf8');

  if (!template.includes('./src/main.jsx')) {
    throw new Error(
      'O template precisa carregar ./src/main.jsx.'
    );
  }

  if (
    /\/SISTEMA-VET\/assets\/index-[^"' ]+\.js/.test(template)
  ) {
    throw new Error(
      'O template contém uma referência de JavaScript compilado.'
    );
  }

  if (!template.includes('id="root"')) {
    throw new Error(
      'O template não contém o elemento root do React.'
    );
  }
}

function restaurarDestino(destino, backup) {
  if (backup.existe) {
    fs.rmSync(destino, {
      recursive: true,
      force: true
    });

    fs.cpSync(backup.caminho, destino, {
      recursive: true
    });
  } else {
    fs.rmSync(destino, {
      recursive: true,
      force: true
    });
  }
}

function prepararBackup(diretorioBackup, destinos) {
  return destinos.map((destino, indice) => {
    const existe = fs.existsSync(destino);
    const caminhoBackup = path.join(
      diretorioBackup,
      `backup-${indice}`
    );

    if (existe) {
      fs.cpSync(destino, caminhoBackup, {
        recursive: true
      });
    }

    return {
      destino,
      existe,
      caminho: caminhoBackup
    };
  });
}

function atualizarArquivosPublicados() {
  const diretorioBackup = fs.mkdtempSync(
    path.join(os.tmpdir(), 'sistema-vet-backup-')
  );

  const indexOriginal = fs.readFileSync(indexHtml);
  const destinosBackup = [];

  try {
    const itensDist = fs.readdirSync(dist);

    if (itensDist.length === 0) {
      throw new Error('A pasta dist está vazia.');
    }

    const indexDist = path.join(dist, 'index.html');

    if (!fs.existsSync(indexDist)) {
      throw new Error(
        'O build não gerou dist/index.html.'
      );
    }

    const htmlGerado = fs.readFileSync(indexDist, 'utf8');

    if (!htmlGerado.includes('/SISTEMA-VET/assets/')) {
      throw new Error(
        'O HTML compilado não contém os caminhos esperados do projeto.'
      );
    }

    const destinos = [
      assetsDocs,
      ...itensDist.map(item => path.join(docs, item))
    ];

    const destinosUnicos = [...new Set(destinos)];

    const backups = prepararBackup(
      diretorioBackup,
      destinosUnicos
    );

    destinosBackup.push(...backups);

    console.log('\n2. Atualizando arquivos publicados...');

    fs.rmSync(assetsDocs, {
      recursive: true,
      force: true
    });

    for (const item of itensDist) {
      fs.cpSync(
        path.join(dist, item),
        path.join(docs, item),
        {
          recursive: true
        }
      );
    }

    console.log('\nArquivos publicados atualizados.');

    fs.rmSync(diretorioBackup, {
      recursive: true,
      force: true
    });

  } catch (erro) {
    console.error(
      '\nFalha ao atualizar os arquivos publicados.'
    );

    for (const backup of destinosBackup.reverse()) {
      try {
        restaurarDestino(
          backup.destino,
          backup
        );
      } catch (erroRestauracao) {
        console.error(
          'Erro ao restaurar:',
          backup.destino,
          erroRestauracao.message
        );
      }
    }

    throw erro;

  } finally {
    if (fs.existsSync(diretorioBackup)) {
      fs.rmSync(diretorioBackup, {
        recursive: true,
        force: true
      });
    }
  }
}

function publicarGit() {
  console.log('\n3. Preparando GitHub...');

  executar('git', ['add', '-A']);

  const alteracoes = spawnSync(
    'git',
    ['diff', '--cached', '--quiet'],
    {
      cwd: raiz,
      stdio: 'ignore',
      shell: false
    }
  );

  if (alteracoes.status === 0) {
    console.log('\nNenhuma alteração para publicar.');
    return;
  }

  if (alteracoes.status !== 1) {
    throw new Error(
      'Não foi possível verificar as alterações do Git.'
    );
  }

  console.log('\n4. Criando commit...');

  executar('git', [
    'commit',
    '-m',
    'Atualiza SISTEMA VET'
  ]);

  console.log('\n5. Enviando ao GitHub...');

  executar('git', ['push']);

  console.log('\nPUBLICAÇÃO CONCLUÍDA COM SUCESSO!');
}

function main() {
  console.log('\n===================================');
  console.log('       PUBLICAÇÃO SISTEMA VET');
  console.log('===================================');

  console.log('\n1. Verificando arquivos...');

  validarArquivos();

  const indexOriginal = fs.readFileSync(indexHtml);

  try {
    console.log('\nRestaurando HTML-fonte para o Vite...');

    fs.copyFileSync(
      templateHtml,
      indexHtml
    );

    console.log('\n2. Compilando projeto...');

    executar(process.execPath, [
      path.join(
        raiz,
        'node_modules',
        'vite',
        'bin',
        'vite.js'
      ),
      'build'
    ]);

    if (!fs.existsSync(dist)) {
      throw new Error('Pasta dist não encontrada.');
    }

    atualizarArquivosPublicados();

  } catch (erro) {
    console.error('\nERRO DURANTE BUILD OU ATUALIZAÇÃO:');
    console.error(erro.message);

    console.log('\nRestaurando index.html anterior...');

    fs.writeFileSync(
      indexHtml,
      indexOriginal
    );

    throw erro;
  }

  publicarGit();
}

try {
  main();
} catch (erro) {
  console.error('\n===================================');
  console.error('       PUBLICAÇÃO INTERROMPIDA');
  console.error('===================================');
  console.error(erro.message);

  process.exitCode = 1;
}