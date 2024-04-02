function checksearch() {
    const searchTerm = document.getElementById('searchbox').value.toLowerCase();
    const projects = document.querySelectorAll('.project-box');
    projects.forEach(function(project) {
    if (project.textContent.toLowerCase().includes(searchTerm)) {
            project.style.display = ''; // Show
        } else {
            project.style.display = 'none'; // Hide
        }
    });
};
function showbutton2() {
    const moreversionsbuttons = document.getElementById('versions');
    const moreversionshidebuttons = document.getElementById('moreversions');
    moreversionsbuttons.style.display = "inline-block"; // Show
    moreversionshidebuttons.style.display = "none"; // Hide
}
function hidebutton2() {
    const moreversionsbuttons = document.getElementById('versions');
    const moreversionshidebuttons = document.getElementById('moreversions');
    moreversionsbuttons.style.display = "none"; // Hide
    moreversionshidebuttons.style.display = "inline-block"; // Show
}
function showbutton2() {
    const moreversionsbuttons = document.getElementById('versions');
    const moreversionshidebuttons = document.getElementById('moreversions');
    moreversionsbuttons.style.display = "inline-block"; // Show
    moreversionshidebuttons.style.display = "none"; // Hide
}
function hidebutton2() {
    const moreversionsbuttons = document.getElementById('versions');
    const moreversionshidebuttons = document.getElementById('moreversions');
    moreversionsbuttons.style.display = "none"; // Hide
    moreversionshidebuttons.style.display = "inline-block"; // Show
}
function showbutton1() {
    const moreversionsbuttons = document.getElementById('versions1');
    const moreversionshidebuttons = document.getElementById('moreversions1');
    moreversionsbuttons.style.display = "inline-block"; // Show
    moreversionshidebuttons.style.display = "none"; // Hide
}
function hidebutton1() {
    const moreversionsbuttons = document.getElementById('versions1');
    const moreversionshidebuttons = document.getElementById('moreversions1');
    moreversionsbuttons.style.display = "none"; // Hide
    moreversionshidebuttons.style.display = "inline-block"; // Show
}
function RBLP() {
    const betaLP = document.getElementById('betaLP');
    if (betaLP.style.display === "block") {
        betaLP.style.display = "none"; // Hide
    } else{
        betaLP.style.display = "block"; // Show
    }
}
setInterval(checksearch,10)