# Resumo de estudos — 29/09/2026

**Projeto:** Estudo - Concurso  
**Prova-alvo:** Transpetro 2026 — Engenharia de Telecomunicações — CESGRANRIO

## Resultados do dia

| Bloco | Resultado | Aproveitamento | Observações |
|---|---:|---:|---|
| QTI-5 — Item 10 / Redes Locais | 4/5 | 80% | Erro em SNMP; confiança baixa. Revisar GetRequest, GetNext, Set, Trap e InformRequest. |
| QTI-10 — Geral Telecom | 10/10 | 100% | Nenhum erro. Q8 (SNMP/InformRequest) correta com confiança baixa. |
| QTI-30 — Revisão Ativa Telecom | 24/30 | 80% | 6 erros: complemento sem reposição, Euler, PCM/A-D, diretividade, bandas de satélite e Wi-Fi 802.11b. 1 erro com alta confiança: satélite. |
| Reforço pós-QTI-30 — 12 questões | 10/12 | 83,3% | Satélite 3/3; Probabilidade 2/2; PCM 2/2; Antenas 2/2; Wi-Fi 1/2; Euler 0/1. |
| Reforço “2 de cada erro” — 12 questões | 9/12 | 75% | Wi-Fi 2/2; PCM 2/2; Probabilidade 2/2; Satélite 2/2; Antenas 1/2; Euler 0/2. |
| Reforço Euler + dBi — 6 questões | 3/6 | 50% | Euler 1/4; dBi/ganho linear 2/2. |
| Reforço extra de Euler — 4 questões | 3/4 | 75% | Melhor desempenho após separar quadrante, sinal e ângulo de referência. |
| QTI-10 — Pronomes / CESGRANRIO | 8/10 | 80% | Erros: mesóclise com futuro do presente e colocação em locução verbal. Nenhum erro com alta confiança. |

## Diagnóstico consolidado

### Pontos consolidados no reforço
- **Satélite:** bandas C, Ku e Ka recuperadas; reforços corretos.
- **Probabilidade:** “pelo menos um” → complemento; sem reposição consolidado.
- **PCM/A-D:** sequência Fmax → Fs → bits/amostra → Rb consolidada.
- **Wi-Fi 2,4 GHz:** canal 1 = 2,412 GHz e avanço de 5 MHz por canal; canal 6 = 2,437 GHz; canal 11 = 2,462 GHz.
- **Antenas:** omnidirecional ≠ isotrópica; diretividade consolidada; conversão dBi ↔ ganho linear recuperada.
- **dBi/ganho linear:** 3 dBi ≈ 2; 6 dBi ≈ 4; 10 dBi = 10.

### Pontos ainda prioritários
1. **Euler / números complexos**
   - A regra de sinais por quadrante foi compreendida.
   - A dificuldade remanescente é identificar o ângulo de referência em relação ao eixo X e não trocar seno/cosseno de 30° e 60°.
   - 300° → referência 60°; 330° → 30°; 150° → 30°; 120° → 60°.
   - sen 30° = 1/2; cos 30° = √3/2; sen 60° = √3/2; cos 60° = 1/2.
2. **Português — pronomes**
   - Mesóclise com futuro do presente.
   - Colocação pronominal em locuções verbais.
3. **SNMP**
   - Apesar do QTI-10 Geral 10/10, houve erro no QTI-5 e acerto com baixa confiança no QTI-10.
   - Fixar: Trap = sem confirmação; InformRequest = com confirmação.

## Registro adicional já existente no GitHub
- **QTI-40 Petrobras 2006 / Telecom:** 36/40 = 90%, com erros em SNMP, compansão/PCM, sinalização telefônica e SSH. O arquivo original está datado de 28/09/2026 e foi registrado no repositório em 29/09/2026.

## Leitura do dia
O desempenho geral ficou forte, com recuperação objetiva de vários erros do QTI-30. A principal lacuna ainda aberta ao fim do dia é **Euler/ângulo de referência**; em Português, revisar **mesóclise** e **locução verbal**; em Redes, manter uma revisão curta de **SNMP**.
