const playstation_container = document.querySelector('.section.playstation');
const xbox_container = document.querySelector('.section.xbox');

playstation_container.addEventListener('mouseover', () => {
    playstation_container.style.width = '75%';
    xbox_container.style.width = '25%';
})

xbox_container.addEventListener('mouseover', () => {
    xbox_container.style.width = '75%';
    playstation_container.style.width = '25%';
})

window.addEventListener('mouseout', () =>{
    xbox_container.style.width = '50%';
    playstation_container.style.width = '50%';
})