'use strict';

const wrap = document.querySelector('.wrapper');
const box = document.querySelector('.redbox');
let start = 0;


function animation(){
    start++;
    box.style.top = start + 'px';
    box.style.left = start + 'px';

    if (start < 300) {
        requestAnimationFrame(animation);
    }
}
box.addEventListener('click', () => requestAnimationFrame(animation));

let id = requestAnimationFrame(animation);

cancelAnimationFrame(id);