const formRegistro = document.getElementById("formRegistro");
//EXPRESIONES REGULARES
const regexOnlyLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñüÜ\s]+$/;
const regexOnlyNumbers = /^\d*$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

//opcion registro postulante/empleador comercial y no comercial
let opcionRegitro = document.getElementById("opcionRol");

//Manejar el evento slide del carrusel y actualizar la barra de progreso
const carousel = document.querySelector('#carouselExampleDark');
const progressBar = document.querySelector('.progress-bar');

carousel.addEventListener('slide.bs.carousel', (event) => {
  const totalSlides = event.relatedTarget.parentElement.children.length;
  const currentSlideIndex = Array.from(event.relatedTarget.parentElement.children).indexOf(event.relatedTarget);

  // Calcula el porcentaje del progreso y actualiza la barra de progreso
  const progressPercentage = ((currentSlideIndex + 1) / totalSlides) * 100;
  progressBar.style.width = progressPercentage + '%';
});

//OCULTAR LAS CONTRASEÑAS
function ocultarContraseña(inputId, button) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = button.querySelector("i");

  if (!eyeIcon) {
    console.error("El elemento con la clase 'bi-eye' no se encontró en el DOM.");
    return;
  }

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("bi-eye");
    eyeIcon.classList.add("bi-eye-slash");
  } else {
    passwordInput.type = "password";

    eyeIcon.classList.remove("bi-eye-slash");
    eyeIcon.classList.add("bi-eye");
  }
}

//CAMBIOS DINAMICOS
opcionRegitro.addEventListener('change', () => {

  let valorSelect = document.getElementById("opcionRol").value
  //OPCION DE POSTULANTE
  if (valorSelect == 1) {
    let postulante = document.getElementById("postulante");
    empleador.innerHTML = " "
    postulante.innerHTML += `
   
    <div class="col-md-12 pb-3">
    <select id="estado_laboral" class="form-select" aria-label="Default select example" required>
    <option value="" selected disabled>Estado laboral</option>
    <option value="1">Desempleado</option>
    <option value="2">Actualmente trabajando</option>
    </select>
    </div>
    <div class="col-md-12">
    <select class="form-select" id="nivel_educacion" aria-label="Default select example" required>
    <option value="" selected disabled>Nivel educativo alcancazado</option>
    <option value="1">Secundario completo</option>
    <option value="2">Secundario incompleto</option>
    <option value="1">Terciario completo</option>
    <option value="3">Terciario incompleto</option>
    </select>
    </div>
    
    <label class="form-label">Rubro en el que se desempeña</label>
    <div class="col-md-12">
    <select id="selectorRubros" class="form-select" aria-label="Default select example" required>
    <option value="" selected disabled>Rubros</option>
    <option value="1">Salud</option>
    <option value="2">Tecnologia/Informatica</option>
    <option value="3">Educación</option>
    <option value="4">Finanzas</option>
    <option value="5">Manufactura</option>
    <option value="6">Ventas</option>
    <option value="7">Administración</option>
    <option value="8">Alimenticio</option>
    <option value="9">Construcción</option>
    <option value="10">Docente</option>
    <option value="11">Otros</option>
    </select>
    </div>

    <div id="otroRubro"></div>
    `
    //INPUT PARA OTRO RUBRO
    selectorRubros.addEventListener("change", () => {
      let opcionRubro = selectorRubros.value;
      let otroRubro = document.getElementById("otroRubro") //div para inyectar

      if (opcionRubro === "11") {
        otroRubro.innerHTML = `
      <div class="col-md-12">
      <label class="form-label">Rubro</label>
      <input type="text" id="inputOtroRubro" class="form-control" placeholder="Rubro" required />
      <span class="text-danger fw-bold" id="errorRubro"></span>
      </div>
    `;

        //VALIDACIONES DE RUBRO ESPECIFICAS DEL CAMPO 
        let inputOtroRubro = document.getElementById("inputOtroRubro")
        let errorRubro = document.getElementById("errorRubro")

        inputOtroRubro.addEventListener("input", () => {
          if (inputOtroRubro.value.trim() === "") {
            errorRubro.textContent = "";
          } else if (inputOtroRubro.value.length > 25) {
            errorRubro.textContent = "El RUBRO no puede tener más de 25 caracteres";
          } else {
            errorRubro.textContent = "";
          }
        })

      } else {
        otroRubro.innerHTML = " ";
      }
    });


    //OPCION PARA EMPLEADOR
  } else if (valorSelect == 2) {
    let empleador = document.getElementById("empleador");
    postulante.innerHTML = " ";
    empleador.innerHTML += `

    <div class="col-md-12">
    <label class="form-label">Nombre de la empresa</label>
    <input type="text" id="nombreEmpresa" class="form-control" placeholder="Nombre de la empresa" required />
    <span class="text-danger fw-bold" id="errorEmpresa"></span>
    </div>

    <label class="form-label">Rubro de la empresa</label>
    <div class="col-md-12">
    <select id="selectorRubros" class="form-select" aria-label="Default select example" required>
    <option value="" selected disabled>Rubros</option>
    <option value="1">Salud</option>
    <option value="2">Tecnologia/Informatica</option>
    <option value="3">Educación</option>
    <option value="4">Finanzas</option>
    <option value="5">Manufactura</option>
    <option value="6">Ventas</option>
    <option value="7">Administración</option>
    <option value="8">Alimenticio</option>
    <option value="9">Construcción</option>
    <option value="10">Docente</option>
    <option value="11">Otros</option>
    </select>
    </div>

    <div id="otroRubro"></div>

    <div class="col-md-12">
        <label class="form-label">Locación de la empresa</label>
        <input type="text" class="form-control" id="domicilioEmpresa" placeholder="Mz24 Cs45, Barrio XYZ" required />
        <span class="text-danger fw-bold" id="errorDomEmpresa"></span>
    </div>

    <div class="col-md-12">
      <label class="form-label">Numero de telefono Empresarial</label>
        <div class="input-group">
          <span id="prefijoEmpresa" class="input-group-text">+</span>
          <input id="telEmpresa" type="text" class="form-control" required>
        </div>
        <span class="text-danger fw-bold" id="errorTelEmpresa"></span>
    </div>`;

    //CAMBIOS DE PREFIJO TELEFONICO
    let opcionPais = document.getElementById("pais");

    prefijoEmpresa.textContent = prefijoTel.textContent
    opcionPais.addEventListener("change", () => {
      let prefijoTel = document.getElementById("prefijoTel")
      prefijoEmpresa.textContent = prefijoTel.textContent
    });

    //VALIDACIONES DE CAMPOS ESPECIFICOS
    let domicilioEmpresa = document.getElementById("domicilioEmpresa")
    let telEmpresa = document.getElementById("telEmpresa");
    let selectorRubros = document.getElementById("selectorRubros")
    let nombreEmpresa = document.getElementById("nombreEmpresa")

    let errorTelEmpresa = document.getElementById("errorTelEmpresa")
    let errorDomEmpresa = document.getElementById("errorDomEmpresa")
    let errorEmpresa = document.getElementById("errorEmpresa")



    nombreEmpresa.addEventListener("input", () => {
      if (nombreEmpresa.value.trim() === "") {
        errorEmpresa.textContent = "";
      } else if (nombreEmpresa.value.length > 25) {
        errorEmpresa.textContent = "El nombre de la EMPRESA no puede tener más de 25 caracteres";
      } else {
        errorEmpresa.textContent = "";
      }
    })

    domicilioEmpresa.addEventListener("input", () => {
      if (domicilioEmpresa.value.trim() === "") {
        errorDomEmpresa.textContent = "";
      } else if (domicilioEmpresa.value.length > 100) {
        errorDomEmpresa.textContent = "El domicilio de la empresa no puede tener más de 100 caracteres";
      } else {
        errorDomEmpresa.textContent = "";
      }
    })

    telEmpresa.addEventListener("input", () => {
      if (!regexOnlyNumbers.test(telEmpresa.value)) {
        errorTelEmpresa.textContent = "¡Solo NÚMEROS en este campo!"
      } else if (telEmpresa.value.length > 12) {
        errorTelEmpresa.textContent = "El número de telefono no puede tener más de 12 dígitos";
      } else {
        errorTelEmpresa.textContent = ""
      };
    })

    selectorRubros.addEventListener("change", () => {
      let opcionRubro = selectorRubros.value;
      let otroRubro = document.getElementById("otroRubro") //div para inyectar

      if (opcionRubro === "11") {
        otroRubro.innerHTML = `
      <div class="col-md-12">
      <label class="form-label">Rubro</label>
      <input type="text" id="inputOtroRubro" class="form-control" placeholder="Rubro" required />
      <span class="text-danger fw-bold" id="errorRubro"></span>
      </div>
    `;
        //VALIDACIONES DE RUBRO ESPECIFICAS DEL CAMPO 
        let inputOtroRubro = document.getElementById("inputOtroRubro")
        let errorRubro = document.getElementById("errorRubro")

        inputOtroRubro.addEventListener("input", () => {
          if (inputOtroRubro.value.trim() === "") {
            errorRubro.textContent = "";
          } else if (inputOtroRubro.value.length > 25) {
            errorRubro.textContent = "El RUBRO no puede tener más de 25 caracteres";
          } else {
            errorRubro.textContent = "";
          }
        })

      } else {
        otroRubro.innerHTML = " ";
      }
    });

  } else {
    postulante.innerHTML = " ";
    empleador.innerHTML = " ";
  }
});

//OPCIONES PARA DIFENRENTES PAISES/PROVINCIAS
const opcionPais = document.getElementById("pais");
const opcionProvincia = document.getElementById("provincia");
const selectorProvincia = document.getElementById("selectorProvincia");
const prefijoTel = document.getElementById("prefijoTel");
const otroPais = document.getElementById("otroPais");


opcionPais.addEventListener("change", () => {
  if (opcionPais.value === "11") {
    const inputPais = `
    <div class="col-md-12">
    <label class="form-label">Ingrese su pais de procedencia</label>
    <input type="text" id="inputOtroPais" class="form-control" placeholder="Nombre del Pais" required>
    <span class="text-danger fw-bold" id="errorPais"></span>
    </div>
    `
    otroPais.innerHTML = "";
    otroPais.insertAdjacentHTML("beforeend", inputPais);

    //VALIDAR INPUT
    let inputOtroPais = document.getElementById("inputOtroPais");
    inputOtroPais.addEventListener("input", () => {
      if (inputOtroPais.value.trim() === "" && inputOtroPais.value === "") {
        errorPais.textContent = "";
      } else if (!regexOnlyLetras.test(inputOtroPais.value)) {
        errorPais.textContent = "¡Solo CARACTERES ALFABETICOS en este campo!"
      } else if (inputOtroPais.value.length > 25) {
        errorPais.textContent = "¡El nombre del pais es demasiado largo!"
      } else {
        errorPais.textContent = ""
      };
    })
  } else {
    otroPais.innerHTML = "";
  }

  switch (opcionPais.value) {
    case "1": // Argentina
      prefijoTel.textContent = "+54-";
      break;
    case "2": // Bolivia
      prefijoTel.textContent = "+591-";
      break;
    case "3": // Brasil
      prefijoTel.textContent = "+55-";
      break;
    case "4": // Chile
      prefijoTel.textContent = "+56-";
      break;
    case "5": // Colombia
      prefijoTel.textContent = "+57-";
      break;
    case "6": // Ecuador
      prefijoTel.textContent = "+593-";
      break;
    case "7": // Paraguay
      prefijoTel.textContent = "+595-";
      break;
    case "8": // Perú
      prefijoTel.textContent = "+51-";
      break;
    case "9": // Uruguay
      prefijoTel.textContent = "+598-";
      break;
    case "10": // Venezuela
      prefijoTel.textContent = "+58-";
      break;
    default:
      prefijoTel.textContent = "+";
      break;
  }


  const valorSelector = document.getElementById("pais").value
  const provincias = `
  <label class="form-label">Provincia Argentina</label>
<select id="provincia" class="form-select" aria-label="Default select example">
    <option value="" selected disabled>Provincias</option>
 <option value="1">Buenos Aires</option>
 <option value="2">Catamarca</option>
 <option value="3">Chaco</option>
 <option value="4">Chubut</option>
 <option value="5">Cordoba</option>
 <option value="6">Córrientes</option>
 <option value="7">Entre Ríos</option>
 <option value="8">Formosa</option>
 <option value="9">Jujuy</option>
 <option value="10">La Pampa</option>
 <option value="11">La Rioja</option>
 <option value="12">Mendoza</option>
 <option value="13">Misiones</option>
 <option value="14">Neuquen</option>
 <option value="15">Río Negro</option>
 <option value="16">Salta</option>
 <option value="17">San Juan</option>
 <option value="18">San Luis</option>
 <option value="19">Santa Cruz</option>
 <option value="20">Santa Fe</option>
 <option value="21">Santiago del Estero</option>
 <option value="22">Tierra del Fuego</option>
 <option value="22">Tucuman</option>
 </select>
 `
  if (valorSelector == 1) {
    selectorProvincia.insertAdjacentHTML("beforeend", provincias);
  }else{
    selectorProvincia.innerHTML = "";
  }

});

//VALIDACIONES DE LOS DATOS DEL FORMULARIO
document.addEventListener('DOMContentLoaded', function () {

  const nombre = document.getElementById("nombre")
  const apellido = document.getElementById("apellido")
  const domicilio = document.getElementById("domicilio")
  const dni = document.getElementById("dni")
  const cuil = document.getElementById("cuil")
  const numTelefono = document.getElementById("numTelefono")
  const name = document.getElementById('user_name');
  const email = document.getElementById('user_email');
  const password = document.getElementById('user_password');
  const validarPass = document.getElementById('validarPass');
  const validarEmail = document.getElementById('validarEmail');

  //SPANS DE ERROR NUMEROS
  let errorCuil = document.getElementById("errorCuil")
  let errorDni = document.getElementById("errorDni")
  let errorTelefono = document.getElementById("errorTelefono")
  const errorPass2 = document.getElementById("errorPass2")
  const errorEmail = document.getElementById("errorEmail")
  const errorEmail2 = document.getElementById("errorEmail2")

  //SPANS DE ERROR LETRAS
  let errorNombre = document.getElementById("errorNombre")
  let errorApellido = document.getElementById("errorApellido")
  let errorDomicilio = document.getElementById("errorDomicilio")
  const errorUserName = document.getElementById("errorUserName")
  const errorPass = document.getElementById("errorPass")

  // COMPROBAR EL TIPO NUMERICO DE LOS VALORES INGRESADOS
  formRegistro.addEventListener("input", (event) => {

    // NUMEROS
    if (!regexOnlyNumbers.test(dni.value)) {
      errorDni.textContent = "¡No ingrese guiones o puntos, SOLO NÚMEROS!";
    } else if (dni.value.length > 8) {
      errorDni.textContent = "El número de DNI no puede tener más de 8 dígitos";
    } else {
      errorDni.textContent = "";
    }

    if (!regexOnlyNumbers.test(cuil.value)) {
      errorCuil.textContent = "¡No ingrese guiones o puntos, SOLO NÚMEROS!"
    } else if (cuil.value.length > 11) {
      errorCuil.textContent = "El número de CUIL no puede tener más de 11 dígitos";
    } else {
      errorCuil.textContent = ""
    };

    if (!regexOnlyNumbers.test(numTelefono.value)) {
      errorTelefono.textContent = "¡Solo NÚMEROS en este campo!"
    } else if (numTelefono.value.length > 12) {
      errorTelefono.textContent = "El número de telefono no puede tener más de 12 dígitos";
    } else {
      errorTelefono.textContent = ""
    };

    //LETRAS
    if (nombre.value.trim() === "") {
      errorNombre.textContent = "";
    } else if (nombre.value.length > 30) {
      errorNombre.textContent = "El nombre no puede tener más de 30 caracteres";
    } else if (!regexOnlyLetras.test(nombre.value)) {
      errorNombre.textContent = "¡Solo CARACTERES ALFABETICOS en este campo!";
    } else {
      errorNombre.textContent = "";
    }

    if (apellido.value.trim() === "") {
      errorApellido.textContent = "";
    } else if (apellido.value.length > 20) {
      errorApellido.textContent = "El apellido no puede tener más de 20 caracteres";
    } else if (!regexOnlyLetras.test(apellido.value)) {
      errorApellido.textContent = "¡Solo CARACTERES ALFABETICOS en este campo!";
    } else {
      errorApellido.textContent = "";
    }

    if (domicilio.value.trim() === "") {
      errorDomicilio.textContent = "";
    } else if (domicilio.value.length > 100) {
      errorDomicilio.textContent = "El domicilio no puede tener más de 100 caracteres";
    } else {
      errorDomicilio.textContent = "";
    }

    if (name.value.trim() === "") {
      errorUserName.textContent = ""
    } else if (name.value.length < 6) {
      errorUserName.textContent = "¡El nombre de usuario es muy corto, debe contener al menos 6 caracteres!"
    } else if (name.value.length > 30) {
      errorUserName.textContent = "¡El nombre de usuario es muy largo"
    } else {
      errorUserName.textContent = ""
    }

    if (email.value.trim() === "") {
      errorEmail.textContent = ""
    } else if (!regexEmail.test(email.value)) {
      errorEmail.textContent = "¡Ingrese un Email valido!"
    } else {
      errorEmail.textContent = ""
    }

    if (email.value !== validarEmail.value) {
      errorEmail2.textContent = "¡Los Emails no coinciden!"
    } else {
      errorEmail2.textContent = ""
    }

    if (password.value.trim() === "") {
      errorPass.textContent = ""
    } else if (!regexPass.test(password.value)) {
      errorPass.textContent = "¡Ingrese una constraseña valido, debe mayusculas, minusculas y numeros!"
    } else if (password.value.length < 9) {
      errorPass.textContent = "¡La contraseña es muy corta, debe tener al menos 9 caracteres!"
    } else if (password.value.length > 30) {
      errorPass.textContent = "¡La contraseña es muy larga"
    } else {
      errorPass.textContent = ""
    }

    if (password.value !== validarPass.value) {
      errorPass2.textContent = "¡Las contraseñas no coinciden!"
    } else {
      errorPass2.textContent = ""
    }

  });

});

document.addEventListener("DOMContentLoaded", function () {

  //VALIDACIONES DE LOS SPAN Y EDAD
  formRegistro.addEventListener('submit', async (e) => {
    e.preventDefault();

    //VALIDACION DE LA EDAD DEL USUARIO
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const fechaNac = new Date(fechaNacimiento);
    const hoy = new Date();

    function calcularEdad(fechaNacimiento) {
      let edad = hoy.getFullYear() - fechaNac.getFullYear();
      const mes = hoy.getMonth() - fechaNac.getMonth();

      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
      }
      return edad;
    }

    const edadCalculada = calcularEdad(fechaNacimiento);

    if (fechaNac > hoy) {
      // Mostrar si la edad es posterior a la fecha actual 
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Oh tenemos un viajero del tiempo, parece que aun no has nacido...",
      });
      return;
    }

    if (edadCalculada < 17) {
      // Mostrar si la edad es menor de 17 años
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes ser mayor de 17 años para registrarse en la plataforma.",
      });
    }
  });
});