const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navvbar .navv-grup');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});