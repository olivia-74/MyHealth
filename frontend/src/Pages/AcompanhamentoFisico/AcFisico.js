import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import { Barra, Container } from "./styledAcFisico"
import MensagemDefault from "../../Components/MensagemDefault/MensagemDefault"
import { useNavigate } from "react-router"
import iconeAcFisico from "../../Assets/iconeAFpreto.png"
import Compartilhar from "../../Components/BotaoCompartilhar/Compartilhar"



function AcFisico(){

    const navigate = useNavigate()
    const goToAcFisico = () => {
        navigate('/acompanhamentofisico')
    }

    return(
        <>
        <Header/>

        <Barra>
            <button className="icone" onClick={goToAcFisico}>
                <img src={iconeAcFisico} alt="acompanhamento fisico"/>
                <p>Acompanhamento físico</p>
            </button>
            <button className="compartilhar"> Compartilhar seção </button>
        </Barra>
        <Container>
            
        </Container>
         
        {/* <Container> */}
            {/* <header>
                <button className="icone" onClick={goToAcFisico}> <img src={iconeAcFisico} alt="acompanhamento fisico"/></button>
                <h3> Acompanhamento fisico </h3>  
                <button className="compartilhar"><Compartilhar/></button> */}
            {/* </header> */}
            {/* <div>
                <MensagemDefault/>
            </div> */}

            {/* <div>
                oie
            </div> */}
        {/* </Container> */}
      
        <Footer/>
        </>
    )
}

export default AcFisico