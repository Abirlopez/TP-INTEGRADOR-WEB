const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    mensaje.textContent = "Cuenta inexistente";
    mensaje.style.color = "red";
    return;
  }

  localStorage.setItem("usuarioRecuperar", JSON.stringify(usuario));

  mensaje.textContent = "Usuario encontrado";
  mensaje.style.color = "green";

  setTimeout(() => {
    window.location.href = "recupetarContrasenia.html";
  }, 1500);
});