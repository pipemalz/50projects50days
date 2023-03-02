const main = document.querySelector('.main');
const header = document.querySelector('.header__icons');
const icons = document.querySelectorAll('.header__icons .fa-solid');
const nav = document.querySelector('.nav');

icons.forEach(icon=>icon.addEventListener('click', rotate));

function rotate(){
    main.classList.toggle('rotated');
    header.classList.toggle('rotated');
    nav.classList.toggle('visible');
}