# NAV Brasil / FGV 2026 — Engenharia de Telecomunicações — prova ORIGINAL, Tipo 1 — questões 41 a 47

**Data:** 10/11/2026. **Resultado:** **3/7 (42,9%)**. **Versão:** prova oficial NAV 2026 Tipo 1, não adaptação. **Tempo:** não aferido.

- Caderno: https://conhecimento.fgv.br/sites/default/files/concursos/cns310-engenheiro-de-telecomunicacoes-cns310-tipo-1.pdf
- Gabarito definitivo retificado 10/09/2026: https://conhecimento.fgv.br/sites/default/files/concursos/gabarito-definitivo-retificado-nav-brasil-2026.pdf

**RETIFICAÇÃO OBRIGATÓRIA:** a correção anterior de uma versão adaptada (2/7) era INVÁLIDA porque o usuário respondeu ao PDF ORIGINAL. Ela foi desconsiderada e não deve ser inserida em qualquer consolidado.

| Q oficial | Item edital Transpetro | Tema | Marcada no PDF | Gabarito definitivo FGV | Resultado |
|---:|---|---|:---:|:---:|---|
| 41 | 4.2 | Modulação adaptativa; 16QAM/QPSK/64QAM; ordem versus Eb/N0 e BER | **D** | **E** | ERRO |
| 42 | 4.1 | Sequência fonte, codificador, modulador e canal | **A** | **A** | ACERTO |
| 43 | 7.1 | Ponto-multiponto NLOS móvel; comunicação com viaturas | **B** | **E** | ERRO |
| 44 | 5.2 | Eficiência agregada de TDMA, FDMA e CDMA: banda 12MHz, guardas e spreading | **C** | **B** | ERRO |
| 45 | 4.1 | AM convencional e bandas laterais; distinção FM PM | **A** | **A** | ACERTO |
| 46 | 7.1 | Visada: 25m e 55m edificações, antenas 5m, obstáculo 45m, distâncias 2km e 4km | **A** | **B** | ERRO |
| 47 | 6.1 | Coeficiente de reflexão para ROE 1,5 | **A** | **A** | ACERTO |

## Erros a revisar

- Q41 (D → E): afirmativas I e II verdadeiras, III falsa. Maior ordem = mais bits/símbolo, porém requer maior Eb/N0 para mesma BER.
- Q43 (B → E): várias viaturas móveis + obstáculos impedindo visada = ponto-multiponto, NLOS e móvel.
- Q44 (C → B): eficiência agregada TDMA > FDMA > CDMA nas hipóteses oficiais: TDMA (8ms; 4 guardas 0,15ms) = 92,5%; FDMA (12MHz menos 3 ×0,4MHz) = 90%; CDMA 90%/8=11,25%.
- Q46 (A → B): antenas a 30m e 60m, obstáculo a 2km de P1 num total de 6km; LOS=30+(60−30)*(2/6)=40m, abaixo do obstáculo de 45m por 5m, interrompendo visada.

## Acertos

- Q42 A (4–3–1–2) — sequência do enunciado original.
- Q45 A — em AM convencional, informação nas bandas laterais; portadora consome potência.
- Q47 A — ROE 1,5 leva a |Γ|=(1,5−1)/(1,5+1)=0,2.

## Protocolo antirrepetição

IDs individuais em `data/QUESTOES.json`: `FGV-NAVBRASIL-2026-ENGTELECOM-T1-Q41` até `Q47`. Acertos Q42, Q45 e Q47 recebem cooldown (3–7 dias); erros Q41/Q43/Q44/Q46 ficam elegíveis só para reparo dirigido; revisões D3 em 13/11 e D7 em 17/11. Este resultado é **separado** do fechamento anterior de 57/72 em 10/11.
