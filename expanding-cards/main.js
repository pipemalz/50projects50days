const imgArr = document.querySelectorAll('.img');

imgArr.forEach(img=>{
    img.addEventListener('click', (e)=>{
        imgArr.forEach(img=>{
            if(e.target === img){
                if(!img.classList.contains('img-big')){
                    img.classList.remove('img-small');
                    img.classList.add('img-big');
                    img.firstElementChild.classList.remove('inactive');
                    img.firstElementChild.classList.add('active');
                }
            }else{
                img.classList.remove('img-big')
                img.classList.add('img-small');
                img.firstElementChild.classList.remove('active')
                img.firstElementChild.classList.add('inactive');
            }
        })
    })
})

console.log(imgArr);