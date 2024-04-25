import dayjs from "dayjs";
import { fetchFunction } from "../api/apiFetch";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Manufactura from "../assets/Manufactura.png";
import Educacion2 from "../assets/Educacion2.png";
import Ventas from "../assets/Ventas.png";
import otro_rubro from "../assets/otro_rubro.png";
import Alimenticio from "../assets/Alimenticio.png";
import tecnologia from "../assets/tecnologia.png";
import Salud from "../assets/Salud.png";
import Administracion from "../assets/Administracion.png";
import Construccion from "../assets/Construccion.png";
import Reparaciones from "../assets/Reparaciones.png";
import Finanzas from "../assets/Finanzas.png";

export const Posteos = ({ selectedLocal, selectedRubro }) => {

    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);

    const handleProfile = (id_user) => {
        navigate(`/profile/${id_user}`);
    };

    useEffect(() => {
        const resultado = fetchFunction("findAllPosts", "GET")
            .then((resultado) => {
                setPosts(resultado);
            });
    }, []);

    console.log("posts", posts);

    const postMatchesFilters = () => {
        return posts.filter((post) => {

            const rubroMatch = selectedRubro == undefined || post?.id_rubro == selectedRubro;
            const localidadMatch = selectedLocal == 0 || post?.user_info?.localidad?.id_local == selectedLocal;

            // Si ambos son 0, mostrar todos los posteos
            if (selectedRubro == undefined && selectedLocal == 0) {
                return true;
            }

            // Si solo el rubro es 0, filtrar por localidad
            if (selectedRubro == undefined) {
                return localidadMatch;
            }

            // Si solo la localidad es 0, filtrar por rubro
            if (selectedLocal == undefined) {
                return rubroMatch;
            }

            // Si ambos son diferentes de 0, filtrar por ambos
            return rubroMatch && localidadMatch; 
        });
    };

    const filteredPosts = postMatchesFilters();

    return (
        <>
            {filteredPosts.map((post, id_post) => (
                <div key={id_post} className="text-muted pt-3 mx-5">
                    <p className="pb-3 mb-0 small lh-sm border-bottom ">
                        <div className="d-flex">
                            <div>
                                <a href="#" className="text-decoration-none">
                                    <strong className="d-block"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleProfile(post.User.id_user);
                                        }}
                                    >{post.User.user_name}</strong>
                                </a>
                                <strong className="d-block text-gray-dark">{post.User.user_email}</strong>
                                <strong className="d-block text-gray-dark">{post.post_title}</strong>
                                {post.post_content}
                            </div>
                            <div>
                                {
                                    (() => {
                                        switch (post.id_rubro) {
                                            case 1:
                                                return <img src={Salud} width="50" height="50" className="mx-3" />;
                                            case 2:
                                                return <img src={tecnologia} width="50" height="50" className="mx-3" />;
                                            case 3:
                                                return <img src={Reparaciones} width="50" height="50" className="mx-3" />;
                                            case 4:
                                                return <img src={Finanzas} width="50" height="50" className="mx-3" />;
                                            case 5:
                                                return <img src={Manufactura} width="50" height="50" className="mx-3" />;
                                            case 6:
                                                return <img src={Ventas} width="50" height="50" className="mx-3" />;
                                            case 7:
                                                return <img src={Administracion} width="50" height="50" className="mx-3" />;
                                            case 8:
                                                return <img src={Alimenticio} width="50" height="50" className="mx-3" />;
                                            case 9:
                                                return <img src={Construccion} width="50" height="50" className="mx-3" />;
                                            case 10:
                                                return <img src={Educacion2} width="50" height="50" className="mx-3" />;
                                            default:
                                                return <img src={otro_rubro} width="50" height="50" className="mx-3" />;
                                        }
                                    })()
                                }
                            </div>
                        </div>
                        {
                            post.url == "/uploads/null" ? (
                                ""
                            ) : (
                                <img className="img-fluid border rounded border-2 border-primary" src={`http://localhost:5000${post.url}`} crossOrigin="anonymous" height="200" width="300" alt="Img" />
                            )
                        }
                        <br />

                        <span>Rubro: {post?.rubro?.desc_rubro}</span><br />
                        <span>Fecha: {dayjs(post.updatedAt).format('DD/MM/YYYY hh:mm')}</span><br />
                        <span>Localidad: {post?.user_info?.localidad?.nombre_local}</span>
                    </p>
                </div>


            ))}
        </>
    )
}
