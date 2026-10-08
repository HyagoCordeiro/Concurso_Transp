# Estratégia da reta final — Transpetro 2026 / Engenharia de Telecomunicações

**Atualização:** 08/10/2026  
**Prova-alvo:** 29/11/2026  
**Banca:** CESGRANRIO

## Objetivo operacional

A meta desta fase não é atingir profundidade acadêmica de professor em todos os tópicos. A meta é **maximizar a quantidade de pontos na prova**, com domínio suficiente para reconhecer o padrão CESGRANRIO, escolher o método correto, executar a conta e evitar as pegadinhas mais prováveis.

O edital continua sendo obrigatório: nenhum dos 13 itens pode ser abandonado. Porém, a profundidade e o tempo investidos em cada subtema devem ser calibrados por quatro evidências:

1. recorrência nas provas-alvo da Transpetro de 2012, 2018 e 2023;
2. presença e variedade no banco de 456 questões CESGRANRIO/TecConcursos;
3. erros e baixa confiança observados nos QTIs do usuário;
4. potencial de conversão do estudo em ponto de prova dentro da reta final.

## Hierarquia de decisão

Quando houver disputa por tempo de estudo, usar esta ordem:

**Edital 2026 > provas Transpetro Telecom 2012/2018/2023 > erros atuais do usuário > banco de 456 questões > outras CESGRANRIO de Telecom/áreas afins > teoria acadêmica adicional.**

As 456 questões são banco de cobertura e rotação, mas **não definem sozinhas o peso provável da prova**. A evidência das três últimas provas-alvo deve corrigir vieses do banco amplo.

## Resultado do cruzamento: 456 questões × provas 2012, 2018 e 2023

### Prioridade 1 — fechar com profundidade de prova

#### Sistemas ópticos / SDH / WDM

É o maior ponto de fechamento. O tema foi forte em 2012, reapareceu em 2018 e voltou em 2023.

Foco:
- fibra monomodo × multimodo;
- atenuação e dispersões;
- Rayleigh;
- LED × LASER;
- orçamento óptico;
- OTDR;
- PDH/SDH;
- STM-1/4/16/64 e taxas principais;
- TM, ADM e SDXC;
- WDM, CWDM e DWDM;
- OADM/WADM e transponder.

**Critério de parada:** resolver com segurança questões CESGRANRIO envolvendo conceito, comparação e cálculo básico/intermediário desses tópicos. Não aprofundar projeto óptico além do necessário para o padrão da banca.

#### Radiopropagação + satélite

Propagação aparece nas três provas; satélite ganhou forte peso em 2018 e 2023.

Foco de propagação:
- espaço livre;
- Fresnel;
- horizonte rádio;
- reflexão e modelo de dois raios;
- difração;
- multipercurso;
- fading plano × seletivo;
- Rayleigh × Rice;
- refração/troposfera e degradações recorrentes.

Foco de satélite:
- GEO × LEO;
- bandas C/Ku/Ka;
- VSAT e topologias;
- inbound/outbound e acesso múltiplo;
- EIRP;
- G/T;
- perda de espaço livre;
- Boltzmann, largura de banda e C/N;
- chuva e degradações;
- transponder/backoff em nível de prova.

**Observação:** orçamento de enlace por satélite merece prioridade especial porque apareceu de forma quantitativa em 2018 e novamente em 2023.

#### Telefonia / voz / videoconferência

Tema presente nas três provas, com bloco forte em 2012 e recorrência em 2018/2023.

Foco:
- PCM, amostragem, quantização e taxa;
- TDM/E1;
- Erlang e tráfego;
- R2 Digital;
- H.323: gatekeeper, MCU, Q.931, H.245, RTP/RTCP;
- SIP;
- requisitos de QoS para voz e vídeo.

Compressão/codecs específicos ficam abaixo desses fundamentos, salvo se questões mostrarem nova lacuna.

### Prioridade 2 — alta manutenção e fechamento curto

#### Regulamentação / espectro

Cresceu nas provas recentes: apareceu em 2018 e repetiu em 2023.

Foco:
- LGT nos artigos e deveres mais cobrados;
- competências regulatórias relevantes;
- PDFF;
- atribuição, destinação e distribuição;
- faixas SHF/VHF/UHF/EHF quando compatíveis com edital;
- regras de espectro e satélite em nível CESGRANRIO.

Usar fonte oficial vigente sempre que a norma puder ter mudado.

#### Comunicações celulares

Não gastar tempo excessivo em detalhes legados pouco produtivos.

Foco:
- reuso celular e cluster;
- interferência cocanal;
- evolução 2G → 3G → 4G → 5G;
- FDMA/TDMA/CDMA/OFDMA/SC-FDMA;
- LTE;
- 5G Release 15, SA/NSA, small cells e MIMO massivo;
- handover/near-far quando aparecerem em questão.

GSM/CDMA detalhado entra como complemento, não como eixo central.

### Prioridade 3 — cobertura curta, sem aprofundamento acadêmico

#### Codificação de voz/vídeo

Foi mais forte em 2012. Fazer cobertura objetiva de conceitos e famílias mais recorrentes, sem transformar o estudo em curso de multimídia.

#### Transmissão digital em banda-base

O banco amplo traz várias questões, mas a recorrência específica nas provas-alvo recentes é menor que óptica, satélite, propagação e telefonia.

Cobrir:
- NRZ/Manchester/AMI em nível conceitual;
- ISI;
- diagrama de olho;
- pulso/filtro em nível necessário às questões.

Não aprofundar além do que gerar ponto provável.

#### Receptor super-heteródino

Aparece em bancos CESGRANRIO de áreas afins, mas não se destacou nas provas Transpetro Telecom 2012, 2018 e 2023.

Cobrir apenas:
- mixer;
- frequência intermediária;
- frequência imagem;
- rejeição de imagem.

Depois, seguir para temas mais rentáveis.

## Assuntos fortes já estudados: manutenção por QTI, não reabrir curso

Redes IP/Locais, Fourier, Transformada Z, convolução, AM, Fresnel e outros tópicos já trabalhados não devem ser reiniciados do zero. Devem voltar por:

- QTI misto;
- reteste espaçado;
- diagnóstico de confiança;
- reparo curto quando houver erro reincidente.

Redes continuam importantes historicamente, mas, pelo desempenho e experiência prévia do usuário, a estratégia é **manutenção por questão**, não aula extensa.

## Regra de profundidade: estudar para acertar, não para esgotar o assunto

Para cada subtema:

1. teoria mínima suficiente para entender a lógica;
2. uma ou mais questões originais CESGRANRIO, preferencialmente Transpetro/Petrobras Telecom;
3. questão de transferência com contexto diferente;
4. se acertar com segurança, sair do tópico e colocá-lo em repetição espaçada;
5. se errar, diagnosticar o tipo de erro e estudar apenas o trecho necessário;
6. só aprofundar quando houver erro repetido, recorrência histórica alta ou exigência clara do edital.

**100% em um bloco não significa domínio eterno; significa que o assunto sai do reparo imediato e volta por espaçamento.**

## Regra para QTIs na reta final

Cada QTI misto deve respeitar o anti-repeat e a rotação semântica. Como diretriz de seleção:

- aproximadamente **50%** das questões: temas de alta recorrência histórica nas três provas-alvo ou lacunas prioritárias atuais;
- aproximadamente **30%**: rotação equilibrada pelos demais itens do edital, para não criar pontos cegos;
- aproximadamente **20%**: retestes espaçados, erros anteriores e transferências.

Essas proporções são guias, não cotas rígidas. O histórico recente e os cooldowns do banco prevalecem.

## Ordem atual de fechamento

1. **Óptica + SDH**
2. **Radiopropagação + Satélite**
3. **Telefonia: PCM/E1/H.323/SIP/R2**
4. **Regulamentação / espectro**
5. **Celular / reuso / LTE / 5G**
6. **Codificação voz/vídeo**
7. **Banda-base / códigos de linha**
8. **Super-heteródino**

Redes IP/Locais, Sinais/Sistemas, Probabilidade, Antenas e Princípios de Telecom continuam rodando nos QTIs e retestes; não estão excluídos dessa estratégia.

## Princípio central da reta final

> **O objetivo não é sair professor de Telecom em todas as áreas. É chegar à prova capaz de converter o máximo possível das 50 questões específicas em pontos.**

Toda nova teoria deve justificar o tempo consumido pela probabilidade de virar ponto. Quando duas matérias competirem pelo mesmo tempo, vence a que reunir melhor combinação de: edital + recorrência Transpetro + lacuna real + chance de cobrança no nível CESGRANRIO.
