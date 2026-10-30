
# VET MAX — PLANO DE DESENVOLVIMENTO

Documento oficial de planejamento, prioridades, arquitetura e evolução do VET MAX.

**Repositório:** https://github.com/jdavid465/SISTEMA-VET

> Este documento descreve o planejamento do sistema. Uma funcionalidade somente poderá ser considerada implementada ou validada após verificação do código e execução dos testes correspondentes.

---

# 1. VISÃO DO PROJETO

O VET MAX é uma plataforma de gestão veterinária destinada a clínicas, hospitais e redes veterinárias.

O sistema deverá permitir que uma organização possua uma ou várias unidades, com cadastros compartilhados e operações independentes conforme as permissões estabelecidas.

Princípios:

- Evoluir.
- Integrar.
- Proteger.

## 1.1 Objetivos

- Construir uma plataforma veterinária modular.
- Permitir crescimento de uma clínica para uma rede.
- Compartilhar cadastros dentro da organização.
- Manter isolamento entre organizações.
- Permitir gestão independente das unidades.
- Disponibilizar módulos gradualmente.
- Garantir integridade e segurança dos dados.
- Preparar a arquitetura para futuras expansões.

# 2. AMBIENTES DO SISTEMA

Serão utilizados três ambientes independentes.

| Nome | Identificação técnica | Utilização |
|---|---|---|
| DESENVOLVIMENTO | DEV | Construção e correção |
| TESTES | HML | Validação e simulações |
| OFICIAL | PRD | Operação real |

## 2.1 DESENVOLVIMENTO

Ambiente utilizado durante a programação.

Objetivos:

- Criar funcionalidades.
- Corrigir erros.
- Testar componentes.
- Realizar alterações estruturais.
- Validar integrações iniciais.

## 2.2 TESTES

Ambiente destinado à validação antes da liberação oficial.

Objetivos:

- Testar fluxos completos.
- Simular falhas de comunicação.
- Testar indisponibilidade do banco.
- Verificar mensagens de erro.
- Validar permissões.
- Testar isolamento entre organizações.
- Verificar comportamento dos módulos integrados.

Deverá utilizar dados fictícios ou devidamente preparados para testes.

Não utilizar dados clínicos reais sem autorização, controles de segurança e política adequada.

## 2.3 OFICIAL

Ambiente destinado à utilização real pelas organizações contratantes.

Regras:

- Não realizar testes destrutivos.
- Não provocar esgotamento de cotas.
- Não desativar serviços para simular falhas.
- Não publicar alterações sem validação e autorização.
- Manter monitoramento, backup e segurança.

## 2.4 Estrutura técnica

O projeto deverá manter:

- Um único código-fonte.
- Um único projeto local no VS Code.
- Um único repositório GitHub.
- Projetos Firebase independentes para cada ambiente.
- Configurações e variáveis de ambiente específicas.

Sugestão de identificação visual dos projetos Firebase:

- VET MAX - DESENVOLVIMENTO
- VET MAX - TESTES
- VET MAX - OFICIAL

A implementação deverá verificar a configuração atual antes de criar, migrar ou renomear projetos.

Arquivos de ambiente, quando adotados, deverão utilizar a convenção adequada ao Vite, por exemplo:

- `.env.development`
- `.env.staging`
- `.env.production`

Credenciais e configurações privadas não deverão ser publicadas no repositório.

# 3. ARQUITETURA MULTIEMPRESA E MULTIUNIDADE

## 3.1 Organização

Representa o cliente contratante do VET MAX.

Pode ser:

- Clínica independente.
- Hospital veterinário.
- Rede veterinária.

Cada organização deverá possuir identificação única.

Os dados de uma organização não poderão ser acessados por outra.

## 3.2 Unidades

Uma organização poderá possuir uma ou várias unidades.

Cada unidade deverá possuir:

- Identificação própria.
- Dados administrativos.
- Colaboradores autorizados.
- Estoque independente.
- Financeiro independente.
- Operação própria.

Gestores autorizados poderão consultar informações consolidadas.

## 3.3 Usuários

Os usuários deverão possuir vínculos e permissões definidos.

O sistema deverá permitir:

- Cadastro centralizado.
- Vínculo à organização.
- Acesso a uma ou mais unidades.
- Permissões por módulo.
- Ativação e desativação.
- Registro de ações relevantes.

## 3.4 Tutores e pacientes

Tutores e pacientes pertencerão à organização.

Não deverão ser duplicados quando o mesmo paciente for atendido em unidades diferentes da mesma organização.

O acesso deverá respeitar as permissões do usuário e as regras de compartilhamento clínico.

# 4. ORDEM DE IMPLEMENTAÇÃO

A ordem abaixo estabelece dependências técnicas. A liberação de cada etapa dependerá da implementação e validação.

## ETAPA 1 — FUNDAÇÃO DO SISTEMA

### 1.1 Organização

- [ ] Definir modelo de organização.
- [ ] Criar identificador único.
- [ ] Definir estrutura de dados.
- [ ] Definir vínculo com usuários.
- [ ] Definir estrutura de unidades.
- [ ] Implementar isolamento entre organizações.
- [ ] Criar testes com organizações fictícias.

### 1.2 Unidades

- [ ] Criar cadastro de unidades.
- [ ] Vincular unidades à organização.
- [ ] Definir unidade ativa.
- [ ] Definir permissões por unidade.
- [ ] Preparar consultas consolidadas.
- [ ] Testar separação de operações.

### 1.3 Usuários e permissões

- [ ] Revisar autenticação.
- [ ] Definir perfis.
- [ ] Definir permissões por módulo.
- [ ] Definir permissões por unidade.
- [ ] Proteger operações administrativas.
- [ ] Registrar ações relevantes.
- [ ] Testar acesso indevido.

**Critério de conclusão:** organizações e unidades isoladas, usuários vinculados corretamente e permissões validadas.

## ETAPA 2 — CADASTROS CENTRAIS

### 2.1 Tutores

- [ ] Cadastro de tutores.
- [ ] Nome e identificação.
- [ ] Telefone.
- [ ] E-mail.
- [ ] Endereço.
- [ ] Observações.
- [ ] Pesquisa.
- [ ] Edição.
- [ ] Controle de duplicidade.
- [ ] Vínculo à organização.

### 2.2 Pacientes

- [ ] Cadastro de cães.
- [ ] Cadastro de gatos.
- [ ] Cadastro de outras espécies.
- [ ] Nome.
- [ ] Espécie.
- [ ] Raça.
- [ ] Sexo.
- [ ] Data de nascimento ou idade estimada.
- [ ] Peso.
- [ ] Características.
- [ ] Foto, quando aplicável.
- [ ] Vínculo ao tutor.
- [ ] Histórico.
- [ ] Pesquisa e edição.

**Critério de conclusão:** tutor e paciente cadastrados uma única vez na organização, com vínculo consistente e acesso controlado.

## ETAPA 3 — ATENDIMENTO

<badge>PRIORIDADE PRINCIPAL</badge>

O atendimento será a primeira grande entrega operacional.

### 3.1 Consulta

- [ ] Selecionar tutor.
- [ ] Selecionar paciente.
- [ ] Registrar data e horário.
- [ ] Identificar profissional responsável.
- [ ] Registrar motivo da consulta.
- [ ] Criar atendimento.
- [ ] Consultar histórico do paciente.

### 3.2 Anamnese

- [ ] Registrar queixa principal.
- [ ] Registrar histórico.
- [ ] Registrar alimentação.
- [ ] Registrar vacinação.
- [ ] Registrar medicações em uso.
- [ ] Registrar informações relevantes.
- [ ] Registrar exame físico.
- [ ] Registrar sinais vitais.
- [ ] Registrar avaliação clínica.
- [ ] Registrar diagnóstico.
- [ ] Registrar conduta.

### 3.3 Receita veterinária

- [ ] Criar receita vinculada ao atendimento.
- [ ] Identificar paciente e tutor.
- [ ] Identificar profissional responsável.
- [ ] Registrar medicamentos e prescrições.
- [ ] Registrar orientações.
- [ ] Gerar documento PDF.
- [ ] Conferir apresentação e legibilidade.
- [ ] Validar impressão.
- [ ] Validar exportação.

A emissão deverá respeitar os requisitos legais aplicáveis e os dados profissionais necessários.

### 3.4 Lançamento de serviços

- [ ] Selecionar serviço.
- [ ] Registrar valor.
- [ ] Vincular ao atendimento.
- [ ] Identificar unidade.
- [ ] Identificar responsável.
- [ ] Disponibilizar informação para integração financeira.

### 3.5 Histórico clínico

- [ ] Consultar atendimentos anteriores.
- [ ] Consultar receitas.
- [ ] Consultar procedimentos.
- [ ] Consultar exames anexados.
- [ ] Identificar profissional responsável.
- [ ] Preservar histórico e rastreabilidade.

**Critério de conclusão:** fluxo completo de atendimento validado, incluindo consulta, anamnese, receita PDF e lançamento de serviço.

# 5. INTEGRAÇÃO DOS MÓDULOS

A integração deverá ser planejada desde a fundação.

Os módulos não poderão criar cadastros independentes de tutores e pacientes.

Exemplos:

| Módulo | Integração necessária |
|---|---|
| Atendimento | Utiliza organização, unidade, tutor e paciente |
| Internamento | Utiliza o mesmo paciente e histórico clínico |
| Vacinação | Utiliza paciente, tutor e histórico |
| Estoque | Fornece produtos e medicamentos conforme unidade |
| Financeiro | Recebe serviços e cobranças dos atendimentos |
| Relatórios | Consolida dados conforme permissões |

## 5.1 Regras de integração

- [ ] Definir identificadores únicos.
- [ ] Definir relacionamentos entre registros.
- [ ] Evitar duplicidade.
- [ ] Padronizar serviços de acesso aos dados.
- [ ] Definir validações compartilhadas.
- [ ] Definir tratamento de erros.
- [ ] Garantir permissões em cada operação.
- [ ] Testar fluxos entre módulos.
- [ ] Preservar histórico e rastreabilidade.

A liberação gradual não significa desenvolver módulos isolados. Cada módulo novo deverá utilizar os serviços e registros já existentes.

# 6. DEMAIS MÓDULOS OPERACIONAIS

## 6.1 Internamento

- [ ] Entrada do paciente.
- [ ] Motivo da internação.
- [ ] Médico responsável.
- [ ] Parâmetros clínicos.
- [ ] Evolução.
- [ ] Medicações.
- [ ] Procedimentos.
- [ ] Alimentação.
- [ ] Cuidados.
- [ ] Intercorrências.
- [ ] Alta.
- [ ] Histórico.
- [ ] Integração com atendimento.

## 6.2 Vacinação

- [ ] Cadastro de vacinas.
- [ ] Fabricante.
- [ ] Lote.
- [ ] Validade.
- [ ] Dose.
- [ ] Via de aplicação.
- [ ] Data.
- [ ] Profissional responsável.
- [ ] Próximo reforço.
- [ ] Histórico vacinal.
- [ ] Alertas.

## 6.3 Estoque

- [ ] Cadastro de produtos.
- [ ] Cadastro de medicamentos.
- [ ] Fornecedores.
- [ ] Entradas.
- [ ] Saídas.
- [ ] Saldo.
- [ ] Lotes.
- [ ] Validade.
- [ ] Estoque mínimo.
- [ ] Histórico de movimentações.
- [ ] Identificação do responsável.
- [ ] Controle independente por unidade.

## 6.4 Caixa e financeiro

- [ ] Contas a receber.
- [ ] Contas a pagar.
- [ ] Recebimentos.
- [ ] Despesas.
- [ ] Fluxo de caixa.
- [ ] Formas de pagamento.
- [ ] Relacionamento com atendimentos.
- [ ] Relatórios.
- [ ] Permissões financeiras.
- [ ] Fechamento por unidade.
- [ ] Visão consolidada autorizada.

## 6.5 Relatórios e indicadores

- [ ] Atendimentos.
- [ ] Pacientes.
- [ ] Vacinação.
- [ ] Internamentos.
- [ ] Estoque.
- [ ] Financeiro.
- [ ] Indicadores por unidade.
- [ ] Indicadores consolidados.
- [ ] Filtros por período.
- [ ] Exportação.

# 7. DISPONIBILIZAÇÃO GRADUAL

Os módulos serão liberados conforme forem concluídos e validados.

Estados possíveis:

- Planejado.
- Em desenvolvimento.
- Disponível para testes.
- Validado.
- Disponível no ambiente OFICIAL.

A liberação de um módulo deverá considerar:

1. Implementação funcional.
2. Integração com os módulos existentes.
3. Permissões e segurança.
4. Testes de fluxo completo.
5. Tratamento de erros.
6. Validação no ambiente TESTES.
7. Autorização para liberação no ambiente OFICIAL.

A primeira validação prática poderá ser feita com uma organização parceira, utilizando apenas os módulos liberados e autorizados.

# 8. MONITORAMENTO DE INFRAESTRUTURA E COTAS

## 8.1 Objetivo

Criar monitoramento centralizado no painel MASTER para acompanhar a infraestrutura global do VET MAX.

O monitoramento não deverá expor dados clínicos das organizações.

## 8.2 Indicadores

- Leituras.
- Gravações.
- Exclusões.
- Armazenamento.
- Transferência.
- Custos.
- Erros de gravação.
- Indisponibilidade.
- Estado dos serviços.

Os indicadores deverão ser conciliados com as métricas oficiais do provedor. Não presumir que métricas de aplicação representam integralmente o consumo faturável.

## 8.3 Níveis de atenção

| Nível | Comportamento planejado |
|---|---|
| 50% | Aviso discreto no MASTER |
| 70% | Alerta ao administrador e prevenção |
| 90% | Modo de proteção e suspensão seletiva de operações não essenciais |
| 100% ou falha real | Bloqueio de operações que não possam ser confirmadas com segurança |

Os percentuais deverão ser configuráveis no MASTER, sem confundir configuração interna com alteração das cotas do provedor.

## 8.4 Operações não essenciais

Podem ser limitadas preventivamente:

- Personalização visual.
- Alteração de logotipo.
- Relatórios não urgentes.
- Exportações em massa.
- Downloads administrativos.
- Sincronizações administrativas não urgentes.

## 8.5 Operações essenciais

Recebem prioridade:

- Atendimento.
- Prontuário.
- Internamento.
- Administração de medicamentos.
- Registro de intercorrências.
- Operações clínicas necessárias.

Prioridade não significa garantia de funcionamento quando o banco estiver indisponível.

Pagamentos, movimentações financeiras e registros clínicos não poderão ser considerados concluídos sem confirmação da gravação.

## 8.6 Falha de gravação

Regra obrigatória:

**Sem confirmação do banco, não existe salvamento confirmado.**

Quando uma gravação falhar:

- Não apresentar mensagem de sucesso.
- Não simular gravação.
- Não informar que salvará posteriormente.
- Não executar salvamento silencioso após a recuperação.
- Informar que o registro não foi salvo.
- Orientar o usuário a contatar o responsável pelo sistema.
- Registrar a ocorrência técnica quando houver infraestrutura disponível.
- Notificar o administrador para verificar o problema.

Mensagem ao usuário:

> Não foi possível salvar este registro. O banco de dados não confirmou a gravação. Entre em contato com o responsável pelo sistema.

Alerta ao administrador:

> O VET MAX identificou uma falha de gravação. Verifique o ambiente, o módulo afetado e a disponibilidade do banco de dados.

O alerta deverá registrar, quando disponível:

- Data e horário.
- Ambiente.
- Organização e unidade por identificadores internos.
- Módulo.
- Tipo de operação.
- Código ou categoria do erro.
- Identificador técnico da ocorrência.

Evitar incluir informações clínicas desnecessárias nos alertas.

# 9. TESTES DE INDISPONIBILIDADE

Os testes serão executados exclusivamente no ambiente TESTES.

## 9.1 Teste de indisponibilidade

- [ ] Criar dados fictícios.
- [ ] Executar gravação normal.
- [ ] Confirmar registro salvo.
- [ ] Simular indisponibilidade do banco.
- [ ] Tentar criar um registro.
- [ ] Confirmar que não foi salvo.
- [ ] Verificar mensagem ao usuário.
- [ ] Verificar alerta ao administrador.
- [ ] Restaurar conexão.
- [ ] Confirmar que não houve salvamento automático.
- [ ] Confirmar que o usuário precisa realizar nova operação conscientemente.

## 9.2 Teste de limite de uso

O limite de uso deverá ser testado de maneira controlada.

- [ ] Identificar cotas aplicáveis.
- [ ] Definir mecanismo de simulação.
- [ ] Testar alertas percentuais.
- [ ] Testar tratamento de erros de limite.
- [ ] Verificar comportamento do sistema.
- [ ] Confirmar que nenhuma gravação sem confirmação é apresentada como salva.

Não esgotar cotas reais nem provocar custos desnecessários. Simulação controlada de erros e testes reais de indisponibilidade deverão ser documentados separadamente.

## 9.3 Recuperação

- [ ] Restaurar conexão.
- [ ] Confirmar funcionamento das operações.
- [ ] Verificar integridade dos dados.
- [ ] Confirmar ausência de gravações duplicadas.
- [ ] Confirmar que registros não salvos não foram recriados automaticamente.
- [ ] Registrar resultado do teste.

# 10. PAINEL MASTER

- [ ] Acesso administrativo exclusivo.
- [ ] Cadastro de organizações.
- [ ] Cadastro de unidades.
- [ ] Ativação e suspensão.
- [ ] Gestão de usuários.
- [ ] Gestão de planos.
- [ ] Configuração de preços.
- [ ] Limites por plano.
- [ ] Consumo de infraestrutura.
- [ ] Monitoramento global.
- [ ] Alertas técnicos.
- [ ] Histórico administrativo.
- [ ] Gestão de solicitações.
- [ ] Indicadores consolidados.

A área MASTER deverá possuir proteção reforçada e privilégios separados dos usuários das organizações.

# 11. PLANOS E MODELO COMERCIAL

- [ ] Definir planos mensais.
- [ ] Definir planos anuais.
- [ ] Definir limites por plano.
- [ ] Definir número de unidades incluídas.
- [ ] Definir valor de unidades adicionais.
- [ ] Permitir configuração no MASTER.
- [ ] Exibir condições comerciais no site.
- [ ] Definir política de atualização de preços.
- [ ] Definir contratos e renovação.
- [ ] Avaliar integração de pagamentos.

Preços públicos permanecem em formação até decisão comercial.

Alterações futuras de preço não deverão modificar automaticamente contratos vigentes sem política e condições formalizadas.

# 12. PARCERIAS E VALIDAÇÃO

Está prevista a validação prática com uma organização parceira.

A parceira poderá:

- Utilizar os módulos liberados.
- Informar dificuldades.
- Identificar falhas.
- Sugerir melhorias.
- Validar fluxos reais.
- Participar da evolução do produto.

A participação como parceira de validação não significa que todos os módulos estejam disponíveis.

Possíveis investimentos deverão ser tratados por instrumentos formais, com prestação de contas e condições negociadas separadamente.

# 13. APRESENTAÇÃO COMERCIAL E SITE

- [ ] Manter apresentação comercial no site.
- [ ] Utilizar o documento comercial como referência.
- [ ] Atualizar módulos apresentados conforme evolução real.
- [ ] Diferenciar recursos disponíveis e planejados.
- [ ] Exibir condições comerciais definidas.
- [ ] Criar formulário de interesse de investidores.
- [ ] Criar fluxo seguro de recebimento das solicitações.
- [ ] Definir domínio próprio.
- [ ] Definir identidade visual definitiva.

# 14. BACKUP, PORTABILIDADE E SINCRONIZAÇÃO

- [ ] Definir política de backup.
- [ ] Configurar backups compatíveis com o provedor.
- [ ] Definir retenção.
- [ ] Testar restauração.
- [ ] Documentar recuperação de desastre.
- [ ] Planejar exportação dos dados de uma organização.
- [ ] Planejar portabilidade.
- [ ] Desenvolver camada intermediária de acesso aos dados.
- [ ] Avaliar futura operação local com sincronização.

Backup e exportação de dados são recursos diferentes e deverão ser tratados separadamente.

# 15. CRITÉRIOS DE STATUS

| Status | Significado |
|---|---|
| Planejado | Previsto, ainda sem implementação |
| Em desenvolvimento | Implementação iniciada |
| Disponível para testes | Implementado para validação |
| Validado | Testado e aprovado |
| Disponível no OFICIAL | Liberado para uso real |

Nenhuma funcionalidade poderá avançar de status sem evidências correspondentes.

# 16. REGISTRO DE DECISÕES

Decisões arquiteturais e comerciais importantes deverão ser registradas aqui ou em documentação complementar.

Cada decisão deverá informar:

- Data.
- Descrição.
- Motivo.
- Impactos.
- Estado.
- Pendências.

# 17. PRINCÍPIO DE EVOLUÇÃO

O VET MAX será construído como uma plataforma integrada.

Cada módulo deverá aproveitar os cadastros, serviços, permissões e estruturas já existentes.

Não desenvolver funcionalidades isoladas que provoquem duplicidade de dados ou dificultem a evolução futura.

**EVOLUIR, INTEGRAR E PROTEGER.**
