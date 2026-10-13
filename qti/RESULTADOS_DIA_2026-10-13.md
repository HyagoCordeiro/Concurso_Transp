# Evolução de estudo — 13/10/2026

**Projeto:** CESGRANRIO/Transpetro — Engenharia de Telecomunicações. **Fuso:** America/Sao_Paulo. **Corte:** 20:04:35. Registro do dia atualizado após concluir o ciclo dos itens 8, 9 e 10.

## Resultado confirmado

| Item | Acertos | Respostas | Aproveitamento do treino |
|---|---:|---:|---:|
| 8 — Sistemas de transmissão via satélite | 28 | 32 | 87,5% |
| 9 — Comunicações celulares | 23 | 24 | 95,8% |
| 10 — Redes locais | 43 | 47 | 91,5% |
| **Total** | **94** | **103** | **91,3%** |

São **103 exposições efetivamente respondidas**, incluindo reaplicações históricas e reforços. Esses percentuais descrevem o treino realizado; não representam um simulado independente nem domínio permanente do edital. Tempo líquido **não medido**; não inferir estudo contínuo entre horários das mensagens.

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
- **Próxima retomada sequencial sugerida: item11, subitem11.1 — IP multicast;DiffServ;CBWFQ;LLQ.** Item10 concluído no ciclo atual, mantido EM_REVISAO.
- Ciclos de revisão dos itens 8 e 9 concluídos nas três provas fornecidas; estado mantido **EM_REVISAO**, sem promover retenção imediata a domínio definitivo.
- Sem resultados novos de Português ou Inglês nesta sessão.

## Registro individual das 56 respostas dos itens 8 e 9

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

## Item 10 — Redes locais: fechamento noturno

| Bloco | Respostas | Gabarito da versão | Placar |
|---|---|---|---:|
| 10.1 — Wi-Fi e QoS | C, A, E, B, D | C, A, E, B, D | 5/5 |
| 10.2 — Switches L2/L3 | E, D, A, C, B | E, D, A, C, B | 5/5 |
| 10.3 — IEEE, RMON, SNMP e PoE | D, B, E, A, C | D, B, E, A, C | 5/5 |
| Item 10 — 24 adaptações históricas | C, E, A, B, D, B, C, A, E, B, D, C, B, D, A, A, C, E, B, D, A, D, E, C | C, E, A, B, D, B, C, A, E, B, D, C, A, E, D, A, C, E, B, D, A, D, E, C | 21/24 |
| Reforço — RSTP, VID e SMI/MIB | A, E, B, D, A, C | C, E, B, D, A, C | 5/6 |
| Reforço final — estados RSTP | D, A | D, A | 2/2 |

**Item10:43/47 (91,5%).** Wi-Fi/QoS, switches L2/L3, IEEE/STP/VLAN, RMON, SNMP e PoE revisados. Históricas:2012 Q23–30 e Q34–40;2018 Q25,26,28,29,30,46;2023 Q61,62,64. Referências preservadas conforme levantamento apresentado na conversa. As letras correspondem às adaptações.

Erros na bateria:Q13 B→A (estados RSTP);Q14 D→E (4096 combinações incluindo reservados);Q15 A→D (SMI/MIB). Primeiro reforço:AEBDAC,5/6;erro emR1 A→C:learning aprende MAC e não encaminha dados. Último reforço:DA,2/2. Sequências incompletas ou substituídas não foram contadas novamente.

Revisões do item10:D3 dos erros16/10;D7 20/10;D21 03/11. São datas de estudo registradas, não lembretes automáticos. Manter EM_REVISAO para retenção. Próximo subitem sequencial sugerido:11.1.

### Registro das 47 respostas do item10

| Nº | Bloco/Q | Tema | Marcada | Correta | Resultado |
|---:|---|---|---|---|---|
| 57 | ESTUDO-10-1-20261013/Q1 | Faixas e taxas 802.11a/b/g | C | C | CORRETA |
| 58 | ESTUDO-10-1-20261013/Q2 | 802.11n: MIMO e faixas | A | A | CORRETA |
| 59 | ESTUDO-10-1-20261013/Q3 | OFDMA no 802.11ax | E | E | CORRETA |
| 60 | ESTUDO-10-1-20261013/Q4 | Prioridade WMM | B | B | CORRETA |
| 61 | ESTUDO-10-1-20261013/Q5 | EDCA: AIFS e CW | D | D | CORRETA |
| 62 | ESTUDO-10-2-20261013/Q1 | Camadas e endereçamento L2/L3 | E | E | CORRETA |
| 63 | ESTUDO-10-2-20261013/Q2 | Aprendizado e encaminhamento MAC | D | D | CORRETA |
| 64 | ESTUDO-10-2-20261013/Q3 | Roteamento inter-VLAN | A | A | CORRETA |
| 65 | ESTUDO-10-2-20261013/Q4 | Broadcast por VLAN | C | C | CORRETA |
| 66 | ESTUDO-10-2-20261013/Q5 | STP e redundância | B | B | CORRETA |
| 67 | ESTUDO-10-3-20261013/Q1 | STP/RSTP/MSTP e padrões | D | D | CORRETA |
| 68 | ESTUDO-10-3-20261013/Q2 | PCP e VLANs comuns | B | B | CORRETA |
| 69 | ESTUDO-10-3-20261013/Q3 | RMON II e camadas superiores | E | E | CORRETA |
| 70 | ESTUDO-10-3-20261013/Q4 | GetBulk, SET e authPriv | A | A | CORRETA |
| 71 | ESTUDO-10-3-20261013/Q5 | Orçamento PoE 200W | C | C | CORRETA |
| 72 | ESTUDO-10-HISTORICAS-20261013/Q1 | Inter-VLAN e domínios de broadcast | C | C | CORRETA |
| 73 | ESTUDO-10-HISTORICAS-20261013/Q2 | Arquitetura IEEE802.11 | E | E | CORRETA |
| 74 | ESTUDO-10-HISTORICAS-20261013/Q3 | Perda em 2,4GHz versus5GHz | A | A | CORRETA |
| 75 | ESTUDO-10-HISTORICAS-20261013/Q4 | Planejamento canais1–11/canal6 | B | B | CORRETA |
| 76 | ESTUDO-10-HISTORICAS-20261013/Q5 | OSPF como função L3 | D | D | CORRETA |
| 77 | ESTUDO-10-HISTORICAS-20261013/Q6 | Tag IEEE802.1Q | B | B | CORRETA |
| 78 | ESTUDO-10-HISTORICAS-20261013/Q7 | Identificar802.11b/a | C | C | CORRETA |
| 79 | ESTUDO-10-HISTORICAS-20261013/Q8 | Infraestrutura versus ad hoc | A | A | CORRETA |
| 80 | ESTUDO-10-HISTORICAS-20261013/Q9 | L2 e MAC de destino | E | E | CORRETA |
| 81 | ESTUDO-10-HISTORICAS-20261013/Q10 | Objetivo do STP | B | B | CORRETA |
| 82 | ESTUDO-10-HISTORICAS-20261013/Q11 | Switch L3 com ASICs e Ethernet | D | D | CORRETA |
| 83 | ESTUDO-10-HISTORICAS-20261013/Q12 | Switch/injetor/splitter/AP | C | C | CORRETA |
| 84 | ESTUDO-10-HISTORICAS-20261013/Q13 | Estados RSTP | B | A | INCORRETA |
| 85 | ESTUDO-10-HISTORICAS-20261013/Q14 | Todas combinações VID12bits | D | E | INCORRETA |
| 86 | ESTUDO-10-HISTORICAS-20261013/Q15 | SMI versus MIB | A | D | INCORRETA |
| 87 | ESTUDO-10-HISTORICAS-20261013/Q16 | Beamforming | A | A | CORRETA |
| 88 | ESTUDO-10-HISTORICAS-20261013/Q17 | Suporte e integridade do serviço | C | C | CORRETA |
| 89 | ESTUDO-10-HISTORICAS-20261013/Q18 | Encaminhamento L3 em hardware | E | E | CORRETA |
| 90 | ESTUDO-10-HISTORICAS-20261013/Q19 | Injetor versus splitter | B | B | CORRETA |
| 91 | ESTUDO-10-HISTORICAS-20261013/Q20 | WPA2 AES-CCMP | D | D | CORRETA |
| 92 | ESTUDO-10-HISTORICAS-20261013/Q21 | SNMP SetRequest | A | A | CORRETA |
| 93 | ESTUDO-10-HISTORICAS-20261013/Q22 | 802.11ax OFDMA | D | D | CORRETA |
| 94 | ESTUDO-10-HISTORICAS-20261013/Q23 | L2/L3 e OSI | E | E | CORRETA |
| 95 | ESTUDO-10-HISTORICAS-20261013/Q24 | Seis portas PoE15,4W | C | C | CORRETA |
| 96 | ESTUDO-10-REPAIR1-20261013/Q1 | RSTP aprende MAC sem encaminhar | A | C | INCORRETA |
| 97 | ESTUDO-10-REPAIR1-20261013/Q2 | Três estados RSTP | E | E | CORRETA |
| 98 | ESTUDO-10-REPAIR1-20261013/Q3 | Todas combinações VID | B | B | CORRETA |
| 99 | ESTUDO-10-REPAIR1-20261013/Q4 | VLANs de uso comum | D | D | CORRETA |
| 100 | ESTUDO-10-REPAIR1-20261013/Q5 | SMI:regras de objetos | A | A | CORRETA |
| 101 | ESTUDO-10-REPAIR1-20261013/Q6 | MIB:organização dos objetos | C | C | CORRETA |
| 102 | ESTUDO-10-RSTP-REPAIR2-20261013/Q1 | Learning:aprende sem encaminhar | D | D | CORRETA |
| 103 | ESTUDO-10-RSTP-REPAIR2-20261013/Q2 | Discarding:caminho alternativo | A | A | CORRETA |
