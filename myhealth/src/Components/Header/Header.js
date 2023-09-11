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
import { useEffect } from "react"


function Header (){

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    useEffect(() => {
        const token =localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    }, [navigate])


    return(
        <>
        <ContainerHeader>
            <img src={logoHeader} alt="logo" />
            
                <Nav>
                    <BotaoNav className="icones"><img src={iconeHome} alt="home"/></BotaoNav>
                    <BotaoNav className="icones"><img src={iconeAcFisico} alt="acompanhamento fisico"/></BotaoNav>
                    <BotaoNav className="icones"><img src={iconeAcNutricional} alt="acompanhamento nutricional"/></BotaoNav>
                    <BotaoNav className="icones"><img src={iconeInformacoes} alt="informacoes"/></BotaoNav>
                    <BotaoNav className="perfil"><img src={iconePerfil} alt="perfil"/></BotaoNav>

                    <Menu> 
                        <BotaoNav><MenuButton aria-label='Options'as={IconButton} colorScheme='transparent' icon={<img src={iconeMenu} alt="menu"/>}/></BotaoNav>
                        <MenuList>
                            <MenuItem> Acessar Home </MenuItem>
                            <MenuItem> Acessar acompanhamento fisico </MenuItem>
                            <MenuItem> Acessar acompanhamento nutricional </MenuItem> 
                            <MenuItem> Acessar suas informacoes </MenuItem> 
                            <MenuItem> Acessar seu perfil </MenuItem> 
                            <MenuDivider/>
                            <MenuItem> Minha conta </MenuItem>
                            <MenuItem onClick={handleLogout}> Sair  </MenuItem>
                        </MenuList>
                    </Menu>
                </Nav>
        </ContainerHeader>
        </>
    )
}

export default Header