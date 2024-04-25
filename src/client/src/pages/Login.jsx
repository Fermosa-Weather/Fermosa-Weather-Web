import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { fetchFunction } from '../api/apiFetch';
import { useForm } from '../hooks/useForms';
import { useBoleean } from '../hooks/useHiddenPass';
import { useSweetAlert } from '../hooks/useSweetAlert';
import { GoogleLogin } from 'react-google-login';
import Header from '../components/Header.component';
import Footer from '../components/Footer.component';
import googleLogo from '../assets/logoGoogle.jpg';
import lock from '../assets/lock-solid.png';
import user from '../assets/user-solid.png';
import userIcon from '../assets/userIcon.png';
import '../Style.css'

function Login() {
  const clientID = 'TU_CLIENT_ID_DE_GOOGLE.apps.googleusercontent.com';
  const navigate = useNavigate();
  const { login, authState } = useContext(AuthContext);
  const { form, handleInputChange, reset } = useForm({
    user_name: localStorage.getItem('remember_user_name') || '',
    user_password: localStorage.getItem('remember_pass') || ''
  });
  const { boleean, handleBoleean } = useBoleean();

  useEffect(() => {
    if (authState.logged) {
      const lastPath = localStorage.getItem('lastPath') || '/auth/home';
      navigate(lastPath);
    }
  }, [authState, navigate]);

  const responseGoogle = async (response) => {
    const { tokenId } = response;
    const googleLoginForm = {
      google_token: tokenId
    };

    const resp = await fetchFunction('loginWithGoogle', 'POST', googleLoginForm);

    if (resp.token) {
      login(resp);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('user_name', resp.user_name);
      localStorage.setItem('id_user', resp.id_user);
      localStorage.setItem('id_rol', resp.id_rol);
      reset();
      useSweetAlert(resp, 'Inicio de sesión exitoso.', 'success').then(() => {
        const lastLocation = localStorage.getItem('lastPath') || '/auth/home';
        navigate(lastLocation);
      });
    } else {
      useSweetAlert(resp, null, 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetchFunction('login', 'POST', form);

    if (resp.token) {
      login(resp);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('user_name', resp.user_name);
      localStorage.setItem('id_user', resp.id_user);
      localStorage.setItem('id_rol', resp.id_rol);
      reset();
      useSweetAlert(resp, 'Inicio de sesión exitoso.', 'success').then(() => {
        const lastLocation = localStorage.getItem('lastPath') || '/auth/home';
        navigate(lastLocation);
      });
    } else {
      useSweetAlert(resp, null, 'error');
    }
  };

  const rememberMe = (e) => {
    if (e.target.checked) {
      localStorage.setItem('remember_user_name', form.user_name);
      localStorage.setItem('remember_pass', form.user_password);
    } else {
      localStorage.removeItem('remember_user_name');
      localStorage.removeItem('remember_pass');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleForgotPass = async (e) => {
    e.preventDefault();
    const resp = await fetchFunction('forgotPassword', 'POST', form);

    if (!resp.error) {
      reset();
      useSweetAlert(resp, 'El correo fue enviado correctamente.', 'success');
      localStorage.setItem('changeYourPass', true);
      localStorage.setItem('id_change', resp.id_user);
    } else {
      useSweetAlert(resp, null, 'error');
    }
  };


  return (
    <>
      <Header />
  
      <main className="colorFondo">
        <div className="bg-light p-4 rounded-5">
          <div className="d-flex justify-content-center">
            <img src={userIcon} style={{ height: "6rem" }} alt="User Icon" />
          </div>
  
          <form action="#" onSubmit={handleSubmit}>
            <h1 className="text-center fs-3 fw-bold">Login</h1>
  
            <div className="input-group mt-3">
              <div className="input-group-text bg-primary">
                <img src={user} style={{ height: "1rem" }} alt="User Icon" />
              </div>
              <input
                className="form-control"
                type="text"
                placeholder="Nombre de usuario o correo"
                id="nombreEmail"
                name="user_name"
                value={form.user_name}
                onChange={handleInputChange}
              />
            </div>
  
            <div className="input-group mt-2">
              <div className="input-group">
                <div className="input-group-text bg-primary">
                  <img src={lock} style={{ height: "1rem" }} alt="Lock Icon" />
                </div>
                <input
                  className="form-control"
                  type={boleean.button1 ? "text" : "password"}
                  placeholder="Contraseña"
                  id="contraseña"
                  name="user_password"
                  value={form.user_password}
                  onChange={handleInputChange}
                />
                <button type="button" className="btn btn-outline-primary" onClick={() => handleBoleean("button1")}>
                  <i className={boleean.button1 ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </button>
              </div>
            </div>
  
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <input className="form-check-input" type="checkbox" onChange={rememberMe} />
                <span className="ms-2">Recuérdame</span>
              </div>
            </div>
  
            <div className="mt-3 text-center">
              <button type="submit" className="btn btn-primary text-center">Iniciar sesión</button>
            </div>
          </form>
  
          {/* MODAL */}
          <div className="d-flex justify-content-center py-2">
            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#forgotPass">
              ¿Olvidó su contraseña?
            </button>
          </div>
  
          <div className="modal fade" id="forgotPass" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <form onSubmit={handleForgotPass}>
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Ingrese su correo electrónico</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body d-flex flex-column">
                    <label className="form-label">Correo Electrónico:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" className={boleean.await ? "btn btn-secondary" : "btn btn-primary"}>
                      {boleean.await ? "Espere..." : "Confirmar"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
  
          <div className="mt-3 text-center">
            <div>¿No tienes una cuenta?</div>
            <a href="#" onClick={handleRegisterClick}>Registrarse</a>
          </div>
  
          <div className="border-bottom text-center">
            <span className="bg-light">o</span>
          </div>
  
          {/* Google Login Button */}
          <GoogleLogin
            clientId={clientID}
            buttonText="Continuar con Google"
            onSuccess={responseGoogle}
            onFailure={(error) => console.error('Error al iniciar sesión con Google:', error)}
            cookiePolicy={'single_host_origin'}
            className="google-login-button"
          />
        </div>
        </main>

<Footer />
</>
);
}

// Exportar el componente Login como default al final del archivo
export default Login;