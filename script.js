function SobreMi(){
    var imagen = document.getElementById("imagenMia").style;
    imagen.visibility = "visible";
    var texto = document.getElementById("presentacion").style;
    texto.visibility = "visible";
    var boton = document.getElementById("OcultarSM").style;
    boton.visibility = "visible";
}

function Ocultar1(){
    var imagen = document.getElementById("imagenMia").style;
    imagen.visibility = "hidden";
    var texto = document.getElementById("presentacion").style;
    texto.visibility = "hidden";
    var boton = document.getElementById("OcultarSM").style;
    boton.visibility = "hidden";
}

function proyecto(){
    var linkImg = document.getElementById("imagenCarpin").style;
    linkImg.visibility="visible";
    var linkText = document.getElementById("DescImagen").style;
    linkText.visibility="visible";
    var linkImgAPP = document.getElementById("imagenApp").style;
    linkImgAPP.visibility="visible";
    var linkTextAPP = document.getElementById("DescImagenApp").style;
    linkTextAPP.visibility="visible";
    var boton = document.getElementById("Ocultar").style;
    boton.visibility = "visible";
}

function Ocultar(){
    var linkImg = document.getElementById("imagenCarpin").style;
    linkImg.visibility="hidden";
    var linkText = document.getElementById("DescImagen").style;
    linkText.visibility="hidden";
    var linkImgAPP = document.getElementById("imagenApp").style;
    linkImgAPP.visibility="hidden";
    var linkTextAPP = document.getElementById("DescImagenApp").style;
    linkTextAPP.visibility="hidden";
    var boton = document.getElementById("Ocultar").style;
    boton.visibility = "hidden";
}

function enviar(){
    alert(enviado, correctamente);
}

function contactame(){
    var form = document.getElementById("formulario").style;
    form.visibility = "visible";
}
