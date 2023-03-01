//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
    menu.style.display = "block";
    menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = "false";
    }
}
//ocultar el menu una vez que seleccione una opción
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length;x++) {
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = "false";
    }
    
}

//barras de porcentaje
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
//selecciono todas las barras
let controldecalidad = document.getElementById("controldecalidad");
crearBarra(controldecalidad);
let evaluacionderiesgo = document.getElementById("evaluacionderiesgo");
crearBarra(evaluacionderiesgo);
let controlambiental = document.getElementById("controlambiental");
crearBarra(controlambiental);

//colocar la cantidad exacta de barras de porcentaje
let contadore = [-1,-1,-1,-1,-1,-1];

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    
}

function pintarBarra(id_barra,cantidad, indice, interval){
    contadore[indice]++;
    if(x <cantidad){
        let elementos = id_barra.getElementByIdClassName("e");
        elementos[x].style.backgroundColor = "black";
    }else{
        clearInterval(interval)
    }
}
//defecto para la animacion de la barra con el mouse
window.onscroll = function(){
    efectoHabilidades();
}