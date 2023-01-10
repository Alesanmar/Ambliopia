

const menu = document.getElementById("menuLateral");
const panel = document.getElementById("panelPrincipal");

// Botón para minimizar el menu lateral

const botonMin = document.getElementById("min");
botonMin.addEventListener("click", (e) => minimizar());

const botonPlay = document.getElementById("play");
botonPlay.addEventListener("click", (e) => play());

const botonPause = document.getElementById("pause");
botonPause.addEventListener("click", (e) => pause());

const botonReboot = document.getElementById("reboot");
botonReboot.addEventListener("click", (e) => reboot());

//Opcion activa

var activo = null;

// Botones del menu lateral

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");


boton1.addEventListener("click", (e) => seleccionar("bola1"));
boton2.addEventListener("click", (e) => seleccionar("bola2"));
boton3.addEventListener("click", (e) => seleccionar("bola3"));
boton4.addEventListener("click", (e) => seleccionar("bola4"));

const claseMenu = "menu";
const clasePanel = "panel";

const claseMinimizar = "minimizado menu";
const claseMinimizarPanel = "minimizado_panel panel"

function comienzo(){
    console.log(activo);
}

function minimizar(){
    if(menu.classList == claseMenu){
        menu.classList = claseMinimizar;
        panel.classList = claseMinimizarPanel;
        
        
    }else{
        menu.classList = claseMenu;
        panel.classList = clasePanel;
    }
}




// crear funcion de play (boton)

function play(){
    var bola = document.getElementById("bola");
    bola.style.animationPlayState = "running";
}

// crear funcion de pause (boton)

function pause(){
    var bola = document.getElementById("bola");
    bola.style.animationPlayState = "paused";
}

// crear funcion de reinicio (boton que eliminar e insertar bola de nuevo)
function reboot(){
    panel.removeChild(document.getElementById("bola"));
    var bola = document.createElement('div');
    bola.id = "bola";
    bola.classList = activo;
    panel.insertAdjacentElement("afterbegin",bola);
}

// Función encargada de generar el div con la bola correspondiente dependiendo de la opción elegida en el
// menu lateral.

function seleccionar(clase){

    if(activo == clase){
        console.log("ya está activo")
    }
    if(activo == null){
        activo = clase;
        console.log(activo);
        var bola = document.createElement('div');
        bola.id = "bola";
        bola.classList = activo;
        panel.insertAdjacentElement("afterbegin",bola);
    }

    if(activo != clase){
        panel.removeChild(document.getElementById("bola"));
        activo = clase;
        console.log(activo);
        var bola = document.createElement('div');
        bola.id = "bola";
        bola.classList = activo;
        panel.insertAdjacentElement("afterbegin",bola);
    }
}

comienzo();