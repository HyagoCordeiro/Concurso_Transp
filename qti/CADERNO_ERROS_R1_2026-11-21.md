# Revisão do Caderno de Erros — 21/11/2026 — Rodada 1 (15 questões)

**Prova-alvo:** Transpetro Eng. Telecom, CESGRANRIO, 06/12/2026. **Natureza:** exercícios autorais/adaptados, com referência ao estilo da banca e aos erros registrados no GitHub. **Nota:** 11/15 (73,3%), quatro erros. **Tempo líquido:** não aferido.

| Nº | Tema | Marcou | Gabarito | Estado |
|---|---|---|---|---|
| 01 | MPLS 0x02ACD95A, campo S e TTL | E | B | ERRO |
| 02 | Fibra multimodo 55 ns/km em 4km, taxa NRZ máxima | E | E | ACERTO |
| 03 | Gaussianas X mu1 sigma2 Y mu-2 sigma3; Z=2X-Y média/desvio | C | C | ACERTO |
| 04 | Convolução discreta x[-1]=2 x[0]=-1 x[1]=3; h[-1]=4 h[0]=2 h[1]=-2; y[0] | A | A | ACERTO |
| 05 | Fresnel 1,5GHz D=8km, d1=3km e d2=5km | D | D | ACERTO |
| 06 | x(t)=4e^-5t u(t), derivada generalizada Fourier | E | E | ACERTO |
| 07 | WSS R_X(tau)=4+9e^(-/tau/), mu=2; variância | A | B | ERRO |
| 08 | SIP INVITE e 200 OK, confirmação de sessão | D | D | ACERTO |
| 09 | Doppler velocidade 90km/h frequência 2,4GHz | A | A | ACERTO |
| 10 | Nyquist B=3 kHz, 16 níveis, taxa máxima | C | C | ACERTO |
| 11 | Dispersão cromática monomodo D=18ps/nm/km L=40km largura=0,4nm | C | D | ERRO |
| 12 | TCI da tag IEEE 802.1Q: PCP DEI VID | E | E | ACERTO |
| 13 | Bayes linha A 35% e 8% falha, B 65% e 2% falha, P(A/defeito) | B | A | ERRO |
| 14 | Português conector contudo oposição | B | B | ACERTO |
| 15 | Inglês no walk in the park significado desafiador | C | C | ACERTO |

## Pendências prioritárias abertas na rodada

- **Q01 MPLS hexadecimal (11.2):** E→B; para `0x02ACD95A`, último nibble de TC+S = `9` (1001, S=1); TTL = `0x5A` = 90. **Recorrente:** outro erro 20/11 em TTL de cabeçalho.
- **Q07 autocorrelação WSS (1.3):** A→B; `R_X(0)=13`, média `mu=2`, variância `13-4=9`. **Recorrente:** QTI-30 de 19/11.
- **Q11 dispersão cromática (12.1):** C→D; `D L delta_lambda = 18*40*0,4=288 ps`. **Recorrente:** QTI-30 19/11.
- **Q13 Bayes (1.1):** B→A; `P(A|defeito)=0,35*0,08/(0,35*0,08+0,65*0,02)=68,3%`, não prevalência 35%. **Recorrente:** 19/11.

## Recuperações observadas na revisão

- Acertos: fibra multimodo / dispersão modal; soma de Gaussianas; convolução discreta; Fresnel 3km/5km; derivação de Fourier com fator 4; SIP ACK; Doppler; Nyquist; IEEE 802.1Q; conectores em Português; expressão idiomática em Inglês.
- **Critério:** acertos em nova sessão são evidência positiva; não implicam automaticamente retenção de longo prazo.
- **Próxima atividade planejada:** 22/11/2026 simulado integral de 70 questões, com Português, Inglês e Conhecimentos Específicos. Ainda não realizado.

[JSON com respostas e correções](CADERNO_ERROS_R1_2026-11-21.json) · [Caderno permanente](CADERNO_ERROS.md)
