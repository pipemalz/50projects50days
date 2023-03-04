const search = document.querySelector('.search');
const input = document.querySelector('.search__input');
const icon = document.querySelector('.search__icon');

icon.addEventListener('click', ()=>{
    search.classList.toggle('compact');
    input.classList.toggle('inactive');
    input.focus();
})
