
import { destinos } from "./data/destinosList.js";


const parametrosURL = new URLSearchParams(window.location.search);
const nombreBuscado = parametrosURL.get("destino");


const destinoEncontrado = destinos.find(item => item.destino.toLowerCase() === nombreBuscado?.toLowerCase());


if (destinoEncontrado) {
    const seccionFondo = document.getElementById("detalle-seccion");
    const titulo = document.getElementById("nombre-destino");
    const precio = document.getElementById("precio-destino");
    const info = document.getElementById("info-destino");

    
    seccionFondo.style.backgroundImage = `url('${destinoEncontrado.imagen}')`;
    
   
    titulo.textContent = destinoEncontrado.destino;
    precio.textContent = `US$ ${destinoEncontrado.precio}`;
    info.textContent = destinoEncontrado.informacion;
} else {
    
    document.getElementById("nombre-destino").textContent = "Destino no encontrado";
}