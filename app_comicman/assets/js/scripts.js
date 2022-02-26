addEventListener('DOMContentLoaded' , ()=>{
/********Eventos JavaScripts***********/
    const btn_darkmoder= document.querySelector('.btn_darkmoder');
    if(btn_darkmoder){
        btn_darkmoder.addEventListener('click', ()=>{
            document.body.classList.toggle('darkmoder');
        });
    }
    callModalWindows_welcome();
    let index=0;
    index=callSlider(index);
});