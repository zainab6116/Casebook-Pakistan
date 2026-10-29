window.addEventListener("DOMContentLoaded", function () {

    var params = new URLSearchParams(window.location.search);
    var id = Number(params.get("id"));

    var c = cases.find(function(item) {
        return item.id === id;
    });

    var container = document.getElementById("case-container");

    if (!c) {
        container.innerHTML = `
            <div style="padding:6rem 2rem;text-align:center;">
                <h2>Case not found</h2>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="case-page">
            <img src="${c.image}" alt="${c.name}" style="max-width:300px;">
            
            <h1>${c.name}</h1>

            <p><b>Status:</b> ${c.status}</p>
            <p><b>Category:</b> ${c.category}</p>
            <p><b>Location:</b> ${c.location}</p>
            <p><b>Year:</b> ${c.year}</p>

            <h2>Overview</h2>
            <p>${c.overview}</p>
        </div>
    `;

});