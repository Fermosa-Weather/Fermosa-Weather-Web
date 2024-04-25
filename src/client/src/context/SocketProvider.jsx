import { createContext, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { ChatContext } from "./ChatProvider";
import { useSocket } from "../hooks/useSocket";
import { types } from "../types/type";

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {

    const { authState } = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)

    const {
        socket,
        online,
        conectarSocket,
        desconectarSocket,
    } = useSocket('http://localhost:5000')

    //EFECTO CONEXION DE SOCKET SI ESTA LOGGED
    useEffect(() => {
        if (authState.logged) {
            conectarSocket()
        }
    }, [authState.logged, conectarSocket])

    //EFECTO DESCONEXION DE SOCKET SI NO ESTA LOGGED
    useEffect(() => {
        if (!authState.logged) {
            desconectarSocket()
        }
    }, [authState.logged, desconectarSocket])

    //MOSTRAR LISTA DE USUARIOS ACTIVOS
    useEffect(() => {
        socket?.on('active-users', listarUsuarios => {

            dispatch({
                type: types.ACTIVE_USERS,
                payload: listarUsuarios
            })
        })
    })


    return (
        <>
            <SocketContext.Provider value={{ socket, online }}>
                {children}
            </SocketContext.Provider>
        </>
    )
};