let usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const perfil = document.getElementById("perfil");
const sinSesion = document.getElementById("sinSesion");
const mensajeError = document.getElementById("mensajeError");

// 🔒 control de sesión
if (!usuario) {
  perfil.style.display = "none";
  sinSesion.style.display = "block";
} else {
  sinSesion.style.display = "none";
  perfil.style.display = "block";

  document.getElementById("nombre").value = usuario.nombre;
  document.getElementById("email").value = usuario.email;
  document.getElementById("telefono").value = usuario.telefono || "";
  document.getElementById("nacimiento").value = usuario.nacimiento || "";

  if (usuario.genero) {
    const radio = document.querySelector(`input[name="genero"][value="${usuario.genero}"]`);
    if (radio) radio.checked = true;
  }
}

// 💾 guardar cambios
document.getElementById("formPerfil").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const genero = document.querySelector('input[name="genero"]:checked')?.value;
  const nacimiento = document.getElementById("nacimiento").value;
  const password = document.getElementById("password").value;

  let errores = "";

  if (nombre.length < 9 || nombre.length > 30) {
    errores += "Nombre inválido. ";
  }

  if (!/^[0-9]{10}$/.test(telefono)) {
    errores += "Teléfono debe tener 10 números. ";
  }

  if (genero !== "m" && genero !== "f") {
    errores += "Debes seleccionar género. ";
  }

  if (errores !== "") {
    mensajeError.style.color = "red";
    mensajeError.textContent = errores;
    return;
  }

  const actualizado = {
    ...usuario,
    nombre,
    telefono,
    genero,
    nacimiento,
    password: password || usuario.password
  };

  usuarios = usuarios.map(u =>
    u.email === usuario.email ? actualizado : u
  );

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  localStorage.setItem("usuarioLogueado", JSON.stringify(actualizado));

  mensajeError.style.color = "green";
  mensajeError.textContent = "Perfil actualizado correctamente";
});