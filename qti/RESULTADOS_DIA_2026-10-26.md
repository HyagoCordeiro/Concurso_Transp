# Resultados do dia — 26/10/2026

**Concurso-alvo:** Transpetro 2026 — Engenheiro(a) de Telecomunicações  
**Banca:** CESGRANRIO  
**Data:** 26/10/2026  
**Data oficial da prova considerada:** **06/12/2026**  
**Classificação:** revisão guiada + QTI + baterias mistas + reforços direcionados + Português + Inglês.

## Resumo executivo

- Revisão inicial dos erros da bateria de 70: **8/15 (53,3%)**.
- Revisão comentada dos 7 erros: **6/7** na primeira tentativa; erro em Hamming corrigido depois.
- Reforço Hamming: **3/3**.
- QTI-20 Telecom: **19/20 (95%)**.
- Probabilidade: **5/6 (83,3%)**.
- Sinais/Fourier: **5/6 (83,3%)**.
- Reforço de suporte da convolução: **2/2**.
- Bateria mista de 30 questões: **26/30 (86,7%)** pela marcação objetiva.
- Observação do usuário: a questão de Poisson da bateria de 30 foi erro de marcação, não de conteúdo; desempenho conceitual ajustado seria **27/30 (90%)**, mas o registro objetivo permanece 26/30.
- Reforço Yagi-Uda + IEEE 802.1p/PCP: **4/4**.
- Antenas — bloco inédito: **5/5 (100%)**.
- Português — uso da vírgula: **9/9 válidas (100%)**; 1 questão anulada por ambiguidade de formulação.
- Português — interpretação de texto estilo CESGRANRIO: **9/10 (90%)**.
- Inglês — texto sobre guerra envolvendo o Irã, petróleo e Estreito de Hormuz: **9/10 (90%)**.

## 1. Revisão dos erros da bateria anterior

### Revisão inicial — 15 questões
**Resultado: 8/15 (53,3%).**

Erros identificados:
- covariância zero x independência;
- suporte da convolução;
- Hamming: detecção x correção;
- ressonância de antenas;
- entropia;
- polarização circular;
- `so that` = finalidade.

### Revisão comentada — foco em leitura do enunciado
A estratégia foi alterada porque o usuário identificou que muitos erros decorrem mais da interpretação do enunciado do que da falta de conhecimento.

Resultados:
- covariância x independência: correta;
- suporte da convolução: correta;
- Hamming: incorreta na primeira tentativa;
- ressonância: correta;
- entropia: correta;
- polarização: correta;
- `so that`: correta.

**Resultado: 6/7.**

Pontos de leitura consolidados:
- covariância zero, sem informação de gaussianas conjuntas, não garante independência;
- suporte da convolução: `[a,b]*[c,d] -> [a+c,b+d]`;
- Hamming: detectar = `dmin - 1`; corrigir = `floor((dmin-1)/2)`;
- ressonância: componente reativa nula;
- fonte binária equiprovável maximiza entropia;
- mesma amplitude + 90° = polarização circular;
- `so that` = finalidade.

### Reforço Hamming
**3/3.**
Consolidado o uso do piso na capacidade de correção.

## 2. QTI-20 Telecom

**Resultado: 19/20 (95%).**

Único erro:
- propriedade de modulação/deslocamento em Fourier: `x(t)e^{j2πf0t} -> X(f-f0)`.

Acertos incluíram:
- WSS;
- amostragem/Nyquist;
- Hamming;
- Erlang;
- ganho/diretividade;
- Fresnel;
- LEO x GEO;
- handover;
- SNMP/MIB;
- MPLS L3VPN RD;
- dispersão cromática;
- serviço primário de espectro;
- 8-PSK e taxa de símbolos;
- LLQ;
- perda em espaço livre;
- C/N0;
- IEEE 802.1Q;
- OSPF DR/BDR;
- DWDM x CWDM.

## 3. Probabilidade

**Resultado: 5/6 (83,3%).**

Acertos:
- `pelo menos uma` -> `X >= 1`;
- `no máximo 1` -> `X <= 1`;
- `exatamente 2` -> `X = 2`;
- ajuste de lambda em Poisson;
- probabilidade condicional/interseção.

Erro:
- identificação da distribuição hipergeométrica em amostragem **sem reposição**.

Regra a preservar:
- população finita + retirada sem reposição -> hipergeométrica.

## 4. Sinais e Fourier

**Resultado: 5/6 (83,3%).**

Acertos:
- modulação por cosseno;
- escalamento temporal;
- polos e resposta natural;
- ROC causal;
- derivada em Fourier.

Erro:
- suporte da convolução.

Reforço imediato de suporte da convolução: **2/2**, consolidando `[a,b]*[c,d] -> [a+c,b+d]`.

## 5. Bateria mista — 30 questões

**Resultado objetivo: 26/30 (86,7%).**

Distribuição:
- Telecom: **17/20 (85%)**;
- Português: **5/5 (100%)**;
- Inglês: **4/5 (80%)**.

Erros marcados:
- Poisson — usuário informou posteriormente que foi erro de marcação, não de conteúdo;
- Yagi-Uda: diretor x refletor;
- IEEE 802.1p: PCP possui 3 bits;
- Inglês: `eventually` = por fim / finalmente / acabar por.

Leitura conceitual ajustada, considerando o erro de marcação declarado em Poisson: **27/30 (90%)**; manter 26/30 como resultado objetivo da marcação.

## 6. Reforço técnico da bateria de 30

Foram reforçados apenas os dois erros técnicos solicitados pelo usuário:
- Yagi-Uda: refletor atrás, elemento excitado ao centro, diretores à frente;
- IEEE 802.1p/PCP: 3 bits -> 8 valores de prioridade.

**Resultado: 4/4.**

## 7. Antenas — bloco inédito

**Resultado: 5/5 (100%).**

Tópicos:
- início da região de Fraunhofer;
- eficiência de radiação;
- abertura efetiva;
- array broadside com elementos em fase;
- relação frente-costas.

Questões de Yagi, ressonância e polarização foram evitadas nesse bloco por terem sido trabalhadas anteriormente na mesma sessão.

## 8. Português — uso da vírgula

Foi feita revisão do padrão de cobrança CESGRANRIO, com foco em:
- adjunto e oração adverbial deslocados;
- proibição de vírgula entre sujeito e verbo;
- proibição entre verbo e complemento;
- aposto explicativo;
- vocativo;
- expressões/conjunções intercaladas;
- alteração de sentido com retirada de vírgulas.

### Bateria de 10 questões
Uma questão foi anulada por ambiguidade de formulação: a retirada das vírgulas em uma estrutura com aposto explicativo não tornaria necessariamente a frase sintaticamente incorreta, mas poderia alterar o valor explicativo/restritivo.

**Resultado válido: 9/9 (100%).**

## 9. Português — texto estilo CESGRANRIO

Texto autoral sobre excesso de informação e conhecimento, com cobrança de:
- ideia central;
- inferência;
- coesão;
- conectores;
- referência pronominal;
- pontuação.

**Resultado: 9/10 (90%).**

Único erro:
- classificação de `porém` intercalado: a resposta correta era **conjunção adversativa intercalada**, e não aposto explicativo.

Leitura do bloco:
- interpretação: forte;
- conectores: forte;
- ponto de atenção: função sintática/gramatical específica de termos isolados por vírgulas.

## 10. Inglês — petróleo, guerra e Estreito de Hormuz

Texto em estilo jornalístico/técnico sobre conflito envolvendo o Irã, transporte de petróleo, Estreito de Hormuz, custos logísticos, inflação e segurança energética.

Cobranças:
- main idea;
- reading comprehension;
- inference;
- pronoun/reference;
- connectors;
- contextual vocabulary.

**Resultado: 9/10 (90%).**

Único erro:
- `eventually`: usuário marcou sentido equivalente a `occasionally`, mas o correto é **finally / after some time / acabar por / com o tempo**.

Este falso cognato já havia aparecido na bateria mista de 30, portanto permanece como ponto de atenção ativo.

Regra de vocabulário:
- `eventually` = finalmente / no fim / com o tempo / acabar por;
- `occasionally` = ocasionalmente / eventualmente.

## Diagnóstico do dia

O desempenho técnico permanece forte. O principal ponto de atenção continua sendo a leitura precisa do enunciado e, em Português/Inglês, a identificação exata da função de conectores e expressões no contexto.

Indicadores mais representativos do dia:
- QTI-20 Telecom: **95%**;
- bateria mista de 30: **86,7% objetivo / 90% conceitual ajustado**;
- Antenas inéditas: **100%**;
- Vírgulas: **100% das questões válidas**;
- Português com texto: **90%**;
- Inglês com texto sobre petróleo/guerra: **90%**.

Pontos fortes observados:
- interpretação de texto em Português;
- compreensão global e inferência em Inglês;
- conectores em Português e Inglês;
- recuperação rápida após reforços técnicos.

Pontos ativos para revisão:
- `eventually` x `occasionally`;
- `porém` como conjunção adversativa intercalada;
- Fourier: deslocamento por exponencial complexa;
- hipergeométrica em amostragem sem reposição;
- leitura cuidadosa de palavras-chave do enunciado.

## Próximos pontos

1. Continuar blocos de 5 questões inéditas por matéria, conforme escolha do usuário.
2. Manter prioridade CESGRANRIO/Transpetro/Petrobras e QConcursos.
3. Não repetir famílias usadas no mesmo dia, salvo REPAIR/RETEST.
4. Continuar treinando leitura de enunciado antes da fórmula, especialmente em Probabilidade e Sinais.
5. Manter textos de Português e Inglês próximos do perfil CESGRANRIO, com preferência em Inglês por temas de petróleo, energia, tecnologia e geopolítica.
6. Reforçar futuramente `eventually` até deixar de ocorrer erro recorrente.
7. Manter a data oficial da prova em **06/12/2026**.
