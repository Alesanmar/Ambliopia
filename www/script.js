const menu = document.getElementById("menuLateral");
const panel = document.getElementById("panelPrincipal");
const instrucciones = document.getElementById("panelInstrucciones");

// Botón para minimizar el menu lateral

const botonMin = document.getElementById("min");
botonMin.addEventListener("click", (e) => minimizar());

// Botón para iniciar animación

const botonPlay = document.getElementById("play");
botonPlay.addEventListener("click", (e) => play());

// Botón para pausar animación

const botonPause = document.getElementById("pause");
botonPause.addEventListener("click", (e) => pause());

// Botón para reiniciar animación

const botonReboot = document.getElementById("reboot");
botonReboot.addEventListener("click", (e) => reboot());

//Opción activa

var activo = null;

// Botones del menu lateral

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");


boton1.addEventListener("click", (e) => seleccionar("bola1"));
boton2.addEventListener("click", (e) => seleccionar("bola2"));
boton3.addEventListener("click", (e) => seleccionar("bola3"));

const claseMenu = "menu";
const clasePanel = "panel";

const claseMinimizar = "minimizado menu";
const claseMinimizarPanel = "minimizado_panel panel"

const claseInstruccion = "texto_instruccion";


// funcion para minimizar el menu lateral y ampliar el panel a pantalla completa

function minimizar(){
    if(menu.classList == claseMenu){
        menu.classList = claseMinimizar;
        panel.classList = claseMinimizarPanel;
        
        
    }else{
        menu.classList = claseMenu;
        panel.classList = clasePanel;
    }
}




// funcion de play (boton)

function play(){
    var bola = document.getElementById("bola");
    bola.style.animationPlayState = "running";
}

// funcion de pause (boton)

function pause(){
    var bola = document.getElementById("bola");
    bola.style.animationPlayState = "paused";
}

// funcion de reinicio (boton que eliminar e insertar bola de nuevo)
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
        pause();
        insertarInstruccion(clase);
    }

    if(activo != clase){
        panel.removeChild(document.getElementById("bola"));
        activo = clase;
        console.log(activo);
        var bola = document.createElement('div');
        bola.id = "bola";
        bola.classList = activo;
        panel.insertAdjacentElement("afterbegin",bola);
        pause();
        insertarInstruccion(clase);
    }
}

// Función encargada de generar las instrucciones para el ejercicio

function insertarInstruccion(clase){

        if(clase == "bola1"){
            if(instrucciones.children.length != 0){
            instrucciones.removeChild(document.getElementById("instruccion"));
            }
            var instruccion = document.createElement('p');
            instruccion.id = "instruccion";
            instruccion.classList = claseInstruccion;
            instruccion.textContent = "Localiza la bola (parpadea a menudo)"
            instrucciones.insertAdjacentElement("afterbegin",instruccion)
        }

        if(clase == "bola2"){
            if(instrucciones.children.length != 0){
                instrucciones.removeChild(document.getElementById("instruccion"));
                }
            var instruccion = document.createElement('p');
            instruccion.id = "instruccion";
            instruccion.classList = claseInstruccion;
            instruccion.textContent = "Sigue la bola (parpadea a menudo)"
            instrucciones.insertAdjacentElement("afterbegin",instruccion)
        }

        if(clase == "bola3"){
            if(instrucciones.children.length != 0){
                instrucciones.removeChild(document.getElementById("instruccion"));
                }
            var instruccion = document.createElement('p');
            instruccion.id = "instruccion";
            instruccion.classList = claseInstruccion;
            instruccion.textContent = "Situa tu dedo frente tu nariz a 15cm. Concentrate en la bola y luego en el dedo, la bola y luego el dedo ... (parpadea a menudo)";
            instrucciones.insertAdjacentElement("afterbegin",instruccion)
        }
    }