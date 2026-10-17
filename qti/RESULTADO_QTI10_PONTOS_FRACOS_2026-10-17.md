# QTI-10 — Pontos mais fracos — 2026-10-17

## Resultado principal
- QTI-10: **9/10 = 90%**
- Reparo WDM: **2/2 = 100%**
- Resultado consolidado da sessão: **11/12 = 91,7%**

## Gabarito do QTI-10
1. Probabilidade — pelo menos um defeituoso: **C** ✅
2. Probabilidade — exatamente duas falhas: **D** ✅
3. Poisson — ajuste do intervalo: **A** ✅
4. Amostragem/Nyquist: **B** ✅
5. Convolução discreta: **E** ✅
6. Satélite — C/N: **C** ✅
7. Fibra — dispersão modal e NRZ: **D** ✅
8. WDM — número de intervalos / nm→GHz: usuário marcou **D**, correto **A** ❌
9. MetroEthernet — EVC/UNI/E-LAN: **C** ✅
10. LGT/ANATEL: **B** ✅

## Diagnóstico
### Consolidado
- Probabilidade e interpretação
- Poisson
- Nyquist
- Convolução discreta
- C/N de enlace satélite
- Dispersão modal + NRZ
- MetroEthernet
- LGT/ANATEL

### Ponto de atenção
- **WDM: número de intervalos e conversão de espaçamento em nm para GHz**
- Regra operacional: `N canais => N - 1 intervalos`

## Reparo WDM
### R1
6 canais de 1540 nm a 1550 nm.
- 6 canais => 5 intervalos
- Δλ = 10/5 = 2 nm
- Resposta do usuário: **B** ✅

### R2
11 canais de 1535 nm a 1545 nm.
- 11 canais => 10 intervalos
- Δλ = 10/10 = 1 nm
- Δf ≈ 83–84 GHz
- Resposta do usuário: **B** ✅

## Conclusão
O erro do QTI-10 foi localizado e reparado imediatamente. O desempenho geral segue forte, com 90% no bloco misto de pontos fracos e 100% no reparo direcionado. WDM permanece como ponto de atenção operacional, não como fraqueza conceitual ampla.
