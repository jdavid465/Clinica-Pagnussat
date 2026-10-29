
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const raiz = process.cwd();
const dist = path.join(raiz, 'dist');
const docs = path.join(raiz, 'docs');
const htmlOriginal = path.join(docs, 'index.html');

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
    throw new Error(`Falha ao executar: ${comando}`);
  }
}

try {
  console.log('\n1. Guardando o HTML original...');

  const backupHtml = fs.readFileSync(htmlOriginal, 'utf8');

  console.log('\n2. Compilando o projeto...');

  executar(process.execPath, [
    path.join(raiz, 'node_modules', 'vite', 'bin', 'vite.js'),
    'build'
  ]);

  console.log('\n3. Atualizando a pasta docs...');

  if (!fs.existsSync(dist)) {
    throw new Error('Pasta dist não encontrada.');
  }

  const assets = path.join(docs, 'assets');

  fs.rmSync(assets, { recursive: true, force: true });

  for (const item of fs.readdirSync(dist)) {
    fs.cpSync(
      path.join(dist, item),
      path.join(docs, item),
      { recursive: true }
    );
  }

  // Restaura o HTML-fonte para a próxima compilação.
  fs.writeFileSync(htmlOriginal, backupHtml, 'utf8');

  console.log('\n4. Preparando arquivos para o GitHub...');

  executar('git', ['add', '-A']);

  const alteracoes = spawnSync(
    'git',
    ['diff', '--cached', '--quiet'],
    { cwd: raiz, stdio: 'ignore', shell: false }
  );

  if (alteracoes.status === 0) {
    console.log('\nNenhuma alteração para publicar.');
    process.exit(0);
  }

  if (alteracoes.status !== 1) {
    throw new Error('Não foi possível verificar as alterações do Git.');
  }

  console.log('\n5. Criando commit...');

  executar('git', ['commit', '-m', 'Atualiza SISTEMA VET']);

  console.log('\n6. Enviando para o GitHub...');

  executar('git', ['push']);

  console.log('\nPUBLICAÇÃO CONCLUÍDA COM SUCESSO!');
  
} catch (erro) {
  console.error('\nERRO:', erro.message);
  process.exitCode = 1;
}
