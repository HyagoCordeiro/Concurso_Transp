# Revisão semanal do caderno de erros — 14/11/2026

**Origem:** treino guiado com questões autorais/adaptadas calibradas pelas provas CESGRANRIO/Transpetro e banco QConcursos. Não são questões originais da CESGRANRIO verificadas nem simulado independente. Sem tempo líquido cronometrado.

## Placar validado

| Etapa | Acertos | Erros (número da questão) |
|---|---|---|
| Bateria principal 1 | 6/10 | 1, 2, 4, 5 |
| Reforço B1 | 4/4 | — |
| Bateria principal 2 | 7/10 | 2, 6, 9 |
| Reforço B2 | 3/3 | — |
| Fixação CWDM | 1/1 | — |
| Bateria principal 3 | 7/10 | 1, 2, 7 |
| Reforço B3 | 3/3 | — |
| Bateria final principal | 9/12 | 4, 9, 12 |
| Reforço final | 3/3 | — |
| **Acumulado** | **43/56 (76,8%)** | **13 nas baterias principais** |

**Baterias principais:** 6/10, 7/10, 7/10, 9/12 = **29/42 (69,0%)**.  
**Reforços + fixação CWDM:** 4/4, 3/3, 1/1, 3/3, 3/3 = **14/14 (100%)**.  
**Condição:** cada um dos 13 erros foi acertado em um reforço posterior; isso **não** confirma retenção espaçada.

## Erros identificados e reparados

- **B1 (6/10):** Q1 exponencial, Q2 Poisson >=2, Q4 Fourier a0, Q5 Laplace resposta ao degrau. **R1 = 4/4.**
- **B2 (7/10):** Q2 Fourier inversão/deslocamento, Q6 nulo do fator de conjunto de 3 antenas, Q9 CWDM/SDH. **R2 = 3/3**, mais **CWDM = 1/1**. O estudante identificou a confusão entre *sinal STM transportado* e *capacidade do canal CWDM* e corrigiu-a.
- **B3 (7/10):** Q1 geométrica até n, Q2 variância binomial versus média, Q7 fase progressiva de antenas. **R3 = 3/3.**
- **Bateria final (9/12):** Q4 Fresnel 60%, Q9 EIRP em watts, Q12 Poisson pelo menos dois. **Reforço final = 3/3**. Cálculos: r1 = sqrt(144) = 12 m, 60% = 7,2 m; EIRP = 20 W × 10 = 200 W; Poisson lambda 2,5: 1 − exp(−2,5)(1+2,5) ≈ 71,27%.

## Fechamento técnico e pendências

Foi concluído o **reparo imediato de todos os 13 erros**. No entanto, as porcentagens de reforço não podem ser somadas às baterias principais para simular desempenho independente. Manter erros originais e **retentionVerified = false** até retestes espaçados. Priorizar no próximo sábado: probabilidade e leitura de eventos, fase de antenas, EIRP, Fresnel e Fourier; incluir também pendências anteriores de Português, Inglês e EDCA, que não foram cobertas nesta revisão específica.

## Rotina semanal instituída pelo estudante

**Todo sábado de manhã será reservado ao caderno de erros acumulados na semana.** Começa com esta sessão de 14/11/2026; próximo sábado: **21/11/2026**.

1. Antes do bloco, consultar `data/CADERNO_ERROS.json`, `qti/CADERNO_ERROS.md`, `data/REVISOES.json`, `data/RESULTADOS.json` e `data/QUESTOES.json`.
2. Separar conteúdo não ensinado, erros novos, recorrentes e retestes vencidos; confrontar cada ponto com provas CESGRANRIO e QConcursos.
3. Baterias objetivas, tamanho a pedido, sem antecipar gabarito, novas estruturas e alternativas variadas.
4. Correção rápida com explicação somente dos erros; reforços **apenas se o estudante pedir**.
5. Arquivar o resultado e atualizar o caderno e os retestes, sem apagar erros históricos. Confirmar retenção em sessões espaçadas.
6. Incluir Português e Inglês quando houver erros pendentes.
7. O planejamento **não cria lembrete/automação nem horário exato**; não iniciar novo bloco após encerramento sem solicitação.

Dados das **56 questões e respectivas letras** no [JSON da sessão](REVISAO_CADERNO_ERROS_2026-11-14.json).
