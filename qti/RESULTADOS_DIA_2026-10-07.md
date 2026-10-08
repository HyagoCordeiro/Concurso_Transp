# Resultados do dia — 07/10/2026

## Resumo

Sessão de consolidação por questões, diagnóstico, teoria pontual e reteste.

### QTIs principais

| Bloco | Resultado | Observação |
|---|---:|---|
| QTI-30 N5 CESGRANRIO | 30/30 — 100% | Reteste espaçado |
| QTI-50 mesclado | 43/50 — 86% | 7 erros; entrou em reparo |
| QTI-14 repair | 12/14 — 85,7% | Restaram convolução contínua e Fresnel |
| QTI-5 convolução | 3/5 — 60% | Erros em amplitude e máximo |
| QTI-30 rotação semântica | 22/30 — 73,3% | 8 erros; iniciou diagnóstico |
| QTI-10 mesclado | 9/10 — 90% | Único erro: TCP / controle de congestionamento |

## Reparos do dia

- Zona de Fresnel: **2/2**, reparado.
- Convolução contínua: suporte/interseção consolidados; depois **4/4** em amplitude e valor máximo, reparado.
- Reteste dos 8 erros do QTI-30: **5/8**. Permaneceram três lacunas reais: Fourier/simetria conjugada, Transformada Z/valor final e satélite/backoff.
- Após miniaula nesses três pontos: **6/6**, todos reparados.
- Após QTI-10, diagnóstico de 5 pontos: **3/5**. Lacunas confirmadas apenas em TCP/slow start e AM/sobremodulação.
- Após miniaula de TCP e AM: **4/4**, ambos reparados.

## Estado ao encerrar

### Reparados hoje

- Zona de Fresnel.
- Convolução contínua — suporte, interseção, amplitude e máximo.
- Fourier — simetria conjugada/hermitiana para sinal real.
- Transformada Z — teorema do valor final.
- Satélite — backoff e intermodulação.
- TCP — slow start versus congestion avoidance.
- AM convencional — índice de modulação e sobremodulação.

### Acertos frágeis que foram confirmados em diagnóstico

- IEEE 802.11 — RTS/CTS.
- Antena log-periódica.
- VSAT — inbound/outbound.
- Coherence bandwidth versus delay spread.
- 802.1X — EAPOL.
- Rayleigh — dependência aproximada de 1/λ⁴.
- Código Gray.
- Inverso de número complexo.

## QTI-10 mesclado — detalhe

Resultado: **9/10 = 90%**; 357 s totais; 36 s médios.

| Item | Tema | Resultado | Confiança |
|---:|---|---|---:|
| 10 | IEEE 802.11 — RTS/CTS | correta | 2 |
| 4 | AM convencional — sobremodulação | correta | 1 |
| 7 | Rotação de Faraday | correta | 5 |
| 11 | TCP — controle de congestionamento | **incorreta** | 2 |
| 1 | Distribuição de Poisson | correta | 5 |
| 9 | GSM — acesso múltiplo | correta | 5 |
| 6 | Antena log-periódica | correta | 2 |
| 12 | Amplificação óptica | correta | 4 |
| 8 | VSAT — acesso múltiplo | correta | 3 |
| 5 | PABX / central privada | correta | 5 |

## Regra para a próxima sessão

Os tópicos reparados hoje saem do reparo imediato. Não devem reaparecer no próximo QTI normal apenas com troca cosmética de valores. Voltar a eles por **reteste espaçado**, respeitando o banco anti-repetição.

Continuar com **QTI misto + rotação semântica**, usando os cadernos `TEcom_Tec.pdf`, `TEcom_Tec2.pdf` e `TEcom_Tec3.pdf` como banco prioritário, sempre cruzando com `data/QUESTOES.json`, `data/RESULTADOS.json` e o histórico recente em `qti/`.
