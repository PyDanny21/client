var settings=document.querySelector('.more');
const lastCild=document.querySelector('.lastChild h1');

function show(){
    document.querySelector('.box1').style.display='flex';
};

function settingsMenuToggle(){
    settings.classList.toggle('more-height');
    const toggled=settings.classList.contains('more-height');
    lastCild.classList=toggled ? lastCild.innerHTML='X':lastCild.innerHTML='&equiv;';
};

