# Resultados do dia — 28/10/2026

**Concurso-alvo:** Transpetro 2026 — Engenheiro(a) de Telecomunicações  
**Banca:** CESGRANRIO  
**Data:** 28/10/2026  
**Data oficial da prova considerada:** **06/12/2026**  
**Status:** sessão encerrada e consolidada.

## Resumo executivo

### Blocos principais
- QTI-30 misto: **28/30 (93,3%)**.
- Sinais / Fourier: **5/10 (50%)**.
- Telecom direcionado — Segurança/QoS/802.1X: **8/10 (80%)**.
- Probabilidade: **5/5 (100%)**.
- Português dirigido: **5/5 (100%)**.
- Inglês dirigido: **3/5 (60%)**.
- Telefonia IP / H.323 — bloco inicial: **4/5 (80%)**.
- H.323 — bateria inédita após aula completa: **9/10 (90%)**.

**Agregado dos blocos principais:** **67/80 = 83,8%**.  
> Este percentual mistura QTI e blocos dirigidos de estudo; não deve ser tratado como simulado independente.

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

### Reteste de Fourier
Após nova explicação separando deslocamento no tempo de deslocamento em frequência, foi feito reteste com quatro novas questões:
- `x(t-2)` -> `X(f)e^{-j4πf}`;
- `x(t+5)` -> `X(f)e^{+j10πf}`;
- `x(t)e^{j8πt}` -> `X(f-4)`;
- `x(t)e^{-j10πt}` -> `X(f+5)`.

**Resultado: 4/4.**

Leitura: houve melhora clara na distinção entre deslocamento temporal e deslocamento espectral, mas o tema deve reaparecer em revisão futura.

## 3. Polos e estabilidade

Regras reforçadas:
- `Re{p}<0` para todos os polos -> assintoticamente estável;
- polos simples sobre o eixo imaginário, sem polos no semiplano direito -> marginalmente estável;
- qualquer polo com `Re{p}>0` -> instável.

No último reteste de 3 questões: **2/3**.

Erro remanescente: sistema com polos complexos conjugados no semiplano esquerdo foi classificado como marginalmente estável; automatizar que parte imaginária diferente de zero, por si só, não implica instabilidade nem estabilidade marginal.

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

## 8. Telefonia IP / H.323 — bloco inicial

**Resultado: 4/5 (80%).**

Tópicos:
- Gatekeeper;
- H.225;
- H.245;
- RTP;
- RAS.

Erro:
- confusão entre **H.225** e **H.245**.

Regra reforçada:
- H.225 / Q.931 / RAS -> sinalização de chamada e funções relacionadas ao Gatekeeper;
- H.245 -> negociação de capacidades e controle de canais lógicos.

## 9. Aula completa de H.323

Foi realizada revisão teórica completa, com foco no padrão de cobrança CESGRANRIO e nas famílias históricas encontradas nas provas e materiais do projeto.

Associações consolidadas:
- **Gatekeeper** -> controle de admissão, largura de banda, tradução de endereços e gerenciamento de zona;
- **Gateway** -> interligação entre H.323 e outras redes, como PSTN;
- **MCU** -> conferências multiponto;
- **RAS** -> Registration, Admission and Status;
- **Q.931** -> estabelecimento/encerramento da chamada;
- **H.245** -> negociação de capacidades, codecs e canais lógicos;
- **RTP** -> transporte da mídia em tempo real;
- **RTCP** -> controle/estatísticas/qualidade da mídia;
- **G.711** -> codec de áudio obrigatório no conjunto de capacidades históricas H.323.

Modelo mental:
`RAS -> Q.931 -> H.245 -> RTP/RTCP`

Macete:
- `Q.931 CHAMA`;
- `H.245 NEGOCIA`;
- `RTP CARREGA`;
- `RTCP CONTROLA`.

## 10. H.323 — bateria inédita

**Resultado: 9/10 (90%).**

Acertos:
- Gatekeeper;
- RAS;
- MCU;
- Gateway;
- RTP;
- RTCP;
- G.711;
- associação global dos protocolos;
- fluxo completo de chamada H.323.

Único erro:
- Q.931 x H.245: foi marcado Q.931 para negociação de codecs/canais lógicos; correto é **H.245**.

### Repair H.245 x Q.931
**Resultado: 3/3.**

Regra consolidada:
- **Q.931** -> SETUP / ALERTING / CONNECT / sinalização da chamada;
- **H.245** -> capabilities / codecs / logical channels.

## Diagnóstico final do dia

### Pontos fortes
- QTI Telecom: **20/20**;
- Probabilidade: **5/5**;
- Português dirigido: **5/5**;
- H.323 após aula: **9/10 + 3/3 no repair**;
- Fourier respondeu **4/4** no reteste específico após correção conceitual.

### Prioridades para próximas revisões
1. **Sinais/Fourier** — manter automatizadas as duas famílias de deslocamento.
2. **Polos e estabilidade** — classificar sempre pela parte real do polo.
3. **Inglês** — `despite` e `provided that`.
4. **ACL padrão IPv4** — endereço de origem.
5. **IEEE 802.1X** — Supplicant x Authenticator x Authentication Server.
6. **H.323** — revisão futura curta de Q.931 x H.245 para retenção D7.

## Regras mantidas
- priorizar CESGRANRIO/Transpetro/Petrobras;
- usar QConcursos como base de consulta;
- confrontar o edital com questões históricas;
- respeitar anti-repetição de famílias recentes;
- variar a posição das alternativas corretas;
- data oficial da prova: **06/12/2026**.
