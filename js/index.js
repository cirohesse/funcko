const boton = document.getElementById("divButton");
const titulo = document.getElementById("titulo");
const container = document.getElementById("container");

function manejarClickBoton(){
    titulo.style.backgroundColor = `rgb(${Math.floor(Math.random() * 96)+150}, ${Math.floor(Math.random() * 96)+150}, ${Math.floor(Math.random() * 96)+150})`
};

boton.addEventListener("click", manejarClickBoton)


