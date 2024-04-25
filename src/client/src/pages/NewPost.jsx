import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header.component"
import Footer from "../components/Footer.component"
import logo from "../assets/logo.png";
import "../Style.css";
import { fetchFileFunction } from "../api/apiFetchFiles"
import { useSweetAlert } from "../hooks/useSweetAlert"

export const NewPost = () => {
    const navigate = useNavigate()

    const id_user = localStorage.getItem("id_user")
    const id_rol = localStorage.getItem("id_rol")

    const [file, setFile] = useState({
        id_user: id_user,
        id_rol: id_rol
    });

    const handleFileInput = (e) => {
        setFile(file => ({ ...file, url: e.target.files[0] }));
    }

    const handleInputChange = (e) => {
        setFile(file => ({ ...file, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const resp = await fetchFileFunction("createPost", file)
        console.log(resp);

        if (!resp.error) {
            useSweetAlert(resp, "Post creado correctamente", "success")
                .then(() => {
                    return navigate("/auth/home")
                })

        } else {
            useSweetAlert(resp, null, "error")
        }
    }

    return (
        <>
            <Header />

            <main className="py-5 colorFondo" >
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="bg-light p-3 rounded-5" style={{ border: "1px", solid: "#000" }}>
                            { /*Contenido del contenedor */}
                            <div className="d-flex justify-content-center">
                                <img src={logo} alt="login-icon" style={{ height: "5rem" }} />
                            </div>
                            <div className="text-center fs-3 fw-bold">Crear un nuevo post</div>

                            <div className="input-group mt-1">
                                <h3>Titulo:</h3>
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Titulo del post" name="post_title" onChange={handleInputChange}
                                        required />
                                </div>
                            </div>

                            <div className="input-group mt-1">
                                <h3>Contenido:</h3>
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Contenido del post"
                                        name="post_content" onChange={handleInputChange} required />
                                </div>
                            </div>

                            <div className="input-group mt-1">
                                <h6>Archivos: (opcional) </h6>
                                <div className="input-group">
                                    <input className="form-control" type="file" placeholder="Contenido del post"
                                        name="url" onChange={handleFileInput} />
                                </div>
                            </div>

                            <div className="pt-3 text-center">
                                <button type="submit" className="btn btn-primary text-center">Subir</button>
                            </div>

                        </div>
                    </div>
                </form>
            </main>

            <Footer />
        </>
    )
}