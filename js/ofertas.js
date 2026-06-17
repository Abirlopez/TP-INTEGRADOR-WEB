import { destinos } from "./data/destinosList.js";

const contenedor = document.querySelector(".contenedor-ofertas");
const selectOrden = document.getElementById("orden");


function mostrarOfertas(lista) {
    // Asegurarse que el contenedor este limpio
    contenedor.innerHTML = ""; 

    lista.forEach(oferta => {
        contenedor.innerHTML += `
             <div class="tarjeta">
                <span class="promo">PROMO</span>
                <img src="${oferta.imagen}" alt="${oferta.destino}">

                <div class="info">
                
                    <div class="parte-arriba">
                        <h3>${oferta.destino}</h3>
                        <p>${oferta.pais}</p>
                    </div>

                    <div class="parte-abajo">
                        <p>Desde</p>
                        <p class="precio">US$${oferta.precio}</p>

                        <div class="ver-vuelos">
                            <a href="../pages/detalleDestino.html?destino=${oferta.destino}">
                                <p>Ver Oferta</p>
                            </a>

                            <a href="../pages/detalleDestino.html?destino=${oferta.destino}">
                                <img src="../images/flecha-naranja.png" alt="flecha">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// escucha el cambio
selectOrden.addEventListener("change", (e) => {
    const valorSeleccionado = e.target.value;
    
    
    let listaFiltrada = [...destinos];

    if (valorSeleccionado === "precio") {
       
        listaFiltrada.sort((a, b) => Number(a.precio) - Number(b.precio));
    } else if (valorSeleccionado === "nacional") {
        
        listaFiltrada = listaFiltrada.filter(oferta => oferta.tipo === "nacional");
    } else if (valorSeleccionado === "internacional") {
       
        listaFiltrada = listaFiltrada.filter(oferta => oferta.tipo === "internacional");
    }

    
    mostrarOfertas(listaFiltrada);
});


mostrarOfertas(destinos);