// Navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fix');
    }else {
        header.classList.remove('navbar-fix');
    }

};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#Nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});