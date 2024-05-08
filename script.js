let input = document.querySelector('.input');
let output = document.querySelector('.output');
let con = document.querySelector('.connector');
let circle = document.querySelector('.circle');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');


input.addEventListener('click', () => {
    if(input.classList.contains('active')){
        input.classList.remove('active');
        p1.classList.remove('active');
    }else{
        input.classList.add('active');
        p1.classList.add('active');
    }
});