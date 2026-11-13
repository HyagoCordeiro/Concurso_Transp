# Bloco 3 — Revisão D3 — Bayes e convolução discreta — 13/11/2026

- Referência de lacunas: erros Q14 (Bayes P(falha|alarme)) e Q15 (convolução de impulsos) do QTI-20 de 10/11.
- **Fonte de questões:** 5 AUTORAIS de transferência novas, inspiradas no estilo CESGRANRIO; não originais oficiais do QConcursos, sem cronômetro.
- **Respostas:** D, E, A, E, B.
- **Gabarito:** D, C, A, E, B.
- **Resultado:** **4/5 = 80%**.

| Q | Item | Tópico | Marcada | Gabarito | Resultado |
|---|---|---|---|---|---|
| 1 | 1.1 | Bayes: VSAT com alarme (30% VSAT, P(A|V)=20%, P(A|T)=5%) | D | D | ACERTO: 0,06/0,095=63,2% |
| 2 | 1.1 | Bayes: defeito dado alarme, prevalência 10%, sensibilidade 80%, falso positivo 20% | E | C | ERRO: 0,08/(0,08+0,18)=30,77%; E=80% era P(A|D) |
| 3 | 1.1 | Bayes: defeito dado ausência de alarme, P(D)=15%, P(~A|D)=20%, P(~A|~D)=90% | A | A | ACERTO: 0,03/(0,03+0,765)=3,77% |
| 4 | 2.4 | Convolução discreta: x=[1,-2,3], h=[2,-1], y[2] | E | E | ACERTO: 2+6=8 |
| 5 | 2.4 | Convolução discreta: h=[1,2,-1], x=[1,3,2], y[2] | B | B | ACERTO: -1+6+2=7 |

## Diagnóstico

- Bayes: 2/3, **PENDENTE_REPARO** em inverter condicionamento P(D|A) versus P(A|D), apesar de acertos nas demais situações.
- Convolução discreta: 2/2 em reteste espaçado D3 com novos valores e formas; evidência de recuperação, sem voltar a repetir as questões originais.
- Erro CE-20261113-004 novo: Q2 (E/C), classificação `INVERSAO_CONDICIONAL_BAYES`; regra de revisão: definir probabilidade pedida antes de usar a fórmula. Data D3 sugerida 16/11 (já retestado de erro 10/11), D7 20/11, D21 04/12.
- Revisão global de 10/11 D3 foi **parcialmente executada**, apenas Bayes e convolução; Português e Inglês foram treinados em blocos independentes 13/11.
- Registro de treino guiado; não confundir com simulado inédito ou original CESGRANRIO.
