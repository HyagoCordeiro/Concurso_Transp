# Fechamento complementar — QTI em texto simples e revisão Fourier — 11/11/2026

**Prova-alvo:** 06/12/2026 | **Banca:** CESGRANRIO | **Método vigente:** `docs/PROTOCOLO_ESTUDO_RAPIDO_2026-11-11.md`.

## Resultados deste ciclo de conversa

| Atividade | Acertos | Total | Fonte |
|---|---:|---:|---|
| QTI-20 misto (13 itens) | 20 | 20 | Autoral, estilo CESGRANRIO |
| QTI-10 de fechamento (específicas) | 9 | 10 | Autoral, estilo CESGRANRIO |
| Reforço do item 2.3 — Série de Fourier | 2 | 3 | Autoral, estilo CESGRANRIO |
| **Total deste ciclo** | **31** | **33** | **93,9%** |

**Atenção:** o repositório já possui um **outro encerramento de sete blocos em 11/11 com 29/42** no arquivo `qti/RESULTADOS_DIA_2026-11-11.md`. Trata-se de registro distinto; não substituir nem somar automaticamente em métricas oficiais sem conciliação de IDs para evitar contagem duplicada.

### QTI-20
- Respostas: D,A,C,B,E,A,D,B,E,C,A,D,B,E,C,A,D,B,C,E.
- Gabarito idêntico, 20/20. Já registrado em `qti/QTI20_TEXTO_RAPIDO_RESULTADO_2026-11-11.json`.
- O padrão das alternativas desse bloco ficou muito regular; nas baterias futuras, variar a distribuição do gabarito e usar originais verificadas da banca.

### QTI-10
- Respostas: B,C,A,E,C,A,B,D,E,E.
- Gabarito: B,E,A,E,C,A,B,D,E,E. **Erro Q02, item 2.3**.
- Sinal periódico: T=4; x(t)=+2 em (-2,0) e -2 em (0,2). Sinal ímpar, b1=-8/pi.
- Já registrado em `qti/QTI10_FECHAMENTO_TEXTO_2026-11-11.json`.

### Reforço de Fourier — 3 questões adicionais
- Respostas: **C, A, E**.
- Gabarito: **D, A, E**.
- **2/3 (66,7%)**.
- Erro na Q01: x(t)=-3 em (-1,0), +3 em (0,1), período T=2. b1=12/pi (D), não 6/pi (C). Possível erro de fator 2 ao aproveitar simetria, ainda não confirmado por conta manuscrita.
- Q02: pulso par, a1=4/pi — correta A.
- Q03: onda quadrada ímpar, b3=16/(3pi) — correta E.

## Regras/atalhos estudados (com condições)
- Na série trigonométrica: sinal ímpar => a0=an=0, calcular bn. Para sinal ímpar: bn=(4/T)*integral de 0 a T/2 de x(t) sen(n omega0 t) dt.
- Sinal par => bn=0, mas termos de cosseno e componente DC dependem do sinal.
- Para transformada Fourier com convenção G(omega)=integral g(t)e^(-j omega t)dt:
  - e^(-j theta)-e^(j theta)=-2j sen(theta)
  - e^(j theta)-e^(-j theta)=+2j sen(theta)
  - e^(-j theta)+e^(j theta)=2 cos(theta)
  - -e^(-j theta)-e^(j theta)=-2 cos(theta)
- Pulso positivo à direita e negativo à esquerda, em pares simétricos iguais (-/+), produz fator **-2j sen(theta)** na transformada. Pulso positivo à esquerda e negativo à direita (+/-), **+2j sen(theta)**. Esta é uma regra específica para essas composições simétricas, não uma regra universal para qualquer sinal.
- Na questão histórica com retângulos (-5 de -10 a 0; +5 de 0 a 10): G(omega)=50 Sa(5omega)[e^(-j5omega)-e^(j5omega)]=-100j Sa(5omega)sen(5omega); G(0)=0.
- **Não confundir série com transformada**: um bn positivo no caso -/+ não implica parte imaginária positiva da transformada, pois a convenção inclui -j.

## Diagnóstico e próxima ação
- Evidência de domínio conceitual em vários itens nas questões autorais; **não equiparar 93,9% a desempenho em prova oficial inédita**.
- Dificuldade pontual: **normalização 2/T vs. 4/T na série de Fourier**; confirmar com 1 ou 2 questões novas, sem repetição excessiva.
- Priorizar questões originais CESGRANRIO/Transpetro/Petrobras e QConcursos, usar figuras/diagramas quando indispensáveis, texto simples nos demais casos.
- Nas próximas sessões, quantidade de questões a pedido; 70 questões em simulados completos preferencialmente aos domingos, conforme disponibilidade.
- Tempo líquido/resolução: **não informado; não estimar**.
