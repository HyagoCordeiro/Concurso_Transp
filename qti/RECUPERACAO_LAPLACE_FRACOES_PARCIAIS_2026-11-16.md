# Recuperação de Laplace — Frações parciais (16/11/2026)

**Origem:** caderno de erros — Q61 do simulado integral de 15/11/2026, unidade 3.1 (Sistemas LIT / resposta ao degrau).

## Dúvida que motivou o reforço

No exercício com H(s)=9/(s+3) e entrada degrau 2u(t), o aluno montou corretamente Y(s)=18/[s(s+3)], mas perguntou **“como 18 vira 6 - 6?”**. Foi explicado que não se trata da subtração numérica 6−6; é uma identidade algébrica entre frações com **denominadores distintos**.

Decomposição:
- 18/[s(s+3)] = A/s + B/(s+3)
- Multiplicando por s(s+3): 18=A(s+3)+Bs
- s=0 => 18=3A => A=6
- s=-3 => 18=-3B => B=-6
- Portanto 18/[s(s+3)] = 6/s - 6/(s+3), verificado por (6(s+3)-6s)/[s(s+3)] = 18/[s(s+3)].
- Transformada inversa: y(t)=6(1-e^(-3t))u(t).

## Fixação independente

**Questão autoral nova:** decompor Y(s)=24/[s(s+4)] em A/s+B/(s+4).
- Alternativa escolhida: **D**, A=6 e B=−6.
- Gabarito: **D**.
- **Acerto (1/1)**, após explicação.
- Cálculo: 24=A(s+4)+Bs; com s=0, A=24/4=6; com s=−4, B=24/(−4)=−6.
- Verificação: 6/s−6/(s+4)=[6(s+4)−6s]/[s(s+4)]=24/[s(s+4)].
- Inversa: y(t)=6(1−e^(−4t))u(t).

**Atalho consolidado neste exercício:** K/[s(s+a)] = (K/a)/s−(K/a)/(s+a), para a ≠ 0.

## Avaliação e próxima revisão

- O estudante demonstrou conseguir determinar **A e B** corretamente após identificar o método e sua finalidade.
- **Reparo imediato do subtema verificado; retenção espaçada ainda não atestada**. A revisão planejada para **18/11/2026** permanece.
- Próximo passo pedagógico: decomposição com **numerador contendo s**, como (2s+10)/[(s+2)(s+3)], sem antecipar o gabarito e sem contabilizar este reforço como nova prova.
