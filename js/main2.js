AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
const btn = document.querySelector('.btn');
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 0);
    btn.classList.toggle('btnShow', scrollY > 0);
});
btn.addEventListener('click', btnClick);
function btnClick(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const btnInput = document.querySelector('.btn__input');
btnInput.addEventListener('click', inputBtn);
function inputBtn(){
    if(btnInput){
        window.alert('Tombol ini masih belum bisa digunakan')
    }
}