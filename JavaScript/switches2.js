function toggleThemePortfolio() {
    var theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'styles/portfolio_styles.css') {
        theme.setAttribute('href', 'styles/portfolio_styles_2.css');
    } else {
        theme.setAttribute('href', 'styles/portfolio_styles.css');
    }

    localStorage.setItem('style2', theme.getAttribute('href'));

}

window.onload = function() {
    var theme = localStorage.getItem('style2');
    document.getElementById('theme').href = theme;

    if (!theme) {
        localStorage.setItem('style2', 'styles/portfolio_styles.css');
    }
}