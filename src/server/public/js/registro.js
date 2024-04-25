// const formRegistro = document.getElementById("formRegistro")

formRegistro.addEventListener('submit', async (e) => {
  e.preventDefault();

  // SE CAPTURAN LOS DATOS DEL FORMULARIO
  //PARTICULAR
  //PAGINA 1
  const user_name = document.getElementById('user_name').value;
  const user_email = document.getElementById('user_email').value;
  const user_password = document.getElementById('user_password').value;
  console.log(user_name, user_email, user_password);
  //REPETIR PAG1
  const validarEmail = document.getElementById("validarEmail").value
  const validarPass = document.getElementById("validarPass").value
  console.log(validarEmail, validarPass)
  //PAGINA 2 
  const nombre = document.getElementById("nombre").value
  const apellido = document.getElementById("apellido").value
  const dni = document.getElementById("dni").value
  const cuil = document.getElementById("cuil").value
  const fecha_nacimiento = document.getElementById("fechaNacimiento").value
  const id_genero = document.getElementById("genero").value;
  const id_pais = document.getElementById("pais").value
  //PAGINA 3
  const id_rol = document.getElementById("opcionRol").value;
  const domicilio = document.getElementById("domicilio").value;
  const num_tel = document.getElementById("numTelefono").value;
  const id_depar = document.getElementById("id_depar").value;
  const id_local = document.getElementById("id_local").value;
  console.log(nombre, apellido, dni, cuil, fecha_nacimiento, id_genero, id_pais, id_rol);
  console.log(domicilio, num_tel, id_depar, id_local);

  let id_estado_laboral, id_nivel_educacion, id_rubro, domicilio_empresa, num_tel_empresa, nombre_empresa, id_provincia, otro_rubro, otro_pais;

  if (id_pais === "1") {
    id_provincia = document.getElementById("provincia").value;
  }

  if (id_pais === "11") {
    otro_pais = document.getElementById("inputOtroPais").value;
  }

  if (id_rol === "1") {
    //POSTULANTE
    id_estado_laboral = document.getElementById("estado_laboral").value;
    id_nivel_educacion = document.getElementById("nivel_educacion").value;
    id_rubro = document.getElementById("selectorRubros").value;
    if (id_rubro === "11") {
      otro_rubro = document.getElementById("inputOtroRubro").value;
    }
  } else if (id_rol === "2") {
    //EMPLEADOR
    domicilio_empresa = document.getElementById("domicilioEmpresa").value;
    num_tel_empresa = document.getElementById("telEmpresa").value;
    nombre_empresa = document.getElementById("nombreEmpresa").value;
    id_rubro = document.getElementById("selectorRubros").value;
    if (id_rubro === "11") {
      otro_rubro = document.getElementById("inputOtroRubro").value;
    }
  }
  // SE USA LA PETICION POST PARA CREAR UN USUARIO
  try {
    const res = await fetch('/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name,
        user_email,
        validarEmail,
        user_password,
        validarPass,
        nombre,
        apellido,
        dni,
        cuil,
        fecha_nacimiento,
        id_genero,
        id_pais,
        otro_pais,
        id_provincia,
        domicilio,
        num_tel,
        id_depar,
        id_local,
        id_rol,
        id_estado_laboral,
        id_nivel_educacion,
        id_rubro,
        otro_rubro,
        num_tel_empresa,
        domicilio_empresa,
        nombre_empresa
      })
    });

    const data = await res.json();
    console.log({ data });

    if (res.ok) {
      Swal.fire({
        icon: "success",
        title: "El usuario ha sido creado correctamente.",
        text: "Espere un momento...",
        showConfirmButton: false
      });
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } else {

      // let errorMessage = data.errors
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data.errors ,
        confirmButtonText: 'Aceptar'
      });

    }

  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'No fue posible crear el usuario',
      text: 'Revisa los campos en formulario'
    });
  }
})