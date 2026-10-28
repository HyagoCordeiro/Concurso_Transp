# Resultados do dia — 28/10/2026 — snapshot parcial

**Concurso-alvo:** Transpetro 2026 — Engenheiro(a) de Telecomunicações  
**Banca:** CESGRANRIO  
**Data:** 28/10/2026  
**Data oficial da prova considerada:** **06/12/2026**  
**Status:** sessão ainda em andamento; este arquivo registra o progresso até o pedido de salvamento.

## Resumo parcial

### Blocos principais concluídos
- QTI-30 misto: **28/30 (93,3%)**.
- Sinais / Fourier: **5/10 (50%)**.
- Telecom direcionado — Segurança/QoS/802.1X: **8/10 (80%)**.
- Probabilidade: **5/5 (100%)**.
- Português: **5/5 (100%)**.
- Inglês: **3/5 (60%)**.

**Agregado dos blocos principais até este ponto:** **54/65 = 83,1%**.  
> Não tratar este percentual como simulado independente, pois mistura blocos dirigidos de estudo com o QTI-30.

## 1. QTI-30 misto

**Resultado: 28/30 (93,3%).**

Distribuição:
- Telecom: **20/20 (100%)**.
- Português: **4/5 (80%)**.
- Inglês: **4/5 (80%)**.

Erros:
1. Português — referência pronominal ambígua.
2. Inglês — `despite` = `in spite of` = apesar de; valor concessivo.

Repair imediato: **2/2**.

## 2. Sinais / Fourier

**Resultado do bloco principal: 5/10 (50%).**

Pontos que geraram erro:
- modulação por exponencial complexa:
  - `x(t)e^{+j2πf0t} -> X(f-f0)`;
  - `x(t)e^{-j2πf0t} -> X(f+f0)`;
- deslocamento no tempo:
  - `x(t-t0) -> X(f)e^{-j2πft0}`;
  - `x(t+t0) -> X(f)e^{+j2πft0}`;
- propriedade `t x(t) -> (j/2π) dX(f)/df`;
- cálculo de polos complexos;
- classificação de estabilidade por posição dos polos.

### Repair de Fourier
Após nova explicação separando deslocamento no tempo de deslocamento em frequência, foi feito um reteste com quatro novas questões:
- `x(t-2)` -> `X(f)e^{-j4πf}`;
- `x(t+5)` -> `X(f)e^{+j10πf}`;
- `x(t)e^{j8πt}` -> `X(f-4)`;
- `x(t)e^{-j10πt}` -> `X(f+5)`.

**Resultado do reteste: 4/4.**

Leitura atual: houve melhora clara na distinção entre deslocamento temporal e deslocamento espectral, mas o tema ainda deve reaparecer em revisão futura.

## 3. Polos e estabilidade

Regras reforçadas:
- `Re{p}<0` para todos os polos -> assintoticamente estável;
- polos simples sobre o eixo imaginário, sem polos no semiplano direito -> marginalmente estável;
- qualquer polo com `Re{p}>0` -> instável.

No último reteste de 3 questões: **2/3**.

Erro remanescente: sistema com polos complexos conjugados no semiplano esquerdo foi classificado como marginalmente estável; precisa automatizar que parte imaginária diferente de zero, por si só, não implica instabilidade nem estabilidade marginal.

## 4. Telecom direcionado — Segurança / QoS / 802.1X

**Resultado: 8/10 (80%).**

Acertos principais:
- IPsec ESP;
- AH;
- IKE;
- ACL estendida;
- DiffServ / DSCP;
- EF;
- IPsec modo túnel;
- traffic shaping x policing.

Erros:
1. ACL padrão IPv4 -> filtra principalmente pelo **endereço IP de origem**.
2. IEEE 802.1X -> **Authenticator** é o switch/AP que controla o acesso à porta; Supplicant é o cliente; Authentication Server normalmente é RADIUS.

## 5. Probabilidade

**Resultado: 5/5 (100%).**

Tópicos:
- amostragem sem reposição;
- Poisson;
- binomial;
- `pelo menos um` via complemento;
- hipergeométrica.

Desempenho muito bom, inclusive na tradução do enunciado para o evento probabilístico.

## 6. Português

**Resultado: 5/5 (100%).**

Tópicos:
- causa;
- consequência;
- vírgula com adjunto adverbial deslocado;
- crase;
- referência pronominal sem ambiguidade.

## 7. Inglês

**Resultado: 3/5 (60%).**

Acertos:
- `because` -> cause;
- `therefore` -> consequence;
- `although` -> contrast/concession.

Erros:
- `despite` -> `in spite of` -> concessão;
- `provided that` -> `desde que / contanto que` -> condição.

## Diagnóstico parcial do dia

### Pontos fortes
- QTI Telecom: **20/20**;
- Probabilidade: **5/5**;
- Português dirigido: **5/5**.

### Prioridades atuais
1. Sinais/Fourier — manter o ganho do reteste de 4/4 e revisar novamente em intervalo posterior.
2. Polos/estabilidade — automatizar parte real dos polos.
3. Inglês — `despite` e `provided that`.
4. Telecom — ACL padrão e papéis do 802.1X.

## Continuidade

A sessão **não foi encerrada**. O usuário pediu para salvar este progresso e continuar estudando.

Manter as regras:
- priorizar CESGRANRIO/Transpetro/Petrobras;
- usar QConcursos como base de consulta;
- respeitar anti-repetição de famílias recentes;
- variar a posição das alternativas corretas;
- data oficial da prova: **06/12/2026**.
