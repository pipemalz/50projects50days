const BOX_HEIGHT = 200;
const BOX_MARGIN = 25;
const TITLE_HEIGHT = 100;

function set_boxes(boxes, height, margin, content){
    boxes.forEach(box => {
        box.style.height = `${height}px`;
        box.style.marginBottom = `${margin}px`;
        box.children[0].innerText = content;
    });
}

function set_visible_boxes(boxes){
    const visible_boxes = Math.floor((window.innerHeight - TITLE_HEIGHT) / (BOX_HEIGHT + BOX_MARGIN));
    for(let i = 0; i < visible_boxes; i++){
        boxes[i].classList.add('visible')
    }
}

function set_title(title, title_height){
    title.style.height = `${title_height}px`;
    title.style.fontSize = `${title_height/2.5}px`;
}

function scrolling_animation(boxes){
    boxes.forEach(box=>{
        const box_bottom = box.offsetTop + BOX_HEIGHT;
        const screen_bottom = window.scrollY + window.innerHeight;

        if(box_bottom > window.scrollY && box_bottom < screen_bottom){
            box.classList.add('visible')
        }else if(box_bottom > window.scrollY){
            box.classList.remove('visible')
        }
    });
};

window.onload = () => {
    const content_boxes = document.querySelectorAll('.content');
    const title = document.querySelector('.title');
    const content = 'Content';

    set_title(title, TITLE_HEIGHT);
    set_boxes(content_boxes, BOX_HEIGHT, BOX_MARGIN, content);
    set_visible_boxes(content_boxes);

    document.addEventListener('scroll', () => scrolling_animation(content_boxes));
    window.addEventListener('resize', () => scrolling_animation(content_boxes));
};
