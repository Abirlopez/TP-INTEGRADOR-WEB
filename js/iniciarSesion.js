var form = document.getElementById("formLogin");
var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e){
    e.preventDefault();

    var valorEmail = email.value;

    mensaje.innerHTML = "";


    if(valorEmail.indexOf(".") == -1){
        mensaje.innerHTML = "Debe tener un punto";
        mensaje.style.color = "red";
        return;
    }

    window.location.href = "../index.html";
});