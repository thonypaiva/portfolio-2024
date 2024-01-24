const form = document.querySelector('form');
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const inputNombreError = document.querySelector('.mensaje-nombre');
const mensajeErrorTelefono = document.querySelector(".mensaje-telefono")
const inputEmailError = document.querySelector('.mensaje-email');
const textAreaError = document.querySelector('.area-mensaje')




let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
   if (menuVisible) {
      document.getElementById("nav").classList = "";
      menuVisible = false;
   } else {
      document.getElementById("nav").classList = "responsive";
      menuVisible = true;
   }
}

function seleccionar() {
   //oculto el menu una vez que selecciono una opcion
   document.getElementById("nav").classList = "";
   menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
   let skills = document.getElementById("skills");
   let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
   if (distancia_skills >= 300) {
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("html");
      habilidades[2].classList.add("react");
      habilidades[3].classList.add("kotlin");
      habilidades[4].classList.add("comunicacion");
      habilidades[5].classList.add("trabajo");
      habilidades[6].classList.add("creatividad");
      habilidades[7].classList.add("dedicacion");
   }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
   efectoHabilidades();
}


//validacion de formulario

const validarEmail = (email) => {
   let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);
}

form.addEventListener("submit", (event) => {
   event.preventDefault();

   const nombreBoton = nombre;

   if (nombreBoton.value.length < 3 || nombre.value.length === "") {
      inputNombreError.textContent = "Por favor coloca un Nombre y Apellido valido y/o este campo no puede esta vacio "
      return
   } else {
      inputNombreError.textContent = ""
   }

   if (telefono.value < 3 || telefono.value === "") {
      mensajeErrorTelefono.textContent = "Este campo no puede estar vacio y/o deber al menos colocar un numero valido";
   } else {
      mensajeErrorTelefono.textContent = "";
   }


   if (!validarEmail(email.value)) {
      inputEmailError.textContent = "Por favor coloca un email valido"
      return;
   }

   const areaAsunto = mensaje;

   if (areaAsunto.value.length < 5 || areaAsunto.value.length === "") {
      textAreaError.textContent = "Por favor coloca un mensaje mas largo y/o este campo no puede esta vacio "
      return
   } else {
      textAreaError.textContent = ""

   }

   event.target.submit();

})

console.log(mensajeErrorTelefono.value)