const textContainer = document.getElementById('text');
const text = 'We Love Programming!';
const textArr = text.split('');
const speedTxt = document.getElementById('speed');
let speed = 500;
let intervalo = setInterval(printTxt, 500);

speedTxt.addEventListener('change', ()=>{
    clearInterval(intervalo);
    speed = 500 / speedTxt.value;
    intervalo = setInterval(printTxt, speed);
});

function printTxt(){
    if(textArr.length > 0){
        textContainer.innerHTML += textArr.shift();
    }else{
        textContainer.innerHTML = '';
        textArr.push(...text.split(''));
    }
}

