# Fechamento de estudo — 10/11/2026 — CESGRANRIO/Transpetro Telecom

**Prova-alvo:** 06/12/2026 · **Tempo líquido:** não aferido · **Resultado global:** **57/72 (79,2%)**, incluindo retestes e exercícios autorais. Este percentual não equivale a desempenho de prova inteiramente inédita.

| Bloco | Acertos | Total | % | Tipo |
|---|---:|---:|---:|---|
| Sistemas Ópticos (item 12, com reforço) | 11 | 15 | 73,3% | históricas + autorais |
| Radiopropagação (item 7) | 4 | 4 | 100% | históricas reapresentadas |
| Satélites (item 8) | 5 | 5 | 100% | históricas reapresentadas |
| Telefonia (item 5, com reforço) | 7 | 8 | 87,5% | históricas + autorais |
| Celular e Regulamentação (itens 9 e 13) | 6 | 6 | 100% | históricas adaptadas |
| **Telecom antes do QTI** | **33** | **38** | **86,8%** | mistas |
| Português, históricas Q33–Q38 | 3 | 6 | 50% | históricas |
| Inglês, históricas 2023 Q11–Q15 | 2 | 5 | 40% | históricas |
| Português, reforço P1–P3 | 1 | 3 | 33,3% | autorais |
| **QTI-20 misto (todos os 13 itens)** | **18** | **20** | **90%** | autorais de transferência |
| **TOTAL** | **57** | **72** | **79,2%** | com retestes |

## QTI-20 — respostas e correção

| Nº | Item | Tema | Marcada | Gabarito | Resultado |
|---|---|---|:---:|:---:|---|
| 1 | 1.1 | Eventos independentes | D | D | CORRETA |
| 2 | 2.2 | Aliasing | A | A | CORRETA |
| 3 | 3.4 | ROC e estabilidade | E | E | CORRETA |
| 4 | 4.2 | Taxa de símbolos 16-QAM | B | B | CORRETA |
| 5 | 5.1 | Erlang C | C | C | CORRETA |
| 6 | 6.2 | Monopolo λ/4 | D | D | CORRETA |
| 7 | 7.1 | Primeira zona de Fresnel | B | B | CORRETA |
| 8 | 8.3 | EIRP VSAT | A | A | CORRETA |
| 9 | 9.2 | Duplexação TDD | C | C | CORRETA |
| 10 | 10.3 | Prioridade IEEE 802.1p | E | E | CORRETA |
| 11 | 11.4 | Route Target MP-BGP | B | B | CORRETA |
| 12 | 12.1 | Orçamento óptico | D | D | CORRETA |
| 13 | 13.2 | Anatel e espectro | A | A | CORRETA |
| 14 | 1.1 | Bayes: inversão condicional | D | E | INCORRETA |
| 15 | 2.4 | Convolução de impulsos | B | C | INCORRETA |
| 16 | 3.5 | Estabilidade discreta | B | B | CORRETA |
| 17 | 4.2 | Taxa PCM | A | A | CORRETA |
| 18 | 10.3 | RMON II | E | E | CORRETA |
| 19 | 11.3 | RSVP-TE | D | D | CORRETA |
| 20 | 12.1 | Dispersão cromática | C | C | CORRETA |

**Erros do QTI:** Q14 Bayes — D → E; a probabilidade pedida era P(falha\|alarme)=180/260≈69,23%, não 90%. Q15 convolução discreta — B → C; (δ[n]+2δ[n−1])*(δ[n]+δ[n−1]) = δ[n]+3δ[n−1]+2δ[n−2].

## QTI por item

- Item 1: **1/2**
- Item 2: **1/2**
- Item 3: **2/2**
- Item 4: **2/2**
- Item 5: **1/1**
- Item 6: **1/1**
- Item 7: **1/1**
- Item 8: **1/1**
- Item 9: **1/1**
- Item 10: **2/2**
- Item 11: **2/2**
- Item 12: **2/2**
- Item 13: **1/1**

## Erros fora do QTI

- Sistemas Ópticos: espaçamento WDM, dispersão modal em NRZ, identificação de TM/ADM/SDXC e TDM na SDH. Reforço final 4/4.
- Telefonia: SDP confundido com RTCP. Reforço específico 2/2.
- Português histórico: regência, colocação pronominal e porquês. Reforço autoral: somente colocação pronominal correta (1/3); regência e porquês persistem.
- Inglês histórico: inferência sobre transmissão terrestre, inferência sobre queda de custos e vocabulário *low latency* (2/5).

## Prioridades adaptativas

1. **D3 (13/11):** três itens de probabilidade condicional/Bayes com enunciados novos; dois de convolução discreta com impulsos diferentes; três de Português (regência e porquês); texto novo em Inglês com inferência e vocabulário contextual.
2. **D7 (17/11):** revisão mista sem reutilização de questões corretas em cooldown; checar se o aprendizado se transfere para situações novas.
3. **D21 (01/12):** revisão espaçada curta dos conteúdos do dia, com peso em dificuldades remanescentes.

**Antirrepetição:** QTI-20 é **autoral**, não foi classificado como questão oficial. Registrar cada item com `canonicalId` único em `data/QUESTOES.json`, bloqueando acertos por 3, 5 ou 7 dias; erros Q14/Q15 elegíveis apenas para reparo/reteste dirigido. Outras baterias do dia devem ser marcadas como exposições, inclusive quando originadas de prova histórica já conhecida.

**Fontes históricas:** provas CESGRANRIO/Petrobras e Transpetro e QConcursos; ver `qti/DIAGNOSTICO_PARCIAL_2026-11-10.md` para histórico dos blocos técnicos anteriores ao QTI.
