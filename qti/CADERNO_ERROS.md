# Caderno de erros — CESGRANRIO / Transpetro Telecom

**Atualização:** 14/11/2026. Este é o registro **permanente e prioritário** para revisar erros. Sempre acrescentar erros dos novos blocos, sem apagar o histórico; depois do reforço imediato, manter o erro para reteste espaçado. **Uma questão corrigida imediatamente não significa domínio consolidado.**

## 15/11/2026 — Simulado integral autoral de 70 questões

**[Relatório](SIMULADO_INTEGRAL_70_2026-11-15.md) · [JSON](SIMULADO_INTEGRAL_70_2026-11-15.json).** Cartão **61/70 (87,1%)**; rascunho **63/70 (90%)**, 60 min; 4/4 fixações imediatas.

| Q | Erro | Situação |
|---:|---|---|
| 4 | Rascunho C correto; cartão E. | Reteste pendente |
| 5 | Interpretou contudo como conclusão, não contraste. | Reteste pendente |
| 27 | Marcou C por eliminação; não desenvolveu a transformada; fixação 27A E correta. | Reparo imediato correto; reteste pendente |
| 48 | Rascunho E correto; cartão D. | Reteste pendente |
| 50 | Supôs perda zero por obstáculo não bloquear além da linha de visada. | Reteste pendente |
| 53 | Tentou separar s/(s+1)+2/(s+2); fixação 53A C correta. | Reparo imediato correto; reteste pendente |
| 58 | Tentou avaliar degrau isolado; fixação 58A C correta. | Reparo imediato correto; reteste pendente |
| 61 | Montou Y=4/[s(s+4)], mas não via destino do 4; fixação 61A C correta. | Reparo imediato correto; reteste pendente |
| 63 | Figura de polos pouco legível; interpretou como curva senoidal de amplitude constante. | Reteste pendente |

**04 e 48 foram erros de transcrição**, não de conhecimento. **Q63 tem ressalva de figura pouco legível.** Fazer reteste D3 **18/11** e revisão sábado **21/11**. Nunca marcar reteste como consolidado apenas pelo acerto no mesmo dia.



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


## Erros de 13/11/2026 — Bloco 5: C/N, parabólica, Fourier

| ID | Questão | Subitem | Assunto | Marcação / correta | Tipo | Próximo passo | Status |
|---|---|---|---|---|---|---|---|
| CE-20261113-008 | DIA-20261113-BLOCO5-CN-ANTENAS-FOURIER-Q01 | 7.2 | C/N, banda quadruplicada: −6dB | C / D | DECIBEIS_CN_BANDA_QUADRUPLICADA | 2 novas, D3 16/11 | PENDENTE_REPARO |
| CE-20261113-009 | DIA-20261113-BLOCO5-CN-ANTENAS-FOURIER-Q04 | 6.1 | Parabólica D×3: ganho +9,54dB | D / C | DECIBEIS_GANHO_PARABOLICA_DIAMETRO_TRIPLO | 2 novas, D3 16/11 | PENDENTE_REPARO |
| CE-20261113-010 | DIA-20261113-BLOCO5-CN-ANTENAS-FOURIER-Q05 | 2.3 | Fourier: média=a0/2, não a0 | C / B | SERIE_FOURIER_COEFICIENTE_A0_SOBRE_2 | 2 novas, D3 16/11 | PENDENTE_REPARO |

**Origem:** [Bloco 5, 4/7 (57,1%)](RESULTADOS_DIA_2026-11-13_BLOCO5_CN_ANTENAS_FOURIER.md). Novos erros vinculados respectivamente a CE-20261112-003, CE-20261112-004 e CE-20261112-009; não declarar recuperação dos erros anteriores. Revisões sugeridas D3 16/11, D7 20/11, D21 04/12.

## Reforços finais de 13/11 — C/N, parabólica e Fourier

- [Reforço misto 6 questões](RESULTADOS_DIA_2026-11-13_BLOCO5_REFORCO_FINAL.md): **2/6**, erros C/N banda÷4, ganho D×2 η÷2 e dois coeficientes Fourier a0.
- [Nova bateria C/N](RESULTADOS_DIA_2026-11-13_CN_REFORCO_4.md): **4/4** após explicação de C, N e C/N, status CE-20261113-008 e 011 = REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE (reteste D3).
- [Nova bateria parabólica](RESULTADOS_DIA_2026-11-13_PARABOLICA_REFORCO_2.md): **1/2**; errou diâmetro +50%=×1,5 (CE-20261113-015) e acertou compensação entre diâmetro dobrado e η÷4.
- CE-20261113-012 erro de combinação η e D; CE-20261113-013/014 persistência de confusão entre média e a0; CE-20261113-015 fator de diâmetro. Não declarar consolidação antes de reteste espaçado.
- Próximos marcos: 16/11 D3; 20/11 D7; 04/12 D21. Treinos autorais de reparo separados dos blocos principais.

## 13/11/2026 — Fourier a0 reparo final 2/2

- [Reforço final Fourier a0](RESULTADOS_DIA_2026-11-13_FOURIER_A0_REFORCO2.md): respostas C e E, ambas corretas, 100%, duas autorais novas (sinal por partes e série escrita).
- CE-20261113-010, CE-20261113-013 e CE-20261113-014: **REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE**; não consolidar antes de D3.
- CE-20261112-009 mantém **PENDENTE_RETESTE**, com evidência de reparo imediato adicionada.
- [Fechamento do dia](FECHAMENTO_DIA_2026-11-13.md): blocos principais 25/33 (75,8%); reforços 16/24 (66,7%); total bruto combinado 41/57 (71,9%), não simulado original.

## Como usar a cada QTI / bloco

1. Consultar `data/CADERNO_ERROS.json` e `data/REVISOES.json` antes de propor questões. Priorizar conteúdo **ainda não ensinado**, depois erros pendentes e retestes que venceram.
2. Ao corrigir, registrar **questão, item do edital, resposta, gabarito, diagnóstico (conceito/interpretação/cálculo/novo conteúdo)** e ação.
3. Para cada erro, oferecer **reparo curto**, preferencialmente com duas questões CESGRANRIO originais elegíveis ou autorais genuinamente novas. Não repetir a mesma estrutura de exercício correta no mesmo dia.
4. Depois do acerto no reforço, alterar status para `REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE`; só colocar `CONSOLIDADO_APOS_RETESTE` após acerto em novo teste espaçado, não apenas por revelar o gabarito.
5. Sugestões de revisão de 12/11: **D3 15/11, D7 19/11, D21 03/12**; são datas sugeridas dentro do projeto, não lembretes automáticos.
6. Manter registros de **treino guiado, QTI e reforço separados** nas métricas; consultar `data/QUESTOES.json` para anti-repetição.

**Estado atual por categoria:** PENDENTE_REPARO: 9; REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE: 16; PENDENTE_RETESTE: 11; RETESTE_ESPACADO: 1.

## 13/11/2026 — Sete erros do simulado noturno de 50 questões
**Fonte:** [simulado noturno](SIMULADO_NOTURNO_50_2026-11-13.md). Baterias corrigidas de dez em dez; questões autorais/adaptadas. Registros acrescentados sem sobrescrever o histórico.

| ID | Q | Item | Resposta / correta | Regra de reparo | Situação |
|---|---:|---|:---:|---|---|
| CE-20261113-016 | 5 | 5.1 | B/E | Erlang B(2,1)=0,20 | PENDENTE_REPARO |
| CE-20261113-017 | 6 | 7.1 | B/C | Fresnel: 60% de 7,07 m = 4,24 m | PENDENTE_REPARO |
| CE-20261113-018 | 24 | 4.1 | C/E | Carson: 2(75+15)=180 kHz | PENDENTE_REPARO |
| CE-20261113-019 | 28 | 12.3 | E/A | STM-N: 9 linhas x 270N colunas | PENDENTE_REPARO |
| CE-20261113-020 | 35 | 5.2 | D/A | E1: 30 canais úteis; 3x30=90 | PENDENTE_REPARO |
| CE-20261113-021 | 42 | 3.1 | A/B | Laplace: degrau amplitude 2 -> y(t)=4(1-exp(-3t)) | PENDENTE_REPARO |
| CE-20261113-022 | 45 | 6.1 | B/A | EIRP: 20 dBW equivale a 100 W, não 20 W | PENDENTE_REPARO |

Revisões programadas **D3 (16/11), D7 (20/11), D21 (04/12)**. Acertos em temas semelhantes na mesma sessão (Erlang, Fresnel, Carson e SDH) não contam como retenção espaçada.


## 14/11/2026 — Revisão semanal dos erros (primeiro sábado)

**Resultados:** 43/56 (76,8%) no total; **29/42 (69%)** nas quatro baterias principais e **14/14 (100%)** em quatro reforços mais a fixação extra de CWDM. Treino guiado autoral/adaptado, não simulado cego nem questão original confirmada. **Não encerrar definitivamente os erros históricos por acerto em reforço imediato.**

| Bateria | Erros originais | Reparo posterior |
|---|---|---|
| Principal 1: 6/10 | Exponencial, Poisson ≥2, Fourier a0, Laplace | 4/4 |
| Principal 2: 7/10 | Fourier inversão/deslocamento, fator de conjunto, CWDM/SDH | 3/3 + CWDM 1/1 |
| Principal 3: 7/10 | Geométrica 'até', variância binomial, fase progressiva | 3/3 |
| Final: 9/12 | Fresnel 60%, EIRP, Poisson ≥2 | 3/3 |

- As 13 falhas foram reparadas, mas devem continuar como **REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE** (novos registros CE-20261114-001..013); retenção ainda **não confirmada**.
- Lembrar dos assuntos não contemplados nesta revisão específica: Inglês (inferências), Português (pontuação), EDCA e outros retestes já programados.
- **Regra instituída pelo aluno:** **todo sábado de manhã** = caderno de erros da semana, com avaliação de padrões e novos exercícios. Próximo: **21/11/2026**; não houve criação de alerta automático.
- [Relatório completo](REVISAO_CADERNO_ERROS_2026-11-14.md) · [Dados por questão](REVISAO_CADERNO_ERROS_2026-11-14.json) · [Rotina](../docs/ROTINA_SABADO_CADERNO_ERROS.md).


## 14/11/2026 — Inglês, prova original CESGRANRIO/Transpetro 2012

- Texto histórico *Safety Meeting Presentation*, questões originais 11–20: **8/10 (80%)**.
- **CE-20261114-ING-01 (Q12):** marcou E, gabarito D. “Until I'm blue in the face” = repetir/falar até exaustão, não ficar desanimado/melancólico. **PENDENTE_REPARO**.
- **CE-20261114-ING-02 (Q20):** marcou D, gabarito B. A segurança do trabalho depende de todos, e funcionários devem reportar riscos; a alternativa D generaliza responsabilidade exclusiva da gestão. **PENDENTE_REPARO**.
- Preservar texto histórico e as 10 questões no anti-repetição. Reteste dirigido no próximo sábado, com novas questões e texto diferente, sob demanda.
- [Relatório](INGLES_HISTORICO_TRANSPETRO_2012_2026-11-14.md).


## 14/11/2026 — Português histórico original Transpetro 2012: resultado corrigido

**6/10 (60%)**, Q1–10, *Science fiction*. Segunda resposta de dez letras substitui primeira mensagem com onze letras; primeiro placar provisório 3/10 invalidado.

- **CE-20261114-PT-01 (Q1):** A/B; interpretação do contraste e impossibilidade existencial no poema — PENDENTE_REPARO.
- **CE-20261114-PT-04 (Q4):** C/D; 'que têm' no plural — PENDENTE_REPARO.
- **CE-20261114-PT-08 (Q8):** D/C; Há-a-à-a-a; crase inadequada em 'vejo a parte' — PENDENTE_REPARO.
- **CE-20261114-PT-09 (Q9):** A/C; 'trata-se' índice de indeterminação versus 'olharam-se' recíproco — PENDENTE_REPARO.

[Relatório completo](PORTUGUES_HISTORICO_TRANSPETRO_2012_2026-11-14.md). Reteste em questão nova CESGRANRIO em 21/11/2026, quando o aluno solicitar; não reutilizar texto da prova.


## 14/11/2026 — QTI-30, um erro em Fourier

- **QTI-30 autoral em três rodadas:** **29/30 (96,7%)**, 10/10 + 9/10 + 10/10.
- **CE-20261114-QTI30-012 — item 2.3:** Q12, marcou B; correta E. Confusão entre atraso no tempo `e^(−jω)X(ω)` e derivação `jωX(ω)`. Status **PENDENTE_REPARO**; reteste proposto D3 17/11 e sábado 21/11. Registrar acertos posteriores, não fechar por explicação.
- **EDCA do mesmo dia:** 5/5; reforça CE-20261112-002, mantendo status reteste pendente.
- [Relatório do QTI-30](QTI30_2026-11-14_Fechamento.md).


## 14/11/2026 — QTI-50 noturno: 12 erros

**Resultado 38/50 (76%) em 5 baterias de 10 (6/10, 9/10, 9/10, 7/10, 7/10).** Questões autorais calibradas no estilo CESGRANRIO; houve feedback entre baterias.

- **CE-20261114-QTI50-02 (Q2; item 2.1):** Números complexos: (√3+j)/(1−j), módulo e argumento. Marcou B, gabarito E. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-03 (Q3; item 3.5):** Transformada Z de sistema causal: ROC de polos 0,4 e 0,8. Marcou E, gabarito B. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-04 (Q4; item 4.2):** Selective Repeat ARQ: janela com 4 bits de sequência. Marcou D, gabarito C. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-09 (Q9; item 11.2):** OSPF: LSA tipo 3 interáreas versus tipo 5 externo. Marcou D, gabarito C. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-11 (Q11; item 1.2):** Distribuição normal: limiar dos 5% maiores, percentil 95. Marcou C, gabarito D. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-26 (Q26; item 7.2):** Orçamento rádio: 20dBm+2 antenas 15dBi−2 cabos 3dB−120dB, margem. Marcou E, gabarito C. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-32 (Q32; item 2.3):** Fourier: escala temporal e atraso em x(2t−4). Marcou E, gabarito B. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-36 (Q36; item 8.3):** Figura de mérito G/T com ganho 42 dBi e T=200K. Marcou D, gabarito C. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-38 (Q38; item 10.3):** SNMPv3: VACM controle de acesso à MIB versus USM segurança. Marcou B, gabarito A. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-42 (Q42; item 2.3):** Teorema de Parseval na convenção CTFT angular 1/(2π). Marcou A, gabarito D. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-46 (Q46; item 7.1):** Atenuação no espaço livre: dobrar frequência 5GHz para10GHz. Marcou A, gabarito C. Status **PENDENTE_REPARO**.
- **CE-20261114-QTI50-49 (Q49; item 12.2):** OTDR: distância 80µs ida e volta, v=2×10^8m/s. Marcou C, gabarito D. Status **PENDENTE_REPARO**.

**Revisão D3:** 17/11/2026; **revisão de sábado:** 21/11/2026, com questões novas, não as mesmas perguntas. Priorizar Matemática Aplicada a Sinais (0/3) e Radiopropagação (1/3), que concentraram 5 dos 12 erros. A correção dos itens não encerra automaticamente pendências anteriores.

[Relatório e gabarito](QTI50_2026-11-14_NOTURNO.md).


## 16/11/2026 — Reteste dos 9 itens de 15/11

**9/9 corretas** em enunciados novos: Q04=C, Q05=A, Q27=D, Q48=B, Q50=E, Q53=A, Q58=C, Q61=D, Q63=B. Resultado [registrado aqui](REVISAO_9_ERROS_SIMULADO_2026-11-16.md). Os 9 erros originais permanecem historicamente documentados, inclusive os 2 de transcrição (Q04/Q48). **Não dar baixa em D3/21-11**: convolução e polos foram instáveis em outros exercícios de hoje.


### 16/11/2026 — Recuperação dirigida de frações parciais (erro Q61)

**1/1 correta** em fixação autoral: \(Y(s)=24/[s(s+4)]\), alternativa **D**, \(A=6\), \(B=-6\). Dúvida original: por que \(18/[s(s+3)]=6/s-6/(s+3)\); esclarecido pelo método de s=0 e s=−3 e por recombinação em denominador comum. **Evidência de reparo imediato**, sem baixa no D3 de **18/11**. [Relatório detalhado](RECUPERACAO_LAPLACE_FRACOES_PARCIAIS_2026-11-16.md).


### 16/11/2026 — Probabilidade D3 (4/7)

- Q2 Poisson ≥1: B/D; confundiu P(X=1) com P(X≥1).
- Q3 Poisson ≥2: B/A; marcou complemento P(X≤1).
- Q4 exponencial sem memória: B/C; selecionou probabilidade de falhar, e foi pedida sobrevida adicional.
- **3 pendências abertas**, reteste 19/11 e sábado 21/11; usuário avançou para Antenas/Radiopropagação sem realizar as seis fixações sugeridas. [Registro](PROBABILIDADE_D3_2026-11-16.md).


### 16/11/2026 — Fourier D3 (5/5)

- Questões Q01–Q05, **B D E A C**, todas corretas: a0, deslocamento, escala+atraso, Parseval e X(0).
- Reteste D3 das dificuldades em a0 de 13/11 concluído; **não declarar retenção definitiva** antes da revisão semanal em 21/11.
- Q02 testou atraso, mas **não derivada temporal**. D3 do erro de 14/11 em derivada/atraso segue **17/11**. Também manter D3 de escala+atraso e Parseval de 14/11 em 17/11, apesar do acerto antecipado de hoje.
- Nenhum novo erro. [Relatório](FOURIER_D3_2026-11-16.md).


### 16/11/2026 — Bloco 4: Português 5/5, Inglês 3/5

- **Q06 Inglês C/B:** inferência contradiz texto: software não avisava imediatamente sobre leitura desatualizada. Reincidência dos erros CE-20261113-001/003. Novo CE-20261116-BLOCO4-ING-Q06 — **PENDENTE_REPARO**.
- **Q07 Inglês C/E:** frase figurada *until I lose my voice* = insistir até a exaustão, não perda permanente da voz. Recorrência da dificuldade idiomática da Transpetro 2012 CE-20261114-ING-01. Novo CE-20261116-BLOCO4-ING-Q07 — **PENDENTE_REPARO**.
- **Português 5/5**: acertos novos em interpretação, concordância, crase, 'se', conectores; retestes históricos do sábado 21/11 permanecem.
- Inglês Q09 (resilience) e Q10 (responsabilidade coletiva) corretas; retestes 20/11 e 21/11 mantidos conforme o assunto.
- **Revisões Q06 e Q07:** 2 questões novas por erro, reteste D3 **19/11** e revisão semanal **21/11**. Não dar baixa por explicação.
- [Relatório](BLOCO4_PT_ING_2026-11-16.md).


### 16/11/2026 — Bloco 5 técnico: 8/8 e fechamento do dia

- Nenhum novo erro em SDH STM-N, E1/TS16, Erlang B, Carson ou EDCA/TXOP.
- **Retestes D3 corretos** vinculados a CE-20261112-002 (EDCA: Q7/8), CE-20261113-016 (Erlang B: Q4/5), CE-20261113-018 (Carson: Q6), CE-20261113-019 (SDH STM-N: Q1/2), CE-20261113-020 (E1 TS16: Q3).
- Registros históricos preservados; **D7 de EDCA em 19/11**, D7 demais em 20/11, **D21 em 03–04/12**, além da rotina semanal 21/11. Nenhuma pendência técnica antiga deve ser apagada com base em um único reteste.
- Fechamento de cinco blocos do dia: **32/37 (86,5%)**; cinco erros ainda ativos, sendo **três de Probabilidade e dois de Inglês**. [Bateria](BLOCO5_TECNICO_D3_2026-11-16.md) · [Fechamento](FECHAMENTO_DIA_2026-11-16.md).
