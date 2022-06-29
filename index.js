//Autumn
const autumnBtn = document.querySelector('.p-button-4');
const autumnImage1 = document.querySelector('.portfolio-image-1');
const autumnImage2 = document.querySelector('.portfolio-image-2');
const autumnImage3 = document.querySelector('.portfolio-image-3');
const autumnImage4 = document.querySelector('.portfolio-image-4');
const autumnImage5 = document.querySelector('.portfolio-image-5');
const autumnImage6 = document.querySelector('.portfolio-image-6');

autumnBtn.addEventListener('click',()=> {
    autumnImage1.src="assets/img/autumn/1.png"
    autumnImage2.src="assets/img/autumn/2.png"
    autumnImage3.src="assets/img/autumn/3.png"
    autumnImage4.src="assets/img/autumn/4.png"
    autumnImage5.src="assets/img/autumn/5.png"
    autumnImage6.src="assets/img/autumn/6.png"
})
//Winter
const winterBtn = document.querySelector('.p-button-1');
const winterImage1 = document.querySelector('.portfolio-image-1');
const winterImage2 = document.querySelector('.portfolio-image-2');
const winterImage3 = document.querySelector('.portfolio-image-3');
const winterImage4 = document.querySelector('.portfolio-image-4');
const winterImage5 = document.querySelector('.portfolio-image-5');
const winterImage6 = document.querySelector('.portfolio-image-6');

winterBtn.addEventListener('click',()=> {
    winterImage1.src="assets/img/winter/1.png"
    winterImage2.src="assets/img/winter/2.png"
    winterImage3.src="assets/img/winter/3.png"
    winterImage4.src="assets/img/winter/4.png"
    winterImage5.src="assets/img/winter/5.png"
    winterImage6.src="assets/img/winter/6.png"
})


let menuBtn=document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})



