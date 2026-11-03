# QTI-13 — Engenharia de Telecomunicações

**Data:** 02/11/2026  
**Rodada:** Fechamento do dia  
**Cobertura:** 13 itens do edital — 1 questão por item  
**Base de calibração:** CESGRANRIO / Transpetro  

## Resultado

- **Acertos:** 10/13
- **Erros:** 3/13
- **Aproveitamento:** **76,9%**
- **Itens com erro:** **1, 3 e 7**

## Desempenho por item

| Item | Tema | Resultado | Resposta dada | Resposta correta |
|---|---|---:|---|---|
| 1 | Probabilidade | ❌ | 1 e 25 | 1 e 13 |
| 2 | Matemática aplicada a sinais | ✅ | G(ω) = X(ω)e^(−j3ω) | G(ω) = X(ω)e^(−j3ω) |
| 3 | Sinais e sistemas | ❌ | [2(1/2)^n − 3(1/3)^n]u[n] | [3(1/2)^n − 2(1/3)^n]u[n] |
| 4 | Princípios de Telecomunicações | ✅ | 5 MHz | 5 MHz |
| 5 | Telefonia e videoconferência | ✅ | RTP | RTP |
| 6 | Antenas | ✅ | 0,25 m | 0,25 m |
| 7 | Radiopropagação | ❌ | 6 dB maior | Praticamente igual |
| 8 | Satélite | ✅ | 17 dB | 17 dB |
| 9 | Comunicações celulares | ✅ | OFDMA e SC-FDMA | OFDMA e SC-FDMA |
| 10 | Redes locais e gerenciamento | ✅ | autenticação, integridade e privacidade no SNMPv3 | autenticação, integridade e privacidade no SNMPv3 |
| 11 | Redes IP/MPLS | ✅ | RSVP-TE | RSVP-TE |
| 12 | Sistemas ópticos | ✅ | 48 km | 48 km |
| 13 | Regulamentação | ✅ | espectro como recurso limitado e bem público administrado pela Anatel | espectro como recurso limitado e bem público administrado pela Anatel |

## Diagnóstico dos erros

### Item 1 — Probabilidade
Reforçar a soma de variáveis aleatórias independentes: **as médias se somam e as variâncias também se somam**. Não se deve somar os desvios-padrão e elevar o resultado ao quadrado.

### Item 3 — Sinais e sistemas
Revisar a **convolução de exponenciais causais discretas**, especialmente a transformação da soma finita em progressão geométrica e a obtenção dos coeficientes finais.

### Item 7 — Radiopropagação
Reforçar a perda em espaço livre. Na forma logarítmica, a perda depende de **20 log(f) + 20 log(d)**. Ao reduzir a frequência à metade e duplicar a distância, os efeitos de aproximadamente −6 dB e +6 dB se cancelam.

## Pontos consolidados nesta rodada

Bom desempenho em Fourier, modulação digital, VoIP, antenas, satélite, LTE, SNMPv3, MPLS-TE, orçamento óptico e regulamentação.

## Próxima ação

Conforme a regra operacional do estudo, os erros dos itens **1, 3 e 7** ficam elegíveis para **reteste em 03/11/2026**. Se acertados no reteste, retornam ao ciclo normal de revisão espaçada.
