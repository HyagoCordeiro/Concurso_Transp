# Fechamento parcial de estudo — 20/11/2026

**Concurso:** Transpetro / Engenharia de Telecomunicações (CESGRANRIO). **Prova-alvo:** 06/12/2026. **Fonte dos resultados:** respostas e correções da conversa de 20/11/2026. **Natureza das questões:** autorais/adaptadas, baseadas no estilo das provas CESGRANRIO Transpetro/Petrobras de 2012/2018/2023 e consulta ao QConcursos, não transcrições oficiais. **Tempo líquido:** não aferido.

## Placar sem misturar fixações

| Bloco | Questões | Marcadas | Gabarito | Acertos |
|---|---:|---|---|---:|
| B1: Recuperação — DPCM, MPLS, dispersão modal e GEO/LEO | 10 | C B D A B C C D B E | C B D A E C A D B E | 8/10 |
| B2: Probabilidade, Fourier e convolução | 12 | B D A C C A D E B C D C | B D A E C A D E B C D A | 10/12 |
| B3: Antenas, Fresnel e enlaces | 10 | D C B E C D C B A E | D C B E A D C B A E | 9/10 |
| **Total dos blocos** | **32** | | | **27/32 (84,4%)** |

**Fixações independentes:** Convolução discreta Q2: `x=[3,2], h=[1,4,2], y[2]=14`, marcou **D** (correta); Fresnel 3 GHz/8 km obstáculo central, raio `sqrt(200)=14,14 m`, marcou **C** (correta). **2/2**, mas são reparos imediatos, não validação de retenção espaçada. Sem misturar no percentual 27/32.

## Erros e microdiagnóstico

| Referência | Item | Resposta/correta | Diagnóstico | Situação |
|---|---|---|---|---|
| B1-Q05 | 11.2 MPLS | B/E | Em `0x4A2B1D40`, S=1 e TTL=`0x40`=64. | Reteste pendente |
| B1-Q07 | 12.1 óptica | C/A | Dispersão modal = tempos de percurso diferentes para modos distintos. | Reteste pendente |
| B2-Q04 | 1.2 Gaussianas | C/E | Variância da soma=3²+4²=25; desvio padrão=5. | Reteste pendente |
| B2-Q12 | 2.4 convolução | C/A | Em y[2], somar `x[0]h[2]+x[1]h[1]=2+2=4`; fixação 14 certa. | Reparo feito, reteste pendente |
| B3-Q05 | 7.1 Fresnel | C/A | Em 1,5 GHz, d1=2km, d2=6km: `r=sqrt(300)=17,3m`; fixação 3GHz correta. | Reparo feito, reteste pendente |

## Acertos por tema

- **B1 (8/10):** DPCM 3/3; MPLS 1/2; fibras 2/3; GEO/LEO 2/2.
- **B2 (10/12):** probabilidade 3/4; Fourier 4/4; convolução 3/4.
- **B3 (9/10):** antenas 3/3; Fresnel/difração 2/3; espaço livre e orçamento de enlace 4/4.
- **Consolidação:** 27 acertos / 32 questões inéditas desta bateria (84,4%); duas fixações acertadas separadamente. **Não registrar 29/34 como nota de QTI independente**.

## Próximas ações

1. Retestes espaçados dos cinco erros (D1 21/11, D3 23/11 e D7 27/11, conforme disponibilidade). Não declarar consolidação apenas por acerto imediato.
2. Manter **pendente** a revisão específica de derivação de Fourier com fator 2 da sessão de 19/11, apesar do 4/4 em Fourier hoje.
3. Próximo bloco do cronograma: **Português com texto — QTI-10**, seguido por Inglês. **Ainda não realizados nesta sessão até o registro.**

[Questões, respostas e índices para anti-repetição](QTI_BLOCOS_2026-11-20.json) · [Caderno de erros](CADERNO_ERROS.md)
