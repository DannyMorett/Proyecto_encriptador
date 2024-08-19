let Muñeco  = document.querySelector("#Muñeco");
let Contenedorb = document.querySelector("#contenedor_barra");
let Copiarb = document.querySelector("#copiarb");
let textotarea2 = document.getElementById("textotarea2").value;
let textocero = "";
function encriptarboton1() {
    let texto = document.getElementById("textarea1").value; 
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes") 
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufa");
    if (texto.length != 0){
        textotarea2 = textoCifrado;
        document.getElementById("textotarea2").value = textotarea2;
        Muñeco.classList.add("ocultar_imagen");
        Contenedorb.classList.add("ocultar_imagen");
        Copiarb.classList.remove("ocultar_imagen");
        document.getElementById("textarea1").value = textocero;
    }
}
function desencriptar() {
    let texto = document.getElementById("textarea1").value; 
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i") 
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufa/gi, "u");
    if (texto.length != 0){
        textotarea2 = textoCifrado;
        document.getElementById("textotarea2").value = textotarea2;
        Muñeco.classList.add("ocultar_imagen");
        Contenedorb.classList.add("ocultar_imagen");
        Copiarb.classList.remove("ocultar_imagen");
        document.getElementById("textarea1").value = textocero;

    }
}
function botoncopiar(){
    var textarea = document.querySelector("#textotarea2");
    if (textarea) {
        // Selecciona el contenido del textarea
        textarea.select();
        try {
            // Copia el contenido seleccionado al portapapeles
            document.execCommand("copy");
            Muñeco.classList.remove("ocultar_imagen");
            Contenedorb.classList.remove("ocultar_imagen");
            Copiarb.classList.add("ocultar_imagen");
            textotarea2 = "";
            document.getElementById("textotarea2").value = textotarea2;
            alert("Contenido copiado al portapapeles");
        } catch (err) {
            console.error("No se pudo copiar el contenido: ", err);
        }
    } else {
        console.error("Elemento no encontrado");
    }
}