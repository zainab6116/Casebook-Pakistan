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

return `

<div class="box">

<h2>Timeline</h2>

<div class="timeline-case">

${currentCase.timeline.map(item=>`

<div class="timeline-item">

<div class="timeline-dot"></div>

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

<div class="quick-facts">

<div class="fact-card">

<h4>Victim</h4>

<p>${currentCase.name}</p>

</div>

<div class="fact-card">

<h4>Year</h4>

<p>${currentCase.year}</p>

</div>

<div class="fact-card">

<h4>Location</h4>

<p>${currentCase.location}</p>

</div>

<div class="fact-card">

<h4>Status</h4>

<p>${currentCase.status}</p>

</div>

</div>

`;

}

/* ----------------------------------------------------------
   HERO
---------------------------------------------------------- */

function hero(){

return `

<section class="case-hero">

<div class="hero-left">

<div class="case-number">

CASE FILE #${String(currentCase.id).padStart(3,"0")}

</div>

<h1>

${currentCase.name}

</h1>

<div class="case-status">

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

<div class="hero-right">

<img

src="${currentCase.image}"

alt="${currentCase.name}"

>

</div>

</section>

`;

}

/* ----------------------------------------------------------
   OVERVIEW
---------------------------------------------------------- */

function overview(){

return `

<div class="box">

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

<div class="highlight red">

<h3>Key Finding</h3>

<p>

${currentCase.finding || "Information unavailable."}

</p>

</div>

<div class="highlight blue">

<h3>Official Position</h3>

<p>

${currentCase.official || "Information unavailable."}

</p>

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

<div class="box">

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

<div class="box">

<h2>

Unanswered Questions

</h2>

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

<div class="box">

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
<div class="box">
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

const elements = document.querySelectorAll(".box, .case-hero, .highlight, .fact-card");

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

${overview()}

${createTimeline()}

${highlights()}

${contentGrid()}

${investigation()}

${questions()}

${statusSection()}

${sources()}

${relatedCases()}

`;

setupScrollAnimations();
setupImageFallback();
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