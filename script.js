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
setInterval(checksearch,10)