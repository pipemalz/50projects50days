import { ProgressBar } from "./progress-container.mjs";

const progressContainer = document.querySelector('.progress-container');
const progressBar = new ProgressBar('10px','#E0DEDF','rgb(98, 98, 249)');
const buttons = document.querySelectorAll('button');
let currentStep = 1;
buttons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        if(e.target.classList.contains('button-prev') && currentStep > 1){
            const stepElem = document.querySelector(`.step.step${currentStep}`);
            stepElem.classList.remove('step-completed');
            currentStep--;
        }else if(e.target.classList.contains('button-next') && currentStep < 4){
            currentStep++;
            const stepElem = document.querySelector(`.step.step${currentStep}`);
            stepElem.classList.add('step-completed');
        }
        switch(currentStep){
            case(1):
                progressBar.updateProgress('0%');
                break;
            case(2):
                progressBar.updateProgress('33%');
                break;
            case(3):
                progressBar.updateProgress('66%');
                break;
            case(4):
                progressBar.updateProgress('100%')
                break;
        }
    })
})
progressContainer.appendChild(progressBar.progressBar);

