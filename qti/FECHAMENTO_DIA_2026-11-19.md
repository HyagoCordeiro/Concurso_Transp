# Fechamento técnico — 19/11/2026 (sem Português e Inglês)

**Concurso:** Transpetro — Engenharia de Telecomunicações — CESGRANRIO. **Data local:** 19/11/2026. **Fonte:** conversa de estudo; exercícios autorais/adaptados inspirados em provas Transpetro/Petrobras e referências QConcursos, **não questões oficiais literais**. Tempo líquido **não aferido**; não converter o cronograma previsto em tempo realizado.

## Balanço objetivo

| Rodada | Itens | Respostas do aluno | Gabarito | Acertos |
|---|---|---|---|---:|
| Bloco 1 — Probabilidade (8) | 1.1/1.2 | E C D A D C D E | E C A B D C D E | 6/8 |
| Reforço exponencial (4) | 1.2 | C E A D | C E A D | 4/4 |
| Bloco 2 — Antenas e Radiopropagação (8) | 6/7 | A E C D B A E C | A E C D B A E C | 8/8 |
| Bloco 3 — Modulação e Sistemas Ópticos (8) | 4/12 | D B E C B D A C | D A E C B D A C | 7/8 |
| Bloco 4 — Sinais e Sistemas (6) | 2/3 | C B C E A C | D B C E A C | 5/6 |
| Reforço Fourier X(0) (2) | 2.3 | B C | B C | 2/2 |
| **QTI-20 misto (20)** | **1–13** | **B B B B D D C E B D E B A D C B E B D C** | **C A E B D A C E B D E B A D C A E B D C** | **15/20** |
| Reforço exponencial pós-QTI (3) | 1.2 | B D A | B D A | 3/3 |
| **TOTAL** | | | | **50/59 = 84,7%** |

**Observação metodológica:** 59 itens incluem 9 questões de reforço imediato, por isso **não equivalem a 59 questões inéditas de simulado**. O desempenho independente do QTI-20 foi **15/20 (75%)**, abaixo da meta de 80%. O histórico de erro permanece ativo mesmo com 100% no reforço.

## Erros e reparos do dia

- **Bloco 1 Q03:** Exponencial — marcou D (1−e^-1) para sobreviver 4 h adicionais; correta A (e^-1). **Bloco 1 Q04:** marcou A (e^-1/2) para falhar em até 3 h; correta B (1−e^-1/2). Reparo em quatro questões **4/4**; reforço posterior três questões **3/3**. **Não comprova retenção espaçada.**
- **Bloco 3 Q02:** PCM, marcou B (48 kb/s) em vez de A (64 kb/s): 8000 amostras/s × 8 bits. Taxa Nyquist do sinal de 3 kHz é verificação separada.
- **Bloco 4 Q01:** Fourier X(0), marcou C (zero), correta D (8), área do pulso 2[u(t+2)−u(t−2)]; reforço área sob pulso **2/2**.
- **QTI-20 Q01 (Bayes):** B → C, P(B|erro)=0,015/(0,014+0,015)=51,7%; marcou P(A|erro).
- **QTI-20 Q02 (Poisson):** B → A, P(0 falhas em meia hora)=e^-1, não 1−e^-1.
- **QTI-20 Q03 (Fourier):** B → E, x(−2t) ↔ 1/2 X(−ω/2).
- **QTI-20 Q06 (Z):** D → A, sistema causal de polo z=1,2 tem ROC |z|>1,2 e é BIBO instável.
- **QTI-20 Q16 (802.1Q):** B → A, tag = 4 bytes (TPID 2 + TCI 2).

**Erro original mantido / estado:** os nove erros acima aguardam verificação espaçada por nova questão, sem antecipar resposta ou reutilizar as mesmas alternativas. Reforço no mesmo dia não transforma erro em retenção consolidada.

## Temas cobertos e desempenho QTI-20

| Item do edital | QTI-20 |
|---|---:|
| 1 Probabilidade | 0/2 |
| 2 Matemática aplicada a sinais | 1/2 |
| 3 Sinais e Sistemas | 1/2 |
| 4 Princípios de Telecomunicações | 2/2 |
| 5 Telefonia | 1/1 |
| 6 Antenas | 1/1 |
| 7 Radiopropagação | 2/2 |
| 8 Satélite | 1/1 |
| 9 Celular | 1/1 |
| 10 Redes locais | 1/2 |
| 11 Redes IP | 2/2 |
| 12 Sistemas ópticos | 1/1 |
| 13 Regulamentação | 1/1 |

Percentuais por tema com uma ou duas questões não provam domínio definitivo. Em especial, QTI-20 1.1/1.2 requer novo diagnóstico, apesar de acertos anteriores nos blocos.

## Próximas ações de revisão

- **D3 — 22/11/2026:** nove novos testes curtos (um para cada erro), sobretudo Bayes, Poisson, Fourier escalonamento, Z ROC, 802.1Q, PCM e exponencial.
- **D7 — 26/11/2026:** novos problemas com valores/enunciados distintos para os mesmos pontos.
- Não marcar como concluídos os retestes D3/D7 nesta data.
- **Atenção à prova-alvo:** o repositório registra **06/12/2026** em `data/PROVA_ALVO_ATUALIZADA.json`, divergente da data 29/11 usada na conversa de cronograma. Este relatório não altera nem tenta corrigir o calendário oficial.

## Registro antirrepetição

- [QTI-20 misto: 20 perguntas, cinco alternativas, respostas e gabarito](QTI20_MISTO_2026-11-19.json).
- Para os demais 39 exercícios, preservar sequências, tópicos e valores diferenciadores deste relatório e da conversa original; não reproduzir itens idênticos em retestes.

**Nota:** resultados de reforço são separados de simulados para evitar inflação de desempenho.


## Adendo posterior ao fechamento parcial — QTI-30 e reforço (19/11/2026)

**O subtotal de 50/59 acima representa a primeira parte do dia, não o fechamento final.**

| Atividade adicional | Acertos | Total | % |
|---|---:|---:|---:|
| QTI-30 (três rodadas 4/10 + 10/10 + 8/10) | 22 | 30 | 73,3% |
| Reforço de 8 assuntos errados | 7 | 8 | 87,5% |
| **TOTAL DO DIA (incluindo 50/59 prévios)** | **79** | **97** | **81,4%** |

**QTI-30:** 8 erros originais em Q01 variância/autocorrelação, Q02 hipergeométrica, Q03 derivação Fourier, Q06 SIP, Q09 Doppler, Q10 dispersão cromática, Q24 taxa Nyquist, Q26 polarização. Reforço 7/8, **R3 Fourier incorreta (E em vez de B, faltou fator 2)**. D1 Fourier 20/11, D3 22/11, D7 26/11. Não marcar como consolidado.

[QTI-30 e reforço completos](QTI30_2026-11-19.md) · [QTI-30 e reforço estruturados](QTI30_2026-11-19.json).
