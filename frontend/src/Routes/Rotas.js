import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from "../Pages/LandingPage/LandingPage"
import LogIn from "../Pages/LogIn/LogIn"
import SignIn from "../Pages/SignIn/SignIn"
import Home from "../Pages/Home/Home"
import Error from "../Pages/Error/Error"
import AcFisico from "../Pages/AcompanhamentoFisico/AcFisico"
import AcNutricional from '../Pages/AcompanhamentoNutricional/AcNutricional'
import Informacoes from '../Pages/Informacoes/Informacoes'
import Perfil from '../Pages/Perfil/Perfil'

function Rotas(){
    return(
        <>
        {/* <BrowserRouter>
                <Route component = { LandingPage }  path="/" exact />
                <Route component = { LogIn }  path="/LogIn" />
                <Route component = { SignIn }  path="/SignIn" />
                <Route component = { Home }  path="/Home" />
                <Route component = { Error }  path="*" />
        </BrowserRouter> */}

        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage/>}/>
                <Route path="login" element={<LogIn/>}/>
                <Route path="signin" element={<SignIn/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="acompanhamentofisico" element={<AcFisico/>}/>
                <Route path="acompanhamentonutriconal" element={<AcNutricional/>}/>
                <Route path="informacoes" element={<Informacoes/>}/>
                <Route path="perfil" element={<Perfil/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
       </BrowserRouter>
        </>
    )
}

export default Rotas