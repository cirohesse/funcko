const boton = document.getElementById("boton");
const body = document.getElementById("body");
const titulo = document.getElementById("titulo");

function manejarClickBoton(){
    if (body.style.backgroundColor !== `black`){
        body.style.backgroundColor = `black`
        titulo.style.color = `white`
        titulo.innerHTML = "Luz apagada"
        boton.innerHTML = "PRENDER"
    } else {
        body.style.backgroundColor = `white`
        titulo.style.color = `black`
        titulo.innerHTML = "Luz prendida"
        boton.innerHTML = "APAGAR"

    }
};

boton.addEventListener("click", manejarClickBoton)


