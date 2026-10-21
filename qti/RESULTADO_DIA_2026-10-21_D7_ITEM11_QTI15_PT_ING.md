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

## 9) Resumo numérico

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

Este valor representa os principais blocos técnicos diagnósticos do dia, antes dos reparos.

---

## 10) Pontos para D7/reteste futuro

1. **Probabilidade:** traduzir o enunciado antes da fórmula; não inverter `P(A|B)` e `P(B|A)`.
2. **PCM:** `+1 bit ≈ +6 dB` de SQNR; `L=2^N`.
3. **Português:** VTI + `se` → índice de indeterminação do sujeito; verbo no singular.
4. **Inglês:** separar condition, cause e consequence sem depender de tradução mecânica.

---

## 11) Leitura do desempenho do dia

- Item 11 permaneceu muito forte: **20/20** entre D7 e histórico/adaptado.
- QTI-15 misto mostrou desempenho alto e estável: **93,3%**.
- Não houve a mesma queda progressiva de atenção observada no final do dia anterior.
- Os erros ficaram concentrados em regras pontuais e interpretação de relação lógica, sem indicação de perda ampla de conteúdo técnico.

---

## 12) Próximo passo

Para 22/10/2026:

- D7 do **Item 12 — Sistemas Ópticos**;
- questões históricas CESGRANRIO de óptica/Metro Ethernet quando disponíveis;
- QTI misto anti-repetição;
- retestes curtos dos quatro pontos anotados acima, sem pistas ou repetição literal.
