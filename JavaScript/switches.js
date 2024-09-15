function toggleThemeIndex() {
    var theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'styles/index_styles.css') {
        theme.setAttribute('href', 'styles/index_styles_2.css');
    } else {
        theme.setAttribute('href', 'styles/index_styles.css');
    }

    localStorage.setItem('style', theme.getAttribute('href'));

}

window.onload = function() {
    var theme = localStorage.getItem('style');

    document.getElementById('theme').href = theme;

    if (!theme) {
        localStorage.setItem('style', 'styles/index_styles.css');
    }

}


