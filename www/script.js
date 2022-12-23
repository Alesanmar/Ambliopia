

const botonMin = document.getElementById("min");
botonMin.addEventListener("click", (e) => minimizar(e.target.id));

const menu = document.getElementById("menuLateral");
console.log(menu)

const claseMinimizar = "minimizado menu";

function comienzo(){

}



function minimizar(){
    menu.classList = claseMinimizar;
    console.log("aaaaaa");
}





comienzo();