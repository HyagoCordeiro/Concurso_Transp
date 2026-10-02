(function(){
  "use strict";
  const LETTERS=["A","B","C","D","E"];
  const DAY=86400000;
  const HISTORY_KEY="concurso.telecom.questionHistory.v2";
  const RESULT_KEY="concurso.telecom.qtiResults.v1";
  let state=null;

  function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
  function simpleHash(s){let h=2166136261>>>0;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return (h>>>0).toString(16);}
  function canonicalId(q){
    if(q.canonicalId)return String(q.canonicalId);
    const src=String(q.source||"").trim();
    const text=String(q.question||q.enunciado||"").replace(/\s+/g," ").trim().toLowerCase();
    return "AUTO-"+simpleHash(src+"|"+text);
  }
  function chooseCooldownDays(result){
    if(!result.isCorrect)return 0;
    if(result.confidence!=null && result.confidence<=2)return 3;
    if(result.responseTimeSec>=120)return 3;
    const values=[3,5,7];
    return values[Math.floor(Math.random()*values.length)];
  }
  function loadHistory(){try{return JSON.parse(localStorage.getItem(HISTORY_KEY)||"{}");}catch(e){return {};}}
  function saveHistory(h){try{localStorage.setItem(HISTORY_KEY,JSON.stringify(h));}catch(e){}}
  function isEligible(q,history,now){
    const rec=history[q.canonicalId];
    if(!rec)return true;
    if(rec.lastResult==="INCORRETA")return true;
    if(!rec.nextEligibleAt)return true;
    return now>=new Date(rec.nextEligibleAt).getTime();
  }
  function normalize(config){
    if(!config||!Array.isArray(config.questions)||!config.questions.length) throw new Error("QTI: config.questions deve conter pelo menos uma questão.");
    return {title:config.title||"QTI — Telecom",questions:config.questions.map((q,i)=>{
      const nq={
        id:q.id??i+1,source:q.source||"",sourceType:q.sourceType||"",topic:q.topic||"",question:q.question||q.enunciado||"",
        options:q.options||q.alternatives||{},answer:String(q.answer||q.gabarito||"").toUpperCase(),
        explanation:q.explanation||q.justification||q.justificativa||"",editalItem:q.editalItem||null,
        unitId:q.unitId||null,difficulty:q.difficulty||null,questionType:q.questionType||q.type||"ORIGINAL",
        canonicalId:q.canonicalId||null
      };
      nq.canonicalId=canonicalId(nq);
      return nq;
    })};
  }
  function selectEligible(questions){
    const history=loadHistory(),now=Date.now();
    return questions.filter(q=>isEligible(q,history,now));
  }
  function renderBlocked(total,eligible){
    const app=document.getElementById("qti-app");
    app.innerHTML=`<section class="qti-card qti-result"><h1 class="qti-title">Proteção anti-repetição</h1>
      <p>${eligible===0?"Nenhuma questão deste bloco está elegível agora.":"Parte do bloco foi bloqueada por cooldown."}</p>
      <p><strong>${total-eligible}</strong> questão(ões) correta(s) recente(s) não serão repetidas antes da data programada.</p>
      <p>Use questões inéditas ou vencidas do banco. Não quebre o cooldown para completar o QTI.</p></section>`;
  }
  function renderQuestion(){
    state.questionStartedAt=performance.now();
    const app=document.getElementById("qti-app"),q=state.questions[state.index],pct=(state.index/state.questions.length)*100;
    const source=[q.source,q.topic].filter(Boolean).join(" · ");
    app.innerHTML=`<section class="qti-card">
      <header class="qti-head"><h1 class="qti-title">${escapeHtml(state.title)}</h1><div class="qti-counter">Questão ${state.index+1}/${state.questions.length}</div></header>
      <div class="qti-progress"><span style="width:${Math.max(4,pct)}%"></span></div>
      ${source?`<div class="qti-source">${escapeHtml(source)}</div>`:""}
      <p class="qti-question">${escapeHtml(q.question)}</p>
      <div class="qti-confidence"><label>Confiança: <select id="qti-confidence"><option value="">Não informar</option><option value="1">1 — chute</option><option value="2">2 — baixa</option><option value="3">3 — média</option><option value="4">4 — alta</option><option value="5">5 — muito alta</option></select></label></div>
      <div class="qti-options">${LETTERS.filter(l=>q.options[l]!=null).map(l=>`<button class="qti-option" data-answer="${l}"><strong>${l})</strong> ${escapeHtml(q.options[l])}</button>`).join("")}</div>
      <div id="qti-feedback" hidden></div>
      <button id="qti-next" class="qti-next" disabled>${state.index===state.questions.length-1?"Ver resultado":"Próxima questão →"}</button>
    </section>`;
    document.getElementById("qti-confidence").addEventListener("change",e=>state.confidence=e.target.value?Number(e.target.value):null);
    app.querySelectorAll(".qti-option").forEach(btn=>btn.addEventListener("click",()=>answer(btn.dataset.answer)));
    document.getElementById("qti-next").addEventListener("click",next);
  }
  function answer(letter){
    if(state.answered)return; state.answered=true;
    const q=state.questions[state.index],correct=letter===q.answer;if(correct)state.score++;
    state.results.push({id:q.id,canonicalId:q.canonicalId,topic:q.topic,chosen:letter,correct:q.answer,isCorrect:correct,confidence:state.confidence,
      responseTimeSec:Math.round((performance.now()-state.questionStartedAt)/100)/10,errorType:correct?null:"UNKNOWN",
      source:q.source,sourceType:q.sourceType,editalItem:q.editalItem,unitId:q.unitId,difficulty:q.difficulty,questionType:q.questionType});
    document.querySelectorAll(".qti-option").forEach(btn=>{btn.disabled=true;const a=btn.dataset.answer;if(a===q.answer)btn.classList.add("is-correct");if(a===letter&&!correct)btn.classList.add("is-wrong");});
    const fb=document.getElementById("qti-feedback");fb.hidden=false;fb.className="qti-feedback "+(correct?"correct":"wrong");
    fb.innerHTML=`<div class="qti-feedback-title">${correct?"✅ CORRETO":"❌ INCORRETO"}</div><div><strong>Gabarito: ${escapeHtml(q.answer)}</strong></div><div>${escapeHtml(q.explanation||"Sem justificativa cadastrada.")}</div>`;
    document.getElementById("qti-next").disabled=false;
  }
  function next(){if(!state.answered)return;if(state.index===state.questions.length-1)return renderResult();state.index++;state.answered=false;state.confidence=null;renderQuestion();}
  function persistResults(){
    const now=new Date();
    try{
      const p=JSON.parse(localStorage.getItem(RESULT_KEY)||"[]");
      localStorage.setItem(RESULT_KEY,JSON.stringify(p.concat(state.results.map(r=>({...r,timestamp:now.toISOString()})))));
    }catch(e){}
    const h=loadHistory();
    state.results.forEach(r=>{
      const days=chooseCooldownDays(r);
      const next=new Date(now.getTime()+days*DAY);
      h[r.canonicalId]={
        canonicalId:r.canonicalId,lastSeenAt:now.toISOString(),lastResult:r.isCorrect?"CORRETA":"INCORRETA",
        cooldownDays:days,nextEligibleAt:r.isCorrect?next.toISOString():now.toISOString(),topic:r.topic,source:r.source
      };
    });
    saveHistory(h);
  }
  function renderResult(){
    persistResults();const app=document.getElementById("qti-app"),total=state.questions.length,pct=Math.round(state.score/total*100),errors=state.results.filter(r=>!r.isCorrect);
    const diagnosis=pct===100?"Excelente nesta sessão — acertos entram em cooldown":pct>=80?"Ótimo desempenho":pct>=60?"Bom desempenho — revisar erros":"Revisão recomendada antes de avançar";
    app.innerHTML=`<section class="qti-card qti-result"><h1 class="qti-title">${escapeHtml(state.title)}</h1><div class="qti-score">${state.score}/${total}</div><div>${pct}% de acerto</div><div class="qti-diagnosis">${diagnosis}</div>
      <div class="qti-review"><h3>Diagnóstico</h3>${errors.length?`<p>Questões a revisar: ${errors.map(e=>escapeHtml(String(e.id))).join(", ")}.</p><p>Ao refazer, somente erros continuam elegíveis imediatamente.</p>`:"<p>Nenhuma questão errada. As corretas foram bloqueadas por 3/5/7 dias.</p>"}</div>
      ${errors.length?'<button class="qti-restart" id="qti-restart">Rever erros elegíveis</button>':""}</section>`;
    if(errors.length)document.getElementById("qti-restart").addEventListener("click",()=>start(state.configOriginal));
  }
  function start(config){
    const normalized=normalize(config),eligible=selectEligible(normalized.questions);
    if(!eligible.length){state=null;renderBlocked(normalized.questions.length,0);return;}
    state={configOriginal:config,config:normalized,index:0,score:0,answered:false,results:[],confidence:null};
    state.title=normalized.title;state.questions=eligible;
    renderQuestion();
  }
  window.QTI={start,canonicalId};
})();