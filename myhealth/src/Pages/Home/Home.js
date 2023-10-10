import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { SecoesHome, ContainerButton, MensagemDefault, DiarioNutricional, ContainerHome, Conteudo } from "./styledHome"
import iconeAcFisico from "../../Assets/iconeAFpreto.png"
import Compartilhar from "../../Components/BotaoCompartilhar/Compartilhar"
import iconeAcNutricional from "../../Assets/iconeANpreto.png"
import iconeInformacoes from "../../Assets/iconeInfoPreto.png"
import { useNavigate } from "react-router"


function Home(){

    const navigate = useNavigate()
    const goToAcFisico = () => {
        navigate('/acompanhamentofisico')
    }


    return(
       <>
        <Header/>

        <ContainerButton>
            <button className="icone" onClick={goToAcFisico}> <img src={iconeAcFisico} alt="acompanhamento fisico"/></button>
            <button className="compartilhar"><Compartilhar/></button>
        </ContainerButton> 
        <SecoesHome>
            <MensagemDefault>
                <h3>SEM TREINOS REGISTRADOS: compartilhe essa secao com seu treinador ou insira sua rotina de treinos voce mesmo</h3>
                <button> 
                    <div/>
                    <p>Criar novo treino</p> 
                </button>
            </MensagemDefault>
        </SecoesHome>  

        <ContainerButton>
            <button className="icone" > <img src={iconeAcNutricional} alt="acompanhamento nutricional"/></button>
            <button className="compartilhar"><Compartilhar/></button>
        </ContainerButton>    
        <SecoesHome>
        </SecoesHome>  

        <ContainerButton>
            <button className="icone"> <img src={iconeInformacoes} alt="minhas informacoes"/></button>
            <button className="compartilhar"><Compartilhar/></button>
        </ContainerButton>    
        <SecoesHome>
        </SecoesHome>  
            
        
        <Footer/>
       </>
    )
}

export default Home
