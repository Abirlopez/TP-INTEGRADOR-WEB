const vuelosNacionales = [
    {
        destino: "Bariloche",
        pais: "Argentina",
        precio: 265,
        imagen: "../images/bariloche.png"
    },
    {
        destino: "Ushuaia",
        pais: "Argentina",
        precio: 1207,
        imagen: "../images/ushuaia.avif"
    },
    {
        destino: "Salta",
        pais: "Argentina",
        precio: 142,
        imagen: "../images/salta.avif"
    },
    {
        destino: "Neuquen",
        pais: "Argentina",
        precio: 80,
        imagen: "../images/neuquen.jpg"
    },  {
        destino: "Ushuaia",
        pais: "Argentina",
        precio: 1207,
        imagen: "../images/ushuaia.avif"
    },
    {
        destino: "Salta",
        pais: "Argentina",
        precio: 142,
        imagen: "../images/salta.avif"
    },
    {
        destino: "Neuquen",
        pais: "Argentina",
        precio: 80,
        imagen: "../images/neuquen.jpg"
    }

];

const vuelosEuropa = [
    {
        destino: "Madrid",
        pais: "España",
        precio: 1700,
        imagen: "../images/madrid.png"
    },
    {
        destino: "Roma",
        pais: "Italia",
        precio: 1650,
        imagen: "../images/roma.avif"
    },
    {
        destino: "Paris",
        pais: "Francia",
        precio: 1890,
        imagen: "../images/paris.avif"
    },
    {
        destino: "Barcelona",
        pais: "España",
        precio: 1560,
        imagen: "../images/barcelona.jpg"
    }, {
        destino: "Madrid",
        pais: "España",
        precio: 1700,
        imagen: "../images/madrid.png"
    },
    {
        destino: "Roma",
        pais: "Italia",
        precio: 1650,
        imagen: "../images/roma.avif"
    },
    {
        destino: "Paris",
        pais: "Francia",
        precio: 1890,
        imagen: "../images/paris.avif"
    }
];

function mostrarVuelos(lista, contenedorId) {

    const contenedor = document.getElementById(contenedorId);

    lista.forEach(vuelo => {

        contenedor.innerHTML += `
            <div class="tarjeta">

                <img src="${vuelo.imagen}" alt="${vuelo.destino}">

                <div class="info">

                    <div class="parte-arriba">
                        <h3>${vuelo.destino}</h3>
                        <p>${vuelo.pais}</p>
                    </div>

                    <div class="parte-abajo">
                        <p>Desde</p>
                        <p class="precio">US$${vuelo.precio}</p>

                        <div class="ver-vuelos">
                            <a href="../pages/resultados.html">
                                <p>Ver vuelos</p>
                            </a>

                            <a href="../pages/resultados.html">
                                <img src="../images/flecha-naranja.png" alt="flecha">
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        `;
    });
}

mostrarVuelos(vuelosNacionales, "vuelos-nacionales");
mostrarVuelos(vuelosEuropa, "vuelos-europa");


const contenedorNacional = document.getElementById("vuelos-nacionales");
const contenedorEuropa = document.getElementById("vuelos-europa");



function carrusel(contenedor, btnAnterior, btnSiguiente){

    btnSiguiente.addEventListener("click", () => {
        contenedor.scrollLeft += 300;
    });

    btnAnterior.addEventListener("click", () => {
        contenedor.scrollLeft -= 300;
    });
}

carrusel(contenedorNacional,document.getElementById("anterior-nacional"),document.getElementById("siguiente-nacional"));

carrusel(contenedorEuropa,document.getElementById("anterior-europa"),document.getElementById("siguiente-europa")
);

