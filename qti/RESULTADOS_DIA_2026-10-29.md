# Resultados do dia — 29/10/2026

**Concurso-alvo:** Transpetro 2026 — Engenheiro(a) de Telecomunicações  
**Banca:** CESGRANRIO  
**Data:** 29/10/2026  
**Data oficial da prova considerada:** **06/12/2026**  
**Status:** sessão encerrada e consolidada.

## Resumo executivo

- Aquecimento — Item 10: **5/5 (100%)**.
- 11.1 — IP Multicasting, DiffServ, CBWFQ e LLQ: **5/5 (100%)**.
- 11.2 — Roteamento estático, OSPF, BGP e MPLS: **5/5 (100%)**.
- 11.3 — MPLS avançado, 1ª bateria: **4/5 (80%)**.
- 11.3 — MPLS avançado, 2ª bateria: **5/5 (100%)**.
- Reforço MP-BGP x LDP: **1/2 (50%)**.
- 11.4 — IPSec, SSH e SSL: **5/5 (100%)**.
- 11.5 — Firewalls de pacote e conteúdo: **5/5 (100%)**.
- Histórico CESGRANRIO — Item 11: **8/10 (80%)**.
- Reforço histórico — multicast e IGMP: **4/4 (100%)**.
- Português: **9/10 (90%)**.
- Inglês: **10/10 (100%)**.

**Total do dia: 66/71 = 93,0%.**  
> Percentual agregado de blocos dirigidos e históricos; não tratar como simulado independente.

## 1. Aquecimento — Item 10

**Resultado: 5/5.**

Conteúdos revisados:
- IEEE 802.11e / EDCA;
- switching L2 por endereço MAC;
- SNMP manager x agent;
- subcamadas MAC e LLC;
- switches L3 e roteamento inter-VLAN.

## 2. Item 11.1 — Multicast e QoS

**Resultado: 5/5.**

Consolidados:
- multicast como comunicação um-para-muitos em grupo;
- DSCP no DiffServ;
- CBWFQ para filas por classe;
- LLQ para fila de baixa latência/prioridade;
- DiffServ como QoS baseada em classes.

## 3. Item 11.2 — Estático, OSPF, BGP e MPLS

**Resultado: 5/5.**

Consolidados:
- OSPF como estado de enlace e uso de Dijkstra;
- BGP para roteamento inter-AS;
- MPLS baseado em rótulos;
- MPLS associado a QoS, VPN e engenharia de tráfego;
- longest prefix match.

## 4. Item 11.3 — MPLS avançado

### 1ª bateria
**Resultado: 4/5.**

Erro:
- função do **MP-BGP** em MPLS L3VPN.

Regra:
- **MP-BGP** -> troca rotas VPN entre roteadores PE;
- **LDP** -> distribuição de labels associados a FECs;
- **RSVP-TE** -> sinalização de LSPs e possível reserva de recursos;
- **OSPF-TE** -> divulgação de atributos de engenharia de tráfego.

### 2ª bateria
**Resultado: 5/5.**

Consolidados:
- OSPF-TE x RSVP-TE;
- MP-BGP;
- MPLS L2VPN x L3VPN;
- RD x RT;
- bit S da pilha MPLS;
- atributos ORIGIN, AS_PATH e NEXT_HOP.

### Reforço MP-BGP x LDP
**Resultado: 1/2.**

Erro remanescente no reforço:
- marcou MP-BGP em uma questão cuja função era distribuição de labels/FECs; correto: **LDP**.

Ponto de revisão futura:
- automatizar definitivamente **MP-BGP = rotas VPN** e **LDP = labels/FECs**.

## 5. Item 11.4 — IPSec, SSH e SSL

**Resultado: 5/5.**

Consolidados:
- IPSec modo túnel encapsula o pacote IP original inteiro;
- ESP fornece confidencialidade e pode fornecer integridade/autenticação;
- AH fornece autenticação e integridade, sem confidencialidade;
- SSH para acesso remoto seguro;
- SSL/TLS para proteção de sessões de aplicação;
- distinção entre modo transporte e modo túnel.

## 6. Item 11.5 — Firewalls

**Resultado: 5/5.**

Consolidados:
- firewall de filtragem de pacotes analisa IP, protocolo, portas e regras;
- firewall de conteúdo/aplicação atua em níveis superiores;
- firewall stateful mantém estado das conexões;
- filtragem de pacotes: simplicidade, baixo custo e eficácia satisfatória.

## 7. Histórico CESGRANRIO — Item 11

**Resultado: 8/10.**

Questões baseadas nas provas históricas CESGRANRIO/Transpetro, com foco em 2012, 2018 e 2023.

Erros:
1. árvore multicast compartilhada por grupo;
2. IGMPv1 Membership Report.

Acertos relevantes:
- OSPF intradomínio / estado de enlace;
- RSVP-TE;
- atributos BGP;
- endereçamento IPv4 multicast;
- IPSec modo túnel;
- DiffServ;
- SSH x SSL/TLS;
- firewall de filtragem de pacotes.

### Reforço histórico
**Resultado: 4/4.**

Regras consolidadas:
- árvore compartilhada -> vários emissores/receptores usam uma árvore comum;
- árvore baseada na origem -> cada fonte possui sua própria árvore;
- IGMP Membership Report -> host informa participação em grupo multicast;
- IGMP Membership Query -> roteador consulta membros/grupos.

## 8. Português

**Resultado: 9/10.**

Conteúdos:
- interpretação;
- coesão e referenciação;
- conectores;
- relações de oposição, causa, finalidade, condição, adição e conclusão.

Erro:
- equivalência de **portanto**: correto **logo**; foi marcado **contudo**.

Ponto de revisão:
- diferenciar automaticamente **conclusão x oposição**.

## 9. Inglês

**Resultado: 10/10.**

Consolidados:
- although -> contraste/concessão;
- because -> causa;
- so that -> finalidade;
- however -> contraste;
- if -> condição;
- rely on -> depend on;
- therefore -> thus;
- interpretação técnica em contexto de energia e infraestrutura.

## Diagnóstico final do dia

### Pontos fortes
- desempenho geral: **93,0%**;
- 11.1, 11.2, 11.4 e 11.5 fechados com 100%;
- segunda bateria do 11.3: 100%;
- reforço histórico multicast/IGMP: 100%;
- Inglês: 100%;
- Português: 90%.

### Prioridades para próximas revisões
1. **MP-BGP x LDP** — MP-BGP troca rotas VPN entre PEs; LDP distribui labels/FECs.
2. **Português** — conclusão (`portanto`, `logo`) x oposição (`contudo`, `entretanto`).
3. Revisão espaçada do Item 11, especialmente multicast/IGMP e MPLS avançado.
4. Próximo avanço do edital: **Item 12 — Sistemas Ópticos**, iniciando por 12.1.

## Regras mantidas
- priorizar CESGRANRIO/Transpetro/Petrobras;
- usar QConcursos como base de consulta;
- confrontar o edital com questões históricas;
- cobrir todos os tópicos do edital, mesmo os menos recorrentes;
- variar a posição das alternativas corretas;
- após erros, aplicar reforço dirigido.