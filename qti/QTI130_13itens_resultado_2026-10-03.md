# QTI-130 — 13 itens do edital — 03/10/2026

## Resultado bruto

- Total: **130**
- Acertos: **104**
- Erros: **26**
- Percentual bruto: **80,0%**

## Resultado por item

| Item | Tema | Acertos |
|---|---|---:|
| 1 | Probabilidade e Processos Estocásticos | 4/10 |
| 2 | Matemática Aplicada a Sinais | 8/10 |
| 3 | Conceitos Básicos de Sinais e Sistemas | 8/10 |
| 4 | Princípios de Telecomunicações | 7/10 |
| 5 | Telefonia e Videoconferência | 10/10 |
| 6 | Antenas | 9/10 |
| 7 | Radiopropagação | 9/10 |
| 8 | Sistemas de Transmissão via Satélite | 8/10 |
| 9 | Sistemas de Comunicações Celulares | 8/10 |
| 10 | Redes Locais | 9/10 |
| 11 | Redes IP | 9/10 |
| 12 | Sistemas Ópticos | 6/10 |
| 13 | Regulamentação das Telecomunicações | 9/10 |

## Erros observados

- Item 1 Q1: Probabilidade condicional
- Item 1 Q2: Independência e união
- Item 1 Q5: Distribuição uniforme
- Item 1 Q6: Esperança matemática
- Item 1 Q7: Teorema do Limite Central
- Item 1 Q9: Wiener-Khinchin
- Item 2 Q7: Fourier — deslocamento temporal
- Item 2 Q10: Convolução de pulsos retangulares
- Item 3 Q5: Resposta em frequência — módulo
- Item 3 Q6: Convolução — comprimento de sobreposição
- Item 4 Q6: Codificação de canal
- Item 4 Q9: SNR de quantização
- Item 4 Q10: Codificação de fonte
- Item 6 Q3: Campo distante / Fraunhofer
- Item 7 Q9: Ruído térmico e C/N versus largura de banda
- Item 8 Q9: Figura de mérito G/T
- Item 8 Q10: Atraso GEO — Sem resposta
- Item 9 Q6: UMTS / WCDMA
- Item 9 Q8: OFDM introduzido no 4G/LTE
- Item 10 Q6: RSTP — Discarding/Learning/Forwarding
- Item 11 Q4: OSPF — dinâmico/link-state/intradomínio
- Item 12 Q1: Reflexão interna total — n_núcleo > n_casca
- Item 12 Q2: Espalhamento Rayleigh ~ 1/lambda^4
- Item 12 Q6: SDH baseado em TDM
- Item 12 Q10: Hierarquia STM — STM-16 em 2,5 Gbps
- Item 13 Q2: LGT — interesse coletivo/restrito e regime público/privado

## Auditoria anti-repetição

**Status: FALHA DE PROTOCOLO.**

O usuário identificou numerosas questões repetidas dentro das 130 questões, inclusive questões que já haviam sido usadas nos simulados da manhã de 03/10/2026. Isso viola o protocolo anti-repetição já estabelecido no repositório.

Consequências:
- o resultado **104/130 (80%)** deve ser mantido como registro bruto de revisão;
- **não** deve ser usado como diagnóstico longitudinal limpo nem para inferir domínio com o mesmo peso de um QTI inédito;
- futuras baterias devem fazer preflight obrigatório contra `data/QUESTOES.json`, `data/RESULTADOS.json` e `qti/`;
- qualquer questão já usada no mesmo dia fica **bloqueada**, independentemente de acerto/erro, salvo bloco explicitamente rotulado `REPAIR` ou `RETEST`;
- mudança apenas de valores não torna a questão inédita quando a estrutura, raciocínio ou alternativas são essencialmente os mesmos.

## Prioridades derivadas da sessão

1. Probabilidade e Processos Estocásticos.
2. Sistemas Ópticos — fundamentos de fibra e SDH.
3. Convolução.
4. Codificação de fonte × codificação de canal.
5. GSM / UMTS / LTE.

> Observação metodológica: por causa das repetições, essas prioridades devem ser confirmadas em novas questões inéditas antes de qualquer conclusão definitiva.
