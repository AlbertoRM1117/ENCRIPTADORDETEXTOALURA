
function encriptar(){
    var mensaje = document.querySelector(".introducir-mensajes").value;
    var mensajeResultado = mensaje.replace(/e/gi,"enter")
    .replace(/o/gi,"ober")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/u/gi,"ufat");
    document.querySelector(".resultado-mensajes").value = mensajeResultado;
    document.querySelector(".introducir-mensajes").value;
    ocultarTexto();
    

}
var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

var boton2 = document.querySelector("#btn-desencriptar");
function desencriptar(){
    var mensaje = document.querySelector(".introducir-mensajes").value;
    var mensajeResultado = mensaje.replace(/enter/gi,"e")
    .replace(/ober/gi,"o")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ufat/gi,"u");
    document.querySelector(".resultado-mensajes").value = mensajeResultado;
    document.querySelector(".introducir-mensajes").value;
    

}
boton2.onclick = desencriptar;
function copiar(){
    var contenido = document.querySelector(".resultado-mensajes");
    contenido.select();
    document.execCommand("copy")
    alert("¡Copiado con exito!")
}
var boton3 = document.querySelector("#btn-copiar");
boton3.onclick = copiar;

function ocultarTexto(){
    var imgmuneco = document.querySelector(".muneco");
    var parrafo1 = document.querySelector(".parrafo");
    imgmuneco.classList.add("ocultar");
    parrafo1.classList.add("ocultar");
}

