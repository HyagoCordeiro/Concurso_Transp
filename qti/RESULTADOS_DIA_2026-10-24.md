# Resultados do dia — 24/10/2026

**Concurso-alvo:** Transpetro 2026 — Engenheiro(a) de Telecomunicações  
**Banca:** CESGRANRIO  
**Data:** 24/10/2026  
**Classificação:** revisão + prática guiada + retestes; não tratar o percentual global como simulado independente.

## Resumo executivo

- **Questões-base válidas:** 68
- **Acertos-base:** 62
- **Aproveitamento-base:** **91,2%**
- **Reforços pontuados:** 14/15
- **QTI-10 Telecom histórico/misto:** **10/10 (100%)**
- **QTI-20 Telecom histórico/misto:** **19/20 (95%)**
- **Português:** **8/10 (80%)**
- **Inglês:** **9/10 (90%)**
- **Probabilidade:** **6/6 nas respostas solicitadas de evento/parâmetro**
- **Transformada Z / estabilidade:** **5/6 válidas**, com duas questões anuladas por alternativas incorretas; nas duas anuladas o raciocínio matemático do usuário estava correto.

## 1. QTI-10 Telecom histórico/misto

**Resultado: 10/10 (100%)**.

Questões históricas e adaptadas a partir de CESGRANRIO/Transpetro/Petrobras:
- eficiência espectral;
- mecanismos de propagação;
- desvanecimento seletivo em frequência e variante no tempo;
- LED x LASER;
- fibra NRZ e dispersão modal;
- MPLS/LSR;
- OSPF;
- BGP Hold Time;
- VLSM/CIDR;
- SNMP.

Pontos consolidados:
- maior roll-off reduz eficiência espectral;
- LSR é roteador de comutação por rótulos em MPLS;
- OSPF é estado de enlace e usa custo;
- /22 atende cerca de 1000 hosts;
- NRZ: manter o fator 2 em \(R_b \approx 1/(2\Delta t)\).

## 2. Transformada Z e estabilidade discreta

**Resultado válido: 5/6.**

Erro válido:
- em \(z^2+bz+c\), com polos conjugados, usar \(|z|=\sqrt{c}\); em \(c=0,16\), \(|z|=0,4\), sistema BIBO estável.

Acertos:
- identificação de polos com módulo 0,7 e 1,2;
- estabilidade pelo círculo unitário;
- decomposição em frações parciais e inversa Z.

Duas questões de inversa Z foram anuladas porque as alternativas fornecidas estavam incorretas. O usuário encontrou corretamente:
- \([7(3)^n-6(4)^n]u[n]\);
- \([3,5(2)^n-2,5(4)^n]u[n]\).

As duas substitutas foram respondidas corretamente.

Regra central:
- polos conjugados: \(|z|=\sqrt{c}\);
- BIBO estável em tempo discreto: \(|polo|<1\);
- \(z/(z-a) \leftrightarrow a^n u[n]\).

## 3. Revisão espaçada dos erros de 23/10

**Base: 5/6.**

Acertos:
- 802.11ac;
- WDM: canais - 1 = intervalos;
- dBm;
- concordância verbal;
- probabilidade: “no máximo 1” = \(X\le1\).

Erro:
- C/N em cascata: 16 dB e 10 dB resultam em aproximadamente 9 dB.

Reforço C/N: **2/3**.

Em seguida foi feita prática guiada passo a passo de C/N, sem nota independente, reforçando a sequência:
1. dB → linear;
2. somar inversos;
3. inverter;
4. linear → dB.

Exemplos trabalhados:
- 20 dB e 13 dB → ~12,2 dB;
- 16 dB e 10 dB → ~9,0 dB;
- 13 dB e 13 dB → 10 dB.

## 4. Probabilidade CESGRANRIO

**Resultado das respostas solicitadas: 6/6.**

Tópicos:
- pelo menos 3 bons → \(X=3\) ou \(X=4\);
- pelo menos 2 → \(X\ge2\), com uso de complemento;
- exatamente 1 → \(X=1\);
- nenhuma falha → \(X=0\);
- Poisson com ajuste de \(\lambda\) para janelas de 30 e 40 minutos.

Observação: na primeira questão, o usuário apresentou uma aproximação numérica sem alternativas; não foi contabilizada como erro, pois a interpretação do evento estava correta e a questão original é de múltipla escolha.

## 5. QTI-20 Telecom histórico/misto

**Resultado válido: 19/20 (95%)**.

Erro válido:
- **IEEE 802.1Q:** a identificação da VLAN é feita por TAG no quadro Ethernet; não usa parte do campo de dados.

Reparo 802.1Q: **3/3**.

Assuntos cobrados:
- campo distante/Fraunhofer;
- diretividade de dipolo;
- fibra óptica;
- 802.11b/g;
- switch L3;
- 802.1Q;
- SNMP/OID;
- DiffServ;
- MPLS;
- BGP;
- OSPF;
- VRRP;
- EF/QoS;
- reflexão interna total;
- Transformada Z;
- 64-QAM;
- Nyquist;
- Carson;
- EIRP.

Auditoria de qualidade:
- uma questão de campo distante foi anulada porque a adaptação alterou indevidamente o sentido de uma alternativa; substituta correta aplicada;
- uma questão de fibra foi anulada por repetição no mesmo QTI; substituta aplicada;
- ambas não contam como erro do usuário.

## 6. Português — QTI-10

**Resultado-base: 8/10 (80%)**.

Erros:
1. concordância verbal;
2. regência verbal.

Reforços:
- concordância: **3/3**;
- regência: **3/3**.

Pontos fixados:
- haver no sentido de existir → singular;
- fazer indicando tempo → singular;
- existir e ocorrer → concordam com o sujeito;
- assistir a;
- obedecer a;
- preferir X a Y;
- implicar algo, no sentido de acarretar;
- aspirar a, no sentido de desejar.

Uma questão de colocação pronominal foi anulada por ambiguidade e substituída; a substituta foi respondida corretamente.

## 7. Inglês — QTI-10 com texto técnico de energia/petróleo

**Resultado-base: 9/10 (90%)**.

Único erro:
- **therefore** foi confundido com contraste.

Reforço de therefore: **3/3**.

Fixação:
- although / however = contraste ou concessão;
- therefore = consequência / conclusão;
- depend on = depender de;
- may = possibilidade;
- maintain = manter;
- reduce operational risks = reduzir riscos operacionais;
- essential = essencial;
- stable = estável.

## Reforços pontuados do dia

- C/N em cascata: 2/3
- 802.1Q: 3/3
- Português — concordância: 3/3
- Português — regência: 3/3
- Inglês — therefore: 3/3

**Total: 14/15.**

## Prioridades para próxima sessão

1. C/N em cascata — manter prática até automatizar dB → linear → combinação → dB.
2. Transformada Z — retestar \(|z|=\sqrt{c}\) e inversa Z em novo contexto.
3. IEEE 802.1Q — TAG/VID/trunk em revisão espaçada.
4. Português — concordância e regência.
5. Inglês — diferenciar therefore de although/however.

## Observação metodológica

Os percentuais de hoje misturam QTI, revisão, reforço e prática guiada. Para acompanhamento longitudinal, considerar principalmente os resultados-base de cada bloco e não usar o agregado do dia como simulado independente. O tempo líquido total não foi cronometrado de forma confiável.