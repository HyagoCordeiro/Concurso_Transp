# Padrão QTI — Engenharia de Telecomunicações

> Projeto: **Estudo - Concurso**  
> Repositório: `HyagoCordeiro/Concurso_Transp`  
> Atualização: 2026-10-08

## Princípio central

O QTI deve funcionar como **instrumento de diagnóstico e consolidação da aprendizagem**, e não apenas como um quiz visual.

O QTI faz parte do ciclo:

```
AQUISIÇÃO
→ RECUPERAÇÃO
→ APLICAÇÃO
→ FEEDBACK
→ DIAGNÓSTICO
→ REPARO
→ RETESTE
→ ESPAÇAMENTO
→ INTERLEAVING
→ SIMULAÇÃO
→ MEDIÇÃO
→ REAPRENDIZAGEM
```

O resultado de uma sessão deve gerar **evidência estruturada, reutilizável e cumulativa** pelo Orquestrador de Estudos.

---

## Formato obrigatório

- Uma questão por vez.
- Alternativas **A, B, C, D e E** clicáveis.
- Correção imediatamente após a resposta.
- Mostrar claramente **CORRETO** ou **INCORRETO**.
- Mostrar o **gabarito**.
- Mostrar explicação objetiva e tecnicamente precisa.
- Botão **"Próxima questão"**.
- Contador **"Questão X/Y"**.
- Barra de progresso.
- Ao final, apresentar resultado consolidado.
- Permitir refazer o QTI.

### Padrão visual

- fundo escuro;
- card escuro;
- texto claro;
- alternativas claramente diferenciadas;
- **verde** para acerto;
- **vermelho** para erro;
- **azul** para seleção e progresso.

---

## Padrão obrigatório de renderização matemática

Questões de Telecom frequentemente dependem de símbolos matemáticos. A interface **não pode criar dificuldade artificial de leitura**. A renderização é parte da validade diagnóstica do QTI.

### Regras obrigatórias

1. Todo HTML deve declarar `<meta charset="utf-8">`.
2. Expressões matemáticas não devem depender apenas da fonte de texto normal da interface.
3. Símbolos como `δ`, `μ`, `λ`, `ω`, `π`, `Σ`, `∞`, `√`, subscritos, sobrescritos, frações e integrais devem ser apresentados em um elemento matemático próprio.
4. Usar uma pilha de fontes matemáticas com fallback, por exemplo:

```css
.math, .math-display {
  font-family: "Cambria Math", "STIX Two Math", "STIXGeneral", "DejaVu Sans", "Segoe UI Symbol", serif;
  font-size: 1.08em;
  letter-spacing: 0.01em;
}
.math-display {
  display: block;
  margin: 10px 0;
  font-size: 1.16em;
  line-height: 1.6;
}
```

5. Quando houver KaTeX ou MathJax disponível, ele pode ser usado para melhorar a apresentação, mas **não deve ser a única forma de exibição**. O HTML precisa manter um fallback UTF-8 legível para funcionar mesmo sem acesso à internet/CDN.
6. Para símbolos críticos, preferir Unicode/entidades HTML estáveis. Exemplos: delta `δ`/`&#948;`, mu `μ`/`&#956;`, lambda `λ`/`&#955;`, omega `ω`/`&#969;`, pi `π`/`&#960;`, infinito `∞`/`&infin;`, raiz `√`/`&radic;`.
7. Fórmulas curtas devem ser envolvidas em `<span class="math">...</span>`; fórmulas longas ou centrais à resolução devem usar `<div class="math-display">...</div>`.
8. Alternativas matemáticas devem ter fonte e espaçamento suficientes para diferenciar claramente sinais, índices e deslocamentos.
9. Não substituir um símbolo matemático por `?`, caractere de substituição `�`, quadrado vazio ou glifo ambíguo.
10. Antes da entrega, executar preflight de renderização: procurar `�`, caracteres corrompidos e padrões suspeitos em expressões; confirmar que enunciado, alternativas e explicação usam a mesma notação.
11. Quando a questão depender de diferença visual pequena — por exemplo `δ(t)`, `δ(t-3)`, `u(t)`, `u(t-3)`, `z^{-1}`, `e^{-jωt}` — aumentar legibilidade e evitar compactação excessiva.
12. Não usar imagem de fórmula como solução padrão. Imagens só são aceitáveis quando a própria questão original exige figura/gráfico/diagrama.

### Exemplo mínimo

Em vez de texto simples sujeito a falha de glifo:

```html
A) δ(t-3)
```

usar:

```html
<button class="opt"><b>A)</b> <span class="math">&#948;(t&#8722;3)</span></button>
```

A apresentação esperada é clara e inequívoca: **δ(t−3)**.

### Validade diagnóstica da interface

Se o usuário informar que um símbolo, equação, gráfico ou alternativa ficou ilegível, truncado ou corrompido:

- classificar o evento como `INTERFACE_RENDERING`;
- marcar a questão como `diagnosticValidity: "INVALID_INTERFACE"`;
- **não interpretar esse erro como lacuna de conteúdo**;
- não alimentar mastery, prioridade de reparo ou estatística longitudinal com esse erro;
- reapresentar o mesmo conceito posteriormente com renderização corrigida, preferencialmente em uma questão nova de transferência;
- somente após um reteste legível decidir se existe lacuna real.

O JSON pode registrar, quando necessário:

```json
{
  "errorType": "INTERFACE_RENDERING",
  "diagnosticValidity": "INVALID_INTERFACE",
  "excludeFromMastery": true
}
```

### Regra específica para o caso que originou este padrão

No QTI-30 de 08/10/2026, a questão de derivada do degrau `u(t−3)` para `δ(t−3)` foi reportada como visualmente difícil de distinguir. Esse resultado **não deve, isoladamente, ser tratado como evidência de desconhecimento de degrau/impulso**. O conceito deve ser retestado com apresentação matemática legível antes de qualquer reparo.

A configuração operacional estruturada está em `data/QTI_RENDERING_RULES.json`.

---

## Fluxo operacional

```
questão
→ resposta
→ correção imediata
→ justificativa
→ coleta de evidência
→ classificação do erro/acerto
→ próxima questão
→ consolidação
→ diagnóstico
→ decisão pedagógica
→ JSON para o Orquestrador
```

---

## Campos mínimos da questão

Cada questão deve possuir, sempre que aplicável:

- `questionId`
- `source`
- `sourceType`
- `topic`
- `editalItem`
- `unitId`
- `difficulty`
- `questionType`
- `question`
- `options`
- `answer`
- `explanation`

### Fonte

Questões originais devem preservar enunciado e alternativas.

Questões modificadas devem ser explicitamente marcadas como autorais/adaptadas.

Exemplos de `sourceType`:

- `CESGRANRIO_ORIGINAL`
- `MULTIBANCA_ADAPTADA`
- `AUTORAL_CESGRANRIO_STYLE`
- `REPAIR`
- `RETEST`
- `TRANSFER`

---

## Coleta de evidência por questão

O QTI deve registrar, para cada questão:

- `questionId`
- tema
- resposta selecionada
- resposta correta
- `CORRETA` / `INCORRETA`
- tempo de resposta
- nível de confiança, quando informado
- tipo de erro, quando aplicável
- `diagnosticValidity`, quando houver problema de interface/renderização
- `excludeFromMastery`, quando a evidência não puder ser usada pedagogicamente

### Tipos de erro

Valores recomendados:

- `CONCEITO`
- `INTERPRETACAO`
- `APLICACAO`
- `MEMORIA`
- `PROCEDIMENTO`
- `DESATENCAO`
- `CALCULO`
- `DESCONHECIMENTO`
- `CONFUSAO_CONCEITUAL`
- `TEMPO_EXCESSIVO`
- `INTERFACE_RENDERING`
- `UNKNOWN`

Um acerto também pode gerar sinal diagnóstico, por exemplo:

- `ACERTO_BAIXA_CONFIANCA`
- `ACERTO_LENTO`
- `ACERTO_CONSISTENTE`

---

## Coleta de evidência da sessão

O QTI deve registrar:

- `eventId` único
- data/hora
- nome do QTI
- rodada
- item do edital
- tema
- total de questões
- acertos
- erros
- percentual de acerto
- tempo total
- tempo médio
- tipo da fonte
- diagnóstico
- próxima ação recomendada

---

## JSON para consolidação

No resultado final é **obrigatório** apresentar um bloco com o título:

> **JSON para consolidação**

Também deve existir um botão:

> **📋 Copiar JSON**

O usuário deve conseguir copiar o JSON integralmente e colá-lo posteriormente no chat do **Orquestrador de Estudos**.

### Estrutura mínima

```json
{
  "eventId": "QTI5-...",
  "occurredAt": "...",
  "qti": "QTI-5",
  "rodada": "...",
  "editalItem": "E4-11-02",
  "tema": "...",
  "total": 5,
  "acertos": 0,
  "erros": 0,
  "accuracy": 0,
  "tempoTotalSec": 0,
  "tempoMedioSec": 0,
  "sourceType": "MULTIBANCA_ADAPTADA",
  "nextAction": "...",
  "diagnostico": [],
  "questionResults": [
    {
      "questionId": "...",
      "topic": "...",
      "result": "CORRETA",
      "selected": "A",
      "correctAnswer": "B",
      "responseTimeSec": 0,
      "confidence": null,
      "errorType": null,
      "diagnosticValidity": "VALID",
      "excludeFromMastery": false
    }
  ]
}
```

A estrutura pode ser expandida quando necessário, mas **não deve remover os campos essenciais**.

---

## Diagnóstico

O resultado não deve ser interpretado apenas pelo percentual.

Ao final, analisar:

- erros recorrentes;
- erros por desconhecimento;
- erros por interpretação;
- erros por confusão conceitual;
- erros por interface/renderização;
- tempo excessivo;
- baixa confiança;
- acerto com baixa confiança;
- acerto consistente;
- necessidade de reparo;
- necessidade de reteste;
- possibilidade de espaçamento.

Erros classificados como `INTERFACE_RENDERING` e `INVALID_INTERFACE` devem ser excluídos da interpretação de domínio até reteste legível.

Sempre que possível, relacionar a nova evidência ao histórico já existente da unidade no projeto **Estudo - Concurso**.

---

## Regras de decisão

1. **100% não significa automaticamente domínio definitivo.**
2. **Acerto isolado não significa consolidação.**
3. Erro recorrente deve gerar, em regra, `REPAIR_AND_RETEST`.
4. Desempenho abaixo de **80%** em um reparo deve normalmente manter o tópico em reparo/revisão.
5. Desempenho **≥80%** deve ser analisado junto com erros, confiança e tempo.
6. Para considerar avanço, exigir evidência variada, evitando repetição literal das questões.
7. Quando houver erro conceitual recorrente, recomendar micro-reparo antes de avançar.
8. Quando houver bom desempenho após reparo, recomendar reteste espaçado.
9. Não avançar simplesmente porque o percentual aumentou.
10. Diferenciar melhora real de familiaridade com questões já vistas.
11. **Nunca converter falha de renderização/interface em lacuna de conteúdo.**

---

## Estados/ações possíveis

O Orquestrador deve decidir entre:

- `REPAIR`
- `REPAIR_AND_RETEST`
- `SPACED_RETEST`
- `TRANSFER`
- `ADVANCE`

### Interpretação operacional

**REPAIR**  
Há lacuna específica que precisa ser corrigida antes de nova medição.

**REPAIR_AND_RETEST**  
Há erro recorrente, conceitual ou procedimental suficiente para exigir micro-reparo e nova bateria próxima.

**SPACED_RETEST**  
O desempenho atual é satisfatório, mas ainda precisa de confirmação após intervalo.

**TRANSFER**  
O conteúdo básico está estável e deve ser testado em contexto diferente, questão menos familiar ou aplicação combinada.

**ADVANCE**  
Há evidência suficientemente consistente para permitir avanço, sem abandonar revisões espaçadas futuras.

---

## Integração com o Orquestrador

Quando um JSON de QTI for recebido, o Orquestrador deverá:

1. identificar o item do edital;
2. localizar o estado atual da unidade;
3. registrar a nova evidência;
4. atualizar acertos e erros;
5. identificar erros recorrentes;
6. desconsiderar evidências invalidadas por interface/renderização;
7. atualizar o estado de aprendizagem;
8. determinar a próxima revisão;
9. decidir entre:
   - `REPAIR`
   - `REPAIR_AND_RETEST`
   - `SPACED_RETEST`
   - `TRANSFER`
   - `ADVANCE`
10. informar objetivamente o próximo passo de estudo.

---

## Regra de continuidade do projeto

O histórico do projeto **Estudo - Concurso** deve ser tratado como fonte de contexto pedagógico.

Cada novo QTI deve, quando possível:

- usar o item oficial do edital como identificador principal;
- considerar erros e acertos anteriores;
- evitar interpretar um único resultado isoladamente;
- distinguir questão inédita de questão já vista;
- preservar origem e tipo da fonte;
- registrar a rodada;
- permitir comparação longitudinal;
- gerar evidência adequada para revisão futura;
- obedecer `data/QTI_RENDERING_RULES.json` antes de gerar o HTML.

---

## Critério de qualidade

Um QTI só está completo quando produz simultaneamente:

1. avaliação;
2. feedback imediato;
3. diagnóstico;
4. registro estruturado;
5. decisão pedagógica;
6. JSON reutilizável pelo Orquestrador;
7. **renderização legível e não ambígua de toda notação matemática.**

Se produzir apenas perguntas, alternativas e nota final, **não atende ao padrão QTI do projeto**.

---

## Protocolo anti-repetição

O arquivo `data/QUESTOES.json` é a **fonte obrigatória de elegibilidade** antes de montar qualquer QTI.

### Regra obrigatória de seleção

1. Identificar cada questão por `canonicalId` estável. Em questão original, usar banca/concurso/ano/número; em autoral/adaptada, usar ID único e fingerprint do enunciado quando possível.
2. Questão respondida **corretamente** entra em bloqueio e só pode voltar após intervalo de **3, 5 ou 7 dias**, escolhido de forma aleatória. Acerto lento ou com baixa confiança pode usar 3 dias.
3. Questão **errada** pode reaparecer imediatamente em modo `REPAIR` ou em reteste dirigido. Depois de acertada no reparo, aplicar cooldown mínimo de 3 dias.
4. Em QTI misto, priorizar: **INÉDITAS → vencidas (due) → retestes de erros**.
5. É proibido reutilizar questão correta ainda em cooldown apenas para completar a quantidade solicitada. Se o banco elegível for insuficiente, pesquisar novas questões CESGRANRIO/QConcursos ou criar questões autorais inéditas; se ainda faltar, reduzir o bloco e avisar.
6. Antes de gerar HTML, validar todas as questões contra `data/QUESTOES.json`. Depois do QTI, atualizar `lastSeenAt`, `lastResult`, `cooldownDays` e `nextEligibleAt`.
7. O botão **Refazer QTI** não deve reapresentar questões corretas da rodada recém-concluída; deve mostrar somente erros/reparos ainda elegíveis.
8. Questão invalidada por `INTERFACE_RENDERING` não deve ser tratada como erro pedagógico nem entrar em cooldown como se fosse falha de conteúdo; ela deve ser substituída por reteste legível.

### Objetivo pedagógico

Evitar familiaridade artificial com enunciados recentes. O ganho deve vir de recuperação após intervalo, transferência e questões novas, não de memória visual da alternativa.

---

## Regra obrigatória de entrega em HTML

Sempre que o usuário pedir **QTI** (QTI-5, QTI-10, QTI-20, QTI-30, QTI-50, QTI-130 ou qualquer variação), a entrega padrão é **arquivo HTML interativo**.

Regras:
- não entregar o QTI apenas como texto no chat;
- gerar o HTML com o padrão visual e funcional deste documento;
- aplicar obrigatoriamente o padrão de renderização matemática deste documento e de `data/QTI_RENDERING_RULES.json`;
- apresentar no chat somente uma mensagem curta com o link para abrir/baixar o HTML e, quando útil, uma observação breve;
- manter uma questão por vez, correção imediata, progresso, resultado final e JSON para consolidação;
- só usar formato textual quando o usuário pedir explicitamente "em texto", "aqui no chat" ou equivalente;
- esta regra tem prioridade operacional sobre respostas ad hoc durante a sessão.

Motivo: QTI é tratado neste projeto como **artefato interativo**, não como simples lista de questões.
