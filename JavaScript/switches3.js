function toggleThemeResume() {
    var theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'styles/resume_styles.css') {
        theme.setAttribute('href', 'styles/resume_styles_2.css');
    } else {
        theme.setAttribute('href', 'styles/resume_styles.css');
    }

    localStorage.setItem('style3', theme.getAttribute('href'));

}

window.onload = function() {
    var theme = localStorage.getItem('style3');

    document.getElementById('theme').href = theme;

    if (!theme) {
        localStorage.setItem('style3', 'styles/resume_styles.css');
    }
}