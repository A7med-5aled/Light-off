const button = document.querySelector('.switch');
const body = document.querySelector('body');
const audio = document.querySelector('audio');

button.addEventListener('click' ,function(){
    body.classList.toggle('active');
    if(window.getComputedStyle(button).getPropertyValue('--b') === '0'){
        button.style.setProperty('--b','15%');
    }
    else{
        button.style.setProperty('--b','0');
    }
    audio.play();
})