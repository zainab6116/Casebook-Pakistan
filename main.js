/* ===========================================================
   CASEBOOK PAKISTAN — MAIN.JS
   Homepage logic: stats, timeline, cards, dashboard, search,
   featured story, categories, theme + nav toggles, reveals.
=========================================================== */

var UNRESOLVED_RX = /unresolved|missing|open|ongoing|disappear/i;
var RESOLVED_RX = /resolved|closed|convicted|solved/i;

var CATEGORIES = [
    { label:"Journalists",     match:/journal|media|reporter|anchor/i,
      icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M8 13h5"/></svg>' },
    { label:"Activists",       match:/activis|human rights|rights defender/i,
      icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-4.9-9.5-9.4C.6 8 2.4 4 6.3 4 8.6 4 10.7 5.3 12 7c1.3-1.7 3.4-3 5.7-3 3.9 0 5.7 4 4.8 7.6C20 16.1 12 21 12 21z"/></svg>' },
    { label:"Students",        match:/student/i,
      icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>' },
    { label:"Lawyers",         match:/lawyer|advocate|legal/i,
      icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18M7 6h10M4 21h16M6 6L3 12h6L6 6zM18 6l-3 6h6l-3-6z"/></svg>' },
    { label:"Politicians",     match:/politic/i,
      icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V10l7-6 7 6v11M10 21v-6h4v6"/></svg>' },
    { label:"Human Rights",    match:/human rights|rights/i,
      icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>' },
    { label:"Disappearances",  match:/disappear|missing/i,
      icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9" stroke-dasharray="3 4"/></svg>' },
    { label:"Attacks",         match:/attack|assault/i,
      icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l2.5 7H21l-5.7 4.3L17.5 21 12 16.8 6.5 21l2.2-7.7L3 9h6.5z"/></svg>' },
    { label:"Murders",         match:/murder|killed|homicide/i,
      icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/></svg>' },
    { label:"Whistleblowers",  match:/whistle/i,
      icon:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11l14-6v14l-14-6zM3 11v6h3v-6"/></svg>' }
];

function groupByYear(){
    var grouped = {};
    cases.forEach(function(c){
        if(!grouped[c.year]) grouped[c.year] = [];
        grouped[c.year].push(c);
    });
    return grouped;
}

function classifyStatus(status){
    var s = (status || "").toLowerCase();
    if(UNRESOLVED_RX.test(s)) return "unresolved";
    if(RESOLVED_RX.test(s)) return "resolved";
    return "other";
}

/* ---------------- stats ---------------- */
function loadStats(){
    var grouped = groupByYear();
    var cities = [];
    cases.forEach(function(c){
        if(c.location && cities.indexOf(c.location) === -1) cities.push(c.location);
    });
    var unresolved = cases.filter(function(c){ return UNRESOLVED_RX.test(c.status || ""); });
     var totalCases = document.getElementById("total-cases");
var totalYears = document.getElementById("total-years");
var totalCities = document.getElementById("total-cities");
var totalUnresolved = document.getElementById("total-unresolved");

if (totalCases) totalCases.textContent = cases.length;
if (totalYears) totalYears.textContent = Object.keys(grouped).length;
if (totalCities) totalCities.textContent = cities.length;
if (totalUnresolved) totalUnresolved.textContent = unresolved.length;
}

/* ---------------- featured story ---------------- */
function loadFeatured(){
    if(!cases.length) return;
    var pool = cases.filter(function(c){ return UNRESOLVED_RX.test(c.status || ""); });
    if(!pool.length) pool = cases.slice();
    pool.sort(function(a,b){ return (Number(b.year)-Number(a.year)) || (b.id-a.id); });
    var c = pool[0];

    var quote = "";
    if(c.questions && c.questions.length) quote = c.questions[0];
    else if(c.finding) quote = c.finding;

    document.getElementById("featured-story").innerHTML =
        '<div class="featured-media" style="background-image:url(\'' + c.image + '\')">' +
            '<span class="featured-tag">Featured Case</span>' +
            (quote ? '<p class="featured-quote">&ldquo;' + quote + '&rdquo;</p>' : '') +
        '</div>' +
        '<div class="featured-body">' +
            '<div class="featured-meta"><span>#' + String(c.id).padStart(3,"0") + '</span> ' + c.category + ' &nbsp;•&nbsp; ' + c.location + ' &nbsp;•&nbsp; ' + c.year + '</div>' +
            '<h2>' + c.name + '</h2>' +
            '<p>' + (c.overview || "") + '</p>' +
            '<a class="featured-btn" href="case.html?id=' + c.id + '">Read The Full File →</a>' +
        '</div>';
}

/* ---------------- categories ---------------- */
function loadCategories(){
    var grid = document.getElementById("category-grid");
    if(!grid) return;

    var html = CATEGORIES.map(function(cat){
        var count = cases.filter(function(c){
            return cat.match.test(c.category || "") || cat.match.test(c.status || "");
        }).length;
        return '<div class="category-card reveal-target" data-cat="' + cat.label + '">' +
            '<div class="category-icon">' + cat.icon + '</div>' +
            '<h3>' + cat.label + '</h3>' +
            '<p>Documented cases in this category</p>' +
            '<span class="category-count">' + count + ' CASE' + (count === 1 ? "" : "S") + '</span>' +
        '</div>';
    }).join("");

    grid.innerHTML = html;

    grid.querySelectorAll(".category-card").forEach(function(card){
        card.addEventListener("click", function(){
            var cat = CATEGORIES.filter(function(c){ return c.label === card.dataset.cat; })[0];
            var results = cases.filter(function(c){ return cat.match.test(c.category || "") || cat.match.test(c.status || ""); });
            renderSearchResults(results, cat.label);
        });
    });
}

/* ---------------- year timeline + cards ---------------- */
function makeCard(c){
    return '<div class="case-card reveal-target" onclick="window.location.href=\'case.html?id=' + c.id + '\'">' +
        '<div class="card-photo"><img src="' + c.image + '" alt="' + c.name + '" onerror="this.style.display=\'none\'"></div>' +
        '<div class="card-info">' +
            '<div class="card-case-num">CASE #' + String(c.id).padStart(3,"0") + '</div>' +
            '<div class="card-name">' + c.name + '</div>' +
            '<div class="card-charge">' + c.category + '</div>' +
            '<div class="card-location">📍 ' + c.location + '</div>' +
            '<span class="card-status">' + c.status + '</span>' +
        '</div>' +
    '</div>';
}

function showCases(year, activeDot){
    document.querySelectorAll(".year-dot").forEach(function(dot){ dot.classList.remove("active"); });
    if(activeDot) activeDot.classList.add("active");

    var grouped = groupByYear();
    var list = grouped[year] || [];

    document.getElementById("cases-label").textContent = year + " — " + list.length + " CASES";
    document.getElementById("cases-grid").innerHTML = list.map(makeCard).join("");
    setupReveals();
}

function buildTimeline(){
    var grouped = groupByYear();
    var years = Object.keys(grouped).sort();
    var container = document.getElementById("timeline-dots");
    if(!container) return;

    container.innerHTML = years.map(function(year, index){
        return '<div class="year-dot' + (index === 0 ? " active" : "") + '" data-year="' + year + '">' +
            '<div class="dot"></div>' +
            '<div class="year-num">' + year + '</div>' +
            '<div class="year-count">' + grouped[year].length + ' CASES</div>' +
        '</div>';
    }).join("");

    container.querySelectorAll(".year-dot").forEach(function(dot){
        dot.addEventListener("click", function(){ showCases(dot.dataset.year, dot); });
    });

    if(years.length) showCases(years[0], container.querySelector(".year-dot"));
}

/* ---------------- search (header + hero) ---------------- */
function renderSearchResults(results, label){
    document.getElementById("cases-label").textContent =
        results.length + " RESULT" + (results.length !== 1 ? "S" : "") + (label ? " — " + label.toUpperCase() : "") + " FOUND";

    document.getElementById("cases-grid").innerHTML = results.length
        ? results.map(makeCard).join("")
        : '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted);"><h2>No cases found</h2><p>Try another keyword.</p></div>';

    document.querySelectorAll(".year-dot").forEach(function(dot){ dot.classList.remove("active"); });
    setupReveals();

    setTimeout(function(){
        document.getElementById("cases-label").scrollIntoView({ behavior:"smooth", block:"start" });
    }, 40);
}

function runSearch(q){
    q = q.trim().toLowerCase();
    if(q === ""){
        var firstDot = document.querySelector(".year-dot");
        if(firstDot) showCases(firstDot.dataset.year, firstDot);
        return;
    }
    var results = cases.filter(function(c){
        return c.name.toLowerCase().includes(q) ||
               c.category.toLowerCase().includes(q) ||
               c.location.toLowerCase().includes(q) ||
               c.year.toString().includes(q) ||
               c.status.toLowerCase().includes(q);
    });
    renderSearchResults(results, q);
}

function initSearch(){
    var header = document.getElementById("search-input");
    var hero = document.getElementById("hero-search");

    if(header){
        header.addEventListener("input", function(){ runSearch(this.value); });
    }
    if(hero){
        hero.addEventListener("keydown", function(e){
            if(e.key === "Enter"){ runSearch(this.value); }
        });
    }
}

/* ---------------- news ticker ---------------- */
function loadNews(){
    if(!cases || !cases.length){
        document.getElementById("ticker-inner").textContent = "Casebook Pakistan — an archive of unresolved cases.";
        return;
    }
    var sorted = cases.slice().sort(function(a,b){ return b.id - a.id; });
    var items = sorted.slice(0,6).map(function(c){
        return "CASE #" + String(c.id).padStart(3,"0") + " — " + c.name + ", " + c.category + ", " + c.location + " (" + c.year + ")";
    });
    items.unshift(cases.length + " CASES DOCUMENTED SO FAR");
    document.getElementById("ticker-inner").textContent = items.join("   •   ");
}

/* ---------------- dashboard ---------------- */
function makeDashRow(c){
    var cls = classifyStatus(c.status);
    return '<tr class="dash-row" onclick="window.location.href=\'case.html?id=' + c.id + '\'">' +
        '<td class="dash-name"><span class="dash-case-num">#' + String(c.id).padStart(3,"0") + '</span>' + c.name + '</td>' +
        '<td class="col-hide-sm">' + c.category + '</td>' +
        '<td class="col-hide-sm">' + c.location + '</td>' +
        '<td>' + c.year + '</td>' +
        '<td><span class="dash-pill dash-pill-' + cls + '">' + c.status + '</span></td>' +
    '</tr>';
}

function buildDashboard(filter){
    filter = filter || "all";
    var sorted = cases.slice().sort(function(a,b){ return (b.year - a.year) || (b.id - a.id); });
    var filtered = filter === "all" ? sorted : sorted.filter(function(c){ return classifyStatus(c.status) === filter; });

    var body = document.getElementById("dashboard-body");
    if(!body) return;

    body.innerHTML = filtered.length
        ? filtered.map(makeDashRow).join("")
        : '<tr><td colspan="5" class="dash-empty">No cases match this filter.</td></tr>';

    var countEl = document.getElementById("dashboard-count");
    if(countEl) countEl.textContent = filtered.length + (filtered.length === 1 ? " case" : " cases");
}

function initDashboardFilters(){
    var buttons = document.querySelectorAll(".dash-filter");
    buttons.forEach(function(btn){
        btn.addEventListener("click", function(){
            buttons.forEach(function(b){ b.classList.remove("active"); });
            btn.classList.add("active");
            buildDashboard(btn.dataset.filter);
        });
    });
}

/* ---------------- theme + nav toggles ---------------- */
function initTheme(){
    var toggleBtn = document.getElementById("themeToggle");
    if(!toggleBtn) return;
    var saved = localStorage.getItem("cb-theme");

    if(saved === "light"){
        document.body.classList.add("light-mode");
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", function(){
        document.body.classList.toggle("light-mode");
        var isLight = document.body.classList.contains("light-mode");
        toggleBtn.textContent = isLight ? "☀️" : "🌙";
        localStorage.setItem("cb-theme", isLight ? "light" : "dark");
    });
}

function initNavToggle(){
    var btn = document.getElementById("navToggle");
    var nav = document.getElementById("site-nav");
    if(!btn || !nav) return;
    btn.addEventListener("click", function(){
        var open = nav.style.display === "flex";
        nav.style.display = open ? "none" : "flex";
        nav.style.cssText += "position:absolute;top:100%;left:0;right:0;flex-direction:column;gap:0;background:var(--bg-header);border-bottom:1px solid var(--border-color);padding:6px 0;";
        nav.querySelectorAll("a").forEach(function(a){ a.style.padding = "16px 24px"; });
    });
}

/* ---------------- scroll reveal ---------------- */
function setupReveals(){
    var elements = document.querySelectorAll(".reveal-target:not(.show), .reveal:not(.show)");
    var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold:0.1 });
    elements.forEach(function(el){ observer.observe(el); });
}

/* ---------------- init ---------------- */
window.addEventListener("DOMContentLoaded", function(){
    initTheme();
    initNavToggle();
    loadStats();
    loadFeatured();
    loadCategories();
    buildTimeline();
    loadNews();
    initSearch();
    buildDashboard();
    initDashboardFilters();
    setupReveals();
});