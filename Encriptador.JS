// variables
let TextArea = document.querySelector(".text-area");
let mensaje = document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


//botón encriptador

function btnEncriptar() {
    const textArea = document.querySelector('.text-area');
    const mensaje = document.querySelector('.mensaje-encrip');
    let textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


//encriptar

function encriptar(StringEncriptada){
    let matrizCodigo = [["e","enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u","ufat"]];
    StringEncriptada = StringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(StringEncriptada.includes(matrizCodigo[i][0])){
            StringEncriptada = StringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return StringEncriptada;
   
    console.log(StringEncriptada);
}


//Botón desencriptar
function btnDesencriptar() {
    const textArea = document.querySelector('.text-area');
    const mensaje = document.querySelector('.mensaje-encrip');
    let textoDesencriptado =desencriptar (textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
   




//desencriptar

function desencriptar(StringDesencriptada){
    let matrizCodigo1 = [["e","enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u","ufat"]];
    StringDesencriptada = StringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo1.length; i++){
        if(StringDesencriptada.includes(matrizCodigo1[i][1])){
            StringDesencriptada = StringDesencriptada.replaceAll(matrizCodigo1[i][1], matrizCodigo1[i][0]);
        }
    
    }

    return StringDesencriptada;
}

//botón copiar
function btnCopiar() {
    const mensaje = document.querySelector('.mensaje-encrip');
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand("copy");

    alert("Texto copiado: ");
}