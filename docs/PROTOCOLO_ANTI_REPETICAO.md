# Protocolo Anti-Repetição de Questões

## Objetivo

Impedir que o desempenho seja inflado por memória recente do enunciado ou da alternativa. O projeto deve medir retenção e transferência, não familiaridade visual.

## Fonte de verdade

O arquivo `data/QUESTOES.json` é o banco central de histórico e elegibilidade. **Nenhum QTI deve ser montado sem consultá-lo.**

## Identidade da questão

- Questão CESGRANRIO original: `canonicalId = BANCA-CONCURSO-ANO-QNUMERO`.
- Questão de QConcursos: usar o ID da questão quando disponível.
- Questão autoral/adaptada: ID único e fingerprint do enunciado.
- Alterar somente valores de uma questão não a torna automaticamente inédita quando a estrutura e a solução forem praticamente idênticas; nesses casos, usar a mesma família e evitar repetição imediata.

## Regra de cooldown

### Acerto

Após uma resposta correta, escolher aleatoriamente um intervalo entre **3, 5 e 7 dias**. Até `nextEligibleAt`, a questão fica bloqueada.

Acertos com baixa confiança ou tempo excessivo podem receber 3 dias para confirmação mais cedo.

### Erro

Questões erradas podem reaparecer imediatamente em `REPAIR` ou em reteste dirigido. Não devem ser repetidas várias vezes dentro do mesmo QTI misto.

Quando a questão/competência for recuperada no reparo, aplicar no mínimo **3 dias** antes de novo teste exato.

## Ordem de seleção para novos QTI

1. Questões inéditas e elegíveis.
2. Questões vencidas após cooldown.
3. Retestes de erros quando pedagogicamente devidos.
4. Questões autorais inéditas de transferência para preencher lacunas.

**Proibido:** usar questão correta ainda em cooldown só para completar 10, 30 ou 50 itens.

Se faltarem questões elegíveis, pesquisar novas CESGRANRIO/Telecom/QConcursos. Se ainda assim não houver quantidade suficiente, entregar um QTI menor e informar o motivo.

## Atualização após cada QTI

Para cada questão registrar:
- `canonicalId`;
- `lastSeenAt`;
- `lastResult`;
- `cooldownDays`;
- `nextEligibleAt`;
- `sourceType`;
- `unitId`;
- tópico.

O JSON de consolidação do QTI deve permitir atualizar esses campos no GitHub.

## Regra para HTML

O HTML deve bloquear no navegador as questões corretas recentes quando houver histórico local. O botão de refazer deve reapresentar somente erros ainda elegíveis.

A validação no navegador é uma segunda camada. A primeira camada continua sendo o banco central no GitHub.

## Backfill inicial

Em 02/10/2026, o banco foi iniciado com:
- 30 questões do QTI-30 das 13 matérias;
- reparos Wi-Fi e MPLS feitos após o QTI;
- 3 questões autorais de rendimento de AM.

As questões corretas receberam cooldowns distribuídos entre 3/5/7 dias. Questões erradas permanecem candidatas a reteste dirigido e passam a cooldown após recuperação.


## Regra de segurança para histórico legado

Como parte das sessões anteriores foi registrada antes da criação de `canonicalId`, o histórico antigo pode não identificar todas as questões pelo número exato. Até esse legado ser absorvido, todo novo QTI deve cruzar o candidato também com `data/RESULTADOS.json` e com os resultados em `qti/` dos últimos 7 dias.

Se não for possível demonstrar que uma questão potencialmente recente é inédita, ela deve ser tratada como **BLOQUEADA** e substituída por outra. Questões novas passam obrigatoriamente a ter `canonicalId` antes de entrar no QTI.
