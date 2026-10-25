# Resultados do dia — 25/10/2026

**Concurso-alvo:** Transpetro 2026 — Engenheiro(a) de Telecomunicações  
**Banca:** CESGRANRIO  
**Data:** 25/10/2026  
**Data da prova considerada no planejamento:** 06/11/2026  
**Classificação:** revisão + prática guiada + QTI; não tratar o percentual global como simulado independente.

## Resumo executivo

- **Questões-base contabilizadas no chat de hoje:** 64
- **Acertos-base:** 61
- **Aproveitamento-base:** **95,3%**
- **Revisão técnica dirigida:** **12/12 (100%)**
- **QTI-20 Telecom:** **20/20 (100%)**
- **Probabilidade:** **6/6 (100%)**
- **Sinais e Sistemas:** **6/6 (100%)**
- **Português:** **5/5 (100%)**
- **Inglês:** **5/5 (100%)**
- **QTI-30 — bloco 3 respondido no chat antes do cronograma:** **7/10 (70%)**

> Observação: o QTI-30 anterior teve os dois primeiros blocos apresentados em formato interativo, mas esse formato foi abandonado por prejudicar a leitura das fórmulas. Apenas o bloco 3, respondido normalmente no chat, entra neste fechamento.

## 1. QTI-30 — bloco 3 respondido no chat

**Resultado-base: 7/10 (70%).**

Erros-base:
- IEEE 802.11e / EDCA;
- antenas / perda por descasamento de polarização;
- MPLS-TE / RSVP-TE — ERO x RRO.

Reparos:
- EDCA: reforçado que menor AIFS e menor CWmin aumentam a prioridade de acesso;
- polarização: reforço concluído com 3/3;
- RSVP-TE: após novo ciclo de reforço, consolidado que ERO define o caminho desejado e RRO registra o caminho efetivamente percorrido.

Outros tópicos do bloco:
- VSAT TDM/TDMA;
- Doppler e tempo de coerência;
- RPF multicast;
- CIR/EIR;
- serviço primário x secundário;
- dispersão cromática;
- RMON II.

## 2. Revisão técnica dirigida

**Resultado: 12/12 (100%).**

Tópicos revisados:
- IEEE 802.11e / EDCA;
- polarização e perda por descasamento;
- MPLS-TE / RSVP-TE — ERO x RRO;
- C/N em cascata;
- Transformada Z / ROC / estabilidade.

Pontos consolidados:
- menor AIFS + menor CWmin = maior prioridade no EDCA;
- PLF = cos²(theta) para polarizações lineares;
- linear x circular ideal = perda de aproximadamente 3 dB;
- ERO = caminho explícito desejado; RRO = caminho registrado;
- para duas relações C/N iguais, o total fica aproximadamente 3 dB abaixo de cada uma;
- estabilidade BIBO geral em sistemas discretos: a ROC deve conter o círculo unitário;
- causal + racional: ROC fica para fora do polo de maior módulo.

## 3. QTI-20 Telecom — 13 itens

**Resultado: 20/20 (100%).**

Assuntos cobrados:
- processos estocásticos / WSS;
- propriedade de modulação em Fourier;
- aliasing;
- FEC x ARQ;
- sinalização R2 / MFC;
- monopolo lambda/4 e método das imagens;
- fator k e horizonte rádio;
- banda Ka e chuva;
- handover;
- SNMPv3;
- MPLS L3VPN — RD x RT;
- dispersão cromática;
- destinação de espectro;
- distribuição uniforme;
- resposta ao impulso por Laplace;
- 16-QAM e taxa de símbolos;
- LLQ;
- Zona de Fresnel;
- TDMA em VSAT;
- PoE IEEE 802.3af.

Destaques:
- RD diferencia rotas VPNv4; RT controla importação/exportação entre VRFs;
- banda Ka é mais sensível à atenuação por chuva;
- IEEE 802.3af: PSE fornece nominalmente cerca de 15,4 W por porta.

## 4. Probabilidade

**Resultado: 6/6 (100%).**

Foco em tradução do enunciado antes da fórmula:
- pelo menos uma -> X >= 1;
- no máximo uma -> X <= 1;
- exatamente duas -> X = 2;
- ao menos um defeituoso -> complemento de X = 0;
- Poisson: ajustar lambda ao intervalo solicitado;
- pelo menos dois -> X >= 2.

Pontos mantidos:
- interpretar o evento antes de escolher a fórmula;
- em amostragem sem reposição, usar combinação/hipergeométrica quando apropriado;
- em Poisson, ajustar primeiro o parâmetro lambda ao tempo da questão.

## 5. Sinais e Sistemas

**Resultado: 6/6 (100%).**

Tópicos:
- ROC de sistema causal;
- sistema bilateral estável;
- critério de Nyquist;
- convolução discreta;
- frequência mínima de amostragem;
- resposta ao impulso por transformada inversa de Laplace.

Regra central consolidada:
- sistema BIBO estável -> ROC contém |z| = 1;
- sistema causal racional -> ROC externa ao polo de maior módulo;
- sistema com ROC entre polos -> resposta bilateral.

## 6. Português

**Resultado: 5/5 (100%).**

Tópicos:
- concordância verbal;
- regência verbal;
- conectores;
- crase;
- regência + crase.

Pontos consolidados:
- haver = existir -> singular;
- fazer indicando tempo -> singular;
- existir/ocorrer concordam com o sujeito;
- assistir a;
- obedecer a;
- aspirar a, no sentido de desejar;
- implicar algo, no sentido de acarretar;
- portanto = consequência/conclusão.

## 7. Inglês

**Resultado: 5/5 (100%).**

Texto técnico sobre monitoramento de pipelines e enlaces por satélite.

Vocabulário/conectores consolidados:
- although = concessão/contraste;
- therefore = consequência/conclusão;
- however = contraste;
- before = relação temporal;
- essential = essencial/indispensável.

## Prioridades para a próxima sessão

1. Manter revisão espaçada de C/N em cascata e Transformada Z/ROC.
2. Retestar EDCA em contexto diferente, sem repetir a mesma pergunta.
3. Retestar ERO x RRO de forma indireta e em cenário de sinalização RSVP-TE.
4. Continuar QTI misto com novidades reais nos 13 itens, priorizando CESGRANRIO/Petrobras/Transpetro e usando QConcursos/TecConcursos como base de busca.
5. Probabilidade: manter tradução do evento antes da fórmula.
6. Português: concordância/regência em textos CESGRANRIO.
7. Inglês: conectores dentro de textos técnicos, com atenção a therefore x although/however.

## Observação metodológica

O desempenho de 95,3% agrega blocos de revisão, reparo e prática guiada. O indicador mais relevante para hoje é que, após os reparos do início da sessão, a revisão técnica fechou 12/12 e o QTI-20 seguinte fechou 20/20. Não usar o agregado diário como equivalente a um simulado independente.
