import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../components/Footer.component';
import Header from '../components/Header.component';
import { useForm } from '../hooks/useForms';
import { fetchFunction } from '../api/apiFetch';
import { useBoleean } from '../hooks/useHiddenPass';
import { AuthContext } from '../context/AuthProvider';

export const Register = () => {
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const { form, handleInputChange } = useForm({});

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (authState.logged) {
      navigate('/auth/home');
    }
  }, [authState, navigate]);

  const handleCancel = () => {
    navigate('/index');
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetchFunction('registro', 'POST', form);

      if (resp.message) {
        Swal.fire({
          title: 'Usuario registrado correctamente.',
          text: 'Espere un momento...',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        });

        setErrors({}); // Reiniciar errores
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        Swal.fire({
          title: 'No se ha podido registrar el usuario.',
          text: resp.errors.array.join(', '), // Mostrar errores como cadena
          icon: 'error',
          showConfirmButton: true,
          confirmButtonText: 'Aceptar'
        });
        setErrors(resp.errors.object);
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      // Manejar error de manera adecuada, por ejemplo, mostrar un mensaje de error genérico.
    }
  };
  const { boleean, handleBoleean } = useBoleean()

  return (
    <>
      <Header />

      <main className="p-4 d-flex justify-content-center align-items-center colorFondo">

        <form action="#" onSubmit={handleRegister} name="formulario">

          <div id="carouselExampleDark" className="carousel carousel-dark slide">

            <div className="carousel-inner rounded-5 py-3">

              <div className="carousel-item active" id="pagina1">

                <div className="bg-light rounded p-3 row g-4 d-flex align-items-center text-center"
                  style={{ width: "40rem", border: "1px", solid: "#000" }}>

                  <h3 className="text-center fw-bold">Datos de Usuario</h3>

                  <div className="col-md-12">
                    <label className="form-label">Nombre de usuario</label>
                    <input type="text" className="form-control" placeholder="nombre de usuario"
                      id="user_name" name="user_name" required
                      onChange={handleInputChange} value={form[name]}
                    />
                    <span className="text-danger fw-bold" >{errors?.user_name?.msg}</span>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Ingrese su email</label>
                    <input type="email" className="form-control" placeholder="name@example.com"
                      id="user_email" name="user_email" required
                      value={form[name]} onChange={handleInputChange}
                    />
                    <span className="text-danger fw-bold py-3" >{errors?.user_email?.msg}</span>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text">Repetir email</label>
                    <div className="input-group">
                      <input type="email" className="form-control" name="validarEmail"
                        placeholder="name@example.com" required
                        onChange={handleInputChange} value={form[name]}
                      />
                    </div>
                    <span className="text-danger fw-bold" >{errors?.validarEmail?.msg}</span>
                  </div>

                  <div className="d-flex">
                    <div className="col-md-6 px-1">
                      <label
                        className="form-label text-center">Contraseña</label>
                      <div className="input-group">
                        <input type={boleean.button1 ? "text" : "password"} className="form-control" id="user_password"
                          name="user_password" placeholder="**********" required
                          onChange={handleInputChange} value={form[name]}
                        />

                        <button type="button" className="btn btn-outline-primary"
                          onClick={() => handleBoleean("button1")}
                        ><i className={boleean.button1 ? "bi bi-eye-slash" : "bi bi-eye"} ></i></button>


                      </div>
                      <span className="text-danger fw-bold" >{errors?.user_password?.msg}</span>
                    </div>

                    <div className="col-md-6 px-1">
                      <label className="form-label">Repetir contraseña</label>

                      <div className="input-group">
                        <input type={boleean.button2 ? "text" : "password"} className="form-control" id="validarPass"
                          name="validarPass" placeholder="**********" required
                          onChange={handleInputChange} value={form[name]}
                        />

                        <button type="button" className="btn btn-outline-primary"
                          onClick={() => handleBoleean("button2")}
                        ><i className={boleean.button2 ? "bi bi-eye-slash" : "bi bi-eye"}></i></button>
                      </div>
                      <span className="text-danger fw-bold">{errors?.validarPass?.msg}</span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Seleccione su rol</label>
                    <select name="id_rol" className="form-select"
                      value={form[name]} required
                      onChange={handleInputChange}
                    >
                      <option selected disabled>Roles</option>
                      <option value="1">Postulante</option>
                      <option value="2">Empleador</option>
                      <option value="3">Particular</option>
                    </select>

                    <span className="text-danger fw-bold" >{errors?.id_rol?.msg}</span>
                  </div>


                  <div className="col-md-6 px-1">
                    <label className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" name="fecha_nacimiento"
                      onChange={handleInputChange} value={form[name]}

                    />
                    <span className="text-danger fw-bold">{errors?.fecha_nacimiento?.msg}</span>

                  </div>

                  <div className="text-center d-flex justify-content-around">

                    <button className="btn btn-danger" onClick={handleCancel}>Cancelar <i
                      className="fas fa-file-alt"></i></button>
                    <div class="mb-3">
                      <div class="g-recaptcha" data-sitekey="6LfiZLEpAAAAAEfEkcu0mPW--BH4S9pIOgxkXK68">

                      </div>

                    </div>
                    <button className="btn btn-primary" type="submit">Registrarse <i
                      className="fas fa-file-alt"></i></button>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>
      </main >
      <Footer />
    </>
  )
}
