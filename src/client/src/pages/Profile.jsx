import { useEffect, useState, useContext } from "react";
import userIcon from "../assets/userIcon.png"
import "../Style.css";
import { fetchFunction } from "../api/apiFetch";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useForm } from "../hooks/useForms";
import { PosteosUser } from "../components/PosteosUser.component";
import { DescUser } from "../components/DescUser.component";
import { useSweetAlert } from "../hooks/useSweetAlert";
import { ModalFile } from "../components/ModalFile.component";
import { Files } from "../components/Files.component";

export const Profile = () => {

  const { logout } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleUpdateClick = () => {
    navigate("/auth/update-user")
  }

  const handleDescClick = () => {
    navigate("/auth/update-description")
  }

  const id_user = localStorage.getItem("id_user");
  const user_name = localStorage.getItem("user_name");
  const id_rol = localStorage.getItem("id_rol");

  const data = {
    id_user: id_user,
    id_rol: id_rol
  }

  //OBTENER INFO DEL USUARIO
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const resultado = fetchFunction("findUserInfo", "POST", data)
      .then((resultado) => {
        setDatos(resultado)
      })
  }, [])

  //OBTENER INFO SEGUN ROL
  const [tipoRol, setTipoRol] = useState(null);

  if (id_rol == 1) {
    useEffect(() => {
      const resultado = fetchFunction("findPostulante", "POST", data)
        .then((resultado) => {
          setTipoRol(resultado);
        })
    }, []);

  } else if (id_rol == 2) {
    useEffect(() => {
      const resultado = fetchFunction("findEmpleador", "POST", data)
        .then((resultado) => {
          setTipoRol(resultado)
        })
    }, []);
  }

  //BUSCAR FOTO DE PERFIL
  const [foto, setFoto] = useState(null);
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resultado = await fetchFunction("findPfp", "POST", data);
        if (!resultado.message) {
          setFoto(resultado);
        } else {
          setFoto(userIcon);
          console.log("FOTO", foto);
        }
      } catch (error) {
        console.log("Hubo un error:", error);
      }
    };
    obtenerDatos();
  }, []);

  //ELIMINAR PERFIL
  const handleDelete = () => {
    const response = fetchFunction("destroyUser", "DELETE", data)

    if (response) {
      useSweetAlert(response, "Usuario Eliminado Correctamente", "success")
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_name");
        localStorage.removeItem("id_user");
        localStorage.removeItem("id_rol");
        logout()
        navigate("/index")
      }, 2000);
    }
  }

  return (
    <>
      <Header />
      <div className="colorFondo">
        <div className="container-fluid">
          <div className="row pt-4">

            <div className="col-md-5 col-sm-12">
              <div className="card">

                <ModalFile
                  titulo={"Editar foto de perfil"}
                  label={"Elija su imagen"}
                  botonTxt={"Subir foto de perfil"}
                  route={"pfp"}
                  icon={"bi bi-images"}
                  id={1}
                  tipo={"upload"}
                />

                <img
                  src={foto == userIcon ? foto : `${"http://localhost:5000/"}${foto}`}
                  className="card-img-top img-fluid img-thumbnail"
                  width="50px"
                  height="100px"
                  alt="Perfil de usuario"
                  crossOrigin="anonymous"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">Nombre de usuario:
                    <br />{datos?.User?.user_name}</h5>

                  <h5 className="card-title">Correo: <br />
                    {datos?.User?.user_email}</h5>

                  <h5 className="card-title">
                    Rol: <br />
                    {id_rol == 1 ? "Postulante" : id_rol == 2 ? "Empleador" : id_rol == 3 ? "Particular" : "Particular"}                  </h5>

                  {id_rol == 1 && (
                    <>
                      <h5 className="card-title">Situación Laboral: <br />
                        {tipoRol?.estado_laboral?.desc_estado_laboral}</h5>

                      <h5 className="card-title">Nivel de Educación: <br />
                        {tipoRol?.nivel_educacion?.desc_nivel_educacion}</h5>

                      <h5 className="card-title">Rubro en el que te desempeñas: <br />
                        {tipoRol?.id_rubro == 11 ? tipoRol?.otro_rubro : tipoRol?.rubro?.desc_rubro}
                      </h5>

                    </>
                  )
                  }

                  {id_rol == 2 && (
                    <>
                      <h5 className="card-title">Nombre de la Empresa: <br />
                        {tipoRol?.nombre_empresa}</h5>

                      <h5 className="card-title">Locacion de la empresa: <br />
                        {tipoRol?.domicilio_empresa}</h5>


                      <h5 className="card-title">Numero telefonico de la empresa: <br />
                        {tipoRol?.num_tel_empresa}</h5>

                      <h5 className="card-title">Rubro de la empresa: <br />
                        {tipoRol?.id_rubro == 11 ? tipoRol.otro_rubro : tipoRol?.rubro?.desc_rubro}</h5>

                    </>
                  )
                  }

                  <i href="#" className="bi bi-pencil btn btn-primary " onClick={handleUpdateClick}>  Editar perfil</i>

                  {id_rol != 3 &&
                    <>
                      <h6>Calificación con estrellas:</h6>

                      <div className="rating">
                        <i className="bi bi-star-fill" type="radio" name="rating" value="5" />
                        <i className="bi bi-star-fill" type="radio" name="rating" value="4" />
                        <i className="bi bi-star-fill" type="radio" name="rating" value="3" />
                        <i className="bi bi-star-fill" type="radio" name="rating" value="2" />
                        <i className="bi bi-star" type="radio" name="rating" value="1" />
                      </div>
                    </>
                  }
                  <div className="py-1"></div>

                  <ModalFile
                    titulo={"¿Esta seguro de que desea eliminar tu cuenta?"}
                    label={"¡Este proceso es irreversible!"}
                    botonTxt={"Eliminar cuenta"}
                    icon={"bi-file-excel"}
                    id={9}
                    tipo={"delete"}
                    children={<button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                      onClick={handleDelete} >Confirmar</button>}
                  />

                </div>
              </div>
              <div className="py-1"></div>
              {id_rol != 3 &&
                <div className="card">

                  <ModalFile
                    titulo={"Subir archivos"}
                    label={"Solo se permiten subir archivos de tipo .pdf .docx .xlsx .pptx e imagenes"}
                    botonTxt={"Subir archivo"}
                    route={"createFile"}
                    icon={"bi bi-cloud-arrow-up-fill"}
                    id={2}
                    tipo={"upload"}
                  />

                  <div className="card-body text-center">
                    <h5 className="card-title">Archvios subidos</h5>

                    <Files
                      data={data}
                      botones={true}
                    />

                  </div>

                </div>
              }

            </div>

            <DescUser
              data={data}
              btns={true}
              children={<div className="d-flex justify-content-end align-items-start pt-2">
                <i href="#" className="bi bi-pencil btn btn-warning" onClick={handleDescClick}>Editar</i>
              </div>}
            />
          </div>

        </div>
        <div className="row mx-auto">
          {/* POSTEOS Y DESCRIPCION*/}

          {id_rol != 3 && <div className="col-md-12 justify-content-center mx-auto">
            <div className="my-3 p-3 bg-body rounded shadow-sm">
              <h5 className="card-title text-dark text-center">Mis públicaciones</h5>
              <div className="d-flex justify-content-center flex-wrap">

                <PosteosUser
                  data={data}
                  deleteBtn={true}
                />

              </div>
            </div>
          </div>}

        </div>
      </div>

      <Footer />
    </>
  );
};
