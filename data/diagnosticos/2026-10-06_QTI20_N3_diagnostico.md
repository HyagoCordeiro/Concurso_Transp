# Diagnóstico — QTI-20 N3 — 2026-10-06

Resultado: **13/20 = 65%**. Tempo total: **866 s**; tempo médio: **43 s**. Sem violação anti-repetição registrada. Próxima ação: **REPAIR_AND_RETEST**.

## Itens fracos
- Item 1: 1/2
- Item 2: 1/2
- Item 3: 0/2
- Item 4: 1/2
- Item 7: 0/1
- Item 9: 0/1

## Sete erros a recuperar
1. **Distribuição exponencial — propriedade sem memória**: marcou D; correta A. Tipo registrado: INTERPRETACAO. Ponto-chave: para T exponencial, `P(T>s+t | T>s)=P(T>t)`.
2. **Transformada de Fourier — derivação no tempo**: marcou B; correta E. Tipo: PROCEDIMENTO; confiança baixa. Ponto-chave: `dx(t)/dt ↔ jωX(ω)`.
3. **LTI — resposta ao degrau e ao impulso**: marcou C; correta D; confiança baixa. Ponto-chave: se `s(t)` é a resposta ao degrau, então `h(t)=ds(t)/dt` e `s(t)=∫h(τ)dτ`.
4. **Transformada Z — ROC e causalidade**: marcou C; correta D. Ponto-chave: sistema racional causal → ROC externa ao polo de maior módulo; com polos 0,4 e 0,8, `|z|>0,8`.
5. **Codificação de canal — distância mínima**: marcou B; correta A. Tipo: DESCONHECIMENTO. Ponto-chave: correção garantida de `t=floor((dmin-1)/2)`; para `dmin=5`, t=2.
6. **Radiopropagação — duto troposférico**: marcou A; correta D. Tipo: DESCONHECIMENTO; confiança baixa. Ponto-chave: super-refração intensa pode aprisionar a onda em uma camada troposférica e levá-la além do horizonte normal.
7. **Sistemas celulares — soft handover**: marcou D; correta E. Tipo: INTERPRETACAO. Ponto-chave: soft handover é `make-before-break`, podendo manter mais de um enlace simultaneamente durante a transição.

## Pontos estáveis nesta rodada
Acertos em função densidade contínua, deslocamento em frequência de Fourier, entropia, QoS de videoconferência, RTP/RTCP, diretividade, VSAT estrela, MSTP, SDH, OSPF/ECMP, BGP LOCAL_PREF, MetroEthernet e LGT.

## Ação pedagógica
Executar recuperação dirigida com **uma questão inédita por erro**, variando o caminho de solução e evitando repetir literalmente as famílias recém-acertadas. Depois, se desempenho no reparo for ≥80% com boa confiança, mover os tópicos recuperados para `SPACED_RETEST`; caso contrário, manter `REPAIR_AND_RETEST`.