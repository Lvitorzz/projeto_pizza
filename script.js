document.querySelector('.menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('menu-active');
});

document.querySelectorAll('.menus').forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        const nav = document.querySelector('nav');
        nav.classList.remove('menu-active');
    });
});