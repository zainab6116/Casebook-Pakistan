/* ===========================================================
   CASEBOOK PAKISTAN
   APP.JS
   PART 1
=========================================================== */

const container = document.getElementById("case-container");

/* ----------------------------------------------------------
   GET CASE ID
---------------------------------------------------------- */

const params = new URLSearchParams(window.location.search);
const caseId = Number(params.get("id"));

const currentCase = cases.find(c => c.id === caseId);

/* ----------------------------------------------------------
   ERROR PAGE
---------------------------------------------------------- */

if (!currentCase) {

container.innerHTML = `

<div class="box" style="text-align:center;padding:70px;">

<h1>404</h1>

<p>This case could not be found.</p>

<br>

<a href="index.html" class="back-btn">
← Return Home
</a>

</div>

`;

throw new Error("Case not found");

}

/* ----------------------------------------------------------
   SMALL HELPERS
---------------------------------------------------------- */

function createTimeline(){

if(!currentCase.timeline) return "";

const items = currentCase.timeline;
const openStatus = /unresolved|missing|open|ongoing|disappear/i.test(currentCase.status || "");

return `

<div class="box" id="section-timeline">

<h2>Timeline</h2>

<div class="timeline-case">

${items.map((item,i)=>`

<div class="timeline-item">

<div class="timeline-dot${(openStatus && i===items.length-1) ? " timeline-dot-current" : ""}"></div>

<div class="timeline-content">

<div class="timeline-date">
${item.date}
</div>

<h3>
${item.title}
</h3>

<p>
${item.description}
</p>

</div>

</div>

`).join("")}

</div>

</div>

`;

}

/* ----------------------------------------------------------
   QUICK FACTS
---------------------------------------------------------- */

function quickFacts(){

return `

<div class="quick-facts-wrap">

<div class="quick-facts">

<div class="fact-card">

<div class="fact-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg></div>

<h4>Victim</h4>

<p>${currentCase.name}</p>

</div>

<div class="fact-card">

<div class="fact-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></div>

<h4>Year</h4>

<p>${currentCase.year}</p>

</div>

<div class="fact-card">

<div class="fact-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.4 7-11.5A7 7 0 1 0 5 9.5C5 14.6 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg></div>

<h4>Location</h4>

<p>${currentCase.location}</p>

</div>

<div class="fact-card">

<div class="fact-icon"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M6 7h12M4 7l3-4M20 7l-3-4M4 15l3 4M20 15l-3 4"/></svg></div>

<h4>Status</h4>

<p>${currentCase.status}</p>

</div>

</div>

</div>

`;

}

/* ----------------------------------------------------------
   JUMP-TO-SECTION NAV
---------------------------------------------------------- */

function caseNav(){

const items = [

{ id:"section-overview", label:"Overview", ok:true },
{ id:"section-timeline", label:"Timeline", ok:!!currentCase.timeline },
{ id:"section-investigation", label:"Investigation", ok:!!currentCase.investigation },
{ id:"section-questions", label:"Questions", ok:!!currentCase.questions },
{ id:"section-case-status", label:"Status", ok:!!currentCase.caseStatus },
{ id:"section-sources", label:"Sources", ok:!!currentCase.sources }

].filter(i => i.ok);

if(items.length < 2) return "";

return `

<nav class="case-nav" aria-label="Jump to section">

${items.map(i => `<a href="#${i.id}">${i.label}</a>`).join("")}

</nav>

`;

}

/* ----------------------------------------------------------
   HERO
---------------------------------------------------------- */

function hero(){

const isOpenStatus = /unresolved|missing|open|ongoing|disappear/i.test(currentCase.status || "");

return `

<section class="case-hero">

<div class="case-hero-media" style="background-image:url('${currentCase.image}')"></div>
<div class="case-hero-scrim"></div>

<div class="case-hero-inner">

<a href="index.html" class="hero-back">
<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
Back to Archive
</a>

<div class="case-number">

CASE FILE #${String(currentCase.id).padStart(3,"0")}

</div>

<h1>

${currentCase.name}

</h1>

<div class="case-status${isOpenStatus ? " status-live" : ""}">

${currentCase.status}

</div>

<p class="hero-subtitle">

${currentCase.category}

•

${currentCase.location}

•

${currentCase.year}

</p>

</div>

</section>

`;

}

/* ----------------------------------------------------------
   OVERVIEW
---------------------------------------------------------- */

function overview(){

return `

<div class="box" id="section-overview">

<h2>

Overview

</h2>

<p>

${currentCase.overview}

</p>

</div>

`;

}
/* ===========================================================
   PART 2
   CONTENT SECTIONS
=========================================================== */

/* ----------------------------------------------------------
   HIGHLIGHTS
---------------------------------------------------------- */

function highlights(){

return `

<div class="content-grid highlight-grid">

<div class="highlight red">

<div class="highlight-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/></svg></div>

<h3>Key Finding</h3>

<p>

${currentCase.finding || "Information unavailable."}

</p>

</div>

<div class="highlight blue">

<div class="highlight-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z"/></svg></div>

<h3>Official Position</h3>

<p>

${currentCase.official || "Information unavailable."}

</p>

</div>

</div>

`;

}

/* ----------------------------------------------------------
   CONTENT GRID
---------------------------------------------------------- */

function contentGrid(){

return `

<div class="content-grid">

<div class="box">

<h2>Why This Case Matters</h2>

<p>

${currentCase.attention || "Information unavailable."}

</p>

</div>

<div class="box">

<h2>Public Reaction</h2>

<p>

${currentCase.reaction || "Information unavailable."}

</p>

</div>

</div>

`;

}

/* ----------------------------------------------------------
   INVESTIGATION
---------------------------------------------------------- */

function investigation(){

if(!currentCase.investigation) return "";

return `

<div class="box" id="section-investigation">

<h2>

Investigation

</h2>

<div class="investigation-list">

${currentCase.investigation.map(item=>`

<div class="investigation-card">

<h3>

${item.title}

</h3>

<p>

${item.description}

</p>

${
item.link ?

`<a
class="investigation-btn"
href="${item.link}"
target="_blank">

Open Source

</a>`

:

""

}

</div>

`).join("")}

</div>

</div>

`;

}

/* ----------------------------------------------------------
   QUESTIONS
---------------------------------------------------------- */

function questions(){

if(!currentCase.questions) return "";

return `

<div class="box" id="section-questions">

<h2>

Unanswered Questions

</h2>

<p class="section-lede">The record stays open until these have real answers.</p>

<div class="question-list">

${currentCase.questions.map(question=>`

<div class="question-item">

${question}

</div>

`).join("")}

</div>

</div>

`;

}

/* ----------------------------------------------------------
   CASE STATUS
---------------------------------------------------------- */

function statusSection(){

if(!currentCase.caseStatus) return "";

const s=currentCase.caseStatus;

return `

<div class="box" id="section-case-status">

<h2>

Current Status

</h2>

<div class="status-grid">

<div class="status-card">

<span>

Victim

</span>

<strong>

${s.victim}

</strong>

</div>

<div class="status-card">

<span>

Date

</span>

<strong>

${s.date}

</strong>

</div>

<div class="status-card">

<span>

Location

</span>

<strong>

${s.location}

</strong>

</div>

<div class="status-card">

<span>

Status

</span>

<strong>

${s.status}

</strong>

</div>

<div class="status-card">

<span>

Updated

</span>

<strong>

${s.updated}

</strong>

</div>

</div>

</div>

`;

}
/* ===========================================================
   PART 3
   SOURCES + RELATED + FINAL RENDERING
=========================================================== */

/* ----------------------------------------------------------
   SOURCES
---------------------------------------------------------- */

function sources(){

if(!currentCase.sources) return "";

return `
<div class="box" id="section-sources">
<h2>Sources</h2>

<div class="sources-list">
${currentCase.sources.map(src => `
<a href="${src.link}" target="_blank" class="source-item">
${src.name || "Unidentified Source"}
</a>
`).join("")}
</div>

</div>
`;
}

/* ----------------------------------------------------------
   CLOSING CTA — "this file stays open"
---------------------------------------------------------- */

function closingCTA(){

const label = currentCase.caseStatus ? currentCase.caseStatus.status : currentCase.status;

return `

<div class="case-cta">

<span class="case-cta-eyebrow">This file stays open</span>

<h2>${label || "Unresolved"} — until it isn't.</h2>

<p>If you have sourced information, documentation, or an update on this case, help us keep the record accurate.</p>

<a href="report.html" class="cta-btn-gold">Report an Update →</a>

</div>

`;

}

/* ----------------------------------------------------------
   RELATED CASES
---------------------------------------------------------- */

function relatedCases(){

if(!cases) return "";

const related = cases
.filter(c =>
c.id !== currentCase.id &&
(
c.category === currentCase.category ||
c.location === currentCase.location ||
c.year === currentCase.year
)
)
.slice(0, 4);

if(related.length === 0) return "";

return `
<div class="box">
<h2>Related Cases</h2>

<div class="related-grid">

${related.map(c => `
<a class="related-card" href="case.html?id=${c.id}">
<img src="${c.image}" alt="${c.name}">
<div class="related-info">
<h3>${c.name}</h3>
<p>${c.year} • ${c.location}</p>
</div>
</a>
`).join("")}

</div>
</div>
`;
}

/* ----------------------------------------------------------
   SMOOTH REVEAL ANIMATION
---------------------------------------------------------- */

function setupScrollAnimations(){

const elements = document.querySelectorAll(".box, .highlight, .fact-card, .timeline-item");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
}, {
threshold: 0.1
});

elements.forEach(el => {
el.classList.add("hidden");
observer.observe(el);
});
}

/* ----------------------------------------------------------
   TIMELINE PROGRESS RAIL
---------------------------------------------------------- */

function setupTimelineProgress(){

const track = document.querySelector(".timeline-case");

if(!track) return;

function update(){

const rect = track.getBoundingClientRect();
const vh = window.innerHeight;
const total = rect.height;

const visible = Math.min(Math.max((vh * 0.6) - rect.top, 0), total);
const pct = total > 0 ? (visible / total) * 100 : 0;

track.style.setProperty("--progress", pct + "%");

}

window.addEventListener("scroll", update, { passive:true });
window.addEventListener("resize", update);

update();

}

/* ----------------------------------------------------------
   IMAGE FALLBACK
---------------------------------------------------------- */

function setupImageFallback(){

document.querySelectorAll("img").forEach(img => {
img.onerror = () => {
img.src = "assets/default-case.jpg";
};
});
}

/* ----------------------------------------------------------
   MAIN RENDER FUNCTION
---------------------------------------------------------- */

function renderCase(){

container.innerHTML = `

${hero()}

${quickFacts()}

${caseNav()}

${overview()}

${createTimeline()}

${highlights()}

${contentGrid()}

${investigation()}

${questions()}

${statusSection()}

${sources()}

${closingCTA()}

${relatedCases()}

`;

setupScrollAnimations();
setupImageFallback();
setupTimelineProgress();
}

/* ----------------------------------------------------------
   DARK MODE (optional but included)
---------------------------------------------------------- */

function initTheme(){

const savedTheme = localStorage.getItem("cb-theme");

if(savedTheme === "dark"){
document.body.classList.add("dark");
}

}

/* ----------------------------------------------------------
   BACK BUTTON SUPPORT
---------------------------------------------------------- */

function setupBackButton(){

const btn = document.querySelector(".back-btn");

if(btn){
btn.addEventListener("click", () => {
history.back();
});
}

}

/* ----------------------------------------------------------
   INIT APP
---------------------------------------------------------- */

function init(){

initTheme();
renderCase();
setupBackButton();

console.log("Casebook Pakistan loaded successfully 🚀");

}

init();