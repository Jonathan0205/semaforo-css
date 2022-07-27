let luces = document.querySelectorAll(".circulo-semaforo");
let cant_luces = 2;
let contador = 0;
let luz_actual;



function anima(){
    luces[contador].className="circulo-semaforo";
    contador++;
    contador = contador>cant_luces?0:contador;
   
  
    luz_actual = luces[contador];
    luz_actual.classList.add(luz_actual.getAttribute("color")) ;
    




}
setInterval(anima,1000*4)
