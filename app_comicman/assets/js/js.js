addEventListener('DOMContentLoaded' , ()=>{
/********Eventos JavaScripts***********/
    const btn_darkmoder= document.querySelector('.btn_darkmoder');
    if(btn_darkmoder){
        btn_darkmoder.addEventListener('click', ()=>{
            document.body.classList.toggle('darkmoder');
        });
    }
    callModalWindows_welcome();
    Callslider();
});

/****
 * Arrows Funtions
 ****/

//modal window welcome
const callModalWindows_welcome= ()=>{
    let template_modal_window = `
    <div class="modal-window-welcome">
        <div class="modal-window-content">
            <h2>Bienvenido a Comicman</h2>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita cupiditate, velit ab dolorum vel similique quis labore impedit culpa ex optio fugiat atque autem placeat quibusdam dignissimos quae adipisci nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam ipsa voluptas dolor nobis. Commodi laudantium, numquam consequatur magnam illo quisquam explicabo fugiat modi mollitia facilis reprehenderit ducimus dolore, ipsa adipisci?</p>
            <hr>
            <button id="btn_acept_privacity">Aceptar</button>
        </div>
    </div>
    ` ; 
    const nav_main = document.querySelector('.nav-main');
    nav_main.insertAdjacentHTML('beforebegin',template_modal_window);

    const btn_acept_privacity=document.querySelector('#btn_acept_privacity');
    if(btn_acept_privacity){
        const modal_window_welcome=document.querySelector(".modal-window-welcome");
        btn_acept_privacity.addEventListener('click', ()=>{
            modal_window_welcome.remove();
        });
    }
};

//Slider

const Callslider=()=>{
    //init
    slides = document.getElementsByClassName("slide");
    containerWidth = 500;

    Array.prototype.forEach.call(slides, function (el, i) {//set the initial position of each slide
    el.style.left = (i * containerWidth) + "px";
    });

    window.moveSlides = function (direction) {
    run = true;
    tracker = containerWidth; //500 in this example. We make a separate variable so we can decrement it

    if (((direction == "next" && (parseInt(slides[0].style.left) <= (0 - (containerWidth * (slides.length - 1)))))) //compare against 2nd-to-last slide's index, otherwise it'll go 1 slide too far
        || (direction == "prev" && (parseInt(slides[0].style.left) >= 0))) { run = false; }

    if (run) {
        var slideInterval = setInterval(function () {
        moveRate = 4; //set the speed here (use numbers that the container's width can be divided by without a remainder)
            Array.prototype.forEach.call(slides, function (el, i) {
            if (tracker <= 0) {
                clearInterval(slideInterval)
            } else {
                el.style.left = (direction == "next") ? (parseInt(el.style.left) - moveRate) + "px" : (parseInt(el.style.left) + moveRate) + "px";
            }
            });
            tracker -= moveRate;
        }, 1);
    }
    }
}