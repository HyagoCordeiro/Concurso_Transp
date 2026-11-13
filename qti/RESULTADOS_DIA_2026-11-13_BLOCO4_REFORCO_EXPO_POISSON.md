# Bloco 4 — Reforço de exponencial e Poisson — 13/11/2026

**Origem:** quatro questões autorais inéditas de reparo, estilo CESGRANRIO, NÃO provas originais nem simulado independente. Sem tempo líquido aferido.
**Respostas:** D, A, B, C.
**Gabarito:** D, C, B, E.
**Resultado:** **2/4 (50%)**.

| Q | Tema | Marcou | Correta | Resultado |
|---|---|:---:|:---:|---|
| 1 | Exponencial, média 8 horas, dado 3 horas sem falhar, sobreviver mais 6 horas | D | D | ACERTO, e^(-6/8) |
| 2 | Exponencial, espera média de restabelecimento 10 min, já aguardou 8 min, concluir nos próximos 5 min | A | C | ERRO, 1-e^(-5/10) |
| 3 | Poisson 4 anomalias/h, pelo menos uma nos próximos 15 min | B | B | ACERTO, 1-e^(-1) |
| 4 | Poisson 3 chamadas/min, pelo menos duas chamadas em 40 s | C | E | ERRO, 1-3e^(-2) |

## Diagnóstico
- **Q1:** propriedade sem memória aplicada corretamente a intervalo de sobrevivência adicional. CE-20261112-001 ainda tem ponto complementar não dominado (Q2).
- **Q2:** confusão sobrevivência `e^(-0,5)` com ocorrência de restabelecimento dentro do intervalo `1-e^(-0,5)`. Novo erro CE-20261113-006 vinculado a CE-20261112-001; não classificar o erro anterior à teoria como esquecimento.
- **Q3:** resolveu P(N≥1)=1-P(N=0) em um novo contexto, evidência de recuperação imediata do erro CE-20261113-005, mas teste espaçado pendente.
- **Q4:** calculou implicitamente evento ≥1, embora o enunciado pedisse ≥2; excluir tanto N=0 quanto N=1. Novo erro CE-20261113-007.
- **Síntese:** 2/4, erros concentrados na leitura literal do tipo de evento (ocorrer vs continuar sem ocorrer; ≥1 vs ≥2). Tratar o reforço separadamente de blocos diagnósticos novos. Revisão sugerida D3 16/11, D7 20/11, D21 04/12.

**Registro original:** [Bloco 4 — explicação e 4 questões](RESULTADOS_DIA_2026-11-13_BLOCO4_EXPO_EDCA.md), com 2/4 (50%) e 2/2 em EDCA.
