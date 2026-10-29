
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const raiz = process.cwd();
const dist = path.join(raiz, 'dist');
const docs = path.join(raiz, 'docs');

function executar(comando, argumentos) {
  const resultado = spawnSync(comando, argumentos, {
    cwd: raiz,
    stdio: 'inherit',
    shell: false
  });

  if (resultado.error) throw resultado.error;

  if (resultado.status !== 0) {
    throw new Error(`Falha ao executar: ${comando}`);
  }
}

try {
  console.log('\n1. Compilando projeto...');

  executar(process.execPath, [
    path.join(raiz, 'node_modules', 'vite', 'bin', 'vite.js'),
    'build'
  ]);

  console.log('\n2. Atualizando arquivos publicados...');

  if (!fs.existsSync(dist)) {
    throw new Error('Pasta dist não encontrada.');
  }

  fs.rmSync(path.join(docs, 'assets'), {
    recursive: true,
    force: true
  });

  for (const item of fs.readdirSync(dist)) {
    fs.cpSync(
      path.join(dist, item),
      path.join(docs, item),
      { recursive: true }
    );
  }

  console.log('\n3. Preparando GitHub...');

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
    throw new Error('Não foi possível verificar alterações.');
  }

  console.log('\n4. Criando commit...');

  executar('git', ['commit', '-m', 'Atualiza SISTEMA VET']);

  console.log('\n5. Enviando ao GitHub...');

  executar('git', ['push']);

  console.log('\nPUBLICAÇÃO CONCLUÍDA COM SUCESSO!');

} catch (erro) {
  console.error('\nERRO:', erro.message);
  process.exitCode = 1;
}
