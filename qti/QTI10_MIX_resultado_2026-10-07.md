# QTI-10 Mesclado — Engenharia de Telecomunicações — 07/10/2026

**Resultado:** **9/10 (90%)**  
**Tempo total:** **357 s (5min57s)**  
**Tempo médio:** **36 s/questão**  
**Anti-repetição:** validado  
**Rotação semântica:** ativa  
**Repetição exata:** não  
**Próxima ação:** **REPAIR_AND_RETEST**

## Erro

- **Item 11 — Redes IP**
- **Tópico:** TCP — controle de congestionamento
- **Questão:** QTI10-MIX-20261007-Q09
- **Canonical ID:** `ADAPT-CESGRANRIO-Q433-TCP-20261007`
- **Marcada:** A
- **Correta:** B
- **Tempo:** 49 s
- **Confiança:** 2/5
- **Tipo de erro registrado:** UNKNOWN

### Reparo recomendado
Revisar especificamente:
- `cwnd` e `ssthresh`;
- **slow start** × **congestion avoidance**;
- reação a **timeout**;
- **3 ACKs duplicados**, fast retransmit e fast recovery.

Depois do micro-reparo, aplicar 2 questões inéditas/análogas e 1 reteste dirigido.

## Acertos com confiança baixa

Além do erro em TCP, há três acertos que merecem revisão curta por baixa confiança:

| Item | Tópico | Confiança | Tempo |
|---|---|---:|---:|
| 4 | AM convencional — sobremodulação | 1/5 | 13 s |
| 6 | Antena log-periódica | 2/5 | 17 s |
| 10 | IEEE 802.11 — RTS/CTS | 2/5 | 22 s |

Esses acertos contam como corretos, mas não devem ser tratados como domínio tão estável quanto os acertos de alta confiança.

## Questões mais lentas

- **Propagação ionosférica — rotação de Faraday:** 76 s, correta, confiança 5/5.
- **Distribuição de Poisson:** 70 s, correta, confiança 5/5.

Não são erros, mas podem entrar em rotação futura por fluência.

## Leitura do resultado

O desempenho global foi forte: **9/10** em bloco mesclado e sem repetição exata. O único erro de conteúdo ficou concentrado em **TCP / controle de congestionamento**. Os demais pontos de atenção são de **confiança**, especialmente AM, log-periódica e RTS/CTS.
