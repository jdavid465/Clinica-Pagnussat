
# VET MAX
## Gestão veterinária preparada para crescer.

**Uma plataforma para clínicas, hospitais e redes veterinárias.**

O VET MAX é um sistema de gestão veterinária em desenvolvimento, projetado para atender desde uma clínica independente até organizações com várias unidades.

Sua arquitetura prevê cadastros compartilhados dentro de cada organização, operação independente por unidade e administração centralizada para gestores autorizados.

**Uma clínica hoje. Uma rede amanhã.**

---

## 1. O que o VET MAX pretende oferecer

A plataforma está sendo desenvolvida em módulos integrados:

- Cadastro de organizações e unidades.
- Cadastro de tutores e pacientes.
- Atendimento e prontuário veterinário.
- Consulta e anamnese.
- Prescrição e emissão de receitas em PDF.
- Lançamento de serviços.
- Internamento e evolução clínica.
- Vacinação.
- Estoque e medicamentos.
- Caixa e financeiro.
- Gestão de colaboradores e permissões.
- Relatórios e indicadores.
- Painel administrativo MASTER.

Os módulos serão disponibilizados gradualmente, conforme forem implementados e validados.

## 2. Arquitetura multiempresa e multiunidade

O VET MAX será estruturado em três níveis:

**Organização:** representa a clínica, hospital ou rede contratante.

**Unidade:** representa cada estabelecimento pertencente à organização.

**Usuário:** colaborador com permissões definidas para a organização e suas unidades.

Tutores e pacientes terão cadastro centralizado dentro da organização. Os módulos deverão utilizar esses mesmos registros, evitando duplicidade.

Estoque, caixa e rotinas operacionais poderão ser independentes por unidade, enquanto gestores autorizados poderão consultar indicadores consolidados.

O isolamento entre organizações é obrigatório.

## 3. Prioridades de desenvolvimento

A primeira etapa será construir a base de dados e os cadastros fundamentais:

1. Organização e unidades.
2. Tutores.
3. Pacientes.
4. Atendimento.
5. Internamento e demais módulos operacionais.

O atendimento é uma das prioridades centrais e deverá contemplar:

- Consulta.
- Anamnese.
- Registro clínico.
- Criação de receita.
- Exportação da receita em PDF.
- Lançamento de serviços.

Os módulos seguintes deverão se integrar aos cadastros e serviços já existentes.

## 4. Ambientes do sistema

O desenvolvimento será organizado em três ambientes:

| Ambiente | Finalidade |
|---|---|
| DESENVOLVIMENTO | Construção e correção do sistema |
| TESTES | Validação de funcionalidades e simulações de falhas |
| OFICIAL | Operação real das organizações |

Cada ambiente utilizará seu próprio projeto Firebase e seus próprios dados.

O código-fonte será mantido em um único projeto no VS Code e em um único repositório GitHub, com configurações específicas para cada ambiente.

## 5. Segurança e integridade dos dados

O sistema deverá:

- Isolar os dados de cada organização.
- Controlar permissões por usuário e unidade.
- Proteger informações clínicas e administrativas.
- Validar operações antes de confirmar gravações.
- Registrar erros relevantes.
- Disponibilizar mecanismos de backup e recuperação.
- Evitar perda, duplicação ou alteração indevida de registros.

**Regra de gravação:** o sistema somente poderá informar que um registro foi salvo após receber confirmação efetiva do banco de dados.

Quando uma gravação falhar, o usuário deverá receber uma mensagem informando que o registro não foi salvo e orientando a contatar o responsável pelo sistema.

O administrador deverá receber um alerta para verificar a ocorrência.

Não haverá mensagem fictícia de sucesso nem tentativa silenciosa de salvar posteriormente.

## 6. Monitoramento da infraestrutura

Está planejado um monitoramento centralizado no painel MASTER, responsável por acompanhar:

- Leituras e gravações.
- Exclusões.
- Armazenamento.
- Transferência de dados.
- Erros de comunicação.
- Indisponibilidade dos serviços.
- Consumo e custos de infraestrutura.

O planejamento prevê níveis de atenção em 50%, 70%, 90% e 100%, com medidas proporcionais ao risco.

Operações essenciais deverão receber prioridade, sem comprometer a integridade dos dados.

Os testes de indisponibilidade serão realizados no ambiente TESTES.

## 7. Apresentação comercial

A apresentação comercial será disponibilizada no próprio site do VET MAX, utilizando o documento de apresentação comercial como referência.

Os planos e condições comerciais ainda estão em formação. A configuração futura deverá permitir administração pelo painel MASTER.

## 8. Documentação oficial

Este projeto possui três documentos principais:

| Documento | Responsabilidade |
|---|---|
| `README.md` | Apresentação e visão geral |
| `PLANO-DE-DESENVOLVIMENTO.md` | Etapas, prioridades e evolução |
| `INSTRUCOES-IA.md` | Regras obrigatórias de desenvolvimento |

A leitura dos três documentos é obrigatória antes de qualquer trabalho de desenvolvimento.

## 9. Tecnologias

Tecnologias identificadas na documentação atual:

- React.
- Vite.
- Firebase Authentication.
- Cloud Firestore.
- GitHub.

A arquitetura e as tecnologias deverão ser confirmadas no código atual antes de qualquer alteração.

## 10. Status do projeto

O VET MAX está em desenvolvimento.

A existência de um módulo no planejamento não significa que ele esteja implementado ou validado.

O andamento, as pendências e os critérios de conclusão deverão ser acompanhados no arquivo `PLANO-DE-DESENVOLVIMENTO.md`.

---

**VET MAX — Sua clínica evolui. Sua gestão acompanha.**

Repositório: https://github.com/jdavid465/SISTEMA-VET  
Site: https://jdavid465.github.io/SISTEMA-VET/
