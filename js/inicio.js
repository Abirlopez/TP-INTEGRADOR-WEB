const form = document.getElementById("form-busqueda");
const mensaje = document.getElementById("mensajeDeError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const origen = document.getElementById("origen").value.trim();
  const destino = document.getElementById("destino").value.trim();
  const ida = document.getElementById("fecha-ida").value;
  const vuelta = document.getElementById("fecha-vuelta").value;
  const pasajeros = document.getElementById("pasajeros").value;
  const clase = document.getElementById("clase").value;

  
  mensaje.textContent = "";



  if (!origen || !destino || !ida || !pasajeros) {
    mensaje.textContent = "❌ Completá todos los campos obligatorios";
    return;
  }

  if (origen.toLowerCase() === destino.toLowerCase()) {
    mensaje.textContent = "❌ Origen y destino no pueden ser iguales";
    return;
  }

  const fechaIda = new Date(ida);
  const fechaVuelta = new Date(vuelta);

  if (vuelta && fechaVuelta < fechaIda) {
    mensaje.textContent = "❌ La fecha de vuelta no puede ser anterior a la ida";
    return;
  }

  const cant = parseInt(pasajeros);
  if (isNaN(cant) || cant < 1) {
    mensaje.textContent = "❌ Ingresá cantidad válida de pasajeros";
    return;
  }


  mensaje.style.color = "green";
  mensaje.textContent = "✔ Buscando vuelos...";

  const busqueda = {
    origen,
    destino,
    ida,
    vuelta,
    pasajeros: cant,
    clase
  };

  localStorage.setItem("busqueda", JSON.stringify(busqueda));

 
  setTimeout(() => {
    window.location.href = "pages/resultados.html";
  }, 800);
});