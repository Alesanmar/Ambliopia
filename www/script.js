const botonMin = document.getElementById("min");
botonMin.addEventListener("click", (e) => minimizar());

const menu = document.getElementById("menuLateral");
const panel = document.getElementById("panelPrincipal");

const bola1 = document.getElementById("bolita1");

const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", (e) => seleccionar("bola1"));
const boton2 = document.getElementById("boton2");
boton2.addEventListener("click", (e) => seleccionar("bola2"));
const boton3 = document.getElementById("boton3");
boton3.addEventListener("click", (e) => seleccionar("bola3"));
const boton4 = document.getElementById("boton4");
boton4.addEventListener("click", (e) => seleccionar("bola4"));

const claseMenu = "menu";
const clasePanel = "panel";
var activo = null;

const claseMinimizar = "minimizado menu";
const claseMinimizarPanel = "minimizado_panel panel"

const claseBola1 = "bola1"
const claseMinimizarBola1 = "pausa1";

function comienzo(){
    console.log(activo);
}

function minimizar(){
    if(menu.classList == claseMenu){
        menu.classList = claseMinimizar;
        panel.classList = claseMinimizarPanel;
        bola.classList = claseMinimizarBola1;
        
    }else{
        menu.classList = claseMenu;
        panel.classList = clasePanel;
        bola.classList = claseBola1;
    }
}

// crear funcion de reinicio (boton que eliminar e insertar bola de nuevo)

// crear funcion de pause (boton)

function seleccionar(clase){

    if(activo == clase){
        console.log("ya esta activo")
    }

    if(activo != clase){
    activo = clase;
    console.log(activo);
    var bola = document.createElement('div');
    bola.id = "bola";
    bola.classList = clase;
    panel.insertAdjacentElement("afterend",bola);
    }
}

comienzo();