import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { SecoesHome, ContainerButton, MensagemDefault, DiarioNutricional } from "./styledHome"
import iconeAcFisico from "../../Assets/iconeAFpreto.png"
import Compartilhar from "../../Components/BotaoCompartilhar/Compartilhar"
import iconeAcNutricional from "../../Assets/iconeANpreto.png"
import { useNavigate } from "react-router"


function Home(){

   

    return(
       <>
        <Header/>

        <ContainerButton>
            <button className="icone"> <img src={iconeAcFisico} alt="acompanhamento fisico"/></button>
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
            <button className="icone"> <img src={iconeAcNutricional} alt="acompanhamento fisico"/></button>
            <button className="compartilhar"><Compartilhar/></button>
        </ContainerButton>    
        <SecoesHome>
            <h2> diario nutricional</h2>
            <DiarioNutricional>
                
            </DiarioNutricional>
           
        </SecoesHome>  
            
        
        <Footer/>
       </>
    )
}

export default Home
