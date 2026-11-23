# QTI-30 Kamikaze — segunda rodada, 23/11/2026

**Resultado: 25/30 (83,3%)** em três blocos de 10 questões. Questões **autorais** no estilo CESGRANRIO/Transpetro, não oficiais originais. Sem tempo líquido aferido.

**Grupos:** itens 1–3: **3/3**; itens 4–12: **20/25 (80%)**; item 13: **2/2**.

| Questão | Item | Tema | Marcou | Correta | Resultado |
|---:|:--:|---|:--:|:--:|:--:|
| 01 | 1.1 | Probabilidade — falhas independentes | B | B | ✓ |
| 02 | 2.3 | Fourier — modulação por cosseno | D | D | ✓ |
| 03 | 3.5 | Resposta ao impulso em sistema discreto | A | A | ✓ |
| 04 | 4.2 | Eficiência espectral | E | E | ✓ |
| 05 | 5.2 | Sinalização Q-SIG | C | C | ✓ |
| 06 | 6.1 | Ganho e diretividade com eficiência | A | B | ✗ |
| 07 | 7.1 | Fresnel — mudança de frequência | D | D | ✓ |
| 08 | 8.3 | Figura de mérito G/T | B | E | ✗ |
| 09 | 9.2 | UMTS WCDMA e LTE OFDMA | C | C | ✓ |
| 10 | 10.3 | IEEE 802.1p PCP | A | A | ✓ |
| 11 | 4.1 | ASK FSK PSK | B | B | ✓ |
| 12 | 5.3 | G.711 — bytes por pacote RTP | C | D | ✗ |
| 13 | 6.1 | ROE VSWR | C | C | ✓ |
| 14 | 7.1 | Multipercurso e ISI | E | E | ✓ |
| 15 | 8.2 | Transponder bent-pipe | B | B | ✓ |
| 16 | 9.2 | CDMA — efeito near-far | D | D | ✓ |
| 17 | 10.3 | MSTP IEEE 802.1s | A | A | ✓ |
| 18 | 11.2 | OSPF — DR e BDR | E | E | ✓ |
| 19 | 11.3 | MPLS L2VPN pseudowire | C | C | ✓ |
| 20 | 12.2 | OTDR — tempo de ida e volta | E | B | ✗ |
| 21 | 4.1 | Taxa de bits em 8-PSK | C | C | ✓ |
| 22 | 5.3 | Gatekeeper H.323 | B | B | ✓ |
| 23 | 6.1 | Conversão ganho dBd para dBi | A | E | ✗ |
| 24 | 7.2 | Orçamento enlace rádio | D | D | ✓ |
| 25 | 8.2 | Banda Ku uplink/downlink | A | A | ✓ |
| 26 | 10.3 | RMON I versus RMON II | D | D | ✓ |
| 27 | 11.2 | BGP — LOCAL_PREF | A | A | ✓ |
| 28 | 12.2 | Orçamento óptico | C | C | ✓ |
| 29 | 13.1 | Regime público da LGT | E | E | ✓ |
| 30 | 13.2 | PDFF | B | B | ✓ |

## Caderno de erros — 5 questões

- **Q06 / item 6.1:** marcou **A**, correta **B**. G_dBi=D_dBi+10log10(η). Para ganho 10 dBi e η=0,5: D=10−10log10(0,5)=13,01 dBi, letra B. Não confundir ganho com diretividade. **Próximo passo:** Reteste curto de ganho/diretividade e eficiência, novos valores; priorizar compreensão da ordem de grandeza.
- **Q08 / item 8.3:** marcou **B**, correta **E**. G/T[dB/K]=G[dBi]−10log10(T[K]); 40−10log10(100)=20 dB/K (E). **Próximo passo:** Reteste curto de cálculo G/T e eventualmente C/N0, sem aprofundamento raro.
- **Q12 / item 5.3:** marcou **C**, correta **D**. G.711 64kbit/s, 20ms: 64000×0,020=1280 bits; /8=160 bytes, alternativa D. Sem cabeçalhos. **Próximo passo:** Uma questão curta distinguindo bits, bytes e intervalos de empacotamento RTP.
- **Q20 / item 12.2:** marcou **E**, correta **B**. OTDR mede ida e volta: d=v×t/2; v=2×10^8m/s, t=40µs ⇒ 4km, alternativa B. **Próximo passo:** Reteste rápido de fórmula de eco OTDR, lembrando o fator 2 da ida e volta.
- **Q23 / item 6.1:** marcou **A**, correta **E**. G_dBi=G_dBd+2,15; 5 dBd=7,15 dBi (E). Errado A 2,85 dBi indica subtração; erro recorrente após Q10 do QTI30 anterior (dBi→dBd). **Próximo passo:** PRIORIDADE: reteste nos dois sentidos de dBi↔dBd com valores novos, pois houve repetição de erro nas duas direções.

**Destaque:** erro recorrente em dBi/dBd (Q23 e Q10 da primeira rodada QTI30 do mesmo dia). Fazer revisão curta dos dois sentidos, sem abrir aula extensa.

**Retestes previstos:** **26/11/2026** (prioridade alta para dBi/dBd; demais correções breves), sem prejudicar revisão mista dos itens 4–12.

## Balanço das cinco baterias do dia

- QTI-15: **14/15**.
- QTI-10: **8/10**.
- QTI-20: **19/20**.
- QTI-30 primeira rodada: **28/30**.
- QTI-30 segunda rodada: **25/30**.
- **Total: 94/105 (89,5%)**, somente baterias autorais; não extrapolar como nota prevista de prova oficial.
