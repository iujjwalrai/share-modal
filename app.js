let share = document.querySelector('.share');
let modal = document.querySelector('.modal-wrapper');
let close = document.querySelector('.close');
let overlay = document.querySelector('.overlay');
share.addEventListener('click', (event)=>{
    modal.classList.add('modal-wrapper-active');
    overlay.classList.add('overlay-active');
});
close.addEventListener('click',(event)=>{
    modal.classList.remove('modal-wrapper-active');
    overlay.classList.remove('overlay-active');
});
overlay.addEventListener('click', (event)=>{
    modal.classList.remove('modal-wrapper-active');
    overlay.classList.remove('overlay-active');
})
let social1 = document.querySelector('.social1');
let social2 = document.querySelector('.social2');
let social3 = document.querySelector('.social3');
let social4 = document.querySelector('.social4');
let social5 = document.querySelector('.social5');
social1.addEventListener('click', ()=>{
    window.location.href = "https://www.linkedin.com/in/ujjwal-rai-1299b0292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
});
social2.addEventListener('click', ()=>{
    window.location.href = "https://x.com/imUjjwalRai?t=fUJP_dr06BTA0e6PEk4NaQ&s=08";
});
social3.addEventListener('click', ()=>{
    window.location.href = "https://www.instagram.com/imujjwalrai?igsh=MWRrbno5NDF5azlkZw==";
});
social4.addEventListener('click', ()=>{
    window.location.href = "https://wa.me/qr/QQ5RGYFI6MGGJ1";
});
social5.addEventListener('click', ()=>{
    window.location.href = "https://discordapp.com/users/1243563147303059586";
});

