# Caderno de erros — CESGRANRIO / Transpetro Telecom

**Atualização:** 21/11/2026. Este é o registro **permanente e prioritário** para revisar erros. Sempre acrescentar erros dos novos blocos, sem apagar o histórico; depois do reforço imediato, manter o erro para reteste espaçado. **Uma questão corrigida imediatamente não significa domínio consolidado.**

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


## 16/11/2026 — QTI-30 misto dos 13 itens (24/30 = 80%)

**Bateria:** três blocos (6/10, 9/10, 9/10), total 24 acertos e 6 erros. **Questões autorais no estilo CESGRANRIO/Transpetro**, com QConcursos como referência; não são questões originais da banca. O QTI é separado das cinco baterias diurnas já fechadas em 16/11; tempo líquido não aferido. Discussão iniciada após conclusão.

| Questão | Subitem | Marcou / correta | Tema | Diagnóstico preliminar |
|---:|:---:|:---:|---|---|
| 01 | 1.1 | E / C | Exatamente um evento versus união de eventos | INTERPRETACAO |
| 02 | 2.2 | D / A | Impulso de Dirac — fator de escala e amostragem | CALCULO |
| 03 | 3.4 | B / E | Classificação de H(s)=s/(s+200) | CONCEITO |
| 05 | 5.3 | A / D | H.323 RAS versus H.245 | CONFUSAO_CONCEITUAL |
| 17 | 4.2 | B / C | Paridade bidimensional: detecção, localização e correção | CONCEITO |
| 27 | 1.3 | A / D | Autocorrelação de ruído branco de média zero | CONCEITO |

- **Q01 (1.1):** Exatamente um de A/B: P(A)+P(B)-2P(A∩B)=0,5; P(A∪B)=0,8 é pelo menos um (alternativa E). **Próximo passo:** Nova questão de eventos exclusivos/simultâneos, com valores e contexto diferentes.
- **Q02 (2.2):** δ(2t-4)=(1/2)δ(t-2); ∫t²δ(2t-4)dt=(1/2)·4=2. **Próximo passo:** Nova questão com δ(at-b), a≠1, sem dica sobre a escala.
- **Q03 (3.4):** H(j0)=0; |H(jω)|→1 para ω→∞: filtro passa-altas; ωc=200 rad/s, não frequência central de passa-faixas. **Próximo passo:** Questão inédita sobre zeros/polos e comportamento assintótico de filtro.
- **Q05 (5.3):** RAS com gatekeeper: Registration, Admission, Status; H.245: negociação de capacidades e controle dos canais lógicos. **Próximo passo:** Questão de distinção entre RAS, H.225, H.245, RTP e RTCP.
- **Q17 (4.2):** Com exatamente um erro, a paridade da linha e da coluna identifica o bit na interseção, permitindo correção; paridade simples não identifica posição. **Próximo passo:** Nova questão comparando paridade simples, bidimensional e limites sob múltiplos erros.
- **Q27 (1.3):** Ruído branco discreto de média 0 e variância σ²: Rxx[k]=σ²δ[k]; em k=0 vale 9 e nos demais atrasos vale zero. **Próximo passo:** Questão nova comparando ruído branco e componente aleatória constante no tempo.

**Situação dos seis:** PENDENTE_REPARO; explicar e testar em novas famílias de enunciado. **D1 17/11**, **D3 19/11**, **sábado 21/11** e ciclos posteriores conforme disponibilidade antes da prova. Dúvidas declaradas pelo aluno devem refinar a classificação de erro; a alternativa marcada, isoladamente, não revela toda a linha de raciocínio. Não interpretar explicação como consolidação. IDs e rastreabilidade em `data/CADERNO_ERROS.json`.


## 16/11/2026 — QTI-6 recuperação imediata (2/6 = 33,3%)

[Resultado detalhado](QTI6_RECUPERACAO_QTI30_2026-11-16.md). Questões **autorais com valores diferentes** e correção após revisão do QTI-30. Não é reteste diferido independente.

- **Acertos imediatos:** Dirac (Q2, ref. erro QTI30-Q02), H.323/H.245 (Q4, ref. QTI30-Q05). **Revisar em D1/D3**; não dar baixa por acerto no mesmo dia.
- **Quatro erros ativos:** Q1 (união 75% confundida com exatamente um 55%); Q3 (H(s)=150/(s+150) passa-baixas, marcou passa-altas); Q5 (duas linhas e colunas com erro, paridade detecta mas não localiza univocamente); Q6 (PSD de ruído branco é constante 5, não impulso na origem). Reincidências vinculadas aos CE originais do QTI-30.
- **Agendamento sugerido:** 17/11 novo contexto, sábado 21/11 revisão semanal; manter D3 19/11 e D21 quando aplicável. Não repetir literalmente enunciados já respondidos.


## 16/11/2026 — QTI-10 após recuperação (9/10 = 90%)

[Relatório completo](QTI10_2026-11-16_APOS_RECUPERACAO.md). Questões **autorais**, uma única falha Q02. Respostas: B C A C E A D B E C; gabarito B D A C E A D B E C.

- **Q02 (3.4), C/D: identificação de H(s)=40s/(s²+40s+400).** Passa-faixas: ganho nulo em DC e também para ω→∞, ganho máximo em faixa intermediária (ω=20 rad/s). **Reincidência nº 3** em filtros (QTI30 Q03 e QTI6 Q03). **PENDENTE_REPARO**, reteste D1 17/11, D3 19/11 e sábado 21/11, com ensino de regra/representação nova antes da próxima questão.
- **Recuperação parcial no mesmo dia:** probabilidade 'exatamente um' (Q01) correta; paridade em dois bits na mesma linha (Q03) correta; ruído branco de média não nula (Q04) correto. Esses acertos **não comprovam retenção espaçada**.
- **Outros seis acertos:** Carson, Fresnel, MP-BGP RT, SNMPv3 authPriv, STM-4 e PCM. Nenhum outro erro neste bloco.


## 17/11/2026 — Sessão técnica: QTI-30 (27/30), QTI-13 difícil (7/13) e recuperações

**[Relatório detalhado](SESSAO_TECNICA_2026-11-17.md).** Questões **autorais estilo CESGRANRIO**; os resultados guiados/imediatos não autorizam baixa de erro. Não apagar ocorrências antigas.

### QTI-30 — 3 erros / 30

| Q | Item | Marcou / correto | Falha identificada | Status |
|---|---|---|---|---|
| 02 | 2.3 | A / E | Fourier: confundiu sinal da fase no atraso x(t−3), cuja transformada usa e^(−j6πf) | REPARO_IMEDIATO_CORRETO; RETESTE_PENDENTE |
| 03 | 3.1 | B / A | Polos complexos −2±j2 não significam instabilidade; são amortecidos | REPARO_IMEDIATO_CORRETO; RETESTE_PENDENTE |
| 21 | 1.3 | E / B | Autocorrelação da senoide de fase aleatória é cossenoidal, não impulso de Dirac | REPARO_PARCIAL; RETESTE_PENDENTE |

### QTI-6 de reparo de sinais — 4 erros / 6

| Q | Item | Marcou / correto | Falha identificada |
|---|---|---|---|
| 01 | 2.3 | A / C | Confundiu adiantamento temporal x(t+2) e sinal da fase de Fourier |
| 03 | 3.1 | C / D | Polos 1±j2: parte real positiva => instabilidade e oscilação crescente |
| 04 | 3.1 | E / B | Polos ±j3: sobre eixo imaginário, não à direita; sistema não BIBO estável |
| 06 | 1.3 | B / E | PSD da senoide aleatória tem **duas** linhas em ±f₀, não uma |

**Reforço contextualizado, após estudo das questões históricas:** LIT com EDO/valor final **1/1** e Fourier por gráficos (pulso negativo/positivo, dois positivos, dois negativos, primeiro positivo/segundo negativo) **4/4**. Acertos guiados; D3/D7 pendentes. Ruído branco/ACF em afirmativas: **1/2** — erro na questão 01 (E/C): afirmou equivalência incorreta entre PSD plana do ruído branco e PSD discreta de senoide com fase aleatória. Questão 02 correta (D/D).

### QTI-13 difícil — 6 erros / 13

| Q | Item | Marcou / correto | Falha e ponto de atenção | Estado após QTI-6 (6/6) |
|---|---|---|---|---|
| 01 | 1.2 | D / E | Hipergeométrica: exatamente 2 defeitos em 4, sem reposição; combinações favoráveis / total | Reparo correto; reteste pendente |
| 05 | 5.1 | E / A | Erlang B: incluir os termos k=0…N no denominador | Reparo correto; reteste pendente |
| 06 | 6.1 | A / B | Diretividade ≠ ganho: aplicar eficiência de radiação antes de calcular EIRP | Reparo correto; reteste pendente |
| 07 | 7.1 | D / C | Fresnel: subtrair **tanto** 60% de r₁ quanto a saliência efetiva da Terra | Reparo correto; reteste pendente |
| 08 | 8.3 | D / E | C/N satélite: converter a banda de 10 MHz para 70 dBHz ao passar de C/N₀ para C/N | Reparo correto; reteste pendente |
| 09 | 9.2 | C / D | Doppler correto (300 Hz), mas tempo de coerência **diminui** quando Doppler aumenta | Reparo correto; reteste pendente |

**QTI-6 após QTI-13:** 6/6, com novos valores. Ver relatório para todas as respostas; não atribuir 100% de retenção de longo prazo.

### Reteste de 16/11 e Inglês — erros adicionais observados em 17/11

- Reteste de 12: **10/12**. Q04 (exponencial sem memória): confundiu sobreviver mais 4 h com falhar nesse período (C/E). Q11 (idiom *speak volumes*): significa demonstrar evidências fortes (D/A).
- Micro-reparo de 4: **3/4**. Exponencial 2/2, idioms 1/2; erro Q03 *not a walk in the park*: significa que foi difícil; não implica atraso do projeto (D/C).
- Registrar como **revisão de Inglês separada**, para não duplicar resultados de futuros simulados de Português e Inglês.

**Próximos marcos:** D1 18/11 (Fourier/LIT/ruído branco); D3 20/11 (seis erros QTI-13 e inglês), revisão semanal 21/11 e D7 24/11. Manter as questões de 16/11 já pendentes no caderno, sobretudo classificação de H(s) como filtro.


## 18/11/2026 — QTI-50 completo (46/50) — 3 erros e 1 sem alternativa

**Registro da sessão:** [QTI50_2026-11-18_RESULTADO_FINAL.md](QTI50_2026-11-18_RESULTADO_FINAL.md). Cinco blocos de 10; 46 acertos (92%), três erros e uma questão não respondida. Questões autorais/adaptadas; não usar o índice como nota predita em prova original.

| Q | Item | Marcou / correto | Tipo | Regra objetiva | Situação |
|---|---|---|---|---|---|
| 26 | 11.3 | B / D | CONCEITO | S=1 apenas no último rótulo (inferior); rótulos acima têm S=0. Pilha com 3: 0,0,1. | PENDENTE_RETESTE sem reforço obrigatório |
| 37 | 12.1 | E / A | CALCULO | 50 ns/km × 8 km=400 ns; aproximação do enunciado R≈1/Δt=2,5 Mbit/s. | PENDENTE_RETESTE sem reforço obrigatório |
| 44 | 8.1 | D / A | CONCEITO | GEO aproximadamente fixo para estação terrestre ⇒ Doppler muito pequeno; não oferece maior facilidade de cobertura direta das regiões polares. | PENDENTE_RETESTE sem reforço obrigatório |
| 13 | 4.2 | `8?` / A | SEM_ALTERNATIVA | 8 kHz é taxa de amostragem; 32 níveis = 5 bits/amostra; resultado 40 kbit/s | **Não classificar como erro conceitual**; questão sem resposta válida |

**Diretriz expressa de 18/11:** reta final = cobrir todo o edital, especialmente subitens menos vistos. Evitar repetição excessiva de Probabilidade/Fourier e de qualquer tópico de baixa rentabilidade; correção curta e reteste apenas quando houver bom custo-benefício. Revisão semanal em 21/11 é opcional e focada nas lacunas de maior impacto.


## 18/11/2026 — QTI-20 TecConcursos (11/20)

**Registro:** [QTI20_TEC_2026-11-18_RESULTADO.md](QTI20_TEC_2026-11-18_RESULTADO.md). Questões adaptadas dos cadernos TecConcursos, sem gabarito antecipado. Nove erros; correção conceitual breve e sem reparo forçado.

| Q | Item | Marcou / correto | Conteúdo | Regra resumida | Tipo |
|---|---|---|---|---|---|
| 2 | 4.1 | C / B | SSB versus AM com portadora | SSB ocupa apenas uma banda lateral; AM convencional transmite portadora e duas bandas laterais, com pior eficiência de potência/espectro. | CONCEITO |
| 3 | 4.2 | D / E | BER — 16-ASK, 32-ASK e 16-QAM | Maior potência melhora BER; 32-ASK piora separação entre níveis com potência média fixa; 16-QAM usual pode melhorar BER em comparação com 16-ASK. | CONCEITO |
| 4 | 4.1 | C / A | DQPSK e detecção diferencial não coerente | DQPSK admite detecção diferencial, sem recuperação de fase absoluta da portadora; 8-PSK coerente exige referência de fase. | CONCEITO |
| 5 | 4.2 | D / C | Compressão de fonte e taxa simbólica 32-QAM | 10 Mbit/s ÷ 20 = 0,5 Mbit/s; 32-QAM = 5 bits/símbolo; taxa 100 kbaud. | CALCULO |
| 8 | 7.2 | A / D | Modulação adaptativa em enlace com desvanecimento | Alterar ordem de modulação e taxa em função da qualidade do canal é modulação adaptativa. | CONCEITO |
| 9 | 6.1 | C / A | BPSK, comprimento de onda e Nyquist baseband | 750 MHz ⇒ λ=0,4 m (40 cm); BPSK com 16 kbit/s = 16 kbaud; largura mínima em banda-base ideal = 8 kHz. | CALCULO |
| 12 | 5.2 | A / D | Volume de áudio PCM bruto | 40.000 amostras/s × 16 bits × 210 s ÷8 ÷10^6 =16,8 MB. | CALCULO |
| 13 | 5.2 | B / E | Filtro passa-baixas — alargamento temporal do pulso | Filtragem passa-baixas retira componentes altas do pulso retangular: arredondamento e espalhamento temporal, com redução do pico quando a frequência de corte é suficientemente baixa. | CONCEITO |
| 14 | 12.1 | C / A | Custo mínimo de fibra com orçamento de perdas | Perdas fixas 2 conectores×1 + emenda 2 =4 dB; X em 10km + Z em 20km =1+10 dB, total 15dB; custo 10+2=12 UM; é a opção de menor custo viável. | CALCULO |

**Estratégia:** valorizar a rotatividade de temas. Priorizar ajustes em modulação, cálculos de telecomunicações e fibra apenas quando encaixarem em questões inéditas. Não criar bateria repetitiva automática.


## 18/11/2026 — QTI-20 TecConcursos Rodada 2 (17/20)

[Relatório completo](QTI20_TEC_R2_2026-11-18_RESULTADO.md). 20 questões adaptadas, 17 acertos, 3 erros. Primeira parte 9/10; segunda 8/10. Nenhum reforço obrigatório.

| Q | Nº TecConcursos | Item edital | Marcou / correta | Tipo | Regra curta |
|---|---|---|---|---|---|
| 03 | 415 | 8 | B / D | CONCEITO | Pseudodistâncias de quatro satélites independentes permitem estimar x, y, z e desvio do relógio do receptor; três apenas não bastam ao posicionamento tridimensional usual. |
| 14 | 337 | 12 | A / C | CONCEITO | Diferenças físicas dos núcleos são fatores intrínsecos; desalinhamento lateral é extrínseco; interfaces com mudança de índice produzem reflexões de Fresnel. |
| 18 | 440 | 10 | D / B | CONCEITO | CSMA coordena acesso ao meio e não mitiga o canal multipercurso; OFDM, equalização, diversidade MIMO e codificação com interleaving podem reduzir efeitos ou erros resultantes do multipercurso. |

**Ação:** manter como pendentes para revisão oportunista de temas diferentes; não repetir erros em baterias compulsórias. O objetivo da reta final é cobertura dos itens do edital.


## 19/11/2026 — QTI20 + quatro blocos (9 erros originais)

**[Fechamento](FECHAMENTO_DIA_2026-11-19.md)** · **[QTI20 e banco de questões](QTI20_MISTO_2026-11-19.json)**. Dia completo: **50/59 = 84,7%**, incluindo **9 questões de reforço imediato**; QTI-20 isolado **15/20 = 75%**. Sem Português e Inglês. Questões autorais no estilo CESGRANRIO, não oficiais literais.

| Origem | Q | Item | Marcou→Gabarito | Erro e regra | Situação |
|---|---:|---|---|---|---|
| BLOCO1-PROB-20261119 | Q03 | 1.2 | D→A | Exponencial: sobrevida por mais quatro horas: P(T>4)=e^-1; marcou complemento de falha | Reparo imediato correto; D3/D7 pendentes |
| BLOCO1-PROB-20261119 | Q04 | 1.2 | A→B | Exponencial: falhar até três horas: P(T≤3)=1-e^-1/2; marcou sobrevida | Reparo imediato correto; D3/D7 pendentes |
| BLOCO3-MOD-OPTICA-20261119 | Q02 | 4.2 | B→A | PCM: 8000 amostras/s de 8 bits: Rb=8000×8=64 kb/s; 3kHz é frequência máxima do sinal | Sem reteste; D3/D7 pendentes |
| BLOCO4-SINAIS-20261119 | Q01 | 2.3 | C→D | Transformada de Fourier X(0): área do pulso: X(0)=2×4=8, não zero | Reparo imediato correto; D3/D7 pendentes |
| QTI20-MISTO-20261119 | Q01 | 1.1 | B→C | Bayes: P(B|erro) com caminhos A/B: 0,015/(0,014+0,015)=51,7% | Sem reteste; D3/D7 pendentes |
| QTI20-MISTO-20261119 | Q02 | 1.2 | B→A | Poisson: nenhuma falha em trinta minutos: P(0)=e^-1 e não 1-e^-1 | Sem reteste; D3/D7 pendentes |
| QTI20-MISTO-20261119 | Q03 | 2.3 | B→E | Fourier: inversão e compressão temporal x(-2t): Y(ω)=1/2 X(-ω/2) | Sem reteste; D3/D7 pendentes |
| QTI20-MISTO-20261119 | Q06 | 3.5 | D→A | Transformada Z: ROC e estabilidade BIBO de sistema causal: ROC |z|>1,2, exclui circunferência unitária | Sem reteste; D3/D7 pendentes |
| QTI20-MISTO-20261119 | Q16 | 10.3 | B→A | IEEE 802.1Q: tamanho da tag VLAN: 4 bytes: TPID 2 + TCI 2 | Sem reteste; D3/D7 pendentes |

**Retestes D3: 22/11/2026; D7: 26/11/2026.** Não baixar erros apenas por reforços feitos em 19/11. Preservar histórico e priorizar Bayes, Poisson, Fourier X(0)/escala, Z ROC, PCM e IEEE 802.1Q.


## 19/11/2026 — QTI-30 (três rodadas) e reforço dos 8 erros

**[QTI-30 completo](QTI30_2026-11-19.md)** · **[JSON de questões e respostas](QTI30_2026-11-19.json)**. Rodadas: **4/10**, **10/10**, **8/10** = **22/30 (73,3%)**. Reforço 8 temas **7/8 (87,5%)**. **Todos os exercícios autorais estilo CESGRANRIO; não são questões oficiais da banca.**

| Questão | Tema / item | Marcou → correta | Diagnóstico | Reforço imediato |
|---|---|---|---|---|
| Q01 | Variância e autocorrelação WSS (1.3) | B → E | σ²=R_X(0)-μ²=13−9=4 | R1: ACERTO |
| Q02 | Distribuição hipergeométrica sem reposição (1.2) | E → A | C(5,2)C(7,1)/C(12,3)=7/22 | R2: ACERTO |
| Q03 | Derivação da Transformada de Fourier (2.3) | B → C | F{x'(t)}=jωX(ω); x=e^−3t u(t) → Y=jω/(3+jω); no reforço x=2e^−2t u(t) → 2jω/(2+jω) | R3: ERRO |
| Q06 | SIP: INVITE, 200 OK, ACK e REGISTER (5.3) | A → E | ACK confirma 200 OK de INVITE; REGISTER registra endereço; BYE encerra sessão | R4: ACERTO |
| Q09 | Efeito Doppler e conversão de km/h (9.2) | B → A | 72 km/h=20 m/s; fd=v f/c=120Hz | R5: ACERTO |
| Q10 | Dispersão cromática em fibra monomodo (12.1) | D → C | Δt=16×25×0,5=200 ps | R6: ACERTO |
| Q24 | Nyquist: baud versus taxa de bits (4.1) | B → A | Rb=2B log₂M=2×2000×3=12000 bit/s | R7: ACERTO |
| Q26 | Perda por incompatibilidade de polarização (6.1) | A → B | ηp=cos²60°=1/4; L=−10log10(1/4)≈6dB | R8: ACERTO |

**Erro adicional R3 (Fourier, 2.3):** marcou E, correta B. Para (x(t)=2e^{-2t}u(t)), (X(\omega)=2/(2+j\omega)) e (Y(\omega)=2j\omega/(2+j\omega)). Houve perda do fator 2. É um novo erro observado no **reforço**, não uma nona questão errada no QTI-30. Manter associado ao registro Q03 e no caderno estruturado.

**Retestes:** D1 Fourier em 20/11/2026; D3 oito temas em 22/11/2026; D7 oito temas em 26/11/2026. **Nada consolidado apenas por 7/8 no reforço imediato.**

**Balanço técnico completo do dia:** 79/97 = 81,4%, sendo 50/59 prévios, 22/30 do QTI-30 e 7/8 do novo reforço. Não usar 97 questões como tamanho de simulado independente.


## 20/11/2026 — Três blocos de revisão e dois reparos

**Placar base:** 27/32 = 84,4% (B1 8/10, B2 10/12, B3 9/10). **Fixações:** 2/2, apuradas separadamente. Fonte: [fechamento do dia](FECHAMENTO_DIA_2026-11-20.md). Itens autorais/adaptados em estilo CESGRANRIO, não originais literais.

| ID | Item edital | Resposta → correta | Erro evidenciado | Reparação / próximo passo |
|---|---|---|---|---|
| CE-20261120-01 | 11.2 | B → E (B1-Q05) | MPLS cabeçalho `0x4A2B1D40`: bit S é 1; TTL é hexadecimal 40 = 64 decimal | Reteste espaçado pendente |
| CE-20261120-02 | 12.1 | C → A (B1-Q07) | Dispersão intermodal: diferenças de tempos de chegada dos modos, não frequências obrigatoriamente diferentes | Reteste espaçado pendente |
| CE-20261120-03 | 1.2 | C → E (B2-Q04) | Gaussianas independentes: 3²+4²=25 é variância, desvio padrão é 5 | Reteste espaçado pendente |
| CE-20261120-04 | 2.4 | C → A (B2-Q12) | Índices da convolução y[2]=x[0]h[2]+x[1]h[1]=4 | Reparo imediato D (14) correto; reteste espaçado pendente |
| CE-20261120-05 | 7.1 | C → A (B3-Q05) | Fresnel 1,5GHz, d1=2km, d2=6km: sqrt(300)=17,3m, não 24,5m | Reparo imediato C (14,14m em 3GHz/8km) correto; reteste espaçado pendente |

**Revisões sugeridas:** D1 21/11, D3 23/11, D7 27/11. **Não encerrar o erro por acertar no mesmo dia**. Ainda permanece pendente do dia 19/11 o erro de derivada de Fourier com fator multiplicativo 2.


## 21/11/2026 — Reteste do caderno (QTI-15)

**[Relatório com as 15 respostas e resultado](CADERNO_ERROS_R1_2026-11-21.md)** · **[JSON](CADERNO_ERROS_R1_2026-11-21.json)**. 11/15 = 73,3%. Questões novas, autorais/adaptadas, sem cronometragem. Evidência de recuperação não equivale a retenção definitiva.

| Novo erro | Item edital | Marcou → correto | Diagnóstico | Estado |
|---|---|---|---|---|
| Q01 | 11.2 | E → B | MPLS `0x02ACD95A`: bit S=1; TTL último byte `0x5A` = 90. **Reincidência** do erro hexadecimal de 20/11 | PENDENTE_RETESTE |
| Q07 | 1.3 | A → B | Autocorrelação WSS: `R_X(0)=13`, variância `13-2²=9`; confundiu energia quadrática com variância | PENDENTE_RETESTE, reincidência 19/11 |
| Q11 | 12.1 | C → D | Dispersão cromática `18×40×0,4=288 ps` | PENDENTE_RETESTE, reincidência 19/11 |
| Q13 | 1.1 | B → A | Bayes: equipamento já defeituoso, `P(A|D)=0,028/0,041=68,3%` e não prevalência 35% | PENDENTE_RETESTE, reincidência 19/11 |

**Acertos em revisão (11):** dispersão modal, Gaussianas, convolução, Fresnel, derivação Fourier com amplitude, SIP, Doppler, Nyquist, IEEE 802.1Q, conector contudo e inglês *no walk in the park*. Não retirar pendências de longo prazo apenas por acertar uma vez. **22/11:** simulado de 70 questões solicitado, ainda não realizado.


## 21/11/2026 — Fechamento com 8 questões de reforço

**[Fechamento do dia](FECHAMENTO_DIA_2026-11-21.md)** · **[Dados do reforço](CADERNO_ERROS_REF8_2026-11-21.json)**. Dois novos itens para cada um dos quatro erros da primeira rodada (11/15). Reforço **7/8 (87,5%)**: MPLS hexadecimal 2/2, dispersão cromática 2/2, Bayes 2/2, autocorrelação/variância-desvio 1/2.

- **CE-20261121-REF-Q04 (item 1.3):** resposta B, gabarito E; `R(τ)=4+25e^(-4|τ|)`, `μ=-2`; `R(0)=29`, `σ²=29−4=25`; o **desvio padrão solicitado é σ=5**, não 25. **Erro reincidente: confundir variância com desvio padrão.** Reteste espaçado pendente.
- **21/11 completo:** caderno inicial **11/15** + reforço **7/8** = **18/23 (78,3%)** em prática, mas reforço imediato não integra nota de simulado independente nem comprova retenção.
- **Amanhã, 22/11/2026:** simulado de 70 questões previsto, ainda não realizado. Não exigir mais reforços nesta noite.


## 22/11/2026 — QTI-70 encerrado na Q50 (revisão em 23/11)

**[Relatório](FECHAMENTO_DIA_2026-11-22.md) · [Dados e respostas](QTI70_PARCIAL_2026-11-22.json).** Fez 50 de 70 questões, voluntariamente encerrado por cansaço; Q51–70 não respondidas e não pontuadas. **32/50 (64%)**, Português **8/10**, Inglês **7/10**, Específicos **17/30**. Não confundir com nota projetada para 70 questões.

**18 questões erradas (pendentes para revisão amanhã):** Q6 (PT, E→D); Q7 (PT, E→B); Q13 (ING, C→E); Q15 (ING, A→E); Q18 (ING, E→A); Q23 (1.3, B→A); Q25 (2.2, B→C); Q27 (2.4, D→E); Q29 (3.1, C→D); Q31 (4.1, B→D); Q34 (4.2, A→E); Q38 (6.1, A→C); Q39 (6.2, A→D); Q40 (6.3, B→D); Q42 (7.2, D→C); Q44 (8.2, A→E); Q49 (10.2, A→E); Q50 (10.3, D→C).

A pedido do usuário: **não detalhar, discutir nem aplicar reparos hoje**; iniciar fase intensiva em 23/11 com análise de mecanismos e retestes de transferência. Não apagar histórico nem marcar consolidado antes de reteste espaçado.


### 23/11/2026 — Operação Kamikaze: Dirac (Q25 do QTI70)

- **K03:** C — correta (integrais com impulsos escalonados).
- **K04:** B — incorreta; correto D=8, pois `h(t)=3δ(t−1)−2δ(t−3)` e `y(4)=3x(3)−2x(1)=8`.
- **K04R:** C — correta, resultado 9 (`h(t)=2δ(t−1)−δ(t−2)`; `y(4)=2x(3)−x(2)=9`). Acerto após a explicação da K04.
- **Status:** recuperado provisoriamente, **não consolidado**; reteste independente **26/11/2026**, sem fórmulas antecipadas.


### 23/11/2026 — QTI-15 Kamikaze (itens 4–12)

- **14/15 (93,3%)**, questões autorais no estilo CESGRANRIO; único erro Q14 de dispersão modal (resposta C, correta D segundo critério explícito da questão).
- **Leitura crítica:** a resposta C usa o modelo conservador \(R\approx1/(2\Delta t)\), que pode ser válido em outras condições; nesta questão foi imposto \(R\approx1/\Delta t\). Não confundir troca de critério com ausência de domínio da dispersão.
- **Reteste 26/11:** verificar interpretação de critérios e preservar foco em itens 4–12.
- [Detalhamento](QTI15_KAMIKAZE_2026-11-23.md) · [Respostas](QTI15_KAMIKAZE_2026-11-23.json).
