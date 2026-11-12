# Fechamento de estudos — 12/11/2026

**Concurso-alvo:** Transpetro 2026 — Engenharia de Telecomunicações, CESGRANRIO. **Data da prova de referência no projeto:** 06/12/2026.
**Tipo de atividade:** treino guiado em texto simples, questões originais reapresentadas/autorais/adaptadas, com reforços. **Não é simulado independente**; não foi medido tempo líquido.

## Resultados dos sete blocos do cronograma

| Etapa | Questões | Acertos | Erros | Aproveitamento |
|---|---:|---:|---:|---:|
| Probabilidade | 8 | 8 | 0 | 100,0% |
| Antenas e Arranjos | 7 | 4 | 3 | 57,1% |
| Reforço de Antenas | 3 | 2 | 1 | 66,7% |
| Série e Transformada de Fourier | 7 | 4 | 3 | 57,1% |
| Sinais e Sistemas/LIT | 6 | 5 | 1 | 83,3% |
| Português | 10 | 9 | 1 | 90,0% |
| Inglês | 10 | 9 | 1 | 90,0% |
| Revisão mista de Telecom | 12 | 11 | 1 | 91,7% |
| **Total (inclui reforço de Antenas)** | **63** | **52** | **11** | **82,5%** |

## Registro das respostas e gabaritos

- **Probabilidade**: respostas `E, D, B, A, C, E, D, B`; gabarito `E, D, B, A, C, E, D, B`. **8/8**.
- **Antenas e Arranjos**: respostas `E, C, D, A, E, D, C`; gabarito `A, C, D, B, E, B, C`. **4/7**.
- **Reforço de Antenas**: respostas `D, D, A`; gabarito `C, D, A`. **2/3**.
- **Série e Transformada de Fourier**: respostas `A, B, D, A, B, C, E`; gabarito `C, B, D, E, A, C, E`. **4/7**.
- **Sinais e Sistemas/LIT**: respostas `D, E, D, C, A, B`; gabarito `B, E, D, C, A, B`. **5/6**.
- **Português**: respostas `C, B, E, D, A, B, C, D, A, D`; gabarito `C, B, E, D, A, B, C, E, A, D`. **9/10**.
- **Inglês**: respostas `D, A, C, E, B, D, B, E, C, B`; gabarito `D, A, C, E, B, D, A, E, C, B`. **9/10**.
- **Revisão mista de Telecom**: respostas `B, D, A, C, C, B, D, C, E, A, E, E`; gabarito `B, D, A, C, C, B, D, C, E, A, C, E`. **11/12**.

## Erros classificados e encaminhamento

- **Antenas, Q1:** E→A. Plano de terra ideal no monopolo λ/4; ganho/diretividade 3 dB acima do dipolo ideal; no reforço, manteve uma confusão sobre o hemisfério.
- **Antenas, Q4:** A→B. Nulos do arranjo de três elementos, ψ=πcosθ: 48,2° e 131,8°.
- **Antenas, Q6:** D→B. PLF=cos²60°=25%; perda ≈6 dB.
- **Reforço Antenas, Q1:** D→C. A resistência do monopolo (~36,5 Ω) estava correta, mas a radiação se concentra **no hemisfério superior**, não inferior. No reforço, Q2 nulos e Q3 polarização foram corretas.
- **Fourier, Q1:** A→C. Termo a0/2; média=1 implica a0=2.
- **Fourier, Q4:** A→E. X(0)=área algébrica total, +10−6=+4.
- **Fourier, Q5:** B→A. Inversão temporal com adiantamento x(−t−3) ↔ exp(+j3ω) X(−ω).
- **LIT/Transformada Z, Q1:** D→B. Multiplicar **numerador e denominador** por z²; não omitir fator z no numerador.
- **Português, Q8:** D→E. As vírgulas isolam 'afinal' como expressão intercalada.
- **Inglês, Q7:** B→A. 'Provided that' = 'as long as' (condição); 'even though' = concessão.
- **Revisão mista, Q11:** E→C. O aluno calculou corretamente **16×2,5 Gbps=40 Gbps de capacidade agregada**, mas o comando pergunta o tributário que cabe **em um único canal de 2,5 Gbps**. Maior STM cabível: **STM-16 (~2,488 Gbps)**. Classificar como **ERRO_DE_INTERPRETACAO_POR_CANAL_VS_TOTAL**, NÃO como falta de domínio da hierarquia SDH ou erro aritmético.

## Revisão adicional fora dos 63 itens

- **Autocorrelação, variância e desvio padrão:** 1/1 na fixação (μ=4, R(0)=29 ⇒ variância 13, desvio padrão √13).
- **TLC, cauda superior:** primeira resposta incorreta A, depois E **após a correção/revelação** (não contar como novo acerto independente). Treinada diferença entre Φ(2) e P(Z>2).
- **TLC, cauda inferior:** 1/1 correto (Z=−1, 15,87%).
- **Não incluir estes 3 exercícios no agregado de 52/63**.

## Decisões pedagógicas importantes

1. **Fourier foi considerado excessivamente trabalhoso no bloco autoral** em comparação à cobrança histórica que o aluno quer priorizar. Não tomar 4/7 como medida limpa de domínio; ajustar próximas baterias à profundidade e ao número de operações das questões originais CESGRANRIO/Transpetro; manter todo o conteúdo do edital.
2. Manter **protocolo rápido de 11/11**: texto simples, baterias completas, correções objetivas dos erros, sem formulários ou quiz interativo automático.
3. Priorizar questões originais CESGRANRIO e QConcursos, mas marcar **originais reapresentadas**, autorais e adaptadas separadamente. Questões de 2023 já trabalhadas em sessões anteriores não são inéditas.
4. **Não atribuir tempo líquido**, pois não foi medido.
5. Revisar erros em ciclos sugeridos **D3: 15/11**, **D7: 19/11**, **D21: 03/12**, priorizando primeiro: monopolo/hemisfério, leitura de restrições 'por canal', sinal temporal em Fourier, a0/2 e área X(0), transformada Z e conectores.

## Status

**Sete blocos concluídos em 12/11/2026; 52/63 = 82,5%.** Próxima sessão: revisões conforme necessidade; não presumir nova meta ou simulado sem pedido.

**Nota de rastreabilidade:** classificação de fonte reflete o que foi apresentado durante o chat; autenticidade literal/gabarito das questões chamadas 'originais' não foi revalidada nesta gravação. Fonte primária a conferir sempre que necessário.