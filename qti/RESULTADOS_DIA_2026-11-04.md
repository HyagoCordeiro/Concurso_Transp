# Fechamento de estudo — 04/11/2026

**Projeto:** Transpetro / CESGRANRIO — Engenharia de Telecomunicações
**Prova-alvo vigente:** 06/12/2026 (domingo)
**Origem:** respostas fornecidas pelo candidato na conversa de 04/11.
**Classificação:** treino dirigido, bateria mista autoral e correções; não constitui simulado independente. Tempo líquido não cronometrado.

## 1. Revisão espaçada dos erros do QTI-13 de 02/11
- Foco: item 1 (média/variância), item 3 (convolução discreta) e item 7 (perda em espaço livre).
- Respostas: B, A, D, A, B.
- Gabarito: B, C, D, E, A.
- Resultado: **2/5 = 40%**.
- Erros: variância de 2X-Y com variáveis independentes (2²Var X+Var Y); convolução numérica em n=2; variação de FSPL quando frequência cai a 1/4 e distância dobra.
- Reforço pontual da convolução em n=1 (x[n]=(1/2)^n u[n], h[n]=(1/3)^n u[n]): resposta C = 5/6, correta. **1/1**.
- O candidato discutiu a convenção de sinal de perda de enlace: FSPL como magnitude positiva em dB versus subtração de L no balanço de potência. A perda FSPL diminui ~6 dB no cenário da questão 5; não há reteste pós-discussão registrado.

## 2. Inglês — Reading: Keeping Remote Oil Terminals Connected
- Texto e 10 questões autorais, no perfil CESGRANRIO e com temática de telecom/terminais de petróleo.
- Respostas: C, B, E, A, A, E, A, B, E, C.
- Gabarito: C, B, E, A, D, E, A, C, B, D.
- Resultado: **6/10 = 60%**.
- Erros: (5) condição técnica de redundância com fonte de energia comum; (8) *overnight* = imediatamente; (9) *eventually* = com o tempo, não consequência; (10) *therefore* = portanto/conclusão, não contraste.
- Prioridade: inferência contextual, conectores, false friends, phrasal verbs e vocabulário contextual.

## 3. Português — revisão de norma-padrão
- Temas: vírgula, regência, concordância nominal, pronome relativo com preposição e índice de indeterminação do sujeito.
- Respostas: D, B, E, A, C.
- Gabarito: D, B, E, A, C.
- Resultado: **5/5 = 100%**.
- Bom desempenho; somente manutenção por revisão espaçada, sem reparo imediato.

## 4. Telecom — bateria mista autoral, 10 assuntos
- Questões: (1) WSS/autocorrelação; (2) Transformada Z e estabilidade; (3) PCM/TDM; (4) Erlang B; (5) Fraunhofer; (6) Fresnel; (7) G/T satélite; (8) cluster celular; (9) OTDR; (10) espectro primário/secundário.
- Respostas: A, D, A, A, E, C, D, A, C, E.
- Gabarito: C, D, B, A, E, C, D, B, A, E.
- Resultado: **6/10 = 60%**.
- Erros objetivos:
  1. WSS: Var(X)=R_X(0)-mu²; R_X(0)=13, mu=3, Var=4. Marcou 13.
  2. PCM/TDM: 24 canais x 8 bits x 8 kHz = 1,536 Mbit/s úteis; +1 bit por quadro x 8 kHz = **1,544 Mbit/s** totais. Marcou 1,536 Mbit/s.
  3. Reúso celular: reduzir N=7 para N=4 aumenta canais/espectro por célula e eleva tendência de interferência cocanal. Marcou redução de canais.
  4. OTDR: 80 microssegundos são ida e volta; d=c*t/(2*n_g)=**8 km**, não 16 km.
- Acertos: Transformada Z, Erlang B, antenas/campo distante, Fresnel, figura de mérito G/T e regulamentação do espectro.

## 5. Balanço do cronograma
| Bloco | Acertos | Total | Taxa |
|---|---:|---:|---:|
| Reteste inicial 1/3/7 | 2 | 5 | 40% |
| Reforço isolado de convolução | 1 | 1 | 100% |
| Inglês | 6 | 10 | 60% |
| Português | 5 | 5 | 100% |
| Telecom misto | 6 | 10 | 60% |
| **Total de respostas, com reforço** | **20** | **31** | **64,5%** |

**Somente blocos principais, sem o reforço isolado:** 19/30 = 63,3%. São resultados de treino misto, não estimativa objetiva de desempenho na prova.

## 6. Prioridades para a próxima sessão
1. Retestes com novos enunciados (de preferência 2 por erro) de WSS/autocorrelação, overhead PCM/TDM, reúso celular N/interferência e OTDR ida/volta.
2. Confirmar retenção independente em variância de combinações lineares de variáveis aleatórias e variação da FSPL.
3. Inglês: *overnight*, *eventually*, *therefore* e inferência de condições técnicas em texto histórico CESGRANRIO, evitando repetir o texto autoral desta sessão.
4. Português: apenas manutenção por QTI misto.
5. Rodar prática mista com questões originais CESGRANRIO/Transpetro/Petrobras e QConcursos, seguindo banco anti-repetição antes de selecionar.

**Ressalva:** não elevar a frequência de uma questão somente por ser autoral; priorizar evidências das provas históricas. Todos os 13 itens do edital já receberam primeira passagem em 16/10.
