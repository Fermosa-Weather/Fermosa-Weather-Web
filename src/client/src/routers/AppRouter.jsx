import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from "../pages/Login"
import Error404 from '../pages/Error404';
import MasInfo from '../pages/Mas-info';
import { Register } from '../pages/Register';
import { Index } from '../pages/Index';
import { PrivateRoutes } from './PrivateRoutes';
import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { MainRoutes } from './MainRoutes';
import { OtherProfile } from '../pages/OtherProfile';

export const AppRoutes = () => {

    const { login, logout, authState } = useContext(AuthContext)

    useEffect(() => {

        const token = localStorage.getItem('token');
        const user_name = localStorage.getItem('user_name');
        const id_user = localStorage.getItem('id_user');
        const id_rol = localStorage.getItem('id_rol');

        const user = {
            token,
            user_name,
            id_user,
            id_rol
        }

        if (user.token && user.user_name && user.id_user) {
            login(user)
            return;
        } else {
            logout()
            localStorage.removeItem('token');
            localStorage.removeItem('user_name');
            localStorage.removeItem('id_user');
            localStorage.removeItem('id_rol');
            return;
        }
    }, [authState.logged])

    return (
        <BrowserRouter>
            {/*RUTAS PUBLICAS*/}
            <Routes>
                <Route path='*' element={<Error404 />} />
                
                <Route path='/Login' element={<Login />} />
                <Route path='/Mas-info' element={<MasInfo />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/index' element={<Index />} />
                <Route path='/Profile/:id_user' element={<OtherProfile />} />

                {/*RUTAS PRIVADAS*/}

                <Route path='auth/*' element={
                    <PrivateRoutes>
                        <MainRoutes />
                    </PrivateRoutes>
                } />

            </Routes>
        </BrowserRouter>
    )
}