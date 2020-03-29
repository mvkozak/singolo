const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});



const PORTFOLIO = document.getElementById('portfolio-img');

PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('portfolio-border'));
    event.target.classList.add('portfolio-border');
});
const PORTFOLIOBTN = document.getElementById('img-tab');
PORTFOLIOBTN.addEventListener('click', (event) => {
    PORTFOLIOBTN.querySelectorAll('button').forEach(el => el.classList.remove('active-btn'));
    event.target.classList.add('active-btn');

});

const PHONE1 = document.querySelector("#iphone-vertical");
const PHONE1OFF = document.querySelector(".display-vertical");

PHONE1.addEventListener('click', (event) => {
    if (PHONE1OFF.classList.contains("phone-off")) {
        PHONE1OFF.classList.remove("phone-off");
    } else {
        PHONE1OFF.classList.add("phone-off");
        PHONE1OFF.addEventListener('click', (event) => {
            PHONE1OFF.classList.remove("phone-off");
        });
       
    }
});

const PHONE2 = document.querySelector("#iphone-horizontal");
const PHONE2OFF = document.querySelector(".display-horizontal");

PHONE2.addEventListener('click', (event) => {
    if (PHONE2OFF.classList.contains("phone-off")) {
        PHONE2OFF.classList.remove("phone-off");
    } else {
        PHONE2OFF.classList.add("phone-off");
        PHONE2OFF.addEventListener('click', (event) => {
            PHONE2OFF.classList.remove("phone-off");
        });
       
    }
});



/*

var i=0;
var image=document.getElementById('image');

var imgs=new Array('1.jpg','2.jpg', '3.jpg','4.jpg', '5.jpg','6.jpg', '7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg');
function imgsrc() {
   
    image.src ='./assets/img/' + imgs[++i];
  
}*/


let images = document.querySelectorAll('.item');
let current = 0;

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0');
        
    }
    
    images[current].classList.remove('opacity0');


}

document.querySelector('.arrow-next').onclick = function() {
    if (current - 1 == -1) {
        current = images.length - 1;
    } else {
        current--;
    }
    slider();
}
document.querySelector('.arrow-prev').onclick = function() {
    if (current + 1 == images.length) {
        current = 0;
    } else {
        current++;
    }
    slider();

};

// const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const FORM = document.getElementById('form');
FORM.addEventListener('submit', (event) => {
    const subject = document.getElementById('subject').value.toString();
    const descr = document.getElementById('descr').value.toString();
    event.preventDefault();

    if (subject == "") {
        document.getElementById('result').innerText = 'Без темы';
        document.getElementById('message-block').classList.remove('hidden');
    } else {
        document.getElementById('result').innerText = 'Тема: ' +  subject;
        document.getElementById('message-block').classList.remove('hidden');

    }

    if (descr == "") {
        document.getElementById('result-descr').innerText = 'Без описания';
        document.getElementById('message-block').classList.remove('hidden');
    } else {
        document.getElementById('result-descr').innerText = 'Описание: ' + descr;
        document.getElementById('message-block').classList.remove('hidden');

    }
    FORM.reset();


});
CLOSE_BUTTON.addEventListener('click', () => {
    
    document.getElementById('result').innerText = '';
    document.getElementById('result-descr').innerText = '';
    document.getElementById('message-block').classList.add('hidden');


});