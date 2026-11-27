# Estratégia de preparação pelo perfil da CESGRANRIO — 26/11/2026

Diretriz aprovada pelo usuário para a reta final da prova de Engenharia de Telecomunicações da Transpetro (06/12/2026). Complementa o protocolo de estudo rápido de 11/11 e a rotina de revisão do caderno de erros; não altera o edital nem a rotina vigente.

## 1. Fontes e prioridade
- Edital oficial: cobertura de todos os 13 itens e seus subtópicos, inclusive os sem precedentes nas provas disponíveis.
- Provas originais de Transpetro/Petrobras CESGRANRIO de Telecomunicações disponíveis no projeto, especialmente Transpetro 2012, 2018 e 2023. Priorizar o padrão da prova-alvo.
- TecConcursos: três cadernos TEcom_Tec.pdf (1–199), TEcom_Tec2.pdf (200–399), TEcom_Tec3.pdf (400–456). Classificação preservada em [relatório](CLASSIFICACAO_TECCONCURSOS_13_ITENS_2026-10-07.md) e [JSON](../data/TECCONCURSOS_13_ITENS_2026-10-07.json). 456 questões, 445 dentro do edital, 11 excluídas; numeração e contagens reconferidas em 26/11 sem lacunas nem duplicidades. A classificação por item não prova ausência de enunciados repetidos entre fontes.
- QConcursos: consultar questões reais CESGRANRIO de Telecomunicações e áreas afins; registrar banca, órgão, ano, cargo, identificador/link e item do edital quando verificados.
- Histórico GitHub: PROGRESSO.md, data/RESULTADOS.json, data/REVISOES.json, data/CADERNO_ERROS.json, qti/ e, quando legível, data/QUESTOES.json. Preservar cooldown, rotação semântica, reparos e retestes.

## 2. Objetivo: identificar como a banca cobra
Classificar questões pelas competências necessárias à resolução e pela família de raciocínio:
1. Conceito direto e aplicação de definição.
2. Cálculo direto.
3. Cálculo contextualizado com incógnitas variadas e unidades.
4. Interpretação de gráficos, diagramas, tabelas e sinais.
5. Distinção de conceitos próximos, incluindo distratores tecnicamente plausíveis.

Exemplos de famílias a investigar: identificar distribuição de probabilidade pelo enunciado; Fourier por propriedades e interpretação gráfica; regiões de campo de antenas; geometria e orçamento de enlace/Fresnel; campos e funções de protocolos de redes locais; tabelas, cabeçalhos e mecanismos MPLS; CAS/CCS, Erlang B/C, desvanecimento plano/seletivo. São linhas de investigação, não estatísticas consolidadas nem garantia de cobrança. Em Fresnel, por exemplo, variar a incógnita entre raio, frequência, distância, alturas e percentual de desobstrução.

## 3. Composição sugerida de uma bateria de 20
| Categoria | Quantidade |
|---|---:|
| Questões originais da Transpetro | 6 |
| Questões originais de outros concursos CESGRANRIO | 6 |
| Questões adaptadas de modelos históricos | 6 |
| Retestes direcionados do caderno de erros | 2 |
| Total | 20 |

Proporção de treino, não previsão de distribuição na prova. Ajustar ao pedido, disponibilidade de originais inéditas, histórico e cobertura. Retestes são categoria operacional separada, mesmo se tiverem origem em questões reais. Manter blocos flexíveis e texto simples por padrão. Em simulados completos, respeitar o formato da prova e protocolo vigente. Não apresentar gabarito antes da resposta. Identificar originais, adaptações e autorais com transparência; jamais inventar referência. Questões autorais servem a variações, transferência, reforço e lacunas do edital; não devem predominar quando originais adequadas estiverem disponíveis. Conferir cálculos, alternativas, unidades, unicidade do gabarito e figuras legíveis, com escala/eixos quando relevantes. Variar a letra correta.

## 4. Matriz de inteligência por item (metodologia a executar)
Para cada item/subitem do edital, registrar:
- Frequência histórica na Transpetro, com provas e denominadores identificados.
- Recorrência em outros concursos CESGRANRIO, separada da amostra Transpetro.
- Famílias de questões, formato, nível de profundidade e variações de incógnita.
- Fórmulas essenciais, conceitos próximos, distratores e pegadinhas.
- Desempenho individual: acertos/total válido, erros recentes, reincidências, recuperação e retenção em reteste espaçado.
- Prioridade qualitativa de treino (alta/média/baixa), fundamentada em evidência histórica, edital e lacunas individuais; não atribuir probabilidades numéricas de cobrança sem amostra auditada.

Para cada questão, manter identificador canônico (banca/órgão/ano/prova/número ou ID verificado), referências cruzadas entre fontes, item principal, subtópico, família, classificação, status de resolução e última exposição. Eliminar duplicidades entre TecConcursos, QConcursos e provas; não somar a mesma questão três vezes. Adaptações não entram no denominador histórico de originais. Separar frequência de questões do banco (seleção não representativa) de frequência real na prova-alvo. Todos os 13 itens permanecem obrigatórios; não usar volume do TecConcursos como peso automático da prova.

## 5. Fluxo operacional antes e depois de cada bateria
1. Consultar edital, classificação TecConcursos, provas, QConcursos e histórico.
2. Escolher questões conforme tópico, família, exposição anterior, dificuldade e aderência à banca.
3. Confirmar fontes e checar enunciados/gabaritos; evitar repetir questões corretas recentes, exceto retestes explicitamente identificados.
4. Corrigir com foco no erro e distinguir desconhecimento conceitual, interpretação, cálculo, unidade e falha de elaboração. Anular questões defeituosas sem penalizar o aluno.
5. Registrar resultado, origem, erros e retestes no GitHub; separar diagnósticos e reforços. Não considerar reparo imediato como retenção comprovada.

## 6. Limitações e estado
A classificação dos 456 registros foi recuperada e conferida, mas ainda não houve auditoria integral de todos os enunciados, nem consolidação de frequência deduplicada entre as três fontes. A matriz de inteligência é uma metodologia aprovada, ainda a construir, não um levantamento estatístico pronto. Na consulta de 26/11, data/QUESTOES.json (~1 MB) retornou conteúdo vazio pela integração, embora exista no repositório. Não sobrescrever nem supor que esteja vazio; usar classificação, PDFs originais, resultados e qti/ como alternativa, informando que o controle de repetição fica limitado até recuperar a leitura integral. Não alterar as exclusões originais sem revisão do edital e evidência.
