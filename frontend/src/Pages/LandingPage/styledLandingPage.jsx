import "@fontsource/clear-sans";
import styled from "styled-components";

export const PrimeiraDiv = styled.div`
   display: block;
   font-family: "Clear Sans";
`

export const Div = styled.div`
    display: block;
    font-family: "Clear Sans";
    width: 100%;
    padding: 50px;
    justify-content: center;

    &.Segunda {
        background-color: #A6D6C3;
    }

    &.Terceira {
        background-color: #C3DCD2;
        padding: 50px 0px 50px 0px
    }
`
export const ConteudoDiv = styled.div`
    margin: 30px 10px 10px 10px;
    width: 100%;

    &.Texto{
        color: white;
        text-align: justify;
        font-size: 25px;
        padding: 3vh 6vw 0vh 6vw;
        background-color: transparent;
    }

    &.ContainerCarrossel{
        width: 100%;
        height: fit-content;
        padding-left: 4vw;
        background-color: #D6E5E0;
        margin-top: 40px;
        display: flex;
    }
`

export const Imagem = styled.img`
    width: 100%;
`
export const HeaderLanding = styled.header`
    background-color: #A6D6C3;
    height: 6vh;
    padding: 0.2vh 5vw 0.2vh 5vw;
    justify-content: space-between;
    display:flex;
`
export const LogoHeader = styled.img`
    height: 100%;
`
export const BotaoHeader = styled.button`
    border-radius: 20px;
    color: white;
    font-weight: 300;
    font-size: 20px;
    align-self: center;

    &:hover  {
      font-size: 20px;
      font-weight: bolder;
    }
`

export const BotaoLanding = styled.button`
    background: white;
    color: #A6D6C3;
    border: 6px solid;
    border-radius: 30px;
    padding: 7px 30px 7px 30px;
    margin-left: 42vw;
    font-size:20px;
    font-weight: bold;
    
    &:hover{
    background-color: #A6D6C3;
    color: white;
    border-color: #A6D6C3;
}
`

export const H2 = styled.h2`
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1px;
    background-color: transparent;

    u{
        background-color: transparent;
    }
`

export const ContainerCarrossel = styled.div`
    height: 200px;
    padding: 0vw 4vw 0vw 4vw;
    background-color: #D6E5E0;
    margin-top: 40px;
    display: flex;
    justify-content: center; 
    align-items: center;
`

export const ContainerImagem = styled.button`
    height: inherit;
    width: 120px;
    background-color: #e6efec;
    margin: 0vh 2vw 0vh 2vw;
    display: flex;
    justify-content: space-around;
`

export const FooterLanding = styled.footer`
    background-color: white;
    padding: 20px;
    display: flexbox;
    justify-content: space-between;
`
export const LogoFooter = styled.img`
    justify-self: left;
    margin: 2vh;
    height: 30vh;
`

export const ContainerCard = styled.div`
    display: inline-block;
    justify-content: center;
    align-content: center;
    margin-left: 25%;
    padding: 5vw;
    margin-top: 5vh;
    width: 50vw;
    background-color: #ffffff;

    &.Metas{
        
    }

`

export const ConteudoFooter = styled.div`
    color: #000000;
    text-align: justify;
    font-family: "Clear Sans";
    display: flex;
    
    
    &.TextoEsquerda{
        margin-left: 5vw;
        font-size: 22px;
        width: 20vw;
        flex-wrap: wrap;
        letter-spacing: 1.5px;
        margin-bottom: 4.5vh;
        font-weight: bold;
    }

    &.ContainerIcones{
        margin-left: 5vw;
        display: flex;
        justify-content: space-between;
        width: 13vw;
    }

    &.TextoDireita{
        margin-right: 5vw;
        margin-top: -10vw;
        justify-self: left;
        float: right;
        width: 30vw;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 1px;
    }
`
export const LinkColorido = styled.a`
    color: #A6D6C3;

    &:hover{
        text-decoration: underline;
    }
`
