# Resultados do dia — 08/10/2026

## QTI-30 Reta Final

- Resultado: **22/30 = 73,3%**.
- Erros confirmados: WDM, PCM/SNR de quantização, broadside, A-law, dispersão modal, Manchester e super-heteródino.
- Degrau/impulso: erro classificado como **INTERFACE_RENDERING / INVALID_INTERFACE**, pois `δ(t-3)` ficou ilegível. Em reteste com apresentação correta, a resposta foi correta; não contar como lacuna conceitual.
- SDH TM/ADM/SDXC: acerto com baixa confiança, por isso entrou no reparo.
- Após micro-reparo, o mini-reteste misto terminou em **6/6**. Esses tópicos seguem para **SPACED_RETEST**.

## QTI-20 — Banco 456 / CESGRANRIO original

- Fonte: questões originais selecionadas diretamente do caderno de 456 questões, com referência de banco, concurso/ano e ID do TecConcursos.
- Resultado: **10/20 = 50%**.
- Tempo total: **1442 s**; média: **72 s/questão**.
- Questões erradas do banco: **Q401, Q403, Q421, Q422, Q428, Q431, Q440, Q448, Q450 e Q451**.
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

## Estado ao fim da sessão

Mover para revisão espaçada: WDM, dispersão modal, PCM/SNR, A-law, broadside/end-fire, Manchester, super-heteródino, SDH TM/ADM/SDXC/OADM, TDMA em satélite, GPRS, ATM/SDH, Metro Ethernet rooted-multipoint, radiopropagação por faixa, Wi-Fi/multipercurso, QPSK/taxa de símbolos e meios não guiados.

Manter em **reparo imediato**:

1. Modulação analógica — SSB/VSB/DSB.
2. Meios físicos — características e antenas em enlaces ponto-a-ponto.

Próximo bloco recomendado: **4 questões, 2 de cada tema. Se fizer 4/4, mover ambos para SPACED_RETEST.**

## Política para próximos QTIs

- Priorizar questões do banco das **456**, com referência visível.
- Usar questões autorais apenas como complemento de transferência/reparo, não como fonte dominante quando houver questão elegível no banco.
- Aplicar anti-repetição semântica, não apenas por `canonicalId`.
- Manter o preflight de renderização matemática definido em `data/QTI_RENDERING_RULES.json`.
