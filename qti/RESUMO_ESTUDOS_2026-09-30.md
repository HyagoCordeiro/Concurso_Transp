# Resumo de Estudos — 30/09/2026

## Visão geral
Dia de forte consolidação, com revisão global, reparo dirigido e aprofundamento de Matemática Aplicada a Sinais.

### 1. QTI-50 — 13 itens CESGRANRIO/Telecom
- **44/50 (88%)** em **44min26s**.
- Erros: Fourier/deslocamento temporal; convolução discreta; resposta ao degrau/Laplace; polos/estabilidade; primeira zona de Fresnel; MPLS-TE.
- Item 3 (Sinais e Sistemas) concentrou 3 dos 6 erros.

### 2. Reforço dirigido do QTI-50
- **12/12 (100%)**.
- 2 questões para cada erro do QTI-50.
- Fourier, convolução discreta, degrau/Laplace, estabilidade, Fresnel e MPLS-TE: **2/2 em cada bloco**.
- Resultado de reparo; manter reteste espaçado.

### 3. Números complexos — QTI-5
- **3/5 (60%)**.
- Erro em módulo/argumento com **alta confiança**.
- Erro em produto na forma exponencial com baixa confiança.
- Revisadas detalhadamente as 5 questões.
- Pontos reparados: quadrantes, argumento, módulo, soma de expoentes e \(1/j=-j\).

### 4. Estudo focado — Fourier / Euler / propriedades
A sessão seguiu o ciclo do projeto: teoria necessária → recuperação ativa → aplicação → questão CESGRANRIO → transferência.

Conteúdos trabalhados:
- Euler:
  - \(e^{j\theta}+e^{-j\theta}=2\cos\theta\)
  - \(e^{j\theta}-e^{-j\theta}=2j\sin\theta\)
  - \(\cos\theta=(e^{j\theta}+e^{-j\theta})/2\)
  - \(\sin\theta=(e^{j\theta}-e^{-j\theta})/(2j)\)
- Transformada do pulso retangular centrado:
  - \(X(\omega)=AT\,Sa(\omega T/2)\)
- Pulso deslocado:
  - \(x(t-t_0)\leftrightarrow X(\omega)e^{-j\omega t_0}\)
- Deslocamento em frequência:
  - \(x(t)e^{j\omega_0t}\leftrightarrow X(\omega-\omega_0)\)
- Modulação por cosseno:
  - \(x(t)\cos(\omega_0t)\leftrightarrow \frac12[X(\omega-\omega_0)+X(\omega+\omega_0)]\)
- Modulação por seno:
  - \(x(t)\sin(\omega_0t)\leftrightarrow \frac1{2j}[X(\omega-\omega_0)-X(\omega+\omega_0)]\)
- Convolução:
  - \(x*h\leftrightarrow XH\)
- Fase por deslocamento:
  - \(\phi(\omega)=-\omega t_0\), com conversão graus → radianos.
- Composição de propriedades:
  - ao aplicar deslocamento em frequência a uma expressão intermediária \(G(\omega)\), substituir \(\omega\) por \(\omega-\omega_0\) em **toda** a expressão.

### 5. Evidências de recuperação ativa
Acertos observados durante a sessão:
- Identidades de Euler (soma → cosseno; subtração → seno).
- Par do pulso retangular \(ATSa(\omega T/2)\).
- Pulsos deslocados à direita e à esquerda.
- Convolução no tempo → multiplicação na frequência.
- Modulação por cosseno e por seno.
- Questão CESGRANRIO de multiplicação por cosseno: correta.
- Questão de fase/deslocamento: correta e detalhada.
- 2 questões análogas de fase: **2/2**.
- 2 questões autorais de transferência (pulso deslocado e modulação por cosseno): **2/2**.
- Ao final, composição correta:
  - \(x(t-2)e^{j3t}\leftrightarrow X(\omega-3)e^{-j2(\omega-3)}\).

### 6. Pontos de dificuldade observados
Durante a recuperação ativa houve confusão inicial entre:
- deslocamento no tempo: \(x(t-t_0)\rightarrow X(\omega)e^{-j\omega t_0}\);
- multiplicação por exponencial: \(x(t)e^{j\omega_0t}\rightarrow X(\omega-\omega_0)\).

Também houve inversão ocasional de sinais em adiantamento/atraso e em \(e^{\pm j\omega_0t}\). Após micro-reparo e repetição, a composição final foi feita corretamente.

### 7. QTI-10 final — Fourier
- **9/10 (90%)**.
- Tempo: **13:47**; média **83 s/questão**.
- Diagnóstico do QTI: **Reforçar Euler**.
- O relatório detalhado não pôde ser copiado por erro de visualização; não registrar detalhes não visíveis.
- Próxima ação: **SPACED_RETEST**, com micro-reparo curto de Euler antes.

## Estado pedagógico ao fim do dia
- **2.1 Números complexos:** EM REVISÃO — melhora em Euler, mas ainda há evidência de erro em argumento e um erro final classificado como Euler.
- **2.3 Fourier:** EM REVISÃO — forte melhora após o erro do QTI-50; propriedades principais aplicadas corretamente em recuperação ativa e 9/10 no QTI final.
- Não considerar consolidado ainda: realizar reteste espaçado D1/D3 e depois D7.
