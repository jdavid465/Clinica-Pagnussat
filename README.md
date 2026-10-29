 
# 🐾 SISTEMA VET — Documentação e Plano de Desenvolvimento

> Documento principal do projeto. Reúne histórico, arquitetura, planejamento, regras de desenvolvimento e acompanhamento das funcionalidades.

**Repositório:** https://github.com/jdavid465/SISTEMA-VET  
**Sistema:** https://jdavid465.github.io/SISTEMA-VET/

**Legenda:**
- [x] Concluído
- [ ] Pendente
- [~] Em desenvolvimento
- [?] Precisa de validação

---

# 📚 ÍNDICE

1. [Histórico do projeto](#1-histórico-do-projeto)
2. [Arquitetura e estrutura de arquivos](#2-arquitetura-e-estrutura-de-arquivos)
3. [Comunicação entre os arquivos](#3-comunicação-entre-os-arquivos)
4. [Plano de desenvolvimento](#4-plano-de-desenvolvimento)
5. [Testes, segurança e publicação](#5-testes-segurança-e-publicação)
6. [Comandos do projeto](#6-comandos-do-projeto)
7. [Anotações e próximas ideias](#7-anotações-e-próximas-ideias)
8. [Protocolo oficial de desenvolvimento](#8-protocolo-oficial-de-desenvolvimento)
9. [Critério de status das funcionalidades](#9-critério-de-status-das-funcionalidades)

---

# 1. HISTÓRICO DO PROJETO

## 1.1 Ambiente e estrutura

- [x] Criar o projeto SISTEMA VET
- [x] Configurar React
- [x] Configurar Vite
- [x] Organizar estrutura do projeto na pasta `docs/`
- [x] Configurar `vite.config.js`
- [x] Configurar caminho base `/SISTEMA-VET/`
- [x] Configurar scripts no `package.json`
- [x] Criar script `scripts/publicar.js`
- [x] Configurar execução local com `npm run dev`
- [x] Criar atalho PowerShell `dv`
- [x] Criar atalho PowerShell `pb`

## 1.2 Firebase

- [x] Criar projeto Firebase
- [x] Configurar Firebase Authentication
- [x] Integrar Cloud Firestore
- [x] Implementar consulta inicial dos dados da clínica pelo UID
- [ ] Revisar estrutura completa do Firestore
- [ ] Revisar regras de segurança
- [ ] Testar isolamento entre clínicas
- [ ] Avaliar necessidade do Firebase Storage

**Projeto Firebase:** `banco-de-dados-clinica-23b42`

> A integração inicial existe, mas os fluxos completos e as regras de segurança ainda precisam ser validados.

## 1.3 Interface e publicação

- [x] Criar página inicial
- [x] Criar tela de login
- [x] Implementar autenticação inicial
- [x] Criar repositório no GitHub
- [x] Configurar GitHub Pages
- [x] Configurar script de publicação
- [x] Corrigir carregamento local pelo `docs/index.html`
- [x] Testar funcionamento local

[⬆️ Voltar ao topo](#-índice)

---

# 2. ARQUITETURA E ESTRUTURA DE ARQUIVOS

## 2.1 Estrutura principal conhecida

```text
SISTEMA-VET/
├── docs/
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       └── App.jsx
├── scripts/
│   └── publicar.js
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> A estrutura acima representa os arquivos principais conhecidos. Antes de criar, excluir ou reorganizar arquivos, conferir a árvore atual do GitHub e do projeto local.

## 2.2 Função dos arquivos

| Arquivo | Responsabilidade |
|---|---|
| `docs/index.html` | Página HTML inicial e ponto de entrada |
| `docs/src/main.jsx` | Inicialização do React |
| `docs/src/App.jsx` | Aplicação principal e interface |
| `vite.config.js` | Configuração do Vite |
| `package.json` | Dependências e comandos |
| `package-lock.json` | Registro das versões instaladas |
| `scripts/publicar.js` | Automação de build e publicação |
| `README.md` | Documentação e planejamento |

## 2.3 Regras de arquitetura

- Manter a organização dos arquivos clara.
- Separar componentes, serviços e regras de negócio quando necessário.
- Evitar duplicação de código.
- Não criar arquivos sem necessidade.
- Preservar os recursos já implementados.
- Atualizar esta documentação quando a arquitetura mudar.

[⬆️ Voltar ao topo](#-índice)

---

# 3. COMUNICAÇÃO ENTRE OS ARQUIVOS

## 3.1 Fluxo de inicialização

```text
docs/index.html
       |
       v
docs/src/main.jsx
       |
       v
docs/src/App.jsx
       |
       v
Interface do SISTEMA VET
       |
       v
Firebase Authentication / Firestore
```

## 3.2 Responsabilidade de cada etapa

1. `index.html` disponibiliza o elemento raiz e carrega o JavaScript.
2. `main.jsx` inicializa o React.
3. `App.jsx` apresenta e controla a aplicação.
4. Os serviços Firebase permitem autenticação e acesso aos dados.
5. Os componentes futuros deverão ser conectados à aplicação conforme a arquitetura evoluir.

## 3.3 Cuidados com alterações

Antes de modificar um arquivo:

- Verificar quem importa esse arquivo.
- Verificar quais arquivos dependem dele.
- Conferir os nomes e caminhos dos imports.
- Verificar se a alteração afeta outras funcionalidades.
- Testar o fluxo completo após a mudança.

[⬆️ Voltar ao topo](#-índice)

---

# 4. PLANO DE DESENVOLVIMENTO

## 4.1 Base técnica e segurança

- [ ] Revisar estrutura atual do projeto
- [ ] Organizar componentes e serviços
- [ ] Definir padrão de armazenamento dos dados
- [ ] Implementar tratamento de erros
- [ ] Revisar autenticação e sessão
- [ ] Implementar recuperação de senha
- [ ] Definir permissões por perfil
- [ ] Proteger operações administrativas
- [ ] Revisar regras do Firebase
- [ ] Criar rotina de backup

## 4.2 Estrutura multi-clínicas

- [ ] Definir identificação única de cada clínica
- [ ] Definir vínculo entre usuários e clínicas
- [ ] Separar os dados de cada clínica
- [ ] Impedir acesso aos dados de outras clínicas
- [ ] Testar com duas clínicas fictícias
- [ ] Documentar estrutura multi-clínicas

## 4.3 Solicitação de acesso

- [ ] Criar formulário de solicitação
- [ ] Solicitar nome da clínica
- [ ] Solicitar nome do responsável
- [ ] Solicitar e-mail
- [ ] Solicitar telefone
- [ ] Salvar solicitação no Firestore
- [ ] Criar status `pending`
- [ ] Impedir liberação automática de acesso
- [ ] Permitir análise pelo MASTER
- [ ] Permitir aprovação ou recusa
- [ ] Registrar data da solicitação
- [ ] Registrar responsável pela aprovação

## 4.4 Painel MASTER

- [ ] Criar acesso exclusivo MASTER
- [ ] Criar painel administrativo central
- [ ] Listar clínicas cadastradas
- [ ] Listar solicitações pendentes
- [ ] Visualizar dados das clínicas
- [ ] Aprovar solicitações
- [ ] Recusar solicitações
- [ ] Ativar clínicas
- [ ] Inativar clínicas
- [ ] Suspender acessos
- [ ] Consultar situação de cada clínica
- [ ] Registrar histórico de ações

## 4.5 Período de teste e planos

- [ ] Liberar teste de 30 dias após aprovação
- [ ] Registrar data de início
- [ ] Calcular data de vencimento
- [ ] Criar status `trial`
- [ ] Criar status `active`
- [ ] Criar status `expired`
- [ ] Criar status `inactive`
- [ ] Criar status `suspended`
- [ ] Aviso 7 dias antes do vencimento
- [ ] Aviso 3 dias antes do vencimento
- [ ] Aviso no último dia
- [ ] Aviso após vencimento
- [ ] Criar estrutura de planos
- [ ] Definir limites por plano
- [ ] Integrar sistema de pagamentos
- [ ] Implementar renovação

## 4.6 Painel da clínica e usuários

- [ ] Criar painel principal da clínica
- [ ] Exibir informações da clínica
- [ ] Criar cadastro de funcionários
- [ ] Vincular usuários à clínica
- [ ] Criar perfil ADMIN
- [ ] Criar perfis para equipe
- [ ] Definir permissões por módulo
- [ ] Ativar e desativar usuários
- [ ] Testar permissões

## 4.7 Cadastro de tutores

- [ ] Cadastrar tutores
- [ ] Registrar telefone
- [ ] Registrar e-mail
- [ ] Registrar endereço
- [ ] Registrar observações
- [ ] Pesquisar tutores
- [ ] Editar cadastro
- [ ] Consultar animais vinculados
- [ ] Evitar duplicidade de cadastro

## 4.8 Cadastro de pacientes

- [ ] Cadastrar cães
- [ ] Cadastrar gatos
- [ ] Cadastrar outras espécies
- [ ] Registrar nome
- [ ] Registrar espécie
- [ ] Registrar raça
- [ ] Registrar sexo
- [ ] Registrar nascimento ou idade estimada
- [ ] Registrar peso
- [ ] Registrar características
- [ ] Vincular tutor
- [ ] Adicionar foto
- [ ] Pesquisar pacientes
- [ ] Editar cadastro
- [ ] Consultar histórico

## 4.9 Atendimento e prontuário

- [ ] Criar registro de atendimento
- [ ] Registrar queixa principal
- [ ] Registrar anamnese
- [ ] Registrar exame físico
- [ ] Registrar sinais vitais
- [ ] Registrar avaliação clínica
- [ ] Registrar diagnóstico
- [ ] Registrar conduta
- [ ] Registrar procedimentos
- [ ] Registrar prescrições
- [ ] Anexar exames e documentos
- [ ] Consultar histórico clínico
- [ ] Identificar profissional responsável
- [ ] Registrar data e hora

## 4.10 Vacinação

- [ ] Registrar vacinas aplicadas
- [ ] Registrar fabricante
- [ ] Registrar lote
- [ ] Registrar validade
- [ ] Registrar dose
- [ ] Registrar via de aplicação
- [ ] Registrar data
- [ ] Identificar profissional responsável
- [ ] Calcular próximo reforço
- [ ] Consultar histórico vacinal
- [ ] Criar alertas de vacinação

## 4.11 Internamento

- [ ] Registrar entrada do paciente
- [ ] Registrar motivo da internação
- [ ] Identificar médico responsável
- [ ] Registrar parâmetros clínicos
- [ ] Registrar evolução
- [ ] Registrar medicações
- [ ] Registrar procedimentos
- [ ] Registrar alimentação
- [ ] Registrar cuidados
- [ ] Registrar intercorrências
- [ ] Registrar alta
- [ ] Consultar histórico de internação

## 4.12 Estoque e fornecedores

- [ ] Cadastrar produtos
- [ ] Cadastrar medicamentos
- [ ] Cadastrar fornecedores
- [ ] Registrar entradas
- [ ] Registrar saídas
- [ ] Consultar saldo
- [ ] Controlar lotes
- [ ] Controlar validade
- [ ] Criar alerta de estoque mínimo
- [ ] Registrar movimentações
- [ ] Identificar responsável pela movimentação

## 4.13 Financeiro

- [ ] Criar contas a receber
- [ ] Criar contas a pagar
- [ ] Registrar recebimentos
- [ ] Registrar despesas
- [ ] Criar fluxo de caixa
- [ ] Consultar saldo por período
- [ ] Relacionar cobranças aos atendimentos
- [ ] Definir formas de pagamento
- [ ] Criar relatórios financeiros
- [ ] Definir permissões financeiras

## 4.14 Relatórios e indicadores

- [ ] Relatório de atendimentos
- [ ] Relatório de pacientes
- [ ] Relatório de vacinação
- [ ] Relatório de internamentos
- [ ] Relatório de estoque
- [ ] Relatório financeiro
- [ ] Filtros por período
- [ ] Exportação de relatórios

[⬆️ Voltar ao topo](#-índice)

---

# 5. TESTES, SEGURANÇA E PUBLICAÇÃO

## 5.1 Testes

- [ ] Criar ambiente de testes
- [ ] Testar login
- [ ] Testar logout
- [ ] Testar recuperação de acesso
- [ ] Testar permissões
- [ ] Testar isolamento entre clínicas
- [ ] Testar todos os módulos
- [ ] Testar em computador
- [ ] Testar em celular
- [ ] Corrigir erros

## 5.2 Segurança

- [ ] Revisar regras do Firestore
- [ ] Verificar proteção dos dados
- [ ] Verificar permissões por usuário
- [ ] Verificar isolamento entre clínicas
- [ ] Criar rotina de backup
- [ ] Validar operações administrativas

## 5.3 Publicação

- [ ] Executar `npm run build`
- [ ] Conferir versão local
- [ ] Validar funcionalidades
- [ ] Publicar com `pb`
- [ ] Conferir versão no GitHub Pages

**Regra:** nenhuma publicação deve ser feita sem autorização explícita do responsável pelo projeto.

[⬆️ Voltar ao topo](#-índice)

---

# 6. COMANDOS DO PROJETO

| Comando | Função |
|---|---|
| `dv` | Iniciar servidor local |
| `pb` | Compilar e publicar |
| `Ctrl + S` | Salvar alterações |
| `Ctrl + Shift + V` | Pré-visualizar Markdown |
| `Ctrl + F5` | Atualizar navegador sem cache |
| `npm run build` | Gerar versão de produção |

## Fluxo de desenvolvimento

1. Abrir o projeto no VS Code.
2. Executar `dv`.
3. Fazer as alterações.
4. Salvar com `Ctrl + S`.
5. Testar no navegador.
6. Corrigir possíveis erros.
7. Validar novamente.
8. Executar `pb` somente após autorização e validação.

[⬆️ Voltar ao topo](#-índice)

---

# 7. ANOTAÇÕES E PRÓXIMAS IDEIAS

- [ ] Registrar próxima funcionalidade prioritária.
- [ ] Registrar decisões importantes.
- [ ] Registrar problemas encontrados.
- [ ] Registrar melhorias futuras.
- [ ] Atualizar este documento quando houver mudanças relevantes.

[⬆️ Voltar ao topo](#-índice)

---

# 8. PROTOCOLO OFICIAL DE DESENVOLVIMENTO

Este protocolo deve ser seguido por qualquer IA, desenvolvedor ou colaborador que trabalhar no SISTEMA VET.

## 8.1 Antes de começar

1. Consultar o repositório oficial: https://github.com/jdavid465/SISTEMA-VET
2. Verificar a branch principal e o estado atual dos arquivos.
3. Consultar o código atual antes de sugerir alterações.
4. Identificar os arquivos envolvidos e suas dependências.
5. Verificar se outra implementação já existe.
6. Não utilizar informações antigas como substitutas do código atual.

## 8.2 Durante o desenvolvimento

- Preservar funcionalidades existentes.
- Não apagar recursos sem autorização.
- Não substituir arquivos sem analisar seu conteúdo atual.
- Não criar arquivos desnecessários.
- Manter compatibilidade com a estrutura existente.
- Evitar duplicação de funções e componentes.
- Considerar segurança e isolamento entre clínicas.
- Não inventar funcionalidades como se já estivessem implementadas.

## 8.3 Formato obrigatório de entrega

Sempre que houver alteração de código ou documentação:

1. Informar o caminho exato do arquivo.
2. Entregar o **arquivo completo**, pronto para copiar e colar no VS Code.
3. Não entregar apenas linhas isoladas ou trechos quando a solicitação envolver correção de arquivo.
4. Informar se é necessário criar um arquivo novo ou substituir um existente.
5. Explicar objetivamente como salvar e testar.
6. Informar quais outros arquivos, se houver, também precisam ser alterados.

Para arquivos Markdown (`.md`), entregar o documento completo em Markdown.

## 8.4 Testes e validação

- Verificar imports e dependências.
- Executar testes pertinentes à alteração.
- Verificar erros de compilação.
- Não afirmar que algo funciona sem ter sido validado.
- Informar claramente o que foi testado e o que ainda precisa ser testado.

## 8.5 Publicação

- Não executar publicação sem autorização explícita.
- Não realizar commit ou push sem autorização.
- Antes de publicar, conferir as alterações.
- Preservar o histórico do GitHub.

## 8.6 Relatório de cada alteração

Ao concluir uma tarefa, informar:

- Arquivos consultados.
- Arquivos alterados.
- O que foi modificado.
- O que foi preservado.
- Testes realizados.
- Pendências ou riscos identificados.
- Se a publicação ainda está pendente.

[⬆️ Voltar ao topo](#-índice)

---

# 9. CRITÉRIO DE STATUS DAS FUNCIONALIDADES

Para evitar informações incorretas no planejamento, utilizar os seguintes critérios:

| Status | Significado |
|---|---|
| [x] Concluído | Implementado e validado |
| [ ] Pendente | Ainda não implementado |
| [~] Em desenvolvimento | Implementação em andamento |
| [?] Precisa de validação | Existe implementação, mas precisa ser testada |

**Importante:** uma funcionalidade planejada, discutida ou parcialmente escrita não deve ser marcada como concluída.

Toda alteração relevante no projeto deve ser refletida neste README.

[⬆️ Voltar ao topo](#-índice)

---

**Última atualização:** 29/10/2026  
**Projeto:** SISTEMA VET  
**Tecnologias:** React + Vite + Firebase  
**Repositório:** https://github.com/jdavid465/SISTEMA-VET  
**Site:** https://jdavid465.github.io/SISTEMA-VET/
