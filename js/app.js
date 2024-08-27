/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

const textoEncriptar = document.querySelector(".cuadro__texto_encriptar");
const botonEncriptar = document.querySelector(".boton__encriptar");
const botonDesencriptar = document.querySelector(".boton__desencriptar");
const cuadroMensaje = document.querySelector(".cuadro__mensaje");
const botonCopiar = document.querySelector(".boton__copiar");
const muñecoParrafos =document.querySelector(".cuadro__muñeco__parrafos");

botonEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let elTexto =textoEncriptar.value; 
    let elTextoLimpio = elTexto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (elTexto == ""){
        alert ("El campo de ingreso de texto no debe estar vacío");
    }

    else if (elTexto !== elTextoLimpio){
        alert("El texto ingresado no debe tener acentos ni caracteres especiales ejemplo:@/$%&");
    }

    else{
        elTexto = elTexto.replace(/e/mg,"enter");
        elTexto = elTexto.replace(/i/mg,"imes");
        elTexto = elTexto.replace(/a/mg,"ai");
        elTexto = elTexto.replace(/o/mg,"ober");
        elTexto = elTexto.replace(/u/mg,"ufat");

        cuadroMensaje.innerHTML = elTexto;
        botonCopiar.style.visibility = "inherit";
        muñecoParrafos.remove();
    }
    
})


botonDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let elTexto =textoEncriptar.value; 
    let elTextoLimpio = elTexto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (elTexto == ""){
        alert ("El campo de ingreso de texto no debe estar vacío");
    }

    else if (elTexto !== elTextoLimpio){
        alert("El texto ingresado no debe tener acentos ni caracteres especiales ejemplo:@/$%&");
    }

    else{
        elTexto = elTexto.replace(/enter/mg,"e");
        elTexto = elTexto.replace(/imes/mg,"i");
        elTexto = elTexto.replace(/ai/mg,"a");
        elTexto = elTexto.replace(/ober/mg,"o");
        elTexto = elTexto.replace(/ufat/mg,"u");

        cuadroMensaje.innerHTML = elTexto;
        botonCopiar.style.visibility = "inherit";
        muñecoParrafos.remove();
    }
      
})

function copiar(){
    navigator.clipboard.writeText(cuadroMensaje.textContent);

}

