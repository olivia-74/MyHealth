import { Imagem, HeaderLanding, LogoHeader, BotaoHeader, BotaoLanding, H2, ConteudoDiv, Div, ContainerCarrossel, FooterLanding, LogoFooter, ConteudoFooter, LinkColorido, ContainerCard, ContainerImagem} from "./styledLandingPage";
import imagemFundo from "../../Assets/imgLandingPage.jpg";
import logoHeader from "../../Assets/logoVerde.jpg";
import logoFooter from "../../Assets/logoPreto.png";
import {BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'
import Metas from "../../Assets/iconeMetas.png"
import Evolucao from "../../Assets/iconeEvolucao.png"
import Profissionais from "../../Assets/iconeConversa.png"
import AN from "../../Assets/iconeNutricao.png"
import AF from "../../Assets/iconeAcompanhamentoFisico.png"
import Informacoes from "../../Assets/iconeInformacoesMedicas.png"
import { useNavigate } from "react-router";



import { useState } from "react";


function LandingPage(){
    const [Card, setCard] = useState(false);
    const [cardObjeto, setCardObjeto] = useState([
        {texto: 'oi',
        url_img: {Metas}}
    ])

    const dropDown = event => {
        setCard(true);
        console.log('vai ter uma imagem ai')
    };

    // const novoArray = cardObjeto.map(item =>{
    //     return(
    //         <>
    //         {Card && <ContainerCard>
    //             <p>{item.texto}</p>
    //             <img src={item.url_img}
    //             />
    //         </ContainerCard> }
            
    //         </>
    //     )
    // })

    const navigate = useNavigate()
    const goToLogIn = () => {
        navigate('LogIn')
    }
    


    return(
        <>
        <HeaderLanding>
            <LogoHeader src={logoHeader}/>
            <BotaoHeader onClick={goToLogIn}>Entrar</BotaoHeader>
        </HeaderLanding>

        <Div>
            <Imagem src={imagemFundo}/>
            <BotaoLanding>Entrar</BotaoLanding>
        </Div>

        <Div className="Segunda">
            <H2>Você sabe como alcançar seus objetivos de forma</H2>
            <H2> <u>segura</u> e <u>eficaz</u> ?</H2>
            <ConteudoDiv className="Texto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </ConteudoDiv>
        </Div>

        <Div className="Terceira">
            <H2>Tudo em uma única plataforma</H2>
            <ContainerCarrossel>
                <ContainerImagem onClick={dropDown}>
                    <img src={Metas} alt="defina metas"/>
                </ContainerImagem>
                <ContainerImagem onClick={dropDown}>
                    <img src={Evolucao} alt="perceba sua evolucao"/>
                </ContainerImagem>
                <ContainerImagem onClick={dropDown}>
                    <img src={Profissionais} alt=""/>
                </ContainerImagem>
                <ContainerImagem onClick={dropDown}>
                    <img src={AN} alt=""/>
                </ContainerImagem>
                <ContainerImagem onClick={dropDown}>
                    <img src={AF} alt=""/>
                </ContainerImagem>
                <ContainerImagem onClick={dropDown}>
                    <img src={Informacoes} alt=""/>
                </ContainerImagem>
                {/* {novoArray} */}
                
            </ContainerCarrossel>
        </Div>

        <FooterLanding>
            <LogoFooter src={logoFooter}/>
            <ConteudoFooter className="TextoEsquerda"> 
                Um projeto desenvolvido por Olivia Dresch
            </ConteudoFooter> 
            <ConteudoFooter className="ContainerIcones"> 
                <a href="https://www.instagram.com/oliviaxdresch/"><BsInstagram size={45}/></a>
                <a href="https://github.com/olivia-74"><BsGithub size={45}/></a>
                <a href="https://www.linkedin.com/in/oliviadresch-10703922a"><BsLinkedin size={45}/></a>
            </ConteudoFooter>
            <ConteudoFooter className="TextoDireita">
            <p>‎ ‎ ‎ ‎ Acesse o trabalho "CONDICIONAMENTO FÍSICO E ACOMPANHAMENTO PERSONALIZADO: Desenvolvimento de um sistema Web de acompanhamento físico e nutricional para academias" ‎<LinkColorido href="colocar link do trabalho final"> clicando aqui </LinkColorido>!</p> 
            </ConteudoFooter>

        </FooterLanding>

        </>
    )
}

export default LandingPage