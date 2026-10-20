# Resultado do dia — 20/10/2026

## Visão geral

Dia de revisão D7 dos Itens 8, 9 e 10 do edital de Engenharia de Telecomunicações, seguido de bloco histórico CESGRANRIO/Transpetro, reparo de Português, microbloco de Inglês e QTI-10 misto anti-repetição.

> Observação metodológica: os resultados de reparo são guiados e não devem ser misturados com o desempenho diagnóstico independente.

---

## 1) D7 — Item 8: Sistemas de Transmissão via Satélite

**Resultado:** 10/10 — **100%**

Conteúdos cobrados:
- GEO x LEO;
- EIRP;
- perda em espaço livre;
- atenuação por chuva em Ku/Ka;
- C/N0 e C/N;
- VSAT/TDMA;
- combinação de contribuições de C/N em escala linear.

### Status
**Sólido. Sem reparo necessário.**

---

## 2) D7 — Item 9: Sistemas de Comunicações Celulares

**Resultado:** 10/10 — **100%**

Conteúdos cobrados:
- reúso de frequência;
- cluster celular;
- GSM = FDMA + TDMA;
- UMTS = WCDMA;
- LTE downlink = OFDMA;
- LTE uplink = SC-FDMA;
- fading multipercurso;
- efeito Doppler;
- handover;
- 5G: eMBB, URLLC e mMTC.

### Status
**Sólido. Sem reparo necessário.**

---

## 3) D7 — Item 10: Redes Locais

**Resultado:** 12/12 — **100%**

Conteúdos cobrados:
- IEEE 802.11ac e 802.11ax;
- switches L2 e L3;
- RSTP/IEEE 802.1w;
- VID/IEEE 802.1Q;
- IEEE 802.1p;
- IEEE 802.1s/MSTP;
- MIB x SMI;
- RMON;
- IEEE 802.3af/PoE.

### Pontos de retenção confirmados
- RSTP: **discarding, learning, forwarding**;
- VID: **12 bits = 4096 combinações, 4094 VLAN IDs usuais**;
- SMI x MIB: **SMI define estrutura/tipos/regras; MIB organiza objetos gerenciados**.

### Status
**Sólido. Os erros históricos de 13/10 foram retidos corretamente.**

---

## 4) Bloco histórico adaptado CESGRANRIO/Transpetro — Itens 8, 9 e 10

**Resultado total:** 15/15 — **100%**

- Item 8 — Satélite: **5/5**
- Item 9 — Celular: **5/5**
- Item 10 — Redes Locais: **5/5**

Famílias históricas exploradas:
- GEO x LEO;
- C/N0;
- banda Ka;
- VSAT;
- C/N combinado;
- cluster celular;
- canais FDD por célula;
- 5G/small cells/massive MIMO;
- fading seletivo em frequência;
- faixa histórica de 700 MHz do 4G;
- switching L2;
- STP;
- RSTP;
- VID 802.1Q;
- SMI x MIB.

### Parcial de Telecom até aqui no dia
D7 Itens 8–10 + histórico adaptado: **47/47 — 100%**

---

## 5) Português — reparo dirigido

Base: pontos fracos do BB 2023 / CESGRANRIO do dia anterior.

### Diagnóstico
**6/8 — 75%**

Erros:
1. **Pontuação estrutural** — vírgula indevida entre verbo e complemento / leitura de adjunto adverbial deslocado.
2. **Relação lógico-semântica de consequência** — estrutura `tão/tanto/tamanho... que`.

Acertos sólidos:
- colocação pronominal: 2/2;
- vocabulário contextual: 2/2;
- segunda questão de consequência correta.

### Reparo
**4/4 — 100%**

Regras fixadas:
- não separar sujeito e verbo;
- não separar verbo e complemento;
- adjunto adverbial deslocado pode vir isolado por vírgula;
- `tão/tanto/tamanho/tal + que` = **consequência**.

### Status
**Reparo concluído, mas pontuação deve continuar aparecendo em retestes espaçados.**

---

## 6) Inglês — microbloco

**Resultado:** 5/5 — **100%**

Conteúdos:
- `however` = contraste;
- `therefore` = consequência;
- paráfrase de `may not be feasible`;
- inferência textual;
- `although` = `even though`.

### Destaque
O ponto de inferência que havia sido marcado no dia anterior foi acertado.

### Status
**Sólido.**

---

## 7) QTI-10 misto anti-repetição

Itens priorizados: 1–7 e 11–13, evitando 8–10, já muito trabalhados no dia.

**Resultado diagnóstico:** 7/10 — **70%**

### Erros

#### Q3 — Filtro de 1ª ordem na frequência de corte
Correto:
- amplitude: `|H| = 1/sqrt(2) ≈ 0,707`;
- potência: `0,5`;
- nível: `-3 dB`.

#### Q4 — Modulação + taxa de código
Exemplo cobrado:
- 64-QAM → 6 bits/símbolo;
- código 3/4 → `6 × 3/4 = 4,5 bits de informação/símbolo`.

#### Q6 — Descasamento de polarização
Regra:
- `Pr/Pr,max = cos²(theta)`.

Erro observado: parar no `cos(theta)` e esquecer o quadrado.

---

## 8) Reparo do QTI-10

### Primeiro reparo
**3/6 — 50%**

Acertos:
- -3 dB na frequência de corte;
- modulação + taxa de código: 2/2.

Oscilações restantes:
- diferença entre amplitude e potência na frequência de corte;
- polarização em 45° e 90°.

### Reparo final
**6/6 — 100%**

Relações fechadas:
- frequência de corte: amplitude = 0,707; potência = 0,5; ganho = -3 dB;
- polarização:
  - 30° → cos²30° = 0,75;
  - 60° → cos²60° = 0,25;
  - 90° → 0.

### Status dos erros do QTI
- **Modulação + taxa de código: fechado.**
- **Filtro de 1ª ordem: reparado.**
- **Polarização: reparada.**

Recomenda-se reteste espaçado, com enunciado diferente, para confirmar retenção sem efeito de repetição imediata.

---

## Resumo numérico do dia

| Bloco | Resultado |
|---|---:|
| D7 Item 8 | 10/10 |
| D7 Item 9 | 10/10 |
| D7 Item 10 | 12/12 |
| Histórico Itens 8–10 | 15/15 |
| Português diagnóstico | 6/8 |
| Português reparo | 4/4 |
| Inglês | 5/5 |
| QTI-10 diagnóstico | 7/10 |
| QTI reparo 1 | 3/6 |
| QTI reparo final | 6/6 |

### Leitura correta dos números
- **Telecom D7 + histórico:** 47/47 = **100%**.
- **Português diagnóstico:** 75%, reparado em 4/4.
- **Inglês:** 100%.
- **QTI-10 diagnóstico:** 70%, com erros reparados no mesmo dia.

Não usar a soma de todas as tentativas como indicador de desempenho independente, pois os blocos de reparo são guiados e incluem retestes imediatos.

---

## Próximas ações sugeridas

1. Fazer reteste espaçado de filtro de 1ª ordem e polarização em contexto novo.
2. Manter pontuação estrutural em Português nos próximos blocos.
3. Prosseguir para os próximos D7 previstos no cronograma.
4. Preservar o protocolo anti-repetição: variar família semântica e caminho de solução, não apenas trocar valores.
