export class ProgressBar{
    constructor(heigh, color, completedColor){
        this.heigh = heigh;
        this.color = color;
        this.completedColor = completedColor;
        this.progressBar = document.createElement('div');
        this.progressBar.classList.add('progress-bar');
        this.progressBar.style.width = '90%';
        this.progressBar.style.heigh = this.heigh;
        this.progressBar.style.backgroundColor = this.color;
        this.progressBarCompleted = document.createElement('div');
        this.progressBarCompleted.classList.add('progress-bar-completed')
        this.progressBarCompleted.style.backgroundColor = this.completedColor;
        this.progressBarCompleted.style.heigh = this.heigh;
        this.progressBar.appendChild(this.progressBarCompleted);
    }
    updateProgress(newProgress){
        this.progressBarCompleted.style.width = newProgress;
    }

}