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
