import { useState, useEffect } from "react";
import '../Style.css'
import Footer from "../components/Footer.component";
import Header from "../components/Header.component";
import { Users } from "../components/Users.component";
import { Posteos } from "../components/Posteos.component";
import { useNavigate } from "react-router-dom";
import { Selects } from "../components/Selects.component";
import { fetchFunction } from "../api/apiFetch"
import { useForm } from "../hooks/useForms";

function Inicio() {

    const id_rol = localStorage.getItem("id_rol");

    const navigate = useNavigate();

    const { form, handleInputChange } = useForm({
        id_rubro: 0,
        id_local: 0,
        fecha_nacimiento: null,
        is_emprise_post: 0
    })

    const handleNewPost = () => {
        navigate("/auth/new-post")
    }

    //Cargar posteos
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const resultado = fetchFunction("findAllPosts", "GET")
            .then((resultado) => {
                setPosts(resultado);
            });
    }, []);

    const handleRubroFilter = (e) => {
        e.preventDefault()
        const resultado = fetchFunction("findFilteredPost", "POST", form)
            .then((resultado) => {
                if (!resultado.message) {
                    setPosts(resultado);
                } else {
                    setPosts([]);
                }
            })
    }

    const handleQuitFilter = () => {
        window.location.reload();
    }

    return (
        <>
            <Header />

            <div className="container-fluid colorFondo">
                <article className="row">
                    <section>
                        <div className="row py-3 colorPrincipal border border-2">
                            <form action="#" onSubmit={handleRubroFilter} className="d-flex col-8">
                                <div className="col-2">

                                    <Selects
                                        label={null}
                                        placeholder={"Filtrar Rubros"}
                                        position={"id_rubro"}
                                        itemName={"desc_rubro"}
                                        name={"id_rubro"}
                                        url={'findRubro'}
                                        value={form[name]}
                                        onChange={handleInputChange}
                                        required={true}
                                    />
                                </div>

                                <div className="col-2">
                                    <select onChange={handleInputChange}
                                        value={form[name]} name="fecha_nacimiento" className="form-select" aria-label="Default select example">
                                        <option value="0" >Filtro Edades</option>
                                        <option value="1">17-25</option>
                                        <option value="2">25-35</option>
                                        <option value="3">35-45</option>
                                        <option value="4">+45</option>

                                    </select>
                                </div>

                                <div className="col-2">
                                    <Selects
                                        label={null}
                                        placeholder={"Filtrar localidad"}
                                        position={"id_local"}
                                        itemName={"nombre_local"}
                                        name={"id_local"}
                                        url={'findLocal'}
                                        value={form[name]}
                                        onChange={handleInputChange}
                                        required={true}
                                    />
                                </div>

                                <div className="col-2">
                                    <select onChange={handleInputChange}
                                        value={form[name]} name="is_emprise_post" className="form-select" aria-label="Default select example">
                                        <option value="0" >Filtro Roles</option>
                                        <option value="1">Postulantes</option>
                                        <option value="2">Empleadores</option>
                                    </select>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <div className="mx-1">
                                        <button className="btn btn-primary"
                                            disabled={form.id_rubro == 0 && form.id_local == 0 && form.is_emprise_post == 0 && form.fecha_nacimiento == null ? true : false}
                                            type="submit">Filtrar</button>
                                    </div>

                                    {
                                        <div className="mx-1">
                                            <button className="btn btn-danger" onClick={handleQuitFilter}
                                                disabled={form.id_rubro == 0 && form.is_emprise_post == 0 && form.id_local == 0 && form.fecha_nacimiento == null ? true : false}
                                            >Quitar Filtrar</button>
                                        </div>
                                    }
                                </div>
                            </form>

                            {id_rol != 3 &&
                                <div className="col-4 text-end">
                                    <button className="btn btn-primary" onClick={handleNewPost}>Nuevo posteo</button>
                                </div>}


                        </div>
                    </section >

                    <div className="row">

                    </div>
                    <section className="col-8">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Nuevas Publicaciones</h6>

                            <span className="d-block text-bold text-warning">{posts.length == 0 ? "No hay publicaciones aún" || "No hay publicaciones que coincidan con el filtro"
                                : ""}</span>

                            <Posteos
                                posts={posts}
                            />


                            <small className="d-block text-end mt-3">
                                <a href="#" onClick={window.location.reload}>Todas las novedades</a>
                            </small>
                        </div>
                    </section>

                    <section className="col-4">
                        <div className="my-3 p-3 bg-body rounded shadow-sm">
                            <h6 className="border-bottom pb-2 mb-0">Usuarios Sugeridos</h6>

                            <Users />

                            <small className="d-block text-end mt-3">
                                <a href="#">Ver todas los usuarios</a>
                            </small>
                        </div>

                    </section>

                </article >
            </div >

            <Footer />
        </>
    )
}

export default Inicio