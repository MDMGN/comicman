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
});