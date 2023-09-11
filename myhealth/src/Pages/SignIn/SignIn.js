import { Card, Imagem, BotaoEntrar, Footer, Header} from "./styledSignIn";
import logoHeader from "../../Assets/logoVerde.jpg"
import imagem from "../../Assets/imgSignin.jpg"
import logoFooter from "../../Assets/logoSimplesBranco.png"
import { useNavigate } from "react-router";
import React from 'react';



function SignIn (){

    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/home')
    }

    
    return(
        <>
        <Header>
            <img src={logoHeader} alt="logo My Health"/>
        </Header>
        <Imagem src={imagem} alt="ilustracao de uma pessoa com pesos de academia"/>
      
        <Card>
            <h1>Cadastro</h1>
            <label>Insira seu nome completo</label>
            <input placeholder="" className="SignIn" required></input>
            <label>Insira seu e-mail</label>
            <input placeholder="" className="SignIn" required></input>
            <label>Defina uma senha</label>
            <input placeholder="" className="SignIn" type="password" required></input>

            <BotaoEntrar className="SignIn" onClick={goToHome}>Cadastrar-se</BotaoEntrar>
        </Card>
        <Footer>
            <img src={logoFooter}/>
        </Footer>
        </>
    )
}
export default SignIn;