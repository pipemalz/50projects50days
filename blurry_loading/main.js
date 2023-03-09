const body = document.querySelector('body');
const percent = document.querySelector('.percent');

function init(){
    let blur = 100;
    for(let i = 0; i <= 100; i++){
        setTimeout(()=>{
            percent.innerText = `${i}%`;
            body.style.backdropFilter = `blur(${blur/10}px)`;
            percent.style.opacity = `${blur/100}`
            blur--;
        }, i * 20)
    }
}
init();