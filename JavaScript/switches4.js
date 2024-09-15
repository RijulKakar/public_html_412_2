function toggleThemeService() {
    var theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'styles/service_styles.css') {
        theme.setAttribute('href', 'styles/service_styles_2.css');
    } else {
        theme.setAttribute('href', 'styles/service_styles.css');
    }

    localStorage.setItem('style4', theme.getAttribute('href'));

}

window.onload = function() {
    var theme = localStorage.getItem('style4');

    document.getElementById('theme').href = theme;

    if (!theme) {
        localStorage.setItem('style4', 'styles/service_styles.css');
    }

}