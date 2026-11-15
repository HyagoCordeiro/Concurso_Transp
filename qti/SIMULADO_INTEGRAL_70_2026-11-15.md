# Simulado integral Transpetro Telecom — 15/11/2026

**Natureza:** simulado **autoral**, com calibração histórica CESGRANRIO/QConcursos; não é prova original. Caderno PDF com 24 páginas e 11 figuras: `Simulado_Transpetro_Telecom_2026_70_Questoes.pdf` (SHA256 `7bef072fbcbae3b35ace94e4b4cde6281c7db406855d547bda660540ff4f2782`). **O arquivo binário original permanece na conversa; não foi anexado ao repositório.**

## Cronometragem e resultado

- **Início:** 10h00; **término:** 11h00; **60 minutos**, aproximadamente 51 s por questão (tempo declarado pelo candidato).
- **Cartão entregue:** **61/70 (87,1%)**; Português 8/10; Inglês 10/10; Específicos 43/50; nove alternativas erradas.
- **Rascunho manuscrito:** **63/70 (90,0%)**; Português 9/10; Inglês 10/10; Específicos 44/50; sete alternativas erradas.
- **Falhas de transcrição (não erros conceituais):** questão 04 cartão E / rascunho C / correta C; questão 48 cartão D / rascunho E / correta E.
- **Erros restantes:** 05, 27, 50, 53, 58, 61 e 63; revisados individualmente.
- **Fixações depois da prova:** 27A E, 53A C, 58A C e 61A C: **4/4**, não computadas no simulado e sem comprovação de retenção D3/D7.

## Caderno de erros desta sessão

| Q | Unidade | Cartão/rascunho/correta | Tipo | Diagnóstico |
|---:|:---:|:---:|---|---|
| 04 | PT | E/C/C | TRANSCRICAO_CARTAO | Rascunho C correto; cartão E. |
| 05 | PT | A/A/E | CONEXAO_SEMANTICA | Interpretou contudo como conclusão, não contraste. |
| 27 | 1.3 | C/C/D | PROCEDIMENTO_WIENER_KHINCHIN | Marcou C por eliminação; não desenvolveu a transformada; fixação 27A E correta. |
| 48 | 8.3 | D/E/E | TRANSCRICAO_CARTAO | Rascunho E correto; cartão D. |
| 50 | 7.1 | B/B/E | INTERPRETACAO_FRESNEL | Supôs perda zero por obstáculo não bloquear além da linha de visada. |
| 53 | 3.1 | B/B/A | ALGEBRA_LAPLACE | Tentou separar s/(s+1)+2/(s+2); fixação 53A C correta. |
| 58 | 2.4 | C/C/E | INTERPRETACAO_CONVOLUCAO | Tentou avaliar degrau isolado; fixação 58A C correta. |
| 61 | 3.1 | E/E/A | LAPLACE_DEGRAU_GANHO | Montou Y=4/[s(s+4)], mas não via destino do 4; fixação 61A C correta. |
| 63 | 3.1 | D/D/A | LEITURA_GRAFICA_MATERIAL | Figura de polos pouco legível; interpretou como curva senoidal de amplitude constante. |

- **Q4 — Manutenção preventiva sem falhas:** Conferência cruzada questão e letra no cartão. **Reteste recomendado:** 2026-11-18.
- **Q5 — Contudo versus entretanto:** Contudo, entretanto, porém = contraste; portanto, logo, por conseguinte = conclusão. **Reteste recomendado:** 2026-11-18.
- **Q27 — Autocorrelação e Wiener-Khinchin:** Rxx=A exp(-a|tau|) => Sxx=2Aa/(a²+w²). **Reteste recomendado:** 2026-11-18.
- **Q48 — C/N combinado 20 e 17 dB:** Conferência do cartão; não repetir teoria C/N sem necessidade. **Reteste recomendado:** 2026-11-18.
- **Q50 — Gume de faca v=0:** Parâmetro knife-edge v=0 implica cerca de 6 dB de perda. **Reteste recomendado:** 2026-11-18.
- **Q53 — Laplace resposta impulso com polo-zero:** Fatorar s²+3s+2=(s+1)(s+2), cancelar s+2, obter h=e^-t u(t). **Reteste recomendado:** 2026-11-18.
- **Q58 — Convolução de pulsos:** Convolução de dois pulsos unitários é área de sobreposição; t=2,5 gera 2. **Reteste recomendado:** 2026-11-18.
- **Q61 — Laplace resposta ao degrau:** Frações parciais 4/[s(s+4)]=1/s−1/(s+4). **Reteste recomendado:** 2026-11-18.
- **Q63 — Estabilidade polos complexos plano s:** Polos -2±j3 geram e^-2t(A cos3t+B sen3t), amortecida. Retestar com figura clara. **Reteste recomendado:** 2026-11-21.

**Observação importante Q63:** o usuário avaliou a figura do plano s como pouco clara e desenhou interpretação como senoide; classificar o erro como interpretação gráfica influenciada pelo material, não presumir domínio ausente de polos.

**Ritmo recomendado:** 18/11/2026 reteste D3 com questões novas e treino cartão; revisão semanal do caderno 21/11/2026. **Aceleração não é objetivo isolado**: 60 minutos para 70 itens ante 4h30 disponíveis.

## Registro integral das respostas e identificadores antirrepetição

| Nº | Unidade | Tema | Cartão | Rascunho | Correta | Status do cartão |
|---:|:---:|---|:---:|:---:|:---:|---|
| 01 | PT | Interpretação de paradoxo | B | B | B | OK |
| 02 | PT | Inferência: dados e julgamento | D | D | D | OK |
| 03 | PT | Conector embora | A | A | A | OK |
| 04 | PT | Manutenção preventiva sem falhas | E | C | C | TRANSCRICAO |
| 05 | PT | Contudo versus entretanto | A | A | E | ERRO |
| 06 | PT | Por que em interrogação indireta | B | B | B | OK |
| 07 | PT | Texto II: pressa e demora | C | C | C | OK |
| 08 | PT | Concordância verbal | D | D | D | OK |
| 09 | PT | Crase | A | A | A | OK |
| 10 | PT | Pontuação | E | E | E | OK |
| 11 | EN | Shared failure infrastructure | B | B | B | OK |
| 12 | EN | Yet in contrast | C | C | C | OK |
| 13 | EN | Sensitive thresholds and false alarms | A | A | A | OK |
| 14 | EN | Nevertheless contrast | D | D | D | OK |
| 15 | EN | Prediction not guarantee | E | E | E | OK |
| 16 | EN | Resilient network design | C | C | C | OK |
| 17 | EN | Geostationary latency | A | A | A | OK |
| 18 | EN | Pronoun reference they | D | D | D | OK |
| 19 | EN | Prohibitively expensive | B | B | B | OK |
| 20 | EN | Two-text synthesis | E | E | E | OK |
| 21 | 4.1 | Carson largura FM | D | D | D | OK |
| 22 | 3.5 | Amostragem e aliasing | E | E | E | OK |
| 23 | 5.1 | Erlang B dois circuitos | C | C | C | OK |
| 24 | 10.3 | PoE 802.3af potência PD | E | E | E | OK |
| 25 | 11.1 | DiffServ LLQ voz | A | A | A | OK |
| 26 | 10.3 | SNMPv3 authPriv | E | E | E | OK |
| 27 | 1.3 | Autocorrelação e Wiener-Khinchin | C | C | D | ERRO |
| 28 | 4.2 | PCM TDM 24 canais | D | D | D | OK |
| 29 | 13.1 | LGT espectro radiofrequências | B | B | B | OK |
| 30 | 5.3 | SIP BYE | E | E | E | OK |
| 31 | 2.3 | Fourier função ímpar | D | D | D | OK |
| 32 | 7.1 | FSPL 2 GHz 10 km | A | A | A | OK |
| 33 | 1.1 | Bayes e alarmes falsos | B | B | B | OK |
| 34 | 10.3 | RSTP IEEE 802.1w | A | A | A | OK |
| 35 | 8.2 | Satélite banda Ka versus C | C | C | C | OK |
| 36 | 13.2 | PDFF Anatel | A | A | A | OK |
| 37 | 7.1 | Raio Fresnel primeira zona | C | C | C | OK |
| 38 | 6.1 | ERP versus EIRP | E | E | E | OK |
| 39 | 4.1 | AM DSB-LC espectro | B | B | B | OK |
| 40 | 9.2 | Reuso N=i²+ij+j² | B | B | B | OK |
| 41 | 2.1 | Complexos Z=3+j4 | D | D | D | OK |
| 42 | 6.2 | Monopolo lambda/4 | B | B | B | OK |
| 43 | 12.4 | DWDM e CWDM | D | D | D | OK |
| 44 | 6.3 | Arranjo de antenas | B | B | B | OK |
| 45 | 11.2 | BGP Local Preference | C | C | C | OK |
| 46 | 6.1 | HPBW diagrama de radiação | B | B | B | OK |
| 47 | 4.1 | 16-QAM taxa bruta | B | B | B | OK |
| 48 | 8.3 | C/N combinado 20 e 17 dB | D | E | E | TRANSCRICAO |
| 49 | 9.2 | 64-QAM grade de recursos | C | C | C | OK |
| 50 | 7.1 | Gume de faca v=0 | B | B | E | ERRO |
| 51 | 4.2 | Shannon capacidade canal | B | B | B | OK |
| 52 | 2.3 | Fourier X(0) por área | C | C | C | OK |
| 53 | 3.1 | Laplace resposta impulso com polo-zero | B | B | A | ERRO |
| 54 | 11.2 | Roteamento prefixo mais longo | A | A | A | OK |
| 55 | 9.2 | LTE OFDMA e SC-FDMA | D | D | D | OK |
| 56 | 4.2 | ADC SNR quantização | C | C | C | OK |
| 57 | 1.2 | Poisson média 2 | D | D | D | OK |
| 58 | 2.4 | Convolução de pulsos | C | C | E | ERRO |
| 59 | 3.5 | Transformada Z e ROC | A | A | A | OK |
| 60 | 7.2 | Equação de enlace em dBm | D | D | D | OK |
| 61 | 3.1 | Laplace resposta ao degrau | E | E | A | ERRO |
| 62 | 6.2 | Dipolo de meia onda | C | C | C | OK |
| 63 | 3.1 | Estabilidade polos complexos plano s | D | D | A | ERRO |
| 64 | 10.3 | STP raiz bridge priority | B | B | B | OK |
| 65 | 11.3 | MPLS L3VPN labels | E | E | E | OK |
| 66 | 12.1 | Atenuação fibra 1550 nm | C | C | C | OK |
| 67 | 12.2 | Dispersão em fibra óptica | E | E | E | OK |
| 68 | 8.1 | Satélite geoestacionário | A | A | A | OK |
| 69 | 1.2 | PDF f(x)=x/8 | C | C | C | OK |
| 70 | 5.1 | Erlang B versus C | D | D | D | OK |

## Regras preservadas

1. Não contar as quatro fixações na nota do simulado.
2. Manter erros no caderno até reteste com nova questão espaçada.
3. Preservar IDs do simulado `SIM70-20261115-INTEGRAL-Qnn` para bloquear repetição literal.
4. A dificuldade de prova autoral não é garantia da mesma nota em prova oficial.
5. Ordem de impressão: Português 1–10, Inglês 11–20, específicas 21–70. Estratégia inicialmente eleita: Específicas fáceis → Inglês → Português → Específicas difíceis, sem medir se essa foi a ordem efetiva.
6. A prova-alvo vigente no GitHub consta como **06/12/2026**, não 29/11, em `data/PROVA_ALVO_ATUALIZADA.json`.
