
# 🐾 SISTEMA VET — Plano de Desenvolvimento

> Checklist geral do projeto. Marque `[x]` quando concluir cada tarefa.

**Legenda:**
- [x] Concluído
- [ ] Pendente

**Repositório:** https://github.com/jdavid465/SISTEMA-VET  
**Site:** https://jdavid465.github.io/SISTEMA-VET/

---

# 1. HISTÓRICO — O QUE JÁ FIZEMOS

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
- [x] Configurar atalhos no perfil do PowerShell

## 1.2 Firebase

- [x] Criar conta no Firebase
- [x] Criar projeto Firebase
- [x] Identificador: `banco-de-dados-clinica-23b42`
- [x] Adicionar configuração Firebase ao projeto
- [x] Integrar Firebase Authentication
- [x] Integrar Cloud Firestore
- [x] Implementar consulta inicial dos dados da clínica pelo UID do usuário
- [ ] Revisar estrutura completa do Firestore
- [ ] Revisar regras de segurança
- [ ] Testar isolamento entre clínicas
- [ ] Configurar Firebase Storage, se necessário

> A conexão inicial já existe no código, mas ainda precisamos validar as regras de segurança e os fluxos completos.

## 1.3 Interface e publicação

- [x] Criar página inicial
- [x] Criar tela de login
- [x] Implementar autenticação inicial
- [x] Criar repositório no GitHub
- [x] Configurar GitHub Pages
- [x] Configurar script de publicação
- [x] Corrigir `docs/index.html` para desenvolvimento local
- [x] Adicionar ilustração `pets-vet.png`
- [x] Ajustar carregamento da imagem com `BASE_URL`
- [x] Testar funcionamento local

---

# 2. BASE TÉCNICA E SEGURANÇA

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

---

# 3. ESTRUTURA MULTI-CLÍNICAS

- [ ] Definir identificação única de cada clínica
- [ ] Definir vínculo entre usuários e clínicas
- [ ] Separar os dados de cada clínica
- [ ] Impedir acesso aos dados de outras clínicas
- [ ] Testar com duas clínicas fictícias
- [ ] Documentar estrutura multi-clínicas

---

# 4. SOLICITAÇÃO DE ACESSO

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

---

# 5. PAINEL MASTER

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

---

# 6. PERÍODO DE TESTE E PLANOS

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

---

# 7. PAINEL DA CLÍNICA E USUÁRIOS

- [ ] Criar painel principal da clínica
- [ ] Exibir informações da clínica
- [ ] Criar cadastro de funcionários
- [ ] Vincular usuários à clínica
- [ ] Criar perfil ADMIN
- [ ] Criar perfis para equipe
- [ ] Definir permissões por módulo
- [ ] Ativar e desativar usuários
- [ ] Testar permissões

---

# 8. CADASTRO DE TUTORES

- [ ] Cadastrar tutores
- [ ] Registrar telefone
- [ ] Registrar e-mail
- [ ] Registrar endereço
- [ ] Registrar observações
- [ ] Pesquisar tutores
- [ ] Editar cadastro
- [ ] Consultar animais vinculados
- [ ] Evitar duplicidade de cadastro

---

# 9. CADASTRO DE PACIENTES

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

---

# 10. ATENDIMENTO E PRONTUÁRIO

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

---

# 11. VACINAÇÃO

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

---

# 12. INTERNAMENTO

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

---

# 13. ESTOQUE E FORNECEDORES

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

---

# 14. FINANCEIRO

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

---

# 15. RELATÓRIOS E INDICADORES

- [ ] Relatório de atendimentos
- [ ] Relatório de pacientes
- [ ] Relatório de vacinação
- [ ] Relatório de internamentos
- [ ] Relatório de estoque
- [ ] Relatório financeiro
- [ ] Filtros por período
- [ ] Exportação de relatórios

---

# 16. TESTES, SEGURANÇA E PUBLICAÇÃO

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
- [ ] Fazer backup
- [ ] Executar `npm run build`
- [ ] Conferir versão local
- [ ] Publicar com `pb`
- [ ] Conferir versão no GitHub Pages

---

# 17. COMANDOS DO PROJETO

| Comando | Função |
|---|---|
| `dv` | Iniciar servidor local |
| `pb` | Compilar e publicar |
| `Ctrl + S` | Salvar alterações |
| `Ctrl + F5` | Atualizar navegador sem cache |
| `npm run build` | Gerar versão de produção |

### Fluxo de desenvolvimento

1. Abrir o projeto no VS Code.
2. Executar `dv`.
3. Fazer as alterações.
4. Salvar com `Ctrl + S`.
5. Testar no navegador.
6. Corrigir possíveis erros.
7. Validar novamente.
8. Executar `pb` somente quando estiver tudo certo.

---

# 18. ANOTAÇÕES E PRÓXIMAS IDEIAS

- [ ] Registrar próxima funcionalidade prioritária.
- [ ] Registrar decisões importantes.
- [ ] Registrar problemas encontrados.
- [ ] Registrar melhorias futuras.

---

**Última atualização:** 29/10/2026  
**Projeto:** SISTEMA VET  
**Desenvolvimento:** React + Vite + Firebase  
**Repositório:** https://github.com/jdavid465/SISTEMA-VET
