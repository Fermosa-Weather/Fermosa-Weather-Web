import { Routes, Route } from "react-router-dom"
import { Profile } from "../pages/Profile"
import Messages from "../pages/Messages"
import Inicio from "../pages/Inicio"
import { UpdateInfo } from "../pages/UpdateInfo"
import { UpdateUser } from "../pages/UpdateUser"
import { NewPost } from "../pages/NewPost"
import { UpdateDescription } from "../pages/UpdateDescription"

export const MainRoutes = () => {

    return (
        <>
            <Routes>
                <Route path='/new-post' element={<NewPost />} />
                <Route path='/update-user' element={< UpdateUser />} />
                <Route path='/register-info' element={<UpdateInfo />} />
                <Route path='/home' element={<Inicio />} />
                <Route path='/my-profile' element={<Profile />} />
                <Route path='/update-description' element={<UpdateDescription />} />
                <Route path='/messages' element={<Messages />} />
            </Routes>
        </>
    )
}
