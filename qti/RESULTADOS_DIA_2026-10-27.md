# Resultados do dia — 27/10/2026

**Concurso-alvo:** Transpetro 2026 — Engenheiro(a) de Telecomunicações  
**Banca:** CESGRANRIO  
**Data:** 27/10/2026  
**Data oficial da prova considerada:** **06/12/2026**  
**Classificação:** revisão ativa + QTI Telecom + blocos dirigidos + Português + Inglês.

## Resumo executivo

- Revisão ativa: **7/8 (87,5%)**.
- QTI-20 Telecom: **20/20 (100%)**.
- Probabilidade: **8/8 (100%)**.
- Sinais e Sistemas: **6/8 (75%)**.
- Satélite + Radiopropagação + Enlace: **9/10 (90%)**.
- Português — texto estilo CESGRANRIO: **9/10 (90%)**.
- Inglês — texto sobre energia, petróleo e logística: **10/10 (100%)**.

**Total agregado do dia:** **69/74 = 93,2%**.  
> Este percentual é um agregado de blocos de estudo/revisão e não deve ser tratado como resultado de simulado independente.

## 1. Revisão ativa — 8 questões

**Resultado: 7/8 (87,5%).**

Pontos revisados:
- deslocamento em frequência em Fourier;
- hipergeométrica em amostragem sem reposição;
- falso cognato `eventually`;
- conectores em Português;
- suporte da convolução;
- leitura de `no máximo`;
- campo distante de antenas;
- capacidade de correção de código de Hamming.

Único erro:
- propriedade de modulação por exponencial complexa:
  - `x(t)e^{j2πf0t} -> X(f-f0)`.

## 2. QTI-20 Telecom

**Resultado: 20/20 (100%).**

Tópicos cobrados:
- 16-QAM e bits por símbolo;
- 8-PSK e taxa de símbolos;
- `Eb/N0`;
- PCM e níveis de quantização;
- TDM;
- Erlang B;
- antena parabólica: ganho x largura de feixe;
- primeira zona de Fresnel;
- perda em espaço livre x frequência;
- CSMA/CA;
- SNMP/MIB;
- MPLS label/FEC;
- OSPF DR/BDR;
- MPLS L3VPN / RD;
- BGP LOCAL_PREF;
- IEEE 802.1Q / VID;
- LTE handover;
- DWDM x CWDM;
- IEEE 802.3af PoE;
- BER.

Leitura do bloco: domínio técnico muito forte, sem erros.

## 3. Probabilidade

**Resultado: 8/8 (100%).**

Tópicos:
- hipergeométrica;
- `pelo menos um` -> `X >= 1`;
- Poisson;
- `no máximo 1` -> `X <= 1`;
- probabilidade condicional/interseção;
- união de eventos;
- gaussianas conjuntas + covariância zero -> independência;
- média e variância da binomial.

Ponto importante: houve boa recuperação justamente nos temas que vinham gerando erro de leitura.

## 4. Sinais e Sistemas

**Resultado: 6/8 (75%).**

Acertos:
- escalamento temporal;
- modos naturais por polos;
- ROC causal em Laplace;
- suporte da convolução;
- derivada em Fourier;
- ROC causal em Z.

Erros:
1. **Deslocamento no tempo em Fourier**
   - `x(t-t0) -> X(f)e^{-j2πft0}`.
   - Para `x(t-3)`, o fator é `e^{-j2πf3}`.
   - Para ser sinal positivo no expoente, seria `x(t+3)`.
2. **Cálculo de polos complexos**
   - `s²+4s+13=0 -> s=-2±j3`.

Este foi o bloco de menor desempenho do dia e deve receber prioridade na próxima revisão.

## 5. Satélite + Radiopropagação + Enlace

**Resultado: 9/10 (90%).**

Tópicos:
- perda em espaço livre x frequência;
- figura de mérito `G/T`;
- raio máximo da primeira zona de Fresnel;
- `C/N0`;
- distância dobrada -> aproximadamente +6 dB de perda;
- balanço de enlace;
- EIRP;
- banda Ka e atenuação por chuva/gases;
- LEO x GEO;
- relação entre `C/N0`, taxa de bits e `Eb/N0`.

Único erro:
- aumento de **3 dB** no ganho da antena transmissora produz, idealmente e mantendo os demais termos constantes, aumento de **3 dB** na potência recebida.

Regra:
`Pr = Pt + Gt + Gr - L`.

## 6. Português — texto estilo CESGRANRIO

**Resultado: 9/10 (90%).**

Texto sobre tecnologia, eficiência, confiabilidade e dependência de sistemas.

Cobranças:
- ideia central;
- inferência;
- conectores;
- referência pronominal;
- interpretação contextual.

Único erro:
- no trecho `Na realidade...`, a função era **corrigir uma conclusão precipitada**, e não confirmar a impressão anterior.

## 7. Inglês — energia, petróleo e logística

**Resultado: 10/10 (100%).**

Texto em estilo CESGRANRIO sobre segurança energética, petróleo, rotas alternativas, pipelines, custos logísticos e vulnerabilidade de países importadores.

Cobranças:
- main idea;
- reading comprehension;
- inference;
- connectors;
- contextual vocabulary;
- falso cognato `eventually`;
- `ultimately`.

Ponto relevante:
- `eventually` foi respondido corretamente desta vez, após erro recorrente no dia anterior.
- `eventually` = `after some time / ultimately / com o tempo / acabar por`.

## Diagnóstico do dia

### Pontos fortes
- QTI-20 Telecom: **100%**;
- Probabilidade: **100%**;
- Inglês: **100%**;
- Satélite/Radiopropagação/Enlace: **90%**;
- Português: **90%**.

### Ponto prioritário
**Sinais e Sistemas / Fourier**, principalmente:
- deslocamento no tempo;
- deslocamento em frequência;
- sinais dos expoentes nas propriedades de Fourier;
- cálculo de polos complexos.

## Pendência combinada para amanhã

O usuário decidiu encerrar o dia após Português e Inglês. Ficaram programados para amanhã:

1. **QTI-30 misto final** — 20 Telecom + 5 Português + 5 Inglês.
2. **Correção direcionada** apenas dos erros do QTI-30.

Manter prioridade CESGRANRIO/Transpetro/Petrobras, QConcursos como base de consulta, anti-repetição de famílias recentes e foco em questões inéditas/adaptadas no nível histórico da banca.
