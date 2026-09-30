# QTI-50 — 13 itens CESGRANRIO / Telecom

- **Data:** 30/09/2026
- **Resultado:** **44/50 (88%)**
- **Erros / pulos:** **6**
- **Erros com alta confiança:** **0**
- **Tempo:** **44min26s** (≈53 segundos por questão)
- **Origem:** relatório e capturas enviados pelo usuário.

## Desempenho por item

| Item | Matéria | Acertos | % |
|---:|---|---:|---:|
| 1 | Probabilidade e processos estocásticos | 6/6 | 100% |
| 2 | Matemática aplicada a sinais | 3/4 | 75% |
| 3 | Sinais e sistemas | 2/5 | 40% |
| 4 | Princípios de telecomunicações | 5/5 | 100% |
| 5 | Telefonia e videoconferência | 3/3 | 100% |
| 6 | Antenas | 4/4 | 100% |
| 7 | Radiopropagação | 3/4 | 75% |
| 8 | Satélites | 3/3 | 100% |
| 9 | Comunicações celulares | 3/3 | 100% |
| 10 | Redes locais | 4/4 | 100% |
| 11 | Redes IP | 3/4 | 75% |
| 12 | Sistemas ópticos | 3/3 | 100% |
| 13 | Regulamentação | 2/2 | 100% |

## Erros identificados

| Q | Item | Assunto | Marcou | Correta | Confiança |
|---:|---:|---|:---:|:---:|---|
| 9 | 2 | Fourier / deslocamento temporal | C | D | Não marcada |
| 11 | 3 | Convolução discreta com índice negativo | E | B | Baixa |
| 13 | 3 | Resposta ao degrau / Laplace | E | A | Baixa |
| 14 | 3 | Polos / estabilidade contínua | C | B | Não marcada |
| 30 | 7 | Primeira zona de Fresnel | B | E | Média |
| 43 | 11 | MPLS-TE / roteamento e sinalização | A | C | Não marcada |

## Diagnóstico e micro-reparos

- **Q9 — Fourier, deslocamento temporal:** x(t−3) ↔ e^(−j3ω)X(ω). Foco no sinal do atraso e na diferença entre deslocamento temporal e frequência.
- **Q11 — Convolução discreta:** y[0]=Σ x[k]h[−k]; índice negativo em h[−1] importa.
- **Q13 — Resposta ao degrau:** multiplicar H(s) por 1/s, aplicar frações parciais; para 4/(s+4), y(t)=1−e^(−4t).
- **Q14 — Estabilidade:** para sistema causal racional contínuo, todos os polos estritamente à esquerda → BIBO estável; polos do lado direito geram instabilidade.
- **Q30 — Fresnel:** r1=√(λ·d1·d2/d); r1=3 m no ponto médio, exigência 60%=1,8 m; altura=13,8 m.
- **Q43 — MPLS-TE:** protocolo de roteamento OSPF-TE/IS-IS-TE primeiro; RSVP-TE faz sinalização do LSP.

## Próxima atividade

Responder 12 questões de reforço (2 novas questões por erro), nível histórico CESGRANRIO Telecom. Priorizar os três erros concentrados em **Sinais e Sistemas (item 3: 2/5)**; revisar também Fourier, Fresnel e MPLS-TE.

**Nota:** o desempenho por item descreve a amostra desta bateria, não comprova que todos os subtópicos dos 13 itens foram encerrados.
