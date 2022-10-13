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


//Efecto animaciones skill
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distacia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distacia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("comunicacion");
        habilidades[1].classList.add("trabajo");
        habilidades[2].classList.add("dedicacion");
        habilidades[3].classList.add("responsabilidad");
        habilidades[4].classList.add("puntualidad");
    }
}