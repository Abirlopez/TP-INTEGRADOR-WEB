const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", (e) => {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmar = document.getElementById("confirmar").value;

  let errores = "";

  if (password.length < 6) {
    errores += "La contraseña debe tener al menos 6 caracteres ";
  }

  if (password !== confirmar) {
    errores += "Las contraseñas no coinciden ";
  }

  if (errores !== "") {
    mensaje.textContent = errores;
    mensaje.style.color = "red";
    return;
  }


  let usuarioRecuperar = JSON.parse(localStorage.getItem("usuarioRecuperar"));

  if (!usuarioRecuperar) {
    mensaje.textContent = "Error: no hay usuario en recuperación";
    mensaje.style.color = "red";
    return;
  }

  
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


  const usuario = usuarios.find(u => u.email === usuarioRecuperar.email);

  if (!usuario) {
    mensaje.textContent = "Usuario no encontrado";
    mensaje.style.color = "red";
    return;
  }

  usuario.password = password;

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  localStorage.removeItem("usuarioRecuperar");

  mensaje.textContent = "Contraseña actualizada correctamente";
  mensaje.style.color = "green";

  setTimeout(() => {
    window.location.href = "InicioSesion.html";
  }, 1500);
});