import { BotaoCadastro, Card, Header, Imagem, Footer, CorFundo } from "./styledLogIn";
import logoHeader from "../../Assets/logoVerde.jpg"
import imagem from "../../Assets/imgLogin.jpg"
import logoFooter from "../../Assets/logoSimplesBranco.png"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router";



function LogIn (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

   


    const goToHome = () => {
        navigate('/home')
    }
    const goToSignIn = () => {
        navigate('/signin')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const credentials = {email, password};
        axios.post('http://localhost:8000/login', credentials, {
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            alert(response.data.message)
            saveUserInfoLocalStorage(response.data.token)
            goToHome()
        })
        .catch (error => console.log(error))
    }

    const saveUserInfoLocalStorage = (token) => {
        localStorage.setItem('token', token)
        localStorage.setItem('email, email')
    }

    return(
        <>
        <CorFundo>

        <Header> 
           <img src={logoHeader} alt="logo My Health"/>
        </Header>

        <Imagem src={imagem} alt="ilustracao de pessoas posando com roupa de academia"/>

        <BotaoCadastro onClick={goToSignIn}>Cadastre-se aqui!</BotaoCadastro>

        <Card>
            <form >

                <h1>Entrar</h1>

                <label> E-mail </label>
                <input placeholder="" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <label> Senha </label>
                <input placeholder="" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <button type="submit" onClick={handleSubmit}>Entrar</button>
            </form>
        </Card>

        <Footer>
            <img src={logoFooter}/>
        </Footer>

        </CorFundo>
        </>
    )
}
export default LogIn;