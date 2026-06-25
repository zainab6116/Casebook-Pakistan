// =============================================
// APP.JS
// case.html?id=1 → cases array se data uthao
// data.js ki zaroorat nahi
// =============================================

(function() {

    var container = document.getElementById('case-container');
    if (!container) return;

    // URL se id lo
    var params = new URLSearchParams(window.location.search);
    var id     = Number(params.get('id'));

    // cases array mein dhundo (cases.js se aata hai)
    var c = cases.find(function(item) { return item.id === id; });

    if (!c) {
        container.innerHTML = '<div style="padding:4rem;text-align:center;color:#64748b">Case not found.</div>';
        return;
    }

    // Page title update
    document.title = 'Casebook Pakistan | ' + c.name;

    // Sources HTML
    var sourcesHtml = '';
    if (c.sources && c.sources.length) {
        sourcesHtml = '<div class="box source-box"><h2>SOURCES</h2><div class="links">' +
            c.sources.map(function(s) {
                return '<a href="' + s.link + '" target="_blank">' + s.name + '</a>';
            }).join('') +
        '</div></div>';
    }

    // Sab kuch render karo
    container.innerHTML =
        '<a class="back-btn" href="javascript:history.back()">← Back</a>' +

        '<div class="profile-card">' +
            '<img src="' + c.image + '" alt="' + c.name + '" onerror="this.style.display=\'none\'">' +
            '<div class="profile-info">' +
                '<span class="case-number">CASE FILE #' + String(c.id).padStart(3, '0') + '</span>' +
                '<h1>' + c.name + '</h1>' +
                '<div class="case-status">' + c.status + '</div>' +
                '<div class="profile-stats">' +
                    '<div class="profile-stat"><h3>CATEGORY</h3><p>' + c.category + '</p></div>' +
                    '<div class="profile-stat"><h3>LOCATION</h3><p>' + c.location + '</p></div>' +
                    '<div class="profile-stat"><h3>YEAR</h3><p>' + c.year + '</p></div>' +
                '</div>' +
            '</div>' +
        '</div>' +

        '<div class="box">' +
            '<h2>OVERVIEW</h2>' +
            '<p>' + c.overview + '</p>' +
        '</div>' +

        '<div class="highlight red">' +
            '<h3>Key Finding</h3>' +
            '<p>' + c.finding + '</p>' +
        '</div>' +

        '<div class="content-grid">' +
            '<div class="box"><h2>OFFICIAL EXPLANATION</h2><p>' + c.official + '</p></div>' +
            '<div class="box"><h2>WHY PEOPLE STILL TALK ABOUT THIS</h2><p>' + c.attention + '</p></div>' +
        '</div>' +

        '<div class="highlight blue">' +
            '<h3>Public Reaction</h3>' +
            '<p>' + c.reaction + '</p>' +
        '</div>' +

        sourcesHtml;

})();