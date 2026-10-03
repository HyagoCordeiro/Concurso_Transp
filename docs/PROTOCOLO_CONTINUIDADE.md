# Protocolo de Continuidade entre Chats

Este repositório é a fonte persistente do projeto de estudos.

## Ao iniciar um novo chat

Consultar, nesta ordem:

1. `README.md`
2. `PROGRESSO.md`
3. `docs/ESTRATEGIA_ADAPTADA.md`
4. `docs/PERFIL_ESTUDO.md`
5. `data/EDITAL.json`
6. `data/UNIDADES.json`
7. `data/REVISOES.json`
8. `data/RESULTADOS.json` quando houver histórico de testes.

## Regras de escopo

- Concurso-alvo: Transpetro / CESGRANRIO.
- Cargo: Engenharia de Telecomunicações.
- Prova-alvo: 29/11/2026.
- Não incorporar disciplinas de outros cargos.
- Usar CESGRANRIO e QConcursos como base de questões.
- Teoria antes de questões quando o tema for novo.
- Em prática/revisão, priorizar questões originais CESGRANRIO já disponíveis.

## Ao terminar uma sessão

Atualizar:
- tópico estudado;
- questões respondidas;
- acertos/erros;
- tipos de erro;
- pontos de atenção;
- revisões futuras;
- mudança de estado da unidade;
- próximo passo.

## Fonte de verdade

Não confiar apenas em memória de conversa quando o repositório contiver informação mais recente.


## Associações operacionais persistentes

Antes de executar comandos padronizados do projeto, consultar `data/COMANDOS.json`.

Regra crítica:
- ao detectar o gatilho **QTI** em qualquer forma (QTI-5, QTI-10, QTI-20, QTI-30, QTI-50 etc.), aplicar automaticamente a associação definida em `data/COMANDOS.json`;
- atualmente, **QTI => HTML interativo**;
- não exigir que o usuário repita essa preferência em cada conversa;
- exceção apenas quando o usuário pedir explicitamente formato textual.
