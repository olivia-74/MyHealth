import {BrowserRouter, Route, Routes} from "react-router-dom"
import LandingPage from "../Pages/LandingPage/LandingPage"
import LogIn from "../Pages/LogIn/LogIn"
import SignIn from "../Pages/SignIn/SignIn"
import Home from "../Pages/Home/Home"
import Error from "../Pages/Error/Error"

function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage/>}/>
                <Route path="LogIn" element={<LogIn/>}/>
                <Route path="SignIn" element={<SignIn/>}/>
                <Route path="Home" element={<Home/>}/>
                <Route path="*" element={<Error/>}/>

            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas