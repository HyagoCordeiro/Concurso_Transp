# Classificação dos cadernos TecConcursos nos 13 itens do edital

Atualizado em **07/10/2026**.

## Fontes classificadas

- `TEcom_Tec.pdf` — questões **1 a 199**.
- `TEcom_Tec2.pdf` — questões **200 a 399**.
- `TEcom_Tec3.pdf` — questões **400 a 456**.

Total bruto: **456 questões**.

A classificação foi feita pela **competência predominante necessária para resolver a questão**, e não apenas pelo cabeçalho/assunto usado no TecConcursos. Questões híbridas foram atribuídas ao item cujo núcleo de resolução predomina.

## Resumo geral

| Item | Matéria | Questões | % das 456 |
|---:|---|---:|---:|
| 1 | Probabilidade e Processos Estocásticos | 13 | 2,9% |
| 2 | Matemática Aplicada a Sinais | 20 | 4,4% |
| 3 | Conceitos Básicos de Sinais e Sistemas | 22 | 4,8% |
| 4 | Princípios de Telecomunicações | 130 | 28,5% |
| 5 | Telefonia e Videoconferência | 67 | 14,7% |
| 6 | Antenas | 22 | 4,8% |
| 7 | Radiopropagação | 34 | 7,5% |
| 8 | Sistemas de Transmissão via Satélite | 20 | 4,4% |
| 9 | Sistemas de Comunicações Celulares | 14 | 3,1% |
| 10 | Redes Locais | 5 | 1,1% |
| 11 | Redes IP | 6 | 1,3% |
| 12 | Sistemas Ópticos | 84 | 18,4% |
| 13 | Regulamentação das Telecomunicações | 8 | 1,8% |
|  | **Dentro dos 13 itens** | **445** | **97,6%** |
|  | **Fora do edital específico** | **11** | **2,4%** |
|  | **TOTAL** | **456** | **100%** |

Os três maiores bancos são:

- **Item 4 — Princípios de Telecomunicações: 130 questões**.
- **Item 12 — Sistemas Ópticos: 84 questões**.
- **Item 5 — Telefonia e Videoconferência: 67 questões**.

Esses três itens somam **281 questões = 61,6%** de todo o banco.

Os itens **2 + 3** somam **42 questões**, o que permite rotação entre Fourier, convolução, Laplace, Z, LIT e tópicos correlatos sem necessidade de repetir a mesma família imediatamente.

## Mapeamento completo

### Item 1 — Probabilidade e Processos Estocásticos — 13
`15-27`

### Item 2 — Matemática Aplicada a Sinais — 20
`35-37, 39-40, 42, 44, 46-50, 52, 54-56, 59, 61, 65, 73`

### Item 3 — Conceitos Básicos de Sinais e Sistemas — 22
`32-34, 38, 41, 43, 45, 51, 53, 57-58, 60, 62-64, 66-68, 70, 74, 85-86`

### Item 4 — Princípios de Telecomunicações — 130
`1-14, 28-31, 71, 78-79, 84, 87-181, 234, 240-241, 426, 428, 437, 441-442, 445, 447-450`

### Item 5 — Telefonia e Videoconferência — 67
`238, 260-300, 357-374, 396, 406, 412, 416, 435, 439, 456`

### Item 6 — Antenas — 22
`213-217, 219-221, 223, 228-230, 232-233, 244-245, 248-249, 251-253, 259`

### Item 7 — Radiopropagação — 34
`77, 80-83, 190-191, 198-199, 201, 203-204, 218, 222, 224-226, 231, 235, 239, 242-243, 247, 250, 254-258, 430-431, 443, 452-453`

### Item 8 — Sistemas de Transmissão via Satélite — 20
`182-189, 194-197, 200, 202, 207, 210-212, 227, 415`

### Item 9 — Sistemas de Comunicações Celulares — 14
`75, 397-404, 407-408, 429, 432, 446`

### Item 10 — Redes Locais — 5
`69, 246, 427, 438, 440`

### Item 11 — Redes IP — 6
`409, 417, 424, 433-434, 451`

### Item 12 — Sistemas Ópticos — 84
`72, 237, 301-356, 375-395, 421-422, 444, 454-455`

### Item 13 — Regulamentação das Telecomunicações — 8
`76, 192-193, 405, 410-411, 418, 423`

## Questões fora dos 13 itens

Foram excluídas do banco normal do edital **11 questões**:

- **205 e 206** — controle em espaço de estados aplicado à atitude de satélite; fora do escopo de transmissão via satélite.
- **208 e 209** — mecânica/motor-redutor em aplicação de radar.
- **236** — linha de transmissão de potência elétrica, não linha de RF/telecom do edital.
- **413 e 414** — HART.
- **419** — ITIL.
- **420** — COBIT.
- **425** — MODBUS.
- **436** — Bluetooth, não explicitamente incluído no escopo de Redes Locais do edital usado no projeto.

Validação: **445 questões classificadas dentro do edital + 11 excluídas = 456**, sem duplicidade e sem lacunas na numeração 1-456.

## Questões híbridas — regra adotada

Questões que atravessam mais de um item foram classificadas pelo conhecimento principal exigido na resolução. Exemplos:

- questão **421**: mistura células ATM e transporte STM-1; classificada no **Item 12**, pois o núcleo é SDH/transporte óptico;
- questão **435**: mistura PCM, TDM e 8-PSK; classificada no **Item 5**, pois o cenário predominante é transporte/multiplexação de canais de voz.

## Uso operacional daqui para frente

1. Tratar esses três cadernos como banco prioritário de questões reais/estilo CESGRANRIO em Telecom e áreas afins.
2. Antes de qualquer QTI, cruzar a questão candidata com `data/QUESTOES.json`, `data/RESULTADOS.json` e `qti/`.
3. Respeitar cooldown e anti-repetição: questão correta recente não deve reaparecer fora de REPAIR/RETEST.
4. Usar **rotação semântica**: se UMTS acabou de ser usado, preferir 5G ou outro subtema do Item 9; se convolução acabou de ser usada, preferir Z/Fourier/Laplace dentro dos itens 2 e 3.
5. Os cadernos são especialmente fortes nos itens **4, 5, 7 e 12**.
6. Os cadernos são fracos nos itens **10, 11 e 13**; complementar obrigatoriamente com outras provas CESGRANRIO, QConcursos/TecConcursos e o banco do GitHub.
7. Não interpretar a grande quantidade de questões de um item como peso automático da prova-alvo; o edital continua sendo a referência principal de cobertura.

## Arquivo estruturado

A versão legível por máquina desta classificação está em:

`data/TECCONCURSOS_13_ITENS_2026-10-07.json`
