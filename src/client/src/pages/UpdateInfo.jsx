import Header from '../components/Header.component'
import Footer from '../components/Footer.component'
import { useForm } from '../hooks/useForms'
import { Selects } from "../components/Selects.component"
import { useNavigate } from "react-router-dom"
import { fetchFunction } from '../api/apiFetch'
import { useEffect, useState } from 'react'

export const UpdateInfo = () => {

    const [errors, setErros] = useState("")

    const id_user = localStorage.getItem("id_user")

    const data = {
        id_user
    }

    const navigate = useNavigate()

    const handleCancel = () => {
        navigate("/auth/my-profile")
    }

    const [info, setInfo] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            const resultado = await fetchFunction("findUserInfo", "POST", data);
            console.log("resultado", resultado);
            setInfo(resultado);
        };

        obtenerDatos();
    }, []);

    console.log("info", info?.nombre);

    const { form, handleInputChange } = useForm({
        id_user: id_user,
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetchFunction("updateUserInfo", "PUT", form)

        console.log("response", response);

        if (response.message) {
            Swal.fire({
                title: response.message,
                text: "Espere un momento...",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            })

            setTimeout(() => {
                navigate("/auth/my-profile")
            }, 2000)
        } else {
            Swal.fire({
                title: "No se a podido actualizar la información.",
                text: response.errors.array,
                icon: "error",
                showConfirmButton: true,
                confirmButtonText: "Aceptar"
            })

            setErros(response.errors.object)
        }
    }

    return (
        <>
            <Header />

            <main className="p-4 d-flex justify-content-center align-items-center colorFondo">

                <form action="#" name="formulario" onSubmit={handleSubmit}>

                    <div id="carouselExampleDark" className="carousel carousel-dark slide">

                        <div className="carousel-inner rounded-5 py-3">

                            <div className="carousel-item active">

                                <div className="bg-light rounded p-3 row g-4 d-flex align-items-center text-center"
                                    style={{ width: "40rem", border: "1px", solid: "#000" }}>

                                    { /*PAGINA 2 INFO PERSONAL*/}

                                    <h3 className="text-center fw-bold">Información de usuario</h3>

                                    <div>

                                        { /*ingrese su nombre*/}
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese su nombre</label>
                                                <input id="nombre" type="text" className="form-control" placeholder={info?.nombre ? info?.nombre : "John"}
                                                    name="nombre"
                                                    onChange={handleInputChange} value={form[name]}
                                                />
                                                <span className="text-danger fw-bold">{errors?.nombre?.msg}</span>
                                            </div>

                                            {/*ingrese su apellido */}
                                            <div className="col-md-6 px-1 ">
                                                <label className="form-label">Ingrese su apellido</label>
                                                <input id="apellido" type="text" className="form-control" placeholder={info?.apellido ? info?.apellido : "Doe"}
                                                    name="apellido"
                                                    onChange={handleInputChange} value={form[name]}
                                                />
                                                <span className="text-danger fw-bold">{errors?.apellido?.msg}</span>
                                            </div>
                                        </div>
                                        {/*dni*/}
                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese su DNI</label>
                                                <input type="number" className="form-control" id="dni"
                                                    placeholder={info?.dni ? info?.dni : "00-000-000"} name="dni"
                                                    onChange={handleInputChange} value={form[name]}
                                                />
                                                <span className="text-danger fw-bold" >{errors?.dni?.msg}</span>
                                            </div>
                                            {/*cuil*/}
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Ingrese su CUIL</label>
                                                <input id="cuil" type="number" className="form-control"
                                                    placeholder={info?.cuil ? info?.cuil : "00-00-000-000-0"} name="cuil"
                                                    onChange={handleInputChange} value={form[name]}
                                                />
                                                <span className="text-danger fw-bold">{errors?.cuil?.msg}</span>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Fecha de nacimiento</label>
                                                <input type="date" className="form-control" name="fecha_nacimiento"
                                                    onChange={handleInputChange} value={form[name]}

                                                />
                                                <span className="text-danger fw-bold">{errors?.fecha_nacimiento?.msg}</span>

                                            </div>

                                            <div className="col-md-6 px-1">
                                                <label className="form-label">Genero</label>
                                                <select type="text" className="form-control" aria-label="Default select example"
                                                    name="id_genero" onChange={handleInputChange} value={form[name]}
                                                >
                                                    <option selected disabled>{info?.genero?.genero ? info?.genero?.genero : "Sexo"}</option>
                                                    <option value="1">Masculino</option>
                                                    <option value="2">Femenino</option>
                                                    <option value="3">Sin especificar</option>
                                                </select>
                                                <span className="text-danger fw-bold">{errors?.id_genero?.msg}</span>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center">

                                            <Selects
                                                label={"Nacionalidad"}
                                                placeholder={info?.paise?.nombre_pais ? info?.paise?.nombre_pais : "Paises"}
                                                position={"id_pais"}
                                                itemName={"nombre_pais"}
                                                name={"id_pais"}
                                                url={'findPaises'}
                                                value={form[name]}
                                                onChange={handleInputChange}
                                                required={false}
                                            />
                                            <span className="text-danger fw-bold">{errors?.id_pais?.msg}</span>


                                            {form.id_pais == 1 && (

                                                <Selects
                                                    label={"Provincia."}
                                                    placeholder={info?.provincum?.nombre_provincia ? info?.provincum?.nombre_provincia : "Provincias."}
                                                    position={"id_provincia"}
                                                    itemName={"nombre_provincia"}
                                                    url={'findProvinces'}
                                                    name={"id_provincia"}
                                                    value={form[name]}
                                                    onChange={handleInputChange}
                                                    required={false}
                                                />
                                            )}

                                        </div>
                                        <span className="text-danger fw-bold">{errors?.id_provincia?.msg}</span>

                                        {form.id_pais == 11 && (
                                            <div className="col-md-12">
                                                <label className="form-label">Ingrese su pais de procedencia</label>
                                                <input type="text" name="otro_pais" className="form-control"
                                                    placeholder="Nombre del Pais"
                                                    value={form[name]}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="text-danger fw-bold">{errors?.otro_pais?.msg}</span>
                                            </div>)}

                                        <div className="d-flex flex-wrap justify-content-center">

                                            <Selects
                                                label={"Departamento en el que se encuentre."}
                                                placeholder={info?.departamento?.nombre_depar ? info?.departamento?.nombre_depar : "Departamentos."}
                                                position={"id_depar"}
                                                name={"id_depar"}
                                                itemName={"nombre_depar"}
                                                url={'findDepar'}
                                                value={form[name]}
                                                onChange={handleInputChange}
                                                required={false}
                                            />

                                            <span className="text-danger fw-bold">{errors?.id_depar?.msg}</span>


                                            <Selects
                                                label={"Localidad en la que se encuentre."}
                                                placeholder={info?.localidad?.nombre_local ? info?.localidad?.nombre_local : "Localidades."}
                                                position={"id_local"}
                                                name={"id_local"}
                                                itemName={"nombre_local"}
                                                url={'findLocal'}
                                                value={form[name]}
                                                onChange={handleInputChange}
                                                required={false}
                                            />
                                            <span className="text-danger fw-bold">{errors?.id_local?.msg}</span>

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
