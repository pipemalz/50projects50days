function insertSpan(parentElement, text){
    const spanArr = [];
    let space = 0;
    let delay = 50;
    Array.from(text).forEach(letter=>{
        const span = document.createElement('span');
        span.classList.add('letter');
        span.classList.add('down');
        span.innerHTML = letter;
        span.style.left = `${space}px`;
        span.style.transitionDelay = `${delay}ms`;
        parentElement.appendChild(span);
        spanArr.push(span);
        space += span.clientWidth+1;
        delay += 50;
    })
    return spanArr;
}

function setEvents(spanArray, inputElement){
    inputElement.addEventListener('focus', () => {
        spanArray.forEach(span => {
            span.classList.add('up');
        })
    })
    inputElement.addEventListener('blur', () => {
        if(inputElement.value == ''){
            spanArray.forEach(span => {
                span.classList.remove('up');
            })
        }
    })
}

window.onload = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const emailSpan = insertSpan(email, 'Email');
    const passwordSpan = insertSpan(password, 'Password');

    const emailInput = document.getElementById('email_input');
    const passwordInput = document.getElementById('password_input');

    setEvents(emailSpan, emailInput);
    setEvents(passwordSpan, passwordInput);
}