# Caderno de erros — CESGRANRIO / Transpetro Telecom

**Atualização:** 13/11/2026. Este é o registro **permanente e prioritário** para revisar erros. Sempre acrescentar erros dos novos blocos, sem apagar o histórico; depois do reforço imediato, manter o erro para reteste espaçado. **Uma questão corrigida imediatamente não significa domínio consolidado.**

**Escopo da implantação:** 22 registros da sessão de 12/11 (21 erros das baterias e um erro adicional de TLC fora dos placares). Registros anteriores a 12/11 continuam em `data/REVISOES.json` e nos relatórios históricos; não foram migrados integralmente para evitar reclassificações sem provas.

## Pendências prioritárias — dois QTI-10 do encerramento

| ID | QTI | Item | Conteúdo | Marcou / correta | Diagnóstico | Estado |
|---|---|---|---|---|---|---|
| CE-20261112-001 | QTI10-20261112-RODADA1 | 1.2 | Distribuição exponencial — ausência de memória | A / C | CONTEUDO_NOVO | PENDENTE_REPARO — TEORIA APRESENTADA 13/11 |
| CE-20261112-002 | QTI10-20261112-RODADA1 | 10.1 | EDCA IEEE 802.11e — categorias de acesso para voz | E / A | CONTEUDO_NOVO | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE — 2/2 13/11 |
| CE-20261112-003 | QTI10-20261112-ENCERRAMENTO | 7.2 | C/N e ruído térmico ao dobrar banda | B / A | CALCULO_DECIBEIS | PENDENTE_REPARO |
| CE-20261112-004 | QTI10-20261112-ENCERRAMENTO | 6.1 | Ganho parabólica, frequência dobrada | A / D | SINAL_GANHO_DECIBEIS | PENDENTE_REPARO |

**Fundamentos essenciais e próxima correção:**

- **CE-20261112-001:** P(T>s+t |T>s)=P(T>t); aqui P(T>7|T>3)=e^(−0,4) **Ação:** Explicar antes de cobrar; localizar questão histórica CESGRANRIO de distribuição exponencial e propor 2 novas de propriedade sem memória.
- **CE-20261112-002:** AC_VO voz > AC_VI vídeo > AC_BE melhor esforço > AC_BK fundo; DCF não é categoria EDCA **Ação:** Apresentar EDCA/EDCF e 4 categorias; 2 novas, então revisar com CESGRANRIO.
- **CE-20261112-003:** N=kTB: dobrar B aumenta N em 3 dB; C constante => C/N cai 3 dB **Ação:** 2 novas variando apenas B, C e T, pedir diagrama de grandezas e sinal de dB.
- **CE-20261112-004:** G∝(D/λ)^2∝f², portanto dobrar f dá +6,02 dB mantendo D e η **Ação:** 2 novas de ganho com razão de frequências/diâmetros e interpretação do sinal.

**Regra pedagógica:** os erros de distribuição exponencial/ausência de memória e categorias EDCA **não são falha em conteúdo já estudado**; o aluno informou expressamente que ainda não tinha recebido a teoria. Ensinar com base em edital e questões CESGRANRIO antes de testar.

## Outros erros de 12/11 — preservados para recuperação

| ID | Origem | Item | Assunto | Marcou / correta | Situação |
|---|---|---|---|---|---|
| CE-20261112-005 | DIA-20261112-ANT Q01 | 6.2 | Monopolo λ/4 sobre plano de terra, diretividade | E / A | PENDENTE_RETESTE |
| CE-20261112-006 | DIA-20261112-ANT Q04 | 6.3 | Nulos fator de conjunto, array de 3 | A / B | PENDENTE_RETESTE |
| CE-20261112-007 | DIA-20261112-ANT Q06 | 6.1 | Desalinhamento de polarização, PLF | D / B | PENDENTE_RETESTE |
| CE-20261112-008 | DIA-20261112-ANT-REF Q01 | 6.2 | Monopolo: hemisfério radiado versus resistência | D / C | PENDENTE_RETESTE |
| CE-20261112-009 | DIA-20261112-FOURIER Q01 | 2.3 | Fourier: coeficiente a0 e componente média | A / C | PENDENTE_RETESTE |
| CE-20261112-010 | DIA-20261112-FOURIER Q04 | 2.3 | Fourier: X(0) é área algébrica do sinal | A / E | PENDENTE_RETESTE |
| CE-20261112-011 | DIA-20261112-FOURIER Q05 | 2.3 | Fourier: inversão temporal e avanço | B / A | PENDENTE_RETESTE |
| CE-20261112-012 | DIA-20261112-LIT Q01 | 3.5 | H(z) por equação de diferenças | D / B | PENDENTE_RETESTE |
| CE-20261112-013 | DIA-20261112-PT Q08 | PORTUGUES | Pontuação: afinal intercalado | D / E | PENDENTE_RETESTE |
| CE-20261112-014 | DIA-20261112-ING Q07 | INGLES | Conector provided that | B / A | PENDENTE_RETESTE |
| CE-20261112-015 | DIA-20261112-MISTA Q11 | 12.3 | CWDM 16x2,5Gbps: capacidade por canal versus agregada | E / C | PENDENTE_RETESTE |
| CE-20261112-016 | QTI20-20261112-POSCRONOGRAMA Q01 | 1.2 | Binomial: média versus variância | D / C | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE |
| CE-20261112-017 | QTI20-20261112-POSCRONOGRAMA Q02 | 2.1 | Números complexos: potências de j | A / D | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE |
| CE-20261112-018 | QTI20-20261112-POSCRONOGRAMA Q03 | 2.2 | Janela de degraus: extremos de intervalo | C / E | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE |
| CE-20261112-019 | QTI20-20261112-POSCRONOGRAMA Q04 | 3.4 | Módulo e fase de resposta em frequência | C / A | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE |
| CE-20261112-020 | QTI20-20261112-POSCRONOGRAMA Q07 | 5.3 | Videoconferência: confiabilidade versus jitter/banda/retardo | E / A | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE |
| CE-20261112-021 | QTI20-20261112-POSCRONOGRAMA Q09 | 6.1 | HPBW x FNBW | C / B | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE |
| CE-20261112-022 | DIA-20261112-TLC-REF Q02 | 1.2 | TLC: probabilidade de cauda direita | A / E | RETESTE_ESPACADO |


## Erros de 13/11/2026 — Inglês, Bloco 2

| ID | Questão | Tema | Resposta / correta | Tipo | Próxima ação | Situação |
|---|---|---|---|---|---|---|
| CE-20261113-001 | ING-20261113-BLOCO2-Q02 | Inferência: seleção de rota de cabo submarino considera riscos além da distância | D / E | INTERPRETACAO_CONTRADICAO_TEXTUAL | 2 questões novas com inferências e distractors que contradizem o texto; D3 16/11 | PENDENTE_REPARO |
| CE-20261113-002 | ING-20261113-BLOCO2-Q08 | Resilience: manter/recuperar serviço apesar de falhas | E / C | VOCABULARIO_CONTEXTO | Reparo Q3 e Q4 acertados, reteste D3 16/11 | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE |
| CE-20261113-003 | ING-20261113-REFORCO-Q02 | Inferência: automação auxilia decisões, não substitui profissionais | D / A | INTERPRETACAO_CONTRADICAO_EXPLICITA | Reparo com leitura literal em novo texto, D3 16/11 | PENDENTE_REPARO |

**Registro:** [Bloco 2 Inglês 13/11](RESULTADOS_DIA_2026-11-13_ING_BLOCO2.md). **Placar: 6/8 = 75%.** Revisões sugeridas 16/11 (D3), 20/11 (D7), 04/12 (D21). Reforço no mesmo dia: **3/4**, acertos Q1/Q3/Q4 e erro Q2; inferência permanece pendente e vocabulário tem reparo imediato, sem consolidação espaçada.


## Erros de 13/11/2026 — Bayes, Bloco 3 (revisão D3)

| ID | Questão | Tema | Resposta / correta | Tipo | Próxima ação | Situação |
|---|---|---|---|---|---|---|
| CE-20261113-004 | REV-D3-20261113-BAYES-CONVOLUCAO-Q02 | Bayes: P(defeito dado alarme) ≠ P(alarme dado defeito) | E / C | INVERSAO_CONDICIONAL_BAYES | Reparo 2/2, reteste D3 16/11 | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE |

**Reparo Bayes em 13/11:** [2 questões novas acertadas (2/2)](RESULTADOS_DIA_2026-11-13_BAYES_REFORCO2.md). CE-20261113-004 mudou para reparo imediato concluído, **reteste espaçado ainda pendente**.

**Registro:** [Revisão D3 Bayes/convolução](RESULTADOS_DIA_2026-11-13_D3_BAYES_CONVOLUCAO.md) — 4/5; Bayes 2/3, convolução 2/2 em reteste espaçado. O erro foi recorrência do problema Bayes de 10/11; não contar como conteúdo novo não ensinado.


## Erros de 13/11/2026 — Bloco 4 e reforço

| ID | Sessão | Competência | Resposta / correta | Estado |
|---|---|---|---|---|
| CE-20261112-001 | Bloco 4 Q1 e reforço Q1/Q2 | Exponencial: tempo adicional vs ocorrer dentro dele | C/E; D/D; A/C | PENDENTE_REPARO, teoria ensinada |
| CE-20261112-002 | Bloco 4 Q3/Q4 | EDCA AC_VI/AC_BK, contenção diferenciada | A/A; D/D | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE |
| CE-20261113-005 | Bloco 4 Q2; reforço Q3 | Poisson pelo menos um = 1−P(0) | A/C; B/B | REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE |
| CE-20261113-006 | Reforço Q2 | Exponencial: ocorrência dentro do período exige complemento | A/C | PENDENTE_REPARO |
| CE-20261113-007 | Reforço Q4 | Poisson ≥2 exclui casos 0 e 1 | C/E | PENDENTE_REPARO |

**Resultados:** [Bloco 4 — 2/4](RESULTADOS_DIA_2026-11-13_BLOCO4_EXPO_EDCA.md); [reforço — 2/4](RESULTADOS_DIA_2026-11-13_BLOCO4_REFORCO_EXPO_POISSON.md). As duas questões erradas no QTI anterior não haviam sido ensinadas, portanto não contabilizar esquecimento. Regra D3=16/11, D7=20/11, D21=04/12.

## Como usar a cada QTI / bloco

1. Consultar `data/CADERNO_ERROS.json` e `data/REVISOES.json` antes de propor questões. Priorizar conteúdo **ainda não ensinado**, depois erros pendentes e retestes que venceram.
2. Ao corrigir, registrar **questão, item do edital, resposta, gabarito, diagnóstico (conceito/interpretação/cálculo/novo conteúdo)** e ação.
3. Para cada erro, oferecer **reparo curto**, preferencialmente com duas questões CESGRANRIO originais elegíveis ou autorais genuinamente novas. Não repetir a mesma estrutura de exercício correta no mesmo dia.
4. Depois do acerto no reforço, alterar status para `REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE`; só colocar `CONSOLIDADO_APOS_RETESTE` após acerto em novo teste espaçado, não apenas por revelar o gabarito.
5. Sugestões de revisão de 12/11: **D3 15/11, D7 19/11, D21 03/12**; são datas sugeridas dentro do projeto, não lembretes automáticos.
6. Manter registros de **treino guiado, QTI e reforço separados** nas métricas; consultar `data/QUESTOES.json` para anti-repetição.

**Estado atual por categoria:** PENDENTE_REPARO: 7; REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE: 10; PENDENTE_RETESTE: 11; RETESTE_ESPACADO: 1.
