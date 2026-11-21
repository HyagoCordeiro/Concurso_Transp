# Fechamento — Caderno de Erros 21/11/2026

**Concurso:** Transpetro Eng. Telecom — CESGRANRIO, prova-alvo 06/12/2026.
**Fonte:** conversa de 21/11/2026. Questões de reforço **autorais/adaptadas**, não literais de prova. Tempo líquido não aferido.

## Quatro erros, dois novos itens por tema

| Questão | Tema | Marcou | Correto | Resultado |
|---:|---|:---:|:---:|---|
| 1 | MPLS 0x123AB3C8: campos S e TTL | C | C | ACERTO |
| 2 | MPLS 0x0D4E26B4: campos S e TTL | D | D | ACERTO |
| 3 | WSS média=3, R_X(τ)=9+16e^(-2/τ/). Qual variância? | A | A | ACERTO |
| 4 | WSS média=-2, R_X(τ)=4+25e^(-4/τ/). Qual DESVIO PADRÃO? | B | E | ERRO |
| 5 | Fibra monomodo 32km, dispersão 15 ps/nm/km, largura espectral 0,5nm; alargamento? | B | B | ACERTO |
| 6 | Fibra monomodo D=-18 ps/nm/km, 20km, largura 0,6nm; módulo do alargamento? | D | D | ACERTO |
| 7 | Bayes: linha A 30%, defeitos 6%; B 70%, defeitos 3%; P(A/defeito)? | E | E | ACERTO |
| 8 | Bayes: roteador X 20%, defeitos 15%; Y 80%, defeitos 5%; P(X/defeito)? | A | A | ACERTO |

**Resultado do reforço:** **7/8 (87,5%)**. MPLS **2/2** (novos hexadecimais); autocorrelação **1/2**; dispersão cromática **2/2**; Bayes **2/2**.

**Único erro:** Q04, item 1.3 — marcou B (25) quando o enunciado solicitava o **desvio padrão**; correta E (5). `R_X(0)=4+25=29`, `mu=-2`, variância `29-4=25`, desvio padrão `sqrt(25)=5`. **Persistência do contraste variância vs. desvio padrão** (erros também observados em 20/11 e 21/11 na autocorrelação). Reteste espaçado pendente; sem reparo adicional obrigatório hoje.

## Total de 21/11

- **Caderno principal:** 11/15 = 73,3%, quatro erros (MPLS S/TTL, autocorrelação/variância, dispersão cromática e Bayes).
- **Reforço final:** 7/8 = 87,5%, um erro (variância versus desvio padrão).
- **Prática total:** 18/23 = 78,3%, **incluindo oito reparos imediatos**. Não tratar 18/23 como um simulado independente.
- Melhoras na rodada final: MPLS hexadecimal, dispersão cromática e Bayes **2/2** cada, evidência de recuperação imediata; **não prova retenção espaçada**.

**Próximo objetivo:** simulado integral 70 questões em **22/11/2026**, planejado, ainda não realizado. Não acrescentar novo bloco como concluído até respostas efetivas.

[Dados estruturados](CADERNO_ERROS_REF8_2026-11-21.json) · [Rodada principal](CADERNO_ERROS_R1_2026-11-21.md) · [Caderno permanente](CADERNO_ERROS.md)
