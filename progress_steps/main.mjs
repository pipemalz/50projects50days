import { ProgressBar } from "./progress-container.mjs";

const progressContainer = document.querySelector('.progress-container');
const progressBar = new ProgressBar('10px','#E0DEDF','rgb(98, 98, 249)');
const buttons = document.querySelectorAll('button');
const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');
let currentStep = 1;
buttons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        if(e.target === prevButton && currentStep > 1){
            const stepElem = document.querySelector(`.step.step${currentStep}`);
            stepElem.classList.remove('step-completed');
            currentStep--;
        }else if(e.target === nextButton && currentStep < 4){
            currentStep++;
            const stepElem = document.querySelector(`.step.step${currentStep}`);
            stepElem.classList.add('step-completed');
        }
        if(currentStep > 1){
            prevButton.classList.add('enabled');
            prevButton.classList.remove('disabled');
        }else {
            prevButton.classList.remove('enabled');
            prevButton.classList.add('disabled');
        }
        if(currentStep > 3){
            nextButton.classList.add('disabled');
            nextButton.classList.remove('enabled');
        }else{
            nextButton.classList.remove('disabled');
            nextButton.classList.add('enabled');
        }

        progressBar.updateProgress(`${(currentStep - 1) * 33.33}%`)
    })
})
progressContainer.appendChild(progressBar.progressBar);

