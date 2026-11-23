# QTI-15 Kamikaze — 23/11/2026

**Escopo:** itens 4 a 12 do edital Transpetro Engenharia de Telecomunicações; questões autorais no estilo CESGRANRIO, não originais de prova. **Resultado: 14/15 (93,3%)**; único erro Q14. Tempo líquido não medido.

| Q | Item | Tema | Marcou | Correta | Resultado |
|---:|:--:|---|:--:|:--:|:--:|
| 1 | 4.1 | Modulação FM — regra de Carson | C | C | ✓ |
| 2 | 4.2 | PCM — amostragem Nyquist e taxa | A | A | ✓ |
| 3 | 5.3 | Telefonia IP — SIP e RTP | E | E | ✓ |
| 4 | 6.2 | Antena monopolo λ/4 e plano terra | B | B | ✓ |
| 5 | 6.1 | Despolarização — cos² θ | D | D | ✓ |
| 6 | 7.1 | Liberação 60% da primeira zona de Fresnel | A | A | ✓ |
| 7 | 7.2 | Potência recebida e margem de enlace | E | E | ✓ |
| 8 | 8.2 | Satélites C Ku Ka — atenuação por chuva | C | C | ✓ |
| 9 | 9.2 | Setorização de células e interferência cocanal | B | B | ✓ |
| 10 | 10.3 | IEEE 802.1Q — 12 bits VID | D | D | ✓ |
| 11 | 10.3 | SNMP InformRequest versus Trap | B | B | ✓ |
| 12 | 11.2 | OSPF — custo acumulado | E | E | ✓ |
| 13 | 11.3 | MPLS L3VPN — VRFs MP-BGP RT RD | A | A | ✓ |
| 14 | 12.1 | Dispersão modal e taxa máxima NRZ no modelo especificado | C | D | ✗ |
| 15 | 12.4 | DWDM e CWDM — espaçamento dos canais | C | C | ✓ |

## Único erro — Q14 (item 12.1, dispersão modal)

- Marcou **C (2,08 Mbps)**; gabarito **D (4,17 Mbps)**.
- O enunciado informa dispersão modal de **60 ns/km**, comprimento **4 km**, e **explicitamente define** \(R_b\approx1/\Delta t\).
- \(\Delta t=60\times4=240\text{ ns}\); \(R_b=1/(240\times10^{-9})\approx4,17\text{ Mbps}\).
- A opção 2,08 Mbps corresponde a usar \(1/(2\Delta t)\), que não é a convenção pedida, embora apareça em outros modelos. **Não se pode inferir a causa exata do erro sem consultar a conta feita pelo aluno**.
- Reteste D3 em **26/11**, de preferência uma questão breve de dispersão modal/cromática com modelo indicado no enunciado, sem excesso de novo conteúdo.

## Análise

- Acertos em Carson, PCM, SIP/RTP, monopolo, polarização, Fresnel, enlace, satélites, rede celular, 802.1Q, SNMP, OSPF, MPLS L3VPN e WDM.
- **Manter o foco:** itens 4–12, revisão de domínio e erros reais; tópicos 1–3 em manutenção cautelosa, sem aprofundamento em Elétrica/Automação.
- Não confundir um QTI-15 autoral e familiar (14/15) com simulado integral original de 70 questões.
