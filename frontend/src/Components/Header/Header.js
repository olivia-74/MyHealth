import { BotaoNav, ContainerHeader, Nav } from "./styledHeader"
import logoHeader from "../../Assets/logoVerde.jpg"
import iconeAcFisico from "../../Assets/iconeAFpreto.png"
import iconeAcNutricional from "../../Assets/iconeANpreto.png"
import iconeHome from "../../Assets/logoSimplesPreto.png"
import iconeInformacoes from "../../Assets/iconeInfoPreto.png"
import iconePerfil from "../../Assets/fotoPerfilDefault.png"
import iconeMenu from "../../Assets/iconeMenu.png"
import {Menu, MenuButton, MenuList, MenuItem, MenuDivider, IconButton} from '@chakra-ui/react'
import { useNavigate } from "react-router"


function Header (){

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }


    const goToHome = () => {
        navigate('/home')
    }

    const goToLoading = () => {
        navigate('*')
    }

    const goToAcompanhamentoFisico = () => {
        navigate('acompanhamentofisico')
    }



    return(
        <>
        <ContainerHeader>
            <img src={logoHeader} alt="logo" />
            
                <Nav>
                    <BotaoNav className="icones" onClick={goToHome}><img src={iconeHome} alt="home"/></BotaoNav>
                    <BotaoNav className="icones" onClick={goToAcompanhamentoFisico}><img src={iconeAcFisico} alt="acompanhamento fisico"/></BotaoNav>
                    <BotaoNav className="icones" onClick={goToLoading}><img src={iconeAcNutricional} alt="acompanhamento nutricional"/></BotaoNav>
                    <BotaoNav className="icones" onClick={goToLoading}><img src={iconeInformacoes} alt="informacoes"/></BotaoNav>
                    <BotaoNav className="perfil" onClick={goToLoading}><img src={iconePerfil} alt="perfil"/></BotaoNav>

                    <Menu> 
                        <BotaoNav><MenuButton aria-label='Options'as={IconButton} colorScheme='transparent' icon={<img src={iconeMenu} alt="menu"/>}/></BotaoNav>
                        <MenuList>
                            <MenuItem onClick={goToHome}> Acessar Home </MenuItem>
                            <MenuItem onClick={goToAcompanhamentoFisico}> Acessar acompanhamento fisico </MenuItem>
                            <MenuItem onClick={goToLoading}> Acessar acompanhamento nutricional </MenuItem> 
                            <MenuItem onClick={goToLoading}> Acessar suas informacoes </MenuItem> 
                            <MenuItem onClick={goToLoading}> Acessar seu perfil </MenuItem> 
                            <MenuDivider/>
                            <MenuItem onClick={goToLoading}> Minha conta </MenuItem>
                            <MenuItem onClick={handleLogout}> Sair</MenuItem>
                        </MenuList>
                    </Menu>
                </Nav>
        </ContainerHeader>
        </>
    )
}

export default Header