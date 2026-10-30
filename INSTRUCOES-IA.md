
# INSTRUÇÕES OBRIGATÓRIAS DE DESENVOLVIMENTO — VET MAX

## 1. OBJETIVO

Você é responsável por auxiliar no desenvolvimento, manutenção, modernização e evolução contínua do VET MAX.

O VET MAX é uma plataforma de gestão veterinária para clínicas, hospitais e redes, com arquitetura multiempresa e multiunidade.

O trabalho deverá considerar o sistema como um projeto integrado.

Princípios fundamentais:

1. EVOLUIR.
2. INTEGRAR.
3. PROTEGER.

## 2. REPOSITÓRIO OFICIAL

https://github.com/jdavid465/SISTEMA-VET

O usuário trabalha com:

- Visual Studio Code.
- Windows.
- React e Vite, conforme a implementação documentada.
- Firebase, conforme a implementação atual.
- GitHub.

Sempre verificar o estado atual antes de tomar decisões técnicas.

## 3. REGRA OBRIGATÓRIA DE LEITURA DA DOCUMENTAÇÃO

Antes de qualquer análise, correção, implementação, reorganização ou alteração, a IA deverá:

1. Acessar o repositório oficial.
2. Ler integralmente o `README.md` atualizado.
3. Ler integralmente o `PLANO-DE-DESENVOLVIMENTO.md`.
4. Ler integralmente este arquivo `INSTRUCOES-IA.md`.
5. Verificar a estrutura atual do projeto.
6. Analisar os arquivos envolvidos e suas dependências.
7. Comparar o planejamento com o código efetivamente existente.

A leitura dos três documentos é obrigatória em toda nova tarefa de desenvolvimento, mesmo quando a IA já tiver trabalhado anteriormente no projeto.

A documentação não substitui a análise do código.

Se qualquer um dos documentos não estiver disponível, a IA deverá informar a limitação e solicitar que o usuário disponibilize o conteúdo necessário.

Não inventar regras, estruturas ou conteúdos de documentos que não puderam ser acessados.

### Regra de precedência

Em caso de divergência:

1. As regras de segurança e integridade deste documento devem ser respeitadas.
2. O código atual deverá ser analisado para identificar o funcionamento real.
3. O planejamento deverá ser atualizado para refletir decisões aprovadas.
4. Nenhuma funcionalidade deverá ser considerada implementada apenas porque consta na documentação.

## 4. ANÁLISE OBRIGATÓRIA DO PROJETO

Antes de alterar qualquer arquivo:

- Consultar a branch atual.
- Consultar o histórico relevante.
- Verificar a árvore de arquivos.
- Identificar os arquivos envolvidos.
- Ler os arquivos completos quando necessário.
- Verificar imports e exports.
- Identificar componentes relacionados.
- Identificar serviços e funções compartilhadas.
- Verificar dependências.
- Verificar rotas e navegação.
- Verificar integrações com Firebase.
- Verificar regras de segurança.
- Identificar impactos sobre os módulos existentes.

Nunca analisar arquivos isoladamente.

Se não for possível acessar o código atual, solicitar os arquivos ao usuário.

## 5. ARQUITETURA DO VET MAX

O sistema deverá evoluir para uma arquitetura multiempresa e multiunidade.

### 5.1 Organização

Representa a clínica, hospital ou rede contratante.

Cada organização deverá possuir identificação própria e isolamento dos dados.

### 5.2 Unidade

Representa um estabelecimento pertencente à organização.

Uma organização poderá possuir uma ou várias unidades.

### 5.3 Usuário

Possui vínculo com a organização e permissões específicas para uma ou mais unidades.

### 5.4 Tutores e pacientes

Tutores e pacientes pertencem à organização.

Os módulos deverão reutilizar esses cadastros, evitando duplicidade.

### 5.5 Compartilhamento

O planejamento prevê:

- Tutores e pacientes compartilhados dentro da organização.
- Histórico clínico acessível conforme permissões.
- Internamento integrado ao histórico do paciente.
- Estoque independente por unidade.
- Financeiro independente por unidade.
- Indicadores consolidados para gestores autorizados.

Não presumir que essas funcionalidades já estejam implementadas.

## 6. ORDEM DE DESENVOLVIMENTO

A implementação deverá respeitar as dependências técnicas.

Ordem prioritária:

1. Organização e unidades.
2. Usuários e permissões.
3. Cadastro de tutores.
4. Cadastro de pacientes.
5. Atendimento.
6. Internamento e demais módulos.

O atendimento possui prioridade operacional e deverá contemplar:

- Consulta.
- Anamnese.
- Criação de receita.
- Exportação de receita em PDF.
- Lançamento de serviços.
- Histórico clínico.

Os módulos futuros deverão utilizar a mesma base de cadastros e serviços.

Não criar versões independentes de tutor, paciente ou organização dentro de cada módulo.

## 7. INTEGRAÇÃO ENTRE MÓDULOS

Toda implementação deverá considerar os módulos existentes e futuros.

Exemplos:

- Atendimento utiliza tutor e paciente cadastrados.
- Internamento utiliza o mesmo paciente e histórico.
- Vacinação utiliza o cadastro central do paciente.
- Estoque fornece informações conforme a unidade.
- Financeiro recebe serviços lançados no atendimento.
- Relatórios consolidam dados conforme permissões.

Antes de criar uma estrutura nova, verificar se já existe serviço ou cadastro equivalente.

Definir identificadores consistentes e relacionamentos claros.

Evitar duplicação, referências quebradas e dependências circulares.

Uma funcionalidade somente estará integrada quando o fluxo entre os módulos for testado.

## 8. AMBIENTES

O projeto utilizará três ambientes:

| Nome | Identificação técnica | Função |
|---|---|---|
| DESENVOLVIMENTO | DEV | Programação |
| TESTES | HML | Validação |
| OFICIAL | PRD | Operação real |

Cada ambiente deverá possuir projeto Firebase independente.

O código-fonte permanecerá em um único projeto local e um único repositório GitHub.

As configurações deverão selecionar o ambiente correto por meio dos mecanismos adotados pelo projeto, como variáveis de ambiente do Vite.

Nunca misturar dados ou credenciais entre ambientes.

Nunca realizar testes destrutivos no ambiente OFICIAL.

O ambiente TESTES deverá utilizar dados fictícios ou dados adequadamente autorizados e protegidos.

## 9. SEGURANÇA E FIREBASE

Qualquer implementação envolvendo Firebase deverá considerar:

- Firebase Authentication.
- Cloud Firestore.
- Regras de segurança.
- Isolamento por organização.
- Permissões por unidade.
- Proteção de informações clínicas.
- Integridade dos registros.
- Controle de acesso.
- Tratamento de falhas.
- Compatibilidade com os dados existentes.

Nunca enfraquecer regras de segurança para facilitar o desenvolvimento.

Nunca expor credenciais administrativas, senhas, tokens privados ou segredos no frontend.

Antes de modificar estruturas de banco de dados, avaliar migrações e compatibilidade com registros existentes.

## 10. REGRA ABSOLUTA DE GRAVAÇÃO

O VET MAX nunca poderá afirmar que um registro foi salvo sem confirmação efetiva do banco de dados.

### Quando a gravação falhar

A aplicação deverá:

1. Identificar a falha.
2. Informar que o registro não foi salvo.
3. Orientar o usuário a contatar o responsável pelo sistema.
4. Registrar a ocorrência técnica quando possível.
5. Notificar o administrador quando houver mecanismo de alerta disponível.

Mensagem padrão:

"Não foi possível salvar este registro. O banco de dados não confirmou a gravação. Entre em contato com o responsável pelo sistema."

### Proibições

- Não simular salvamento.
- Não mostrar mensagem de sucesso antes da confirmação.
- Não afirmar que salvou quando houve erro.
- Não criar mensagem de sucesso posterior.
- Não executar salvamento silencioso após a recuperação do banco.
- Não recriar automaticamente operações que falharam sem nova ação consciente do usuário.
- Não apresentar dados não confirmados como registros oficiais.

A interface deverá diferenciar claramente dados preenchidos, dados enviados e dados efetivamente salvos.

## 11. ALERTAS AO ADMINISTRADOR

Quando ocorrer uma falha relevante de gravação, o sistema deverá prever alerta ao administrador.

O alerta deverá conter, quando disponível:

- Data e horário.
- Ambiente.
- Módulo.
- Tipo de operação.
- Categoria do erro.
- Identificador técnico da ocorrência.
- Organização e unidade por identificadores internos.

Não incluir informações clínicas desnecessárias.

O alerta deverá orientar a verificação da infraestrutura.

Se o banco principal estiver indisponível, não presumir que será possível registrar a falha nele. Deverá ser planejado mecanismo de observabilidade independente, quando tecnicamente viável.

Não afirmar que o administrador recebeu alerta enquanto esse mecanismo não estiver implementado e testado.

## 12. MONITORAMENTO DE INFRAESTRUTURA

O planejamento prevê monitoramento global no painel MASTER.

Níveis:

- 50%: aviso discreto.
- 70%: alerta e prevenção.
- 90%: proteção seletiva.
- 100% ou falha real: bloquear operações sem confirmação segura.

Operações não essenciais poderão ser limitadas preventivamente, como relatórios não urgentes, exportações em massa e personalizações.

Operações clínicas essenciais deverão receber prioridade, sem prometer funcionamento quando a infraestrutura estiver indisponível.

Pagamentos, registros clínicos e movimentações financeiras não poderão ser confirmados sem gravação segura.

O monitoramento deverá distinguir:

- Métricas do provedor.
- Métricas internas da aplicação.
- Estimativas de consumo.
- Erros reais de operação.

Não presumir que os percentuais configurados no MASTER alteram cotas ou limites do Firebase.

## 13. TESTES DE INDISPONIBILIDADE

Os testes deverão ser realizados no ambiente TESTES.

Planejar e executar separadamente:

1. Teste de indisponibilidade do banco.
2. Teste de falha de comunicação.
3. Teste de limite de uso simulado.
4. Teste de recuperação.
5. Verificação de integridade após recuperação.

Não esgotar cotas reais deliberadamente.

Não provocar custos desnecessários.

Após a recuperação:

- Confirmar que o banco voltou a responder.
- Confirmar que registros não salvos não foram criados automaticamente.
- Verificar duplicidade.
- Verificar integridade.
- Registrar resultados.

## 14. EVOLUÇÃO E MODERNIZAÇÃO

A IA poderá propor melhorias e modernizações quando houver justificativa técnica.

Não limitar o desenvolvimento à arquitetura atual.

Entretanto:

- Analisar impactos antes de substituir soluções.
- Preservar funcionalidades existentes.
- Planejar migrações.
- Evitar regressões.
- Não apagar recursos sem autorização.
- Não inventar funcionalidades.
- Não alterar decisões comerciais ou arquiteturais aprovadas sem apresentar os impactos.

## 15. ENTREGA OBRIGATÓRIA DE ARQUIVOS COMPLETOS

O usuário trabalha diretamente no VS Code no Windows.

Sempre que houver alteração de arquivo, entregar o conteúdo completo, da primeira à última linha.

Para cada arquivo:

1. Informar o caminho exato.
2. Informar se será criado ou substituído.
3. Entregar o conteúdo completo.
4. Utilizar bloco de código com linguagem adequada.
5. Explicar brevemente a finalidade.
6. Informar os testes necessários.

Não utilizar reticências para omitir conteúdo.

Não entregar apenas trechos quando a solicitação exigir o arquivo completo.

Quando vários arquivos forem afetados, entregar todos completos e verificar a compatibilidade entre eles.

## 16. TESTES E VALIDAÇÃO

Sempre que possível:

- Executar build.
- Verificar sintaxe.
- Verificar imports e exports.
- Verificar dependências.
- Testar os fluxos modificados.
- Testar integrações.
- Verificar console.
- Verificar terminal.
- Verificar regressões.

Não afirmar que um teste foi executado se não foi.

Diferenciar:

- Implementado.
- Parcialmente implementado.
- Planejado.
- Testado.
- Validado.
- Disponível no ambiente OFICIAL.

## 17. PREVENÇÃO DE TELA BRANCA

Quando houver tela branca ou falha de inicialização:

1. Investigar a causa raiz.
2. Verificar console do navegador.
3. Verificar terminal.
4. Verificar imports e exports.
5. Verificar dependências.
6. Verificar inicialização do React.
7. Verificar serviços externos.
8. Mapear arquivos relacionados.
9. Corrigir a origem do problema.
10. Testar a aplicação completa.

Não realizar correções aleatórias em cascata.

Não remover funcionalidades para apenas fazer a tela carregar.

Uma correção só será considerada concluída quando a aplicação inicializar corretamente e os recursos relacionados forem verificados.

## 18. COMANDOS DO PROJETO

Comandos documentados:

- `dv`: iniciar ambiente local.
- `pb`: executar processo de build e publicação.

Sempre verificar a implementação atual antes de executar qualquer comando.

**Atenção:** `pb` poderá executar operações de Git e publicação. Nunca executá-lo sem autorização explícita.

## 19. GITHUB E PUBLICAÇÃO

Nunca realizar sem autorização explícita:

- Commit.
- Push.
- Deploy.
- Publicação.
- Alteração direta no repositório remoto.
- Exclusão de arquivos ou dados remotos.

Antes de qualquer publicação:

- Conferir arquivos alterados.
- Conferir build.
- Conferir testes.
- Informar o que será publicado.
- Aguardar autorização.

Preservar histórico e alterações anteriores.

## 20. DOCUMENTAÇÃO

Manter os três documentos coerentes:

- `README.md`: apresentação e visão geral.
- `PLANO-DE-DESENVOLVIMENTO.md`: prioridades, etapas e evolução.
- `INSTRUCOES-IA.md`: regras obrigatórias de trabalho.

Atualizar a documentação quando decisões ou funcionalidades mudarem.

Não duplicar informações desnecessariamente.

Não marcar como concluído algo que ainda não foi validado.

## 21. COMUNICAÇÃO

O usuário prefere comunicação objetiva e organizada.

Portanto:

- Explicar o que será feito.
- Informar os caminhos dos arquivos.
- Entregar arquivos completos.
- Apresentar comandos simples.
- Explicar riscos relevantes.
- Orientar testes.
- Não fazer perguntas sobre informações que já estejam disponíveis na documentação ou no código.

Quando houver várias soluções, recomendar a mais adequada e explicar brevemente o motivo.

## 22. FLUXO OBRIGATÓRIO DE TRABALHO

Toda tarefa deverá seguir esta sequência:

1. Ler README.md.
2. Ler PLANO-DE-DESENVOLVIMENTO.md.
3. Ler INSTRUCOES-IA.md.
4. Consultar o GitHub.
5. Analisar os arquivos atuais.
6. Identificar dependências.
7. Avaliar riscos.
8. Planejar a alteração.
9. Implementar.
10. Entregar todos os arquivos completos.
11. Executar ou orientar testes.
12. Informar resultados e pendências.
13. Aguardar autorização antes de publicar.

## 23. PRINCÍPIO FINAL

O VET MAX deve evoluir como uma plataforma integrada, segura e preparada para crescimento.

Nenhum módulo deverá ser tratado como um sistema isolado.

Toda alteração deverá respeitar a arquitetura, os dados, as permissões e as funcionalidades existentes.

**EVOLUIR, INTEGRAR E PROTEGER.**
