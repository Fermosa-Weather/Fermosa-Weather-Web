import { useEffect, useState } from "react";
import userIcon from "../assets/userIcon.png"
import "../Style.css";
import { fetchFunction } from "../api/apiFetch";
import Header from "../components/Header.component";
import Footer from "../components/Footer.component"
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate()

  const id_user = localStorage.getItem("id_user");
  const user_name = localStorage.getItem("user_name");

  const data = {
    id_user
  }
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const resultado = await fetchFunction("findUserInfo", "POST", data);
        // Actualizar el estado con los datos obtenidos
        setDatos(resultado);
      } catch (error) {
        console.error("Hubo un error:", error);
      }
    };

    obtenerDatos();
  }, []);


  const handleEditarClick = () => {
    navigate("/auth/register-info")
  }

  return (
    <>
      <Header />

      <div className="colorFondo">
        <div className="container">
          <div className="row py-4">

            <div className="col-md-4 col-sm-12">
              <div className="card">
                <div>
                  <i className="bi bi-pencil btn btn-primary" onClick={handleEditarClick}> Editar foto de perfil</i>
                </div>

                <img
                  src={userIcon}
                  className="card-img-top img-fluid"
                  width="50px"
                  height="100px"
                  alt="Perfil de usuario"
                />

                <div className="card-body text-center">
                  <h5 className="card-title">Nombre de usuario:
                    <br />{user_name}</h5>

                  <h6 className="card-text">Correo: {datos?.User.user_email}</h6>

                  <a href="#" className="btn btn-primary">Editar perfil</a>

                  <h6>Calificación con estrellas:</h6>

                  <div className="rating">
                    <input type="radio" id="star5" name="rating" value="5" />
                    <input type="radio" id="star4" name="rating" value="4" />
                    <input type="radio" id="star3" name="rating" value="3" />
                    <input type="radio" id="star2" name="rating" value="2" />
                    <input type="radio" id="star1" name="rating" value="1" />
                  </div>

                  <p id="selectedRating"></p>

                </div>
              </div>
            </div>

            <div className="col-md-8 col-sm-12">
              <div className="card text-center d-flex flex-column justify-content-center colorFondo">
                <div className="card-body">
                  <h5 className="card-title text-light">Información del usuario</h5>
                  <div className="table-responsive">
                    <ul className="list-group table">

                      <li className="list-group-item">Nombre y apellido: <br />
                        {datos?.nombre} {datos?.apellido} </li>

                      <li className="list-group-item">DNI: <br />
                        {datos?.dni}</li>

                      <li className="list-group-item">CUIL: <br />
                        {datos?.cuil}</li>

                      <li className="list-group-item">Pais: <br />
                        {datos?.paise?.nombre_pais}</li>

                      <li className="list-group-item">Genero: <br />
                        {datos?.genero?.genero}</li>

                      <li className="list-group-item">Departamento: <br />
                        {datos?.departamento?.nombre_depar}</li>

                      <li className="list-group-item">Localidad: <br />
                        {datos?.localidad?.nombre_local}</li>

                      <li className="list-group-item"></li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-light">Información de contacto</h5>
                  <div className="table-responsive">
                    <ul className="list-group table">
                      <li className="list-group-item">Descripcion: <br /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};
