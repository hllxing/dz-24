let active = 0;

const img = document.querySelectorAll('img');


document.querySelector('.but-2').onclick = function (){
    img[active].classList.remove('activeImg');
    if (active === img.length - 1){
        const butt2 = document.querySelector('.but-2');
        butt2.style = 'disable';
    }else {
        active++;
    }
    img[active].classList.add('activeImg');
};

document.querySelector('.but-1').onclick = function (){
    img[active].classList.remove('activeImg');
    if (active === 0){
        const butt1 = document.querySelector('.but-1');
        butt1.style = 'disable';
    }else {
        active--;
    }
    img[active].classList.add('activeImg');
};




// active = img.length - 1;