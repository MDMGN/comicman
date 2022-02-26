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
const callSlider=(index)=>{
    const images=['showcase-1','showcase-2','showcase-3'];
    window.moveSlides=function(direction){
        const header=document.querySelector('header');
        if(direction=='next' && index<2){
            index++;
            header.setAttribute('class',images[index]);
            return index;
        }else if(direction=='prev' && index<2 && index>0){
            index--;
            header.setAttribute('class',images[index]);
            return index;
        }else{
            index=0;
            return index;
        }
    }
}