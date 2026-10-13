# Evolução de estudo — 13/10/2026

**Projeto:** CESGRANRIO/Transpetro — Engenharia de Telecomunicações. **Fuso:** America/Sao_Paulo. **Corte:** 16:26:55. Registro parcial do dia, solicitado após concluir o ciclo dos itens 8 e 9.

## Resultado confirmado

| Item | Acertos | Respostas | Aproveitamento do treino |
|---|---:|---:|---:|
| 8 — Sistemas de transmissão via satélite | 28 | 32 | 87,5% |
| 9 — Comunicações celulares | 23 | 24 | 95,8% |
| **Total** | **51** | **56** | **91,1%** |

São **56 exposições efetivamente respondidas**, incluindo reaplicações históricas e reforços. Esses percentuais descrevem o treino realizado; não representam um simulado independente nem domínio permanente do edital. Tempo líquido **não medido**; não inferir estudo contínuo entre horários das mensagens.

[Registro estruturado, com respostas e correções por questão](RESULTADOS_DIA_2026-10-13.json).

## Blocos concluídos

| Bloco | Respostas do usuário | Gabarito desta versão | Placar |
|---|---|---|---:|
| 8.1 — Órbitas e transmissão via satélite | C, D, B, A, E | C, D, B, A, E | 5/5 |
| 8.2 — Bandas e características de transmissão | A, B, B, E, D | A, C, B, E, D | 4/5 |
| Reforço — diâmetro e frequência | D, A | D, A | 2/2 |
| 8.3 — Serviços, degradação e C/N | E, B, B, A, C | E, B, D, A, C | 4/5 |
| Reforço — C/N versus C/N0 | C, E | C, E | 2/2 |
| Item8 — nove originais Transpetro | B, E, A, D, D, A, C, E, B | B, C, A, D, D, A, C, E, B | 8/9 |
| VSAT — primeiro reforço | B, A | B, D | 1/2 |
| VSAT — distinção anel/malha | E, C | E, C | 2/2 |
| 9.1 — Fundamentos e evolução até5G | B, E, D, A, C | B, E, D, A, C | 5/5 |
| 9.2 — Células,acesso,tecnologias e canal móvel | B, D, A, E, C | B, D, A, E, C | 5/5 |
| Item9 — doze adaptações históricas | E, C, A, B, D, E, D, C, D, B, D, E | E, C, A, B, D, E, A, C, D, B, D, E | 11/12 |
| Reforço — WiMAX MAC/QoS | E, B | E, B | 2/2 |

As letras das versões adaptadas não devem ser confundidas com o gabarito original. O banco preserva a identidade da fonte e a exposição de cada versão.

## Item 8 — conteúdo e evolução

- **8.1:** GEO/LEO/MEO, condições de geoestacionariedade, cobertura polar, necessidade de troca de satélites em LEO e atraso de propagação. Inicial **5/5**.
- **8.2:** pares convencionais C 6/4 GHz, Ku 14/12 GHz e Ka 30/20 GHz (uplink/downlink); banda L; sensibilidade à chuva; ACM; diâmetro de parabólica e perda de espaço livre. Inicial **4/5**, reforço **2/2**.
- **8.3:** FSS/MSS/BSS, degradação, apontamento, C/N0, C/N e EIRP mínima. Inicial **4/5**, reforço **2/2**.
- **Histórico:** sete questões específicas de satélite e duas complementares, **8/9**. Erro em topologia VSAT: marcou hierárquica; correta estrela. Primeiro reforço **1/2**, com confusão entre anel e malha; segundo reforço **2/2**.

### Pontos recuperados

1. **Diâmetro × frequência:** mantendo ganho e eficiência, Df é constante. 1,2 m a 6 GHz → 0,6 m a 12 GHz; não 0,3 m. Reforços: 1,8 m/5 GHz → 0,6 m/15 GHz e 0,75 m/10 GHz → 1,5 m/5 GHz.
2. **C/N versus C/N0:** ao dobrar a banda mantendo C e N0, o ruído integrado dobra e C/N cai 3 dB; C/N0 permanece igual. Reteste: 12 dB → 9 dB. Conversão: 77 dB·Hz − 67 dB = 10 dB para 5 MHz.
3. **VSAT:** estrela utiliza hub; malha permite comunicação direta entre terminais via satélite; anel é circuito fechado entre vizinhos. Recuperação confirmada no segundo reforço, sem apagar o erro intermediário.

### Inventário histórico de satélites

| Prova | Questões específicas utilizadas | Complementares |
|---|---|---|
| Transpetro 2012 | Nenhuma especificamente satelital | Não adicionar artificialmente questão Petrobras 2012 ao inventário Transpetro |
| Transpetro 2018 | 52, 53, 54, 59 | 56: desvanecimento; 58: legislação histórica |
| Transpetro 2023 | 51, 52, 53 | — |

A Q58/2018 foi respondida segundo a legislação cobrada naquela prova; não é certificação de que todos os seus enunciados reproduzem a legislação atual. O mapa da Q54 foi preservado em [asset do projeto](assets/2026-10-12/Q54_Transpetro_2018_mapa.svg).

## Item 9 — conteúdo e evolução

- **9.1:** AMPS/1G, GSM/2G, UMTS/3G, LTE/4G, NR/5G; eMBB, URLLC e mMTC; NSA/SA; diferentes faixas do 5G. Inicial **5/5**.
- **9.2:** células, clusters, reúso e canais full-duplex; FDMA/TDMA/CDMA/OFDMA; FDD/TDD; GSM, UMTS e LTE; Doppler, multipercurso e seletividade. Inicial **5/5**.
- **Histórico adaptado:** **11/12**, seguido de reforço **2/2**. Único erro: MAC/QoS do WiMAX; marcou apenas a afirmação III (CSMA/CA obrigatório), enquanto I e II eram verdadeiras.
- **Recuperação:** WiMAX organiza conexões lógicas e oferece QoS, inclusive para taxa constante; Wi-Fi convencional utiliza CSMA/CA e não deve ser confundido com a alocação controlada pela estação-base no WiMAX.

### Inventário do reteste adaptado do item 9

| Prova | Referências | Conteúdos |
|---|---|---|
| Transpetro 2023 | 22, 23, 40 | Reúso/canais, 5G e OFDM/4G |
| Transpetro 2018 | 27, 32, 56, 60 | WiMAX, OFDMA, desvanecimento e espectro histórico 4G |
| Transpetro 2012 | 21, 22, 33, 57, 58 | WiMAX/MAC, duplexação, difração e canal seletivo/variante |

WiMAX e espectro foram explicitamente classificados como complementos históricos. Não classificar automaticamente todas as 12 como questões exclusivas de comunicações celulares. Valores de cálculo/redação foram alterados; parâmetros normativos, gerações e faixas históricas foram preservados. Na adaptação de canal, a notação h(t,τ) explicitou coeficientes variantes no tempo e atrasos entre percursos.

## Fórmulas e resultados de cálculo

- **Parabólica:** G = η(πDf/c)²; mesmo G e η → Df constante.
- **Espaço livre:** ΔL = 20 log10(f2/f1); frequência dobrada → +6 dB.
- **Enlace:** C/N0 = EIRP − Ltotal + G/T + 228,6; C/N = C/N0 − 10 log10(B em Hz).
- **Banda:** N = N0 B; 5 MHz → 67 dB, 10 MHz → 70 dB, 20 MHz → 73 dB.
- **8.3 Q4:** 49 − 205 − 2 + 15 + 228,6 − 73 = **12,6 dB**.
- **8.3 Q5:** EIRP mínima = 14 + 206 − 10 − 228,6 + 67 = **48,4 dBW**.
- **Originais de enlace:** Transpetro 2018 Q54 = **16,5 dB**; Transpetro 2023 Q53 = **9,6 dB**.
- **Reúso hexagonal:** D = R√(3N). Canais/célula = Btotal/(2 bsimplex N), quando Btotal inclui os dois sentidos FDD.
- **9.2 inicial:** N=7, R=2 km, B=42 MHz, bsimplex=25 kHz → **9,2 km e 120 canais/célula**.
- **Reteste histórico:** N=4, R=1,5 km, B=32 MHz, bsimplex=25 kHz → **5,2 km e 160 canais/célula**.
- **Doppler:** fD,max=(v/c)fc; v=30 m/s, fc=2 GHz → **200 Hz**.

## Revisões e continuidade

- **D3 — 16/10/2026:** diâmetro/frequência, C/N versus C/N0, topologias VSAT e MAC/QoS WiMAX. São erros recuperados imediatamente; verificar retenção com reteste curto.
- **D7 — 20/10/2026:** subitens 8.1, 8.2, 8.3, 9.1 e 9.2.
- **D21 — 03/11/2026:** os mesmos subitens.
- Datas registradas em data/REVISOES.json; são agenda de estudo, não lembretes automáticos.
- **Retomar no item 10, subitem 10.1 — Wi-Fi IEEE 802.11 a/b/g/n/ac/ax e QoS IEEE 802.11e.** Item 10 ainda não iniciado neste recorte.
- Ciclos de revisão dos itens 8 e 9 concluídos nas três provas fornecidas; estado mantido **EM_REVISAO**, sem promover retenção imediata a domínio definitivo.
- Sem resultados novos de Português ou Inglês nesta sessão.

## Registro individual das 56 respostas

Os enunciados estão resumidos no JSON, sem alegação de transcrição integral. Esta tabela preserva cada marcação, a correção da versão apresentada e sua fonte.

| Nº | Bloco/Q | Tema | Marcada | Correta | Resultado | Fonte |
|---:|---|---|---|---|---|---|
| 1 | 8.1 — Órbitas e transmissão via satélite / Q1 | Condições de órbita GEO | C | C | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 2 | 8.1 — Órbitas e transmissão via satélite / Q2 | GEO × LEO/Doppler | D | D | CORRETA | CESGRANRIO-TRANSPETRO-2023-Q51 |
| 3 | 8.1 — Órbitas e transmissão via satélite / Q3 | Classificação MEO | B | B | CORRETA | ADAPTADA_TEMA_PETROBRAS_2012_Q62 |
| 4 | 8.1 — Órbitas e transmissão via satélite / Q4 | LEO polar e troca de satélites | A | A | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 5 | 8.1 — Órbitas e transmissão via satélite / Q5 | Atraso Terra-satélite-Terra | E | E | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 6 | 8.2 — Bandas e características de transmissão / Q1 | Pares uplink/downlink C,Ku,Ka | A | A | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 7 | 8.2 — Bandas e características de transmissão / Q2 | Diâmetro × frequência com ganho constante | B | C | INCORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 8 | 8.2 — Bandas e características de transmissão / Q3 | Perda de espaço livre × frequência | B | B | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 9 | 8.2 — Bandas e características de transmissão / Q4 | Banda L e serviços móveis | E | E | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 10 | 8.2 — Bandas e características de transmissão / Q5 | ACM e atenuação por chuva | D | D | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 11 | Reforço — diâmetro e frequência / Q1 | Frequência triplicada, mesmo ganho | D | D | CORRETA | AUTORAL_REPAIR |
| 12 | Reforço — diâmetro e frequência / Q2 | Frequência reduzida à metade, mesmo ganho | A | A | CORRETA | AUTORAL_REPAIR |
| 13 | 8.3 — Serviços, degradação e C/N / Q1 | FSS,MSS,BSS | E | E | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 14 | 8.3 — Serviços, degradação e C/N / Q2 | Erro de apontamento | B | B | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 15 | 8.3 — Serviços, degradação e C/N / Q3 | Banda,C/N e C/N0 | B | D | INCORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 16 | 8.3 — Serviços, degradação e C/N / Q4 | C/N do downlink | A | A | CORRETA | CESGRANRIO-TRANSPETRO-2023-Q53 |
| 17 | 8.3 — Serviços, degradação e C/N / Q5 | EIRP mínima | C | C | CORRETA | AUTORAL_DIMENSIONAMENTO |
| 18 | Reforço — C/N versus C/N0 / Q1 | Dobrar banda mantendo C e N0 | C | C | CORRETA | AUTORAL_REPAIR |
| 19 | Reforço — C/N versus C/N0 / Q2 | Converter C/N0 para C/N | E | E | CORRETA | AUTORAL_REPAIR |
| 20 | Item8 — nove originais Transpetro / Q1 | Ku:chuva/cintilação | B | B | CORRETA | CESGRANRIO-TRANSPETRO-2018-Q52 |
| 21 | Item8 — nove originais Transpetro / Q2 | Topologia VSAT | E | C | INCORRETA | CESGRANRIO-TRANSPETRO-2018-Q53 |
| 22 | Item8 — nove originais Transpetro / Q3 | C/N com footprint | A | A | CORRETA | CESGRANRIO-TRANSPETRO-2018-Q54 |
| 23 | Item8 — nove originais Transpetro / Q4 | FDMA/TDMA e MCPC em VSAT | D | D | CORRETA | CESGRANRIO-TRANSPETRO-2018-Q59 |
| 24 | Item8 — nove originais Transpetro / Q5 | GEO × LEO | D | D | CORRETA | CESGRANRIO-TRANSPETRO-2023-Q51 |
| 25 | Item8 — nove originais Transpetro / Q6 | Vantagem Ka | A | A | CORRETA | CESGRANRIO-TRANSPETRO-2023-Q52 |
| 26 | Item8 — nove originais Transpetro / Q7 | C/N do downlink | C | C | CORRETA | CESGRANRIO-TRANSPETRO-2023-Q53 |
| 27 | Item8 — nove originais Transpetro / Q8 | Desvanecimento | E | E | CORRETA | CESGRANRIO-TRANSPETRO-2018-Q56 |
| 28 | Item8 — nove originais Transpetro / Q9 | Legislação satélites de2018 | B | B | CORRETA | CESGRANRIO-TRANSPETRO-2018-Q58 |
| 29 | VSAT — primeiro reforço / Q1 | Hub central:estrela | B | B | CORRETA | AUTORAL_REPAIR |
| 30 | VSAT — primeiro reforço / Q2 | Terminal-terminal sem hub:malha | A | D | INCORRETA | AUTORAL_REPAIR |
| 31 | VSAT — distinção anel/malha / Q1 | Dois vizinhos,circuito fechado:anel | E | E | CORRETA | AUTORAL_REPAIR |
| 32 | VSAT — distinção anel/malha / Q2 | Direto entre terminais via satélite:malha | C | C | CORRETA | AUTORAL_REPAIR |
| 33 | 9.1 — Fundamentos e evolução até5G / Q1 | AMPS,GSM,UMTS,LTE,NR | B | B | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 34 | 9.1 — Fundamentos e evolução até5G / Q2 | eMBB,URLLC,mMTC | E | E | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 35 | 9.1 — Fundamentos e evolução até5G / Q3 | OFDM na geração4G | D | D | CORRETA | CESGRANRIO-TRANSPETRO-2023-Q40 |
| 36 | 9.1 — Fundamentos e evolução até5G / Q4 | NSA e âncora LTE/EPC | A | A | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 37 | 9.1 — Fundamentos e evolução até5G / Q5 | Faixas abaixo6GHz e milimétricas | C | C | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 38 | 9.2 — Células,acesso,tecnologias e canal móvel / Q1 | Reúso e canais FDD | B | B | CORRETA | CESGRANRIO-TRANSPETRO-2023-Q22 |
| 39 | 9.2 — Células,acesso,tecnologias e canal móvel / Q2 | GSM,UMTS,LTE acesso | D | D | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 40 | 9.2 — Células,acesso,tecnologias e canal móvel / Q3 | FDMA versus FDD | A | A | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 41 | 9.2 — Células,acesso,tecnologias e canal móvel / Q4 | Doppler máximo | E | E | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 42 | 9.2 — Células,acesso,tecnologias e canal móvel / Q5 | Multipercurso e seletividade | C | C | CORRETA | AUTORAL_ESTILO_CESGRANRIO |
| 43 | Item9 — doze adaptações históricas / Q1 | Reúso e capacidade | E | E | CORRETA | CESGRANRIO-TRANSPETRO-2023-Q22 |
| 44 | Item9 — doze adaptações históricas / Q2 | 5G pequenas células/MassiveMIMO | C | C | CORRETA | CESGRANRIO-TRANSPETRO-2023-Q23 |
| 45 | Item9 — doze adaptações históricas / Q3 | OFDM4G | A | A | CORRETA | CESGRANRIO-TRANSPETRO-2023-Q40 |
| 46 | Item9 — doze adaptações históricas / Q4 | Faixa700MHz/leilão2014 | B | B | CORRETA | CESGRANRIO-TRANSPETRO-2018-Q60 |
| 47 | Item9 — doze adaptações históricas / Q5 | OFDMA | D | D | CORRETA | CESGRANRIO-TRANSPETRO-2018-Q32 |
| 48 | Item9 — doze adaptações históricas / Q6 | 802.16-2004fixo/e móvel | E | E | CORRETA | CESGRANRIO-TRANSPETRO-2018-Q27 |
| 49 | Item9 — doze adaptações históricas / Q7 | WiMAX MAC eQoS | D | A | INCORRETA | CESGRANRIO-TRANSPETRO-2012-Q22 |
| 50 | Item9 — doze adaptações históricas / Q8 | FDD/TDD | C | C | CORRETA | CESGRANRIO-TRANSPETRO-2012-Q33 |
| 51 | Item9 — doze adaptações históricas / Q9 | 802.16a2–11GHz/NLOS | D | D | CORRETA | CESGRANRIO-TRANSPETRO-2012-Q21 |
| 52 | Item9 — doze adaptações históricas / Q10 | Desvanecimento | B | B | CORRETA | CESGRANRIO-TRANSPETRO-2018-Q56 |
| 53 | Item9 — doze adaptações históricas / Q11 | Canal variante,seletivo | D | D | CORRETA | CESGRANRIO-TRANSPETRO-2012-Q58 |
| 54 | Item9 — doze adaptações históricas / Q12 | Difração | E | E | CORRETA | CESGRANRIO-TRANSPETRO-2012-Q57 |
| 55 | Reforço — WiMAX MAC/QoS / Q1 | Conexões lógicas e taxa constante | E | E | CORRETA | AUTORAL_REPAIR |
| 56 | Reforço — WiMAX MAC/QoS / Q2 | Wi-Fi CSMA/CA × WiMAX alocação | B | B | CORRETA | AUTORAL_REPAIR |
