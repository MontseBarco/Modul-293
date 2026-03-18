const burgerMenu = document.querySelector('.nav-burger-menu');
const siteNav = document.querySelector('.site-nav');
const burgerIcon = burgerMenu.querySelector('i');

burgerMenu.addEventListener('click', () => {
    siteNav.classList.toggle('active');

    burgerIcon.classList.toggle('fa-bars');
    burgerIcon.classList.toggle('fa-xmark');
});