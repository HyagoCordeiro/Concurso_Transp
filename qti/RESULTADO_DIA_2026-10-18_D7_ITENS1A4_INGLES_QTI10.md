# Desenvolvimento do dia — 18/10/2026

## Contexto da sessão
Dia de consolidação da Fase 2 para CESGRANRIO/Transpetro — Engenharia de Telecomunicações.

Fontes e calibração usadas ao longo do dia:
- provas históricas CESGRANRIO/Transpetro 2012, 2018 e 2023;
- questões CESGRANRIO/Petrobras;
- QConcursos como referência de questões históricas;
- edital de Engenharia de Telecomunicações 2026.

---

## Bloco 1 — D7 dos Itens 1 a 4

### Resultado principal
- Questões: 20
- Resultado bruto: **16/20 = 80%**
- Houve 1 erro de marcação declarado pelo usuário na Q16.
- Desempenho conceitual ajustado: **17/20 = 85%**

### Distribuição por item
- Item 1 — Probabilidade e Processos Estocásticos: **4/5**
- Item 2 — Matemática Aplicada a Sinais: **4/5**
- Item 3 — Sinais e Sistemas: **4/5**
- Item 4 — Princípios de Telecomunicações: **4/5**

### Erros conceituais reais
1. **Combinação de variáveis gaussianas**
2. **Período fundamental**
3. **Transformada Z**

### Q16 — observação
A questão de eficiência espectral foi marcada errada por engano. O usuário informou que sabia a alternativa correta. Classificação: **erro de marcação, não lacuna conceitual**.

---

## Reparo — Gaussianas

Regra reforçada para variáveis independentes:

`Y = aX + bZ`

- `muY = a muX + b muZ`
- `Var(Y) = a^2 Var(X) + b^2 Var(Z)`

Frase de prova:

**A média mantém o sinal; a variância usa o coeficiente ao quadrado.**

### Resultados
- 1º bloco misto: **3/5**
- reparo direcionado: **4/4**

Ponto inicialmente confundido: em soma ou diferença de gaussianas independentes, as variâncias entram com os coeficientes ao quadrado; o sinal da média não é tratado da mesma forma que o da variância.

Status ao final: **reparado**.

---

## Reparo — Período fundamental

Questão-chave:

`x(t) = cos(200 pi t) + sin(500 pi t)`

- `f1 = 100 Hz`
- `f2 = 250 Hz`
- `f0 = MDC(100,250) = 50 Hz`
- `T0 = 1/50 = 20 ms`

Regra consolidada:

`omega -> f = omega/(2 pi) -> f0 = MDC das frequências -> T0 = 1/f0`

Observação importante:
Um divisor comum menor pode gerar um período válido maior, mas o período fundamental é o **menor período positivo**, por isso usa-se o maior divisor comum das frequências.

### Resultado do reparo
- **5/5 = 100%**

Status ao final: **reparado; manter revisão espaçada**.

---

## Reparo — Transformada Z

Pares e propriedades reforçados:

- `delta[n] <-> 1`
- `delta[n-k] <-> z^-k`
- `u[n] <-> 1/(1-z^-1)`
- `a^n u[n] <-> 1/(1-a z^-1)`
- atraso: `x[n-k] <-> z^-k X(z)`
- `z^-1` representa atraso de uma amostra
- sistema causal racional: ROC fora do polo mais externo
- estabilidade: ROC deve conter o círculo unitário
- sistema causal racional estável: polos com `|p| < 1`

Também foi reforçada a passagem de equação de diferenças para `H(z)`.

### Resultado
- **5/5 = 100%**

Status ao final: **reparado**.

---

## Resposta em frequência — notch / zeros no eixo jω

Foi trabalhada a leitura de funções do tipo:

`H(s) = K (s^2 + w0^2) / (s^2 + a s + w0^2)`

Procedimento consolidado:
1. calcular `H(0)`;
2. localizar os zeros do numerador;
3. verificar `lim H(jw)` para alta frequência.

Regra principal:

**zero em `s = +-j w0` -> rejeição/notch em `w = w0`.**

Exercícios intermediários antes dos blocos seguintes:
- questão com `H(s)=5(s^2+9)/(s^2+0,6s+9)`: **B ✅**
- questão com `H(s)=4(s^2+16)/(s^2+0,8s+16)`: **A ✅**

---

## Bloco 2 — Reforço do Item 2

Distribuição:
- 1 período fundamental
- 2 números complexos
- 3 Fourier
- 1 convolução

### Resultado
- **7/7 = 100%**

Acertos confirmados em:
- período fundamental;
- divisão de números complexos;
- forma polar;
- simetria par em Série de Fourier;
- deslocamento no tempo;
- modulação/deslocamento em frequência;
- convolução discreta.

Status: **Item 2 muito consistente na sessão**.

---

## Bloco 3 — Histórico CESGRANRIO dos Itens 1 a 4

Bateria com 15 questões, baseada em padrões históricos CESGRANRIO/Transpetro/Petrobras.

### Resultado
- **13/15 = 86,7%**

### Erros
1. eficiência espectral / roll-off;
2. taxa de código + 16-QAM + largura de banda.

Itens 1, 2 e 3 ficaram sem erro neste bloco.

---

## Reforço intensivo — Eficiência espectral

A questão histórica da Transpetro 2012 foi usada como base conceitual.

### Relações fundamentais

`eta = R_util / B`

Para modulação M-ária:

`bits/simbolo = log2(M)`

Tendências:
- `M ↑ -> bits/símbolo ↑ -> eta ↑`
- `Rc ↑ -> redundância ↓ -> eta ↑`
- `alpha ↑ -> banda ↑ -> eta ↓`
- `redundância ↑ -> eta ↓`
- banda maior com a mesma taxa útil -> `eta ↓`

Forma útil para raciocínio:

`eta ~ Rc log2(M) / (1 + alpha)`

### Dificuldade observada
O usuário identificou que estava respondendo várias afirmativas de forma automática, sem ler o sentido exato. O treino passou a variar propositalmente a redação das afirmações para quebrar esse padrão.

### Sequência de reforço
- 2 questões iniciais: **1/2**
- 3 questões com redação misturada: **2/3**
- 2 questões invertendo as relações: **0/2**
- mini-aula completa
- 5 questões pós-aula: **3/5**
- 2 reparos: **1/2**
- 2 questões finais: **2/2**

### Regra finalmente consolidada

**Taxa de código maior = menos redundância = maior eficiência espectral.**

**Roll-off maior = mais banda = menor eficiência espectral.**

Status ao final: **entendido; manter revisão curta para evitar resposta automática**.

---

## Inglês — primeiro bloco Transpetro 2023

Foi aplicado o texto conhecido sobre tecnologia espacial e transporte.

### Resultado bruto
- **5/10 = 50%**

O usuário informou depois que praticamente não releu o texto por já conhecê-lo, então este resultado foi considerado pouco representativo da capacidade real de leitura.

Erros observados nesse bloco:
- `struggle to deliver`
- `driving down the cost`
- `low latency`
- interpretação de `consistent flow`
- `cutting-edge`

---

## Inglês — texto novo no estilo Petrobras/CESGRANRIO 2018

Foram usados dois textos adaptados sobre:
- políticas de investimento em energia limpa;
- crescimento de energias renováveis.

### Resultado
- **6/10 = 60%**

### Erros
1. `rather than` — preferência/contraste entre alternativas;
2. `should` — recomendação;
3. ideia central global do segundo texto;
4. `not only... but also` — adição.

### Reparo
- 4 questões direcionadas
- **4/4 = 100%**

Vocabulário/conectores reforçados:
- `rather than` = em vez de;
- `should` = deveria / recomendação;
- `not only... but also` = não apenas... mas também / adição.

Status: **reparo concluído**.

---

## Bloco 5 — QTI-10 final dos 13 itens

### Respostas do usuário
1. C ✅
2. C ❌ — correta A
3. C ✅
4. B ✅
5. B ✅
6. C ✅
7. D ✅
8. B ✅
9. E ✅
10. C ✅

### Resultado oficial corrigido
- **9/10 = 90%**

### Observação importante sobre a Q6 — Zona de Fresnel
Inicialmente a correção do assistente marcou a resposta C como errada por um erro aritmético.

Dados:
- `f = 6 GHz`
- `lambda = 0,05 m`
- `d1 = d2 = 2000 m`

`r1 = sqrt[(0,05 x 2000 x 2000)/4000]`

O valor dentro da raiz é **50**, e não 25.

Logo:

`r1 = sqrt(50) = 7,07 m`

Portanto a resposta do usuário **C = 7,1 m estava correta**.

Esse ajuste foi explicitamente identificado pelo usuário e deve ser preservado para não registrar um falso erro em Fresnel.

### Único erro real do QTI-10
**Resposta em frequência / notch**.

Questão:

`H(s)=8(s^2+25)/(s^2+0,4s+25)`

- `H(0)=8 -> aproximadamente 18 dB`
- zeros em `s=+-j5`
- notch em `w=5 rad/s`
- alta frequência -> ganho tende novamente a 8, aproximadamente 18 dB

Correta: **A**.

---

## Reparo final — Resposta em frequência

Foram aplicadas 2 questões novas do mesmo padrão, com valores diferentes.

### Resultado
- **2/2 = 100%**

Regra de encerramento:

`zero em +-j w0 -> notch em w0`

Sempre verificar:
- `H(0)`
- zeros
- `lim H(jw)` em alta frequência

Status: **erro reparado**.

---

# Balanço do dia

## Principais resultados
- D7 Itens 1–4: **16/20 bruto = 80%**; **17/20 conceitual = 85%** considerando o erro de marcação declarado.
- Item 2 reforço: **7/7 = 100%**.
- Histórico CESGRANRIO Itens 1–4: **13/15 = 86,7%**.
- Período fundamental: **5/5 no reparo**.
- Gaussianas: **3/5 + 4/4 no reparo**.
- Transformada Z: **5/5 após mini-aula**.
- Inglês com texto novo Petrobras/CESGRANRIO: **6/10**, seguido de **4/4 no reparo**.
- QTI-10 final 13 itens: **9/10 = 90%**.
- Reparo do único erro do QTI: **2/2 = 100%**.

## Evolução observada
- Período fundamental, Gaussianas e Transformada Z responderam bem ao reforço e não permaneceram como lacunas abertas ao final da sessão.
- Eficiência espectral exigiu o maior volume de trabalho do dia; a dificuldade foi em grande parte de leitura automática das afirmações, especialmente a relação entre taxa de código e redundância.
- Em Inglês, o texto novo mostrou necessidade de continuar trabalhando conectores, modais e ideia principal, mas o reparo imediato foi 100%.
- Fresnel foi resolvido corretamente pelo usuário; não registrar esse tópico como erro do QTI final.
- O QTI final de 90% confirma boa retenção ampla nos 13 itens.

## Pontos para revisão espaçada
1. Eficiência espectral: `Rc`, redundância e roll-off.
2. Inglês: conectores, modais e ideia principal.
3. Resposta em frequência: localizar zeros e distinguir notch de pico.
4. Manter revisão espaçada de período fundamental, Gaussianas e Transformada Z, sem excesso de repetição imediata.

## Próximo direcionamento
Seguir na Fase 2 com revisão D7 dos itens seguintes, histórico CESGRANRIO e QTI misto ao final do dia, mantendo reparo imediato de 2 questões para cada erro real.
