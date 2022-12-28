const botonMin = document.getElementById("min");
botonMin.addEventListener("click", (e) => minimizar(e.target.id));

const menu = document.getElementById("menuLateral");
const panel = document.getElementById("panelPrincipal");


const claseMenu = "menu";
const clasePanel = "panel";
const claseMinimizar = "minimizado menu";
const claseMinimizarPanel = "minimizado_panel panel"

function comienzo(){

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





comienzo();