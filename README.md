# Concurso Transpetro 2026 — Engenharia de Telecomunicações

Repositório central de estudos para a prova da **Transpetro / CESGRANRIO — Engenharia de Telecomunicações**.

## Princípio do projeto

Este repositório usa uma estratégia adaptativa de aprendizagem baseada em:
- recuperação ativa;
- prática espaçada;
- retestes;
- interleaving;
- análise de erros;
- calibração por confiança;
- transferência para questões novas;
- simulados progressivos;
- acompanhamento por evidências.

A estratégia metodológica foi adaptada exclusivamente ao edital de **Engenharia de Telecomunicações**. Conteúdos de outros cargos, como Banco de Dados ou Análise de Sistemas/Infraestrutura, não fazem parte deste projeto.

## Fontes de estudo

1. Edital oficial da prova-alvo.
2. Provas CESGRANRIO de Transpetro/Petrobras — Telecomunicações.
3. Questões CESGRANRIO de Telecomunicações e áreas afins.
4. QConcursos como banco de referência e classificação.
5. Questões autorais apenas para reforço, transferência e preenchimento de lacunas.

## Estrutura

- `docs/` — estratégia, arquitetura, protocolo e planejamento.
- `data/` — edital, unidades, progresso, revisões e métricas.
- `qti/` — motor e exemplos de QTI.
- `materiais/` — índice dos materiais-fonte usados no projeto.
- `provas/` — catálogo das provas históricas da CESGRANRIO.
- `PROGRESSO.md` — estado atual do estudo.
- `docs/CLASSIFICACAO_TECCONCURSOS_13_ITENS_2026-10-07.md` — classificação completa das 456 questões dos cadernos TEcom_Tec nos 13 itens do edital.
- `data/TECCONCURSOS_13_ITENS_2026-10-07.json` — versão estruturada e legível por máquina da classificação, para seleção/rotação de questões em QTI.

## Banco TecConcursos classificado

Os três cadernos `TEcom_Tec.pdf`, `TEcom_Tec2.pdf` e `TEcom_Tec3.pdf` foram classificados integralmente em 07/10/2026: **456 questões**, sendo **445 dentro dos 13 itens do edital** e **11 fora do escopo específico**. Antes de montar QTI, usar essa classificação em conjunto com `data/QUESTOES.json`, `data/RESULTADOS.json` e o histórico em `qti/`, respeitando cooldown, anti-repetição e rotação semântica.

## Regra de continuidade

Em qualquer novo chat deste projeto, este repositório deve ser tratado como a **fonte de verdade persistente** para o estado dos estudos. Antes de planejar uma sessão, consultar `PROGRESSO.md`, `data/EDITAL.json`, `data/UNIDADES.json`, `data/REVISOES.json` e **`data/QUESTOES.json`**. O banco de questões é obrigatório para impedir repetição precoce: acertos ficam bloqueados por 3/5/7 dias; erros podem entrar em reparo/reteste.

**Prova-alvo:** 29/11/2026.


## Regra específica — Português

Para toda bateria, QTI, simulado ou revisão de **Língua Portuguesa**:

- **Não repetir textos já utilizados** em sessões anteriores.
- **Não repetir questões já utilizadas**, salvo quando houver um reteste dirigido explicitamente identificado como REPAIR/RETEST.
- Antes de montar o bloco, consultar **`data/QUESTOES.json`**, **`data/RESULTADOS.json`** e **`qti/`** para bloquear repetições.
- O texto-base deve, por padrão, ser **texto real já utilizado em prova antiga da CESGRANRIO e localizado/confirmado no QConcursos**.
- Priorizar provas de **Transpetro/Petrobras**, Banco do Brasil, Caixa e outros concursos de nível superior da CESGRANRIO com perfil compatível.
- Evitar textos autorais quando houver texto histórico adequado disponível.
- Questões podem ser originais da prova ou inéditas no mesmo estilo, mas **não podem repetir enunciado, alternativas ou estrutura já usada recentemente**.
- Manter o foco histórico da prova-alvo: **interpretação e inferência**, progressão temática/coerência, vocabulário contextual, crase, ortografia/hífen e conectores; sintaxe isolada apenas quando houver recorrência histórica clara.
- Registrar cada novo texto e cada nova questão de Português no banco anti-repetição.


## Regra específica — Inglês

Para toda bateria, QTI, simulado ou revisão de **Língua Inglesa**:

- **Não repetir textos já utilizados** em sessões anteriores.
- **Não repetir questões já utilizadas**, salvo quando houver um reteste dirigido explicitamente identificado como REPAIR/RETEST.
- Antes de montar o bloco, consultar **`data/QUESTOES.json`**, **`data/RESULTADOS.json`** e **`qti/`** para bloquear repetições.
- O texto-base deve, por padrão, ser **texto real já utilizado em prova antiga da CESGRANRIO e localizado/confirmado no QConcursos**.
- Priorizar provas de **Transpetro/Petrobras**, Banco do Brasil, Caixa e outros concursos de nível superior da CESGRANRIO com perfil compatível.
- Evitar textos autorais quando houver texto histórico adequado disponível.
- Questões podem ser originais da prova ou inéditas no mesmo estilo, mas **não podem repetir enunciado, alternativas ou estrutura já usada recentemente**.
- Manter o foco histórico da prova-alvo: **interpretação e inferência**, ideia central, referência pronominal/textual, vocabulário contextual, conectores, modal verbs e equivalência de sentido; gramática isolada apenas quando houver recorrência histórica clara.
- Registrar cada novo texto e cada nova questão de Inglês no banco anti-repetição.


## Regra global anti-repetição

Esta regra vale para **Telecomunicações, Português, Inglês e qualquer QTI/simulado**:

- antes de montar questões, consultar obrigatoriamente `data/QUESTOES.json`, `data/RESULTADOS.json` e o histórico recente em `qti/`;
- questão já usada no mesmo dia fica bloqueada para outro QTI, salvo `REPAIR`/`RETEST` explicitamente identificado;
- não repetir questão correta durante o cooldown de 3/5/7 dias;
- não considerar inédita uma questão apenas porque números, nomes ou alternativas foram trocados;
- em caso de dúvida sobre identidade ou uso recente, **bloquear e substituir**;
- se faltar questão elegível, pesquisar nova CESGRANRIO/QConcursos, criar autoral genuinamente inédita ou reduzir o bloco;
- bateria contaminada por repetição deve ser marcada e **não usada como medida longitudinal limpa de domínio**.


### Regra de formato dos QTI

**QTI = HTML interativo por padrão.** Sempre que o usuário pedir um QTI, gerar arquivo HTML; não entregar apenas a bateria em texto no chat. Exceção somente quando o usuário pedir explicitamente formato textual.


## Comandos persistentes

O arquivo `data/COMANDOS.json` contém associações operacionais obrigatórias do projeto. A associação principal é:

**QTI => HTML interativo**

Essa regra deve ser aplicada automaticamente em novas conversas e sessões do projeto, salvo pedido explícito do usuário por outro formato.


## Fechamento anterior — 10/10/2026

[Telecom, Português e Inglês — resultados, revisões e próximo passo](qti/RESULTADOS_DIA_2026-10-10.md). **PT 9/10; Inglês 10/10**. Revisão guiada de Probabilidade registrada; QTI-30 dos 13 itens atribuído, ainda sem resultado. O pedido de voltar ao método mais rápido está em [Perfil de Estudo](docs/PERFIL_ESTUDO.md).


## Fechamento anterior — 11/10/2026

[Processo de estudo: itens1–4, históricos, correções e reforços](qti/RESULTADOS_DIA_2026-10-11.md). Item1histórico9/9; item 3histórico9/10;4.1=5/5;4.2inicial4/5; bloco11 históricas 9/11. Tempo de estudo **estimado em cerca de 6h15**, com pausas explícitas excluídas. Treino guiado comreaplicações solicitadas, não simulado longitudinal. QAM: bits 3/3, última marcação de gráfico errada, masusuário declarou quejá sabe; nenhumreparo imediato extra.

**Retomada combinada:12/10/2026 — item 5, Telefonia e Videoconferência, iniciando pelo5.1.**


## Fechamento anterior — 12/10/2026 (America/Sao_Paulo)

[Registro do dia](qti/RESULTADOS_DIA_2026-10-12.md) · [Dados estruturados](qti/RESULTADOS_DIA_2026-10-12.json).

- Telefonia: 5.1 = 3/5; 5.2 = 4/5 + reforço 2/2; histórico do item 5 = 13/15. SIP/H.323 praticados no histórico; respostas do bloco inicial 5.3 não recuperadas.
- Antenas: 6.1 = 5/5; 6.2 = 3/5; 6.3 = 3/5; histórico = 6/7; LC reforço 2/2 e adicional correto (250 MHz). Sequência adicional C,E,D preservada sem inventar nota.
- Radiopropagação: 7.1 = 5/5; 7.2 = 4/5 + reforço 2/2; bloco noturno de 11 originais = **11/11 (100%)**.
- Mínimo **78 respostas recuperadas**, incluindo reaplicações. Tempo líquido desconhecido. Sem novos resultados PT/ING confirmados nesta data.
- Ponto atual: item 7 após o bloco noturno. Conferir pendências do levantamento histórico ampliado antes de avançar ao 8. Revisões D7 em 19/10 e D21 em 02/11.
- Registro parcial das sessões anteriores: preservar notas agregadas quando faltarem enunciados/correções individuais; não confundir treino guiado/reaplicações com diagnóstico longitudinal.


## Último fechamento parcial — 13/10/2026, até 16:26 (America/Sao_Paulo)

[Resumo da evolução](qti/RESULTADOS_DIA_2026-10-13.md) · [Respostas e correções estruturadas](qti/RESULTADOS_DIA_2026-10-13.json).

- **Item 8:** 8.1=5/5; 8.2=4/5 + reforço2/2; 8.3=4/5 + reforço2/2; histórico8/9; VSAT reforços1/2 e2/2. **28/32** ao todo.
- **Item 9:** 9.1=5/5; 9.2=5/5; histórico adaptado11/12; MAC/QoS reforço2/2. **23/24** ao todo.
- **Total:**51/56 (91,1%), incluindo retestes e reforços. Tempo líquido desconhecido; não é simulado independente.
- Erros recuperados: diâmetro/frequência, C/N versus C/N0, topologias VSAT e MAC/QoS WiMAX. Preservado o erro intermediário anel/malha antes da recuperação final.
- Ciclos dos itens8e9 concluídos nas3provas fornecidas; mantidos EM_REVISAO para retenção. D3:16/10; D7:20/10; D21:03/11.
- **Próximo ponto:10.1 — Wi-Fi IEEE802.11 a/b/g/n/ac/ax eQoS802.11e.** Nenhumaquestão doitem10respondida neste fechamento.


## Fechamento atualizado — 13/10/2026, até 20:04 (America/Sao_Paulo)

[Registro do dia](qti/RESULTADOS_DIA_2026-10-13.md) · [Dados estruturados](qti/RESULTADOS_DIA_2026-10-13.json).

- **Item 8:28/32 (87,5%). Item 9:23/24 (95,8%). Item 10:43/47 (91,5%).**
- **Total do dia:94/103 (91,3%)**, incluindo adaptações históricas e reforços; treino guiado, não simulado independente. Tempo líquido não medido.
- Item10:10.1=5/5;10.2=5/5;10.3=5/5;24 históricas adaptadas=21/24;reforço RSTP/VID/SMI=5/6;reforço final RSTP=2/2.
- Recuperados: estados RSTP (incluindo learning/discarding), 4096 combinações versus4094 VLANs comuns e SMI versusMIB. Mantido o erro intermediário em learning.
- Item10 em **EM_REVISAO**. D3 dos erros:16/10;D7:20/10;D21:03/11.
- **Próxima retomada sequencial sugerida:11.1 — IP multicast;DiffServ;CBWFQ;LLQ.**
- Sem novos resultados de Português/Inglês confirmados neste fechamento.
