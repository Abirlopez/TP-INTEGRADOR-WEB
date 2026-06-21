import { destinos } from "./data/ofertasList.js";


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

function generarHora() {
    const hora = Math.floor(Math.random() * 24);
    const minuto = [0, 15, 30, 45][Math.floor(Math.random() * 4)];

    return `${hora.toString().padStart(2, "0")}:${minuto
        .toString()
        .padStart(2, "0")}`;
}


function generarDuracion(tipoDestino) {
    const esNacional = tipoDestino === "nacional";
    
    if (esNacional) {
        // Opciones de tiempos aleatorios para vuelos nacionales (más cortos)
        const opcionesNacionales = [
            { horas: 1, minutos: 45, tipoVuelo: "Directo" },
            { horas: 2, minutos: 30, tipoVuelo: "Directo" },
            { horas: 3, minutos: 15, tipoVuelo: "1 Escala" }
        ];
        
        // Seleccionamos una opción al azar
        const eleccion = opcionesNacionales[Math.floor(Math.random() * opcionesNacionales.length)];
        
        return {
            duracion: `${eleccion.horas}h ${eleccion.minutos.toString().padStart(2, "0")}m`,
            tipoVuelo: eleccion.tipoVuelo,
            horas: eleccion.horas,
            minutos: eleccion.minutos
        };
        
    } else {
        // Opciones de tiempos aleatorios para vuelos internacionales (más largos)
        const opcionesInternacionales = [
            { horas: 11, minutos: 0, tipoVuelo: "Directo" },
            { horas: 12, minutos: 45, tipoVuelo: "Directo" },
            { horas: 16, minutos: 30, tipoVuelo: "1 Escala" },
            { horas: 22, minutos: 15, tipoVuelo: "2 Escalas" }
        ];
        
        // Seleccionamos una opción al azar
        const eleccion = opcionesInternacionales[Math.floor(Math.random() * opcionesInternacionales.length)];
        
        return {
            duracion: `${eleccion.horas}h ${eleccion.minutos.toString().padStart(2, "0")}m`,
            tipoVuelo: eleccion.tipoVuelo,
            horas: eleccion.horas,
            minutos: eleccion.minutos
        };
    }
}


function sumarDuracion(horarioSalida, horasDuracion, minutosDuracion) {
    const [h, m] = horarioSalida.split(":").map(Number);

    let totalMinutos =
        h * 60 +
        m +
        horasDuracion * 60 +
        minutosDuracion;

    totalMinutos = totalMinutos % (24 * 60);

    const horaLlegada = Math.floor(totalMinutos / 60)
        .toString()
        .padStart(2, "0");

    const minutoLlegada = (totalMinutos % 60)
        .toString()
        .padStart(2, "0");

    return `${horaLlegada}:${minutoLlegada}`;
}

function crearTarjetaVuelo(destino, numero) {

    const horaSalida = generarHora();
    const vuelo = generarDuracion(destino.tipo);

    // --- CAMBIO 2: Ahora calcula la llegada de forma coherente sumando la duración ---
    const horaLlegada = sumarDuracion(
        horaSalida,
        vuelo.horas,
        vuelo.minutos
    );

    const precio =
        destino.precio +
        Math.floor(Math.random() * 150);

    return `
        <div class="tarjeta-vuelo">

            <input
                type="checkbox"
                id="vuelo${numero}"
                class="abrir">

            <label
                for="vuelo${numero}"
                class="informacion">

                <div class="fila">

                    <div class="aerolinea">
                        <img src="../images/AeroArgentinas.jpg"
                             class="aeroargentina">

                        <p class="nombreAerolinea">
                            Aerolíneas Argentinas
                        </p>
                    </div>

                    <div class="info">
                        <span class="etiqueta">IDA</span>
                        <span class="hora">
                            <strong>${horaSalida}</strong>
                        </span>
                        <span class="ciudad">EZE</span>
                    </div>

                    <div class="duracion">
                        <span class="tiempo">${vuelo.duracion}</span>
                        <div class="linea-trayecto"></div>
                        <span class="tipo-vuelo">
                            ${vuelo.tipoVuelo}
                        </span>
                    </div>

                    <div class="info">
                        <span class="hora">
                            <strong>${horaLlegada}</strong>
                        </span>
                        <span class="ciudad">${destino.codigo}</span>
                    </div>

                    <div class="icono-servicio">
                        <img src="../images/MOCHILA-color.svg" class="mochila">
                        <img src="../images/VALIJA-color.svg" class="valija">
                        <img src="../images/MALETA.svg" class="maleta">
                    </div>

                    <div class="clase">
                        <span>Economica</span>
                    </div>

                    <div class="flecha">
                        <img src="../images/flecha-hacia-abajo.png">
                    </div>

                </div>

            </label>

            <div class="desplegable">

                <div class="extras">
                    <p>Precio por 1 pasajero</p>
                </div>

                <div class="parte-abajo">
                    <span class="precio-vuelo">
                        US$ ${precio}
                    </span>

                    <a href="../pages/Checkout.html"
                       class="boton-accion">
                        Comprar
                    </a>
                </div>

            </div>

        </div>
    `;
}


if (destinoEncontrado) {

    const seccionFondo = document.getElementById("detalle-seccion");
    const titulo = document.getElementById("nombre-destino");
    const precio = document.getElementById("precio-destino");
    const info = document.getElementById("info-destino");

    seccionFondo.style.backgroundImage =
        `url('${destinoEncontrado.imagen}')`;

    titulo.textContent = destinoEncontrado.destino;
    precio.textContent = `US$ ${destinoEncontrado.precio}`;
    info.textContent = destinoEncontrado.informacion;

    const contenedor =
        document.getElementById("contenedor-vuelos");

    contenedor.innerHTML =
        crearTarjetaVuelo(destinoEncontrado, 1) +
        crearTarjetaVuelo(destinoEncontrado, 2);

}