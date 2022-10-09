let menuVisible = false;

//Funcion para mostrar u ocultar el menu
function mostarOcultar(){
    if(menuVisible){
        document.getElementById("header_nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("header_nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("header_nav").classList ="";
    menuVisible = false
}