# 13/11/2026 — Bloco 4: distribuição exponencial e EDCA

**Tipo:** explicação de dois conteúdos até então não ensinados e 4 questões autorais no estilo CESGRANRIO (não originais oficiais). Sem tempo líquido aferido.

**Resultado:** 2/4 (50%). **Respostas:** C, A, A, D. **Gabarito:** E, C, A, D.

| Q | Tema | Marcação | Correta | Estado |
|---|---|---|---|---|
| 1 | Distribuição exponencial, média 5 minutos, já funcionou 6 min, prob. durar mais 4 | C | E | ERRO: e^(-0,8), não e^(-1,2) |
| 2 | Poisson 3 alarmes/hora, 20 min sem alarme, pelo menos um nos próximos 10 | A | C | ERRO: 1-e^(-0,5), não e^(-0,5) |
| 3 | IEEE 802.11e EDCA vídeo AC_VI e backup AC_BK | A | A | ACERTO |
| 4 | EDCA com parâmetros de contenção diferenciados (AIFS/CW) | D | D | ACERTO |

**Diagnóstico:**
- Q1: errou a interpretação do intervalo adicional, não a fórmula básica; na exponencial sem memória P(T>6+4|T>6)=P(T>4)=e^(-4/5). Erro de transferência depois da teoria nova. Evidência adicionada ao CE-20261112-001; passar de `NOVO_CONTEUDO_A_ENSINAR` para `PENDENTE_REPARO`, não 'esquecimento'.
- Q2: confundiu a probabilidade de nenhum evento com a de pelo menos um. Taxa em 10min=0,5: P(N≥1)=1-P(N=0)=1-e^(-0,5). Novo caderno de erro CE-20261113-005 (Poisson complemento).
- Q3 e Q4: 2/2 imediatamente após ensino do IEEE 802.11e/EDCA; CE-20261112-002 passa de `NOVO_CONTEUDO_A_ENSINAR` para `REPARO_IMEDIATO_FEITO_RETESTE_PENDENTE`, não consolidado.
- Próximos passos: duas questões novas de transferência para os dois erros, conforme solicitação do aluno; reteste posterior D3 16/11, D7 20/11, D21 04/12. Registros de treino guiado não entram como prova original inédita.
