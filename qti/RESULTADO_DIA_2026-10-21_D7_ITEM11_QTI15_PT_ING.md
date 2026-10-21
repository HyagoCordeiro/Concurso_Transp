# Resultado do dia — 21/10/2026

## Visão geral

Dia de consolidação com aquecimento misto, revisão D7 do Item 11 (Redes IP), bloco histórico/adaptado CESGRANRIO, Probabilidade variada, QTI-15 dos 13 itens, reparo dirigido de PCM e manutenção de Português e Inglês.

> Regra metodológica: resultados de reparo imediato não devem ser somados aos diagnósticos independentes para medir domínio real.

---

## 1) QTI-10 aquecimento Telecom

**Resultado: 10/10 — 100%**

Características:
- nível leve/intermediário;
- mistura de famílias dos 13 itens;
- protocolo anti-repetição;
- evitadas famílias trabalhadas intensamente nos dias anteriores.

### Status
**Aquecimento perfeito. Atenção e retenção boas desde o início.**

---

## 2) D7 — Item 11: Redes IP

**Resultado: 10/10 — 100%**

Conteúdos revisados:
- DiffServ e QoS por classes;
- OSPF e BGP;
- MPLS e operações push/swap/pop;
- MPLS L3VPN;
- RD x RT;
- MPLS-TE;
- RSVP-TE x OSPF-TE;
- IPSec;
- SSH/TLS;
- firewall stateful.

### Pontos importantes confirmados
- OSPF = IGP de estado de enlace;
- BGP = roteamento entre sistemas autônomos;
- RD torna prefixos VPN distintos;
- RT controla importação/exportação de rotas VPN;
- RSVP-TE = sinalização de LSP;
- OSPF-TE = divulgação de atributos de engenharia de tráfego;
- firewall stateful acompanha o estado das conexões.

### Status
**Item 11 sólido no D7.**

---

## 3) Histórico/adaptado CESGRANRIO — Item 11

Base de calibração: famílias históricas de Petrobras/Transpetro envolvendo OSPF, DiffServ, MPLS, IPSec, SSH/SSL, QoS e firewall.

**Resultado: 10/10 — 100%**

### Consolidado Item 11 no dia
- D7: 10/10
- Histórico/adaptado: 10/10
- Total: **20/20 — 100%**

### Status
**Sem reparo necessário. Manter apenas revisão espaçada.**

---

## 4) Probabilidade — bloco variado

Objetivo: reduzir concentração excessiva em combinação/binomial e ampliar rotação temática.

Famílias usadas:
- Bayes;
- arranjo/ordem;
- Poisson;
- probabilidade condicional;
- processo estocástico / estacionariedade em sentido amplo.

### Resultado
**3/4 válidas corretas + 1 questão anulada com raciocínio correto.**

A questão de Poisson foi anulada porque duas alternativas eram matematicamente equivalentes. O raciocínio do usuário estava correto.

### Erro relevante
Na questão condicional, houve inversão entre:

`P(D|F)` e `P(F|D)`.

Regra de retenção:

**“Sabendo que D...” → D fica depois da barra.**

Exemplo:

`P(F|D)` = probabilidade de fibra, dado que houve falha.

### Classificação do erro
**Interpretação/tradução de eventos**, não execução algébrica.

### Status
Retestar de forma espaçada com enunciados diferentes, sem antecipar Bayes ou condicional.

---

## 5) QTI-15 misto — 13 itens

**Resultado: 14/15 — 93,3%**

Conteúdos distribuídos entre os 13 itens do edital, incluindo:
- esperança matemática;
- Fourier: produto no tempo x convolução na frequência;
- estabilidade discreta;
- 8-PSK e taxa de símbolos;
- Erlang;
- dipolo de meia onda;
- perda no espaço livre;
- bandas de satélite;
- GSM/UMTS/LTE;
- STP;
- Longest Prefix Match;
- atenuação em fibra;
- gestão do espectro;
- comprimento da convolução;
- quantização PCM.

### Único erro
**PCM — SQNR de quantização.**

Regra correta:

`SQNR ≈ 6,02N + 1,76 dB`

Logo:
- +1 bit → aproximadamente +6 dB;
- +2 bits → aproximadamente +12 dB;
- níveis de quantização: `L = 2^N`.

### Classificação do erro
**Conceito/regra pontual.**

---

## 6) Reparo PCM

**Resultado: 2/2 — 100%**

Fixado:
- 8 → 10 bits: melhora aproximada de 12 dB;
- 7 → 9 bits: níveis passam de 128 para 512;
- cada bit adicional acrescenta aproximadamente 6 dB de SQNR.

### Status
**Reparo concluído. Retestar em D7 sem pista.**

---

## 7) Português — reteste curto

**Resultado: 4/5 — 80%**

Acertos:
- concordância com `haver`;
- futuro do subjuntivo: `intervier`;
- pontuação;
- ortografia.

### Erro
Frase:

`Precisa-se de engenheiros especializados.`

Correto:
- `precisar de` = verbo transitivo indireto;
- `se` = índice de indeterminação do sujeito;
- verbo permanece no singular.

Regra:

**VTI + SE → sujeito indeterminado + verbo no singular.**

### Status
Ponto ainda merece revisão espaçada, porque já havia aparecido como dificuldade recente.

---

## 8) Inglês — conectores

### Bloco diagnóstico
**4/5 — 80%**

Erro:
- `if` foi confundido com causa.

Correto:
- `if` = condition.

### Reparo 1
**2/3**

Acertos:
- `if` = condition;
- `because` = cause.

Erro:
- `as a result` confundido com cause.

Correto:
- `as a result` = consequence.

### Fechamento
**2/2 — 100%**

Fixado:
- `if` = condition;
- `because` = cause;
- `therefore` / `as a result` = consequence;
- `however` = contrast;
- `even though` = concession;
- `so that` = purpose.

### Status
Reparo imediato concluído. Retestar sem pares óbvios em sessão futura.

---

## 9) Resumo numérico — primeira parte do dia

| Bloco | Resultado |
|---|---:|
| QTI-10 aquecimento Telecom | 10/10 |
| D7 Item 11 | 10/10 |
| Histórico/adaptado Item 11 | 10/10 |
| Probabilidade | 3/4 válidas + 1 anulada correta |
| QTI-15 misto | 14/15 |
| Reparo PCM | 2/2 |
| Português | 4/5 |
| Inglês diagnóstico | 4/5 |
| Inglês reparo | 2/3 |
| Inglês fechamento | 2/2 |

### Indicador técnico principal
QTI-10 aquecimento + D7 Item 11 + histórico Item 11 + QTI-15:

**44/45 = 97,8%**

---

# Sessão extra — antecipação do cronograma de 22/10

## 10) QTI-10 aquecimento Telecom extra

**Resultado: 10/10 — 100%**

Famílias cobradas:
- números complexos;
- propriedade de deslocamento em Fourier;
- Nyquist/amostragem;
- Carson;
- Erlang C;
- diretividade de antenas;
- zona de Fresnel;
- SNMPv3;
- handover LTE;
- dispersão modal em fibra.

### Status
**Aquecimento perfeito.**

---

## 11) D7 antecipado — Item 12: Sistemas Ópticos

**Resultado: 10/10 — 100%**

Conteúdos:
- fibra monomodo x multimodo;
- dispersão modal;
- atenuação em dB/km;
- orçamento óptico;
- EDFA;
- CWDM x DWDM;
- espaçamento CWDM;
- STM-1;
- E-LAN;
- transponder;
- transparência do WDM.

### Status
**Item 12 forte no D7. Sem reparo necessário.**

---

## 12) Histórico CESGRANRIO adaptado — Item 12

Baseado em famílias reais já encontradas no acervo CESGRANRIO/Petrobras/Transpetro, com valores e redação modificados quando necessário.

**Resultado: 10/10 — 100%**

Famílias históricas revisitadas:
- WDM e transparência de protocolo/taxa;
- CWDM x DWDM;
- orçamento óptico;
- EDFA;
- STM-4;
- EVC;
- E-LAN;
- transponder;
- espaçamento CWDM;
- combinação TDM + WDM.

### Consolidado Item 12
- D7: 10/10
- histórico/adaptado: 10/10
- total: **20/20 — 100%**

---

## 13) Probabilidade — reteste dirigido

**Resultado: 5/5 — 100%**

Famílias:
- interpretação de `P(Fibra|Falha)`;
- Bayes;
- sem reposição;
- Poisson;
- processo WSS.

### Ponto mais importante
O erro de inversão de condicional ocorrido antes no dia **não se repetiu**.

Regra consolidada:

**“Dado/sabendo que B...” → B fica depois da barra em `P(A|B)`.**

### Status
**Reteste bem-sucedido. Manter revisão espaçada.**

---

## 14) QTI-15 misto extra — 13 itens

**Resultado: 15/15 — 100%**

Conteúdos:
- esperança matemática;
- convolução LTI;
- estabilidade em z;
- 16-QAM e baud rate;
- Erlang;
- dipolo de meia onda;
- perda de espaço livre;
- banda Ka;
- LTE/OFDMA;
- STP;
- Longest Prefix Match;
- atenuação em fibra;
- Anatel/espectro;
- comprimento de convolução;
- PCM/SQNR.

### Observação
A questão 12 foi respondida separadamente após o usuário enviar inicialmente 14 respostas. Resposta correta: perda de 6 dB em 30 km a 0,20 dB/km.

### Status
**QTI perfeito. O erro anterior de SQNR/PCM não se repetiu.**

---

## 15) Português — manutenção extra

### Bloco geral
**Resultado: 4/5 — 80%**

Acertos:
- concordância com `haver`;
- crase/regência;
- valor do `se`;
- pontuação.

Erro:
- emprego dos porquês.

### Diagnóstico de porquês — 5 questões
**Resultado: 2/5**

Acertos:
- `por quê` no final da frase;
- `o porquê` como substantivo.

Dificuldade:
- distinguir `por que` em perguntas indiretas de `porque` causal.

### Reparo 1 — 3 questões
**Resultado: 1/3**

### Reparo 2 — contraste apenas `por que` x `porque`
**Resultado: 3/3 — 100%**

Regra usada:
- `por que` = por qual motivo;
- `porque` = pois/causa;
- `por quê` = final de frase;
- `porquê` = substantivo, normalmente com artigo.

### Fechamento ampliado — 10 questões
**Resultado: 10/10 — 100%**

Distribuição incluiu os quatro usos.

### Status
**Reparo imediato concluído com sucesso. Retestar em D7 sem pistas.**

---

## 16) Inglês — manutenção extra

**Resultado: 5/5 — 100%**

Conectores:
- `because` = cause;
- `therefore` = consequence;
- `although` = concession;
- `if` = condition;
- `so that` = purpose.

### Status
**Conectores sólidos no fechamento do dia.**

---

## 17) Resumo da sessão extra

| Bloco | Resultado |
|---|---:|
| QTI-10 aquecimento extra | 10/10 |
| D7 Item 12 | 10/10 |
| Histórico/adaptado Item 12 | 10/10 |
| Probabilidade reteste | 5/5 |
| QTI-15 misto extra | 15/15 |
| Português geral | 4/5 |
| Inglês | 5/5 |
| Porquês diagnóstico | 2/5 |
| Porquês reparo 1 | 1/3 |
| Porquês reparo 2 | 3/3 |
| Porquês fechamento | 10/10 |

### Indicador técnico da sessão extra
Aquecimento + D7 Item 12 + histórico Item 12 + Probabilidade + QTI-15:

**50/50 — 100%**

---

## 18) Pontos para revisão futura

1. **Probabilidade:** manter tradução do enunciado em eventos antes da fórmula, especialmente condicionais.
2. **PCM/SQNR:** erro corrigido; retestar em D7 sem pista.
3. **Português — `se`:** VTI + `se` → índice de indeterminação do sujeito; verbo no singular.
4. **Português — porquês:** principal ponto novo do dia; embora tenha fechado 10/10 após reparo, precisa reaparecer em revisão espaçada.
5. **Inglês:** conectores fecharam em 5/5; apenas manutenção.
6. **Item 11:** 20/20 no consolidado do dia.
7. **Item 12:** 20/20 no D7 + histórico.

---

## 19) Leitura final do desempenho

- Houve **desempenho técnico muito alto e estável** ao longo do dia.
- Item 11 e Item 12 fecharam com domínio forte nas revisões e nos blocos históricos adaptados.
- A fraqueza mais clara do fechamento foi **Português — porquês**, mas houve evolução de 2/5 e 1/3 para 3/3 e, finalmente, 10/10.
- O erro de probabilidade condicional foi corrigido no mesmo dia e não reapareceu no reteste.
- O erro de SQNR/PCM também não reapareceu no QTI extra.
- Como a sessão já acumulou grande volume e desempenho alto, o próximo passo recomendado é **encerrar o dia e retomar com revisão espaçada**, em vez de acrescentar matéria nova ou mais volume imediato.
