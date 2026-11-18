# Sessão técnica CESGRANRIO / Transpetro — 17/11/2026

**Natureza:** questões autorais calibradas por provas CESGRANRIO de Engenharia de Telecomunicações e áreas afins. **Não** classificar como questões originais oficiais. **Sem cronômetro/tempo líquido aferido**. Português e Inglês de futuras conversas devem ser registrados separadamente.

## Resumo de desempenho

| Etapa | Acertos | Erros | Observações |
|---|---:|---:|---|
| Reteste de 12 questões (erros de 16/11) | 10/12 | 2 | Exponencial sem memória (sobrevivência vs falha); idiom 'speak volumes' |
| Reforço adicional de 4 questões | 3/4 | 1 | Exponencial 2/2; idioms 1/2, erro em 'walk in the park' |
| QTI-30 (3 blocos de 10) | **27/30 (90%)** | **3** | Blocos 8/10, 10/10, 9/10 |
| QTI-6 — reparo direto de Fourier/LIT/ACF | **2/6 (33,3%)** | **4** | Erros 01, 03, 04 e 06 |
| Reforço guiado contextualizado CESGRANRIO | **5/5** | 0 | LIT 1/1; Fourier gráfico 4/4; **não equivale a reteste espaçado** |
| Ruído branco / autocorrelação — 2 afirmativas | **1/2** | 1 | Diferença senoide aleatória x ruído branco; ruído filtrado recuperado |
| QTI-13 difícil (um por item do edital) | **7/13 (53,8%)** | **6** | Mais cálculos de múltiplas etapas |
| QTI-6 — reteste imediato de seis erros QTI-13 | **6/6 (100%)** | 0 | Novos valores; **domínio provisório**, revisar em D3/D7 |

Não somar etapas heterogêneas como uma única prova; resultados guiados, testes imediatos e QTI têm validade diagnóstica distinta.

## QTI-30 (27/30)

**Respostas:** C A B D B D B C A E | D A E B C C E D A B | E D A C B A D B A C

**Gabarito:** C E A D B D B C A E | D A E B C C E D A B | B D A C B A D B A C

| Q | Subitem | Marcada/correta | Erro e ajuste |
|---|---|---|---|
| 02 | 2.3 Fourier | A / E | x(t−a) é atraso: X(f)e^(−j2πfa). Inverteu sinal da fase |
| 03 | 3.1 estabilidade LIT | B / A | Polos −2±j2: estável, transitório oscilatório amortecido; polos complexos não implicam instabilidade |
| 21 | 1.3 processos aleatórios | E / B | Senoide com fase uniforme: R(τ)=A²/2 cos(2πf₀τ); Dirac é ruído branco ideal |

## QTI-6 de recuperação de Fourier, LIT, autocorrelação (2/6)

**Respostas:** A E C E B B. **Gabarito:** C E D B B E.

- Q01 2.3 A/C: adiantamento x(t+2) gera expoente positivo (+j4πf).
- Q03 3.1 C/D: polos 1±j2, resposta oscilatória crescente, sistema instável.
- Q04 3.1 E/B: polos ±j3 sobre eixo imaginário: não é BIBO estável (embora resposta natural limitada).
- Q06 1.3 B/E: senoide aleatória de amplitude 2 tem PSD bilateral δ(f−f₀)+δ(f+f₀), não apenas um impulso.
- Q02 e Q05 corretas.

**Reparo guiado posterior:** LIT com EDO e teorema do valor final (C); Fourier com pulsos retangulares deslocados (B), dois positivos (A), dois negativos (D), primeiro positivo/segundo negativo (E): **5/5**, contexto parecido com questões de Transpetro 2023, enunciados autorais. Retenção espaçada **a verificar**.

## Ruído branco / autocorrelação

- Questão conceitual 01: **E / C**, afirmou falsamente que senoide com fase aleatória tem PSD plana como ruído branco. Correto: ruído branco S_n(f)=N₀/2 e R_n(τ)=(N₀/2)δ(τ); senoide aleatória possui duas linhas espectrais em ±f₀ e ACF cossenoidal.
- Questão conceitual 02: **D / D**. Ruído térmico kTB, filtro passa-baixas limita a PSD do ruído branco, ruído impulsivo associado a transientes. Reparo parcial; manter o erro 01 ativo.

## QTI-13 difícil (7/13)

**Respostas:** D C B D E A D D C A E B C

**Gabarito:** E C B D A B C E D A E B C

| Q | Subitem | Marcada/correta | Erro e correção |
|---|---|---|---|
| 01 | 1.2 hipergeométrica | D / E | Seleção sem reposição: C(5,2) C(7,2) / C(12,4)=14/33 |
| 05 | 5.1 Erlang B | E / A | B(3,2)=(2³/3!)/(Σ_{k=0}³2^k/k!)=4/19≈21,1% |
| 06 | 6.1 diretividade / EIRP | A / B | Ganho real = diretividade + 10log₁₀(eficiência); EIRP=30−2+13−3=38 dBm |
| 07 | 7.1 Fresnel / curvatura | D / C | λ=0,15 m; r₁≈14,14 m; altura máxima=50−2−0,6·14,14≈39,5 m |
| 08 | 8.3 satélite C/N | D / E | C/N₀=91,6 dBHz; 10 MHz subtrai 70 dB, C/N=21,6 dB |
| 09 | 9.2 Doppler / tempo coerência | C / D | 90 km/h=25 m/s; f_D=300 Hz; tempo de coerência **reduz** quando Doppler aumenta |

Acertos em convolução, aliasing, 64-QAM/FEC, PoE, MPLS-TE, orçamento óptico e PDFF/Anatel.

## QTI-6 de recuperação do QTI-13 (6/6)

**Respostas:** B E C D A B. **Gabarito:** B E C D A B.

- 1.2 Hipergeométrica: 36/91
- 5.1 Erlang B: 9,52%
- 6.1 EIRP: 39 dBm
- 7.1 Fresnel e saliência: 57,5 m
- 8.3 C/N satelital: 22,6 dB
- 9.2 Doppler: 160 Hz e tempo de coerência cai à metade ao dobrar a portadora

O acerto imediato de 6/6 **não elimina** os seis erros anteriores do caderno. Retestar com novos contextos sem fórmula entregue.

## Reteste inicial de 16/11 e inglês (17/11)

Reteste 12: 10/12; erros em Q04 exponencial sem memória, confundiu sobreviver e falhar após o instante atual; Q11 'speak volumes' = fornecer fortes evidências. Reforço 4: 3/4 (exponencial 2/2; inglês idiom Q03 'not a walk in the park' interpretou incorretamente como atraso, mas o texto indicava dificuldade e cumprimento do prazo). Idioms permanecem prioritários para nova conversa de Inglês; não contar este resultado como parte dos simulados de Português/Inglês a iniciar.

## Próximas revisões

- **18/11 (D1):** sinais de Fourier, estabilidade BIBO/polos, ACF/PSD; diagnóstico rápido contextualizado.
- **20/11 (D3):** probabilidade, Erlang, EIRP/Fresnel/CN, Doppler, idioms e sinais/sistemas, com valores inéditos.
- **21/11 (sábado):** verificar caderno permanente semanal; reavaliar filtro H(s) reincidente do dia 16.
- **24/11 (D7):** reteste de retenção nos erros de 17/11; sem revelar fórmula nem gabarito.
- **Prova prevista:** 29/11/2026.

**Regra:** evitar repetir a mesma questão; priorizar prova real CESGRANRIO e adaptações de nível histórico. Separar acerto guiado de retenção confirmada.
