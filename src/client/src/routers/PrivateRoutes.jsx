import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {

    const { authState } = useContext(AuthContext);

    const lastLocation = useLocation()

    useEffect(() => {
        localStorage.setItem("lastPath", lastLocation.pathname)
    }, [lastLocation])

    return (authState.logged)
        ? children
        : (<Navigate to={'/login'} />)
}
