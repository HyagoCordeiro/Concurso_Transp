# Consolidado — 06/10/2026 — QTI-20 + recuperações + TLC

## QTI-20 N2

- Resultado: **12/20 = 60%**.
- Tempo médio informado no resultado: **33 s por questão**.
- Ação pedagógica: **REPAIR_AND_RETEST**.
- Itens com erro no resumo disponível: **1, 2, 5, 7, 9, 11 e 12**.
- Distribuição conhecida pelo print:
  - Item 1: 0/2
  - Item 2: 1/2
  - Item 5: 1/2
  - Item 7: 0/1
  - Item 9: 0/1
  - Item 11: 1/2
  - Item 12: 1/2

> Observação de integridade: o print não continha os `questionResults` completos da QTI-20. Portanto, não foram inventados IDs, respostas ou tempos individuais das 8 questões originais erradas.

## Recuperação imediata — 1 questão por erro

Resultado: **7/8 = 87,5%**.

### Item 1 — TLC
Erro.

Dados: `E[X]=40`, `Var(X)=16`, `n=64`.

Resposta marcada: **B**. Correta: **C**.

Regra:

- `E[X̄]=μ`
- `Var(X̄)=Var(X)/n=16/64=0,25`

O erro foi confundir variância da média com medida de desvio-padrão.

### Item 1 — Bayes
Acerto.

Fábrica A: 70% com 2% de defeitos; B: 30% com 6% de defeitos. Dado um componente defeituoso:

`P(B|D)=0,018/(0,014+0,018)=0,5625=56,25%`.

### Item 2 — Fourier
Acerto.

Para `x(t)` real e ímpar e `y(t)=x(2t)`:

`Y(f)=1/2 X(f/2)` e permanece puramente imaginária e ímpar.

### Item 5 — QSIG
Acerto.

QSIG: sinalização entre PABXs em redes privadas ISDN, com suporte a serviços suplementares.

### Item 7 — Propagação
Acerto.

Sem visada direta + contorno de obstáculo: **difração**.

### Item 9 — CDMA
Acerto.

Efeito near-far: mitigado com **controle de potência** dos terminais.

### Item 11 — Multicast IPv4
Acerto.

- IGMP: host ↔ roteador local, adesão a grupo multicast.
- PIM: roteador ↔ roteador, construção da árvore multicast.

### Item 12 — SDH / RSOH
Acerto.

RSOH contém, entre outras funções, informações de **alinhamento de quadro**; bytes A1/A2 são referência importante.

## Micro-reparo TLC

### Tentativa 1

Dados: `E[X]=25`, `Var(X)=36`, `n=9`.

Resposta marcada: D. Correta: C.

`Var(X̄)=36/9=4`; o valor `2` é `σ_X̄`, não a variância.

### Tentativa 2

Dados: `E[X]=100`, `Var(X)=81`, `n=9`.

Resposta: **B — correta**.

`E[X̄]=100`, `Var(X̄)=81/9=9`.

Status após micro-reparo: **recuperação provisória**, ainda sem considerar domínio consolidado.

## Recuperação rápida TLC — bateria de 4

Resultado: **3/4 = 75%**.

1. `E[X]=50`, `Var(X)=25`, `n=25` → `Var(X̄)=1` — **acerto**.
2. `E[X]=80`, `σ=12`, `n=36`; pedir `σ_X̄` → `12/6=2` — **acerto**.
3. `E[X]=20`, `Var(X)=64`, `n=16` → `Var(X̄)=4` — **acerto**.
4. `E[X]=100`, `σ=15`, `n=25`; pedir variância → marcou `3`, mas `3` é `σ_X̄`; correta: `Var(X̄)=9` — **erro**.

### Checagem final

Dados: `E[X]=60`, `σ=20`, `n=100`; pedir variância da média.

Resposta: **C — correta**.

`σ²=400`; `Var(X̄)=400/100=4`.

Resultado agregado da recuperação rápida: **4/5 = 80%**.

## Diagnóstico atual

O conceito melhorou de forma clara. Quando o enunciado fornece `Var(X)` diretamente, a aplicação de `Var(X̄)=Var(X)/n` está funcional. A vulnerabilidade residual aparece quando o enunciado fornece **σ** e pergunta **variância**: é necessário converter `σ → σ²` antes de dividir por `n`, ou calcular `σ_X̄=σ/√n` e depois elevar ao quadrado.

### Fórmulas a reter

- `E[X̄] = μ`
- `Var(X̄) = σ²/n = Var(X)/n`
- `σ_X̄ = σ/√n`

## Próxima ação

**SPACED_RETEST**. Não repetir imediatamente as sete famílias já recuperadas. No TLC, retestar depois com enunciados que alternem deliberadamente entre `Var(X)` e `σ`, exigindo identificação do que foi fornecido e do que foi pedido.
