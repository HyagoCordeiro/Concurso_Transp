# Resultados do dia — 08/10/2026

## QTI-30 Reta Final

- Resultado: **22/30 = 73,3%**.
- Erros confirmados: WDM, PCM/SNR de quantização, broadside, A-law, dispersão modal, Manchester e super-heteródino.
- Degrau/impulso: erro classificado como **INTERFACE_RENDERING / INVALID_INTERFACE**, pois `δ(t-3)` ficou ilegível. Em reteste com apresentação correta, a resposta foi correta; não contar como lacuna conceitual.
- SDH TM/ADM/SDXC: acerto com baixa confiança, por isso entrou no reparo.
- Após micro-reparo, o mini-reteste misto terminou em **6/6**. Esses tópicos seguem para **SPACED_RETEST**.

## QTI-20 — TecConcursos / CESGRANRIO original

- Fonte: questões originais selecionadas diretamente do **TecConcursos** (base classificada de 456 questões), com referência de banco, concurso/ano e ID quando disponível.
- Resultado: **10/20 = 50%**.
- Tempo total: **1442 s**; média: **72 s/questão**.
- Questões erradas: **Q401, Q403, Q421, Q422, Q428, Q431, Q440, Q448, Q450 e Q451**.
- Questões corretas: **Q400, Q406, Q410, Q411, Q416, Q417, Q423, Q434, Q442 e Q453**.

### Reparo dos 10 erros

- Q421 ATM/SDH: reparado.
- Q428 modulação analógica: errou o primeiro reforço de DSB e acertou o segundo.
- Q431 radiopropagação: reparado.
- Q448 QPSK/taxa de símbolos: reparado.
- Q401 TDMA em satélite: reparado.
- Q422 Metro Ethernet rooted-multipoint: reparado.
- Q440 Wi-Fi/multipercurso: reparado.
- Q403 GPRS: reparado.
- Q450 meios físicos: acertou o primeiro reforço, mas permaneceu frágil no reteste posterior.
- Q451 meios não guiados: reparado.

## Reteste — 10 questões reformuladas

- Resultado: **8/10 = 80%**.
- Erros restantes:
  - **Modulação analógica — SSB/VSB/DSB**: confundiu VSB com DSB.
  - **Meios físicos — antenas direcionais / coaxial e crosstalk**: marcou generalização incorreta.

## QTI-20 de fechamento

- Resultado: **19/20 = 95%**.
- Tempo total: **946 s**; média: **47 s/questão**.
- Único erro: **Processo de Poisson**.
- Interpretação: desempenho forte em bloco misto; não reabrir Probabilidade inteira por causa de um único erro.

## Micro-reparo de Poisson

O usuário definiu uma regra de apresentação: **em questões de Poisson, sempre fornecer o valor numérico de `e^(-λ)` quando ele for necessário para a conta.**

### Rodada 1

- **1/2**.
- `pelo menos 3`, λ = 4: respondeu A; correto C. Erro de complemento/interpretação.
- `exatamente 2`, λ = 2: respondeu D; correto D.

### Rodada 2

- **1/2**.
- `pelo menos 2`, λ = 3: respondeu D; correto D.
- `no máximo 1`, λ = 2: respondeu E; correto C. Erro de interpretação de `X ≤ 1`.

### Diagnóstico de Poisson

O cálculo básico está funcional. O ponto de atenção é **traduzir corretamente o texto para o evento probabilístico**, principalmente:

- `pelo menos k` → `X ≥ k`, frequentemente resolvido por complemento;
- `no máximo k` → `X ≤ k`;
- `exatamente k` → `X = k`.

O usuário informou ao final que compreendeu o padrão. Ainda assim, pela regra operacional, Poisson fica elegível para um reteste curto no próximo dia.

## Estado final do dia

Mover para revisão espaçada: WDM, dispersão modal, PCM/SNR, A-law, broadside/end-fire, Manchester, super-heteródino, SDH TM/ADM/SDXC/OADM, TDMA em satélite, GPRS, ATM/SDH, Metro Ethernet rooted-multipoint, radiopropagação por faixa, Wi-Fi/multipercurso, QPSK/taxa de símbolos e meios não guiados.

Elegíveis para confirmação no **próximo dia**:

1. **Processo de Poisson — interpretação de “pelo menos” e “no máximo”**.
2. **Modulação analógica — SSB/VSB/DSB**.
3. **Meios físicos — características e antenas em enlaces ponto-a-ponto**.

## Política operacional vigente

- Usar **TecConcursos** como nome da base classificada de 456 questões.
- Priorizar CESGRANRIO Telecom/áreas afins e TecConcursos nos QTIs.
- Questão errada fica elegível para reteste **no dia seguinte**, sem obrigatoriedade de D3.
- Depois de acerto confirmado no reteste seguinte, retornar ao fluxo normal de espaçamento D3/D5/D7.
- Aplicar anti-repetição semântica.
- Em Poisson, fornecer `e^(-λ)` numericamente quando necessário.
- Manter o preflight de renderização matemática definido em `data/QTI_RENDERING_RULES.json`.

## Encerramento

Dia encerrado com forte recuperação ao longo das baterias: **50% no QTI TecConcursos → 80% no reteste reformulado → 95% no QTI final misto**. O fechamento indica boa transferência após os reparos, com três pontos específicos para confirmação no próximo dia.
