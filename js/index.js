// ============================================================
// CAPTURA DE DATOS DEL FORMULARIO DE BÚSQUEDA (index.html)
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-busqueda");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita que el form recargue la página

    const origen = form.querySelector('input[name="origen"]').value;
    const destino = form.querySelector('input[name="destino"]').value;
    const fechaIda = form.querySelector('input[name="fecha-ida"]').value;
    const fechaVuelta = form.querySelector('input[name="fecha-vuelta"]').value;
    const pasajeros = form.querySelector('input[name="pasajeros"]').value;
    const clase = form.querySelector('select[name="clase"]').value;

    const radioTipo = form.querySelector('input[name="tipo"]:checked');
    const tipoVuelo = radioTipo ? radioTipo.parentElement.textContent.trim() : "Ida y vuelta";

    // Guardamos todo en sessionStorage para leerlo en resultados.html
    const busqueda = {
      origen,
      destino,
      fechaIda,
      fechaVuelta,
      pasajeros,
      clase,
      tipoVuelo
    };

    sessionStorage.setItem("busquedaVuelo", JSON.stringify(busqueda));

    // Redirigimos a la página de resultados
    window.location.href = "pages/resultados.html";
  });
});