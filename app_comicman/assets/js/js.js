addEventListener('DOMContentLoaded' , ()=>{
/********Eventos JavaScripts***********/
    const btn_darkmoder= document.querySelector('.btn_darkmoder');
    if(btn_darkmoder){
        btn_darkmoder.addEventListener('click', ()=>{
            document.body.classList.toggle('darkmoder');
        });
    }
    const icon_search=document.querySelector('.icon-search');
    if(icon_search){
        icon_search.addEventListener('click', ()=>{
            icon_search.classList.toggle('hide');
        });
    }
    const btn_acept_privacity=document.querySelector('#btn_acept_privacity');
    if(btn_acept_privacity){
        const modal_window_welcome=document.querySelector(".modal-window-welcome");
        btn_acept_privacity.addEventListener('click', ()=>{
            modal_window_welcome.classList.toggle('hide');
        });
    }
});
