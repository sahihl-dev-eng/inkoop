var sidebar = document.getElementById('sidebar');
var header = document.getElementById('header');
var cards = document.getElementById('cards');
var main = document.getElementById('main');
var mobileMenu = document.getElementById('mobile-menu');

function toggleSideBar() {
    if (sidebar.style.display == 'none') {
        sidebar.style.display = 'inline-block';
        sidebar.style.zIndex = '10';
        header.style.zIndex = '-10';
        cards.style.zIndex = '-10';

        header.style.opacity = '10%';
        cards.style.opacity = '10%';
    } else {
        sidebar.style.display = 'none';

        header.style.opacity = '100%';
        cards.style.opacity = '100%';
    }
}