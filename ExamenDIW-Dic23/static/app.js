console.log("Hola mundo...");

// Continuar codigo javascript desde aqui ...
const btnModelBorrar = document.querySelectorAll("td button.borrar");

const modalBorrar = document.querySelector("div.modalBorrar");
const clsBtn = document.querySelectorAll(".clsBtn");

const dialog = document.querySelector(".DialogForm");
const Insert = document.querySelector(".Insertar");



Insert.addEventListener('click',function(){
    dialog.style.display = "flex";
});

clsBtn.forEach(function(btn3){
 
    btn3.addEventListener('click', function () {
    
        dialog.style.display = "none";
    });
});

clsBtn.forEach(function(btn2){
 
    btn2.addEventListener('click', function () {
    
        modalBorrar.style.display = "none";
    });
});
btnModelBorrar.forEach(function(btn){
    console.log("boton");
    btn.addEventListener('click', function () {
       console.log("hola");
        modalBorrar.style.display = "flex";
    });
});

