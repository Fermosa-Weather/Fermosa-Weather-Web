import Header from '../components/Header.component'
import Footer from '../components/Footer.component'
import { useForm } from '../hooks/useForms'
import { useNavigate } from "react-router-dom"
import { fetchFunction } from '../api/apiFetch'
import { useEffect, useState } from 'react'
import { useSweetAlert } from "../hooks/useSweetAlert"
import { fetchFileFunction } from '../api/apiFetchFiles'

export const UpdateDescription = () => {

    const id_user = localStorage.getItem("id_user")
    const [errors, setErros] = useState("")
    const [info, setInfo] = useState(null);
    const { form, handleInputChange } = useForm({
        id_user: id_user,
    })

    const data = {
        id_user: id_user
    }

    const navigate = useNavigate()

    const handleCancel = () => {
        navigate("/auth/my-profile")
    }
    //BUSCAR DATOS ANTERIORES
    useEffect(() => {
        const obtenerDatos = async () => {
            const resultado = await fetchFunction("findDesc", "POST", data);
            setInfo(resultado);
        };
        obtenerDatos();
    }, []);

    // ACTUALIZAR DESCRIPCION
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetchFunction("updateDesc", "PUT", form)

        console.log("response", response);

        if (response.message) {
            useSweetAlert(response, "Descripción actualizada correctamente", "success")
                .then(() => {
                    return navigate("/auth/my-profile")
                })
        } else {
            useSweetAlert(response.errors.array, null, "error")


            setErros(response.errors.object)
        }
    }

    return (
        <>
            <Header />

            <main className="p-4 d-flex justify-content-center align-items-center colorFondo">

                <form action='#' onSubmit={handleSubmit}>

                    <div id="carouselExampleDark" className="carousel carousel-dark slide">

                        <div className="carousel-inner rounded-5 py-3">

                            <div className="carousel-item active">

                                <div className="bg-light rounded p-3 row g-4 d-flex align-items-center text-center"
                                    style={{ width: "40rem", border: "1px", solid: "#000" }}>

                                    <h3 className="text-center fw-bold">Descripción del usuario</h3>

                                    <div>

                                        { /*Descripcion*/}
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese su descripción personal</label>
                                                <input type="text" className="form-control" placeholder={info?.descripcion || "Me describo como..."}
                                                    name="descripcion" value={form[name]}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="text-danger fw-bold">{errors?.descripcion?.msg}</span>
                                            </div>

                                            {/*Estudios */}
                                            <div className="col-md-6 px-1 ">
                                                <label className="form-label">Ingrese sus estudios</label>
                                                <input type="text" className="form-control" placeholder={info?.estudios || "Mi estudios son..."}
                                                    name="estudios"  value={form[name]}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="text-danger fw-bold">{errors?.estudios?.msg}</span>
                                            </div>
                                        </div>
                                        {/*Habilidades*/}
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese sus habilidades</label>
                                                <input type="text" className="form-control"
                                                    placeholder={info?.habilidades || "Mis habilidades son..."} name="habilidades"
                                                    onChange={handleInputChange}  value={form[name]}
                                                />
                                                <span className="text-danger fw-bold" >{errors?.habilidades?.msg}</span>
                                            </div>
                                            {/*Intereses*/}
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese sus intereses</label>
                                                <input type="text" className="form-control"
                                                    placeholder={info?.intereses || "Mis intereses son..."} name="intereses"
                                                    onChange={handleInputChange}  value={form[name]}
                                                />
                                                <span className="text-danger fw-bold">{errors?.intereses?.msg}</span>
                                            </div>
                                        </div>
                                        {/*Experiencias*/}
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese sus expreriencias previas</label>
                                                <input type="text" className="form-control" name="experiencia"
                                                    onChange={handleInputChange}  value={form[name]}
                                                    placeholder={info?.experiencia || 'Mis experiencias previas son...'}

                                                />
                                                <span className="text-danger fw-bold">{errors?.experiencia?.msg}</span>

                                            </div>
                                        </div>

                                        <div className="text-center d-flex justify-content-around py-4">

                                            <button className="btn btn-danger" onClick={handleCancel}>Cancelar <i
                                                className="fas fa-file-alt"></i></button>

                                            <button className="btn btn-primary" type="submit">Actualizar <i
                                                className="fas fa-file-alt"></i></button>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </form>
                
            </main>

            <Footer />
        </>
    )
}
