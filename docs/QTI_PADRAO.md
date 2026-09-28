# Padrão QTI — Engenharia de Telecomunicações

## Fluxo

```
questão
→ resposta
→ correção imediata
→ justificativa
→ classificação/registro
→ próxima questão
→ diagnóstico final
```

## Campos mínimos por questão

- `id`
- `source`
- `topic`
- `editalItem`
- `unitId`
- `difficulty`
- `questionType`
- `question`
- `options`
- `answer`
- `explanation`

## Metadados de resultado

- alternativa escolhida;
- gabarito;
- acerto/erro;
- confiança 1–5;
- tempo;
- tipo de erro;
- fonte;
- item do edital;
- unidade;
- dificuldade;
- tipo de questão.

## Tipos de erro

- `CONCEITO`
- `INTERPRETACAO`
- `APLICACAO`
- `MEMORIA`
- `PROCEDIMENTO`
- `DESATENCAO`
- `CALCULO`
- `UNKNOWN`

## Regra de uso

Questões originais devem preservar enunciado e alternativas. Questões modificadas devem ser marcadas como autorais/adaptadas.
