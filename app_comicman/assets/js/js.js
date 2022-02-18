addEventListener('DOMContentLoaded' , ()=>{
    const btn_menu= document.querySelector('.btn_menu');
    if(btn_menu){
        btn_menu.addEventListener('click', ()=>{
            const menu_items=document.querySelector('.menu_items');
            menu_items.classList.toggle('show');
        });
    }
    const btn_darkmoder= document.querySelector('.btn_darkmoder');
    if(btn_darkmoder){
        btn_darkmoder.addEventListener('click', ()=>{
            document.body.classList.toggle('darkmoder');
        });
    }
});