# Padrão QTI — Engenharia de Telecomunicações

> Projeto: **Estudo - Concurso**  
> Repositório: `HyagoCordeiro/Concurso_Transp`  
> Atualização: 2026-09-28

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
      "errorType": null
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
- tempo excessivo;
- baixa confiança;
- acerto com baixa confiança;
- acerto consistente;
- necessidade de reparo;
- necessidade de reteste;
- possibilidade de espaçamento.

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
6. atualizar o estado de aprendizagem;
7. determinar a próxima revisão;
8. decidir entre:
   - `REPAIR`
   - `REPAIR_AND_RETEST`
   - `SPACED_RETEST`
   - `TRANSFER`
   - `ADVANCE`
9. informar objetivamente o próximo passo de estudo.

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
- gerar evidência adequada para revisão futura.

---

## Critério de qualidade

Um QTI só está completo quando produz simultaneamente:

1. avaliação;
2. feedback imediato;
3. diagnóstico;
4. registro estruturado;
5. decisão pedagógica;
6. JSON reutilizável pelo Orquestrador.

Se produzir apenas perguntas, alternativas e nota final, **não atende ao padrão QTI do projeto**.
