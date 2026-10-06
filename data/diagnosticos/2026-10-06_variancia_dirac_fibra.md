# Diagnóstico — 06/10/2026 — QTI-15 N2 + Reparo

## Resultado principal
- QTI-15 N2: **12/15 = 80%**.
- Erros: Item 1 (variância), Item 2 (impulso de Dirac/escala), Item 12 (fibra — dispersão modal).

## Reparo 2 por erro
- QTI-6 Repair: **2/6 = 33,3%**.
- Tempo total: **403 s**.
- Tempo médio: **67 s**.

## Diagnóstico por tópico

### Variância — REPAIR_AND_RETEST
Resultado: **0/2**.

1. Em variável aleatória discreta, houve confusão entre `E[X²]` e `Var(X)`.
   - Regra: `Var(X)=E[X²]-(E[X])²`.
2. Em transformação linear, não foi consolidada a propriedade:
   - `Var(aX+b)=a² Var(X)`.
   - A constante `b` não altera a variância.

### Impulso de Dirac — REPAIR_AND_RETEST
Resultado: **0/2**.

1. A raiz do argumento foi identificada, mas o fator de escala foi omitido.
2. Em `δ(at-b)`, aplicar sempre:
   - `δ(at-b)=(1/|a|)δ(t-b/a)`.
3. Na questão com `δ(4-2t)`, a resposta foi dada em 3 s e coincidiu com a raiz `t0=2`, indicando interrupção prematura do procedimento.

### Fibra / dispersão modal — SPACED_RETEST
Resultado: **2/2**.

- Questão direta: correta em 25 s.
- Questão inversa: correta em 175 s.
- Conceito recuperado, mas a manipulação inversa ainda precisa ganhar fluidez.
- Regras:
  - `ΔT = dispersão(ns/km) × comprimento(km)`.
  - `Rb,max ≈ 1/(2ΔT)` para o modelo usado nas questões.

## Próxima ação
1. Microaula curta de **Variância** e **Impulso de Dirac**.
2. Em seguida, reteste curto com novas famílias semânticas.
3. Não repetir literalmente as mesmas questões.
4. Fibra sai do reparo imediato e vai para **spaced retest**.
