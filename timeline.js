
function groupByYear() {
    var grouped = {};
    cases.forEach(function(c) {
        var y = c.year;
        if (!grouped[y]) grouped[y] = [];
        grouped[y].push(c);
    });
    return grouped;
}


// Stats section update karo
function loadStats() {
    var grouped = groupByYear();
    var years   = Object.keys(grouped);
    var total   = cases.length;

    // Unique cities/locations count
    var cities = [];
    cases.forEach(function(c) {
        if (c.location && cities.indexOf(c.location) === -1) {
            cities.push(c.location);
        }
    });

    document.getElementById('total-years').textContent  = years.length;
    document.getElementById('total-cases').textContent  = total;
    document.getElementById('total-cities').textContent = cities.length;
}


// Timeline ke dots banao
function buildTimeline() {
    var grouped = groupByYear();
    var years   = Object.keys(grouped).sort();
    var box     = document.getElementById('timeline-dots');
    var html    = '';

    years.forEach(function(y, i) {
        var active = (i === 0) ? 'active' : '';
        // Year click karo → year-cases.html?year=2022 par jao
        html += '<div class="year-dot ' + active + '" onclick="goToYear(\'' + y + '\', this)">';
        html += '<div class="dot"></div>';
        html += '<div class="year-num">' + y + '</div>';
        html += '<div class="year-count">' + grouped[y].length + ' cases</div>';
        html += '</div>';
    });

    box.innerHTML = html;

    // Pehla saal by default cards mein show karo bhi
    showCases(years[0], box.querySelector('.year-dot'));
}


// Year click → year-cases.html par jao
function goToYear(year, dot) {
    // Dot active karo (brief visual feedback)
    document.querySelectorAll('.year-dot').forEach(function(d) { d.classList.remove('active'); });
    if (dot) dot.classList.add('active');

    // Us year ke page par jao
    window.location.href = 'year-cases.html?year=' + year;
}


// Ek card ka HTML
function makeCard(c) {
    return '<div class="case-card" onclick="window.location.href=\'case.html?id=' + c.id + '\'">' +
        '<div class="card-photo">' +
            '<img src="' + c.image + '" onerror="this.parentElement.style.background=\'#1e293b\'" alt="' + c.name + '">' +
        '</div>' +
        '<div class="card-info">' +
            '<div class="card-case-num">CASE #' + String(c.id).padStart(3, '0') + '</div>' +
            '<div class="card-name">' + c.name + '</div>' +
            '<div class="card-charge">' + c.category + '</div>' +
            '<div class="card-location">' + c.location + '</div>' +
            '<span class="card-status">' + c.status + '</span>' +
        '</div>' +
    '</div>';
}


// Index page pe preview cards dikhao (optional — sirf scroll ke liye)
function showCases(year, dot) {
    document.querySelectorAll('.year-dot').forEach(function(d) { d.classList.remove('active'); });
    if (dot) dot.classList.add('active');

    var grouped = groupByYear();
    var list    = grouped[year] || [];

    var label = document.getElementById('cases-label');
    var grid  = document.getElementById('cases-grid');

    if (label) label.textContent = year + ' — ' + list.length + ' CASES  (click to open)';
    if (grid)  grid.innerHTML = list.map(makeCard).join('');
}


// Search
function initSearch() {
    var input = document.getElementById('search-input');
    if (!input) return;

    input.addEventListener('input', function() {
        var q = this.value.toLowerCase().trim();

        if (q === '') {
            var firstYear = Object.keys(groupByYear()).sort()[0];
            showCases(firstYear, document.querySelector('.year-dot'));
            return;
        }

        var results = cases.filter(function(c) {
            return c.name.toLowerCase().includes(q) ||
                   c.category.toLowerCase().includes(q) ||
                   (c.location && c.location.toLowerCase().includes(q)) ||
                   String(c.year).includes(q);
        });

        var label = document.getElementById('cases-label');
        var grid  = document.getElementById('cases-grid');

        if (label) label.textContent = results.length + ' RESULTS FOR "' + q.toUpperCase() + '"';
        if (grid)  grid.innerHTML = results.length
            ? results.map(makeCard).join('')
            : '<p style="color:#94a3b8;padding:2rem">No cases found.</p>';
    });
}


// News ticker
function loadNews() {
    var news = [
        'BREAKING: Major fraud case hearing scheduled next week',
        'UPDATE: FIA arrests key suspect in corruption probe',
        'NEW: Cybercrime case officially opened in Islamabad',
        'VERDICT: Embezzlement case — prosecution wins',
        'ALERT: Witnesses come forward in missing persons case'
    ];
    var ticker = document.getElementById('ticker-inner');
    if (ticker) ticker.textContent = news.join('   •   ');
}


// Page load
window.addEventListener('DOMContentLoaded', function() {
    loadStats();
    buildTimeline();
    loadNews();
    initSearch();
});