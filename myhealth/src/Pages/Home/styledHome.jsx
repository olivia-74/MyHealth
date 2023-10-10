import styled from "styled-components";
import Adicionar from "../../Assets/iconeAdicionar.png"

export const ContainerHome = styled.div`

    background-color: #F5F1F0;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    background-color: #F5F1F0;
    justify-content: space-evenly;
    display: flex;
   

    button{
        display: flex;

        &.icone{
            float: left;
            background-color: #00000020;
            border-radius: 5px;
            height: 38px;
            width: 38px;
            padding: 5px;
            margin-top: 4vh;

            img{
                background-color: transparent;
            }
        }

        &.compartilhar{
            float: right;
            width: 5vw;
        }

    }

    div{
        height: fit-content;
        border-bottom: solid 2px #0000001d;
        border-top: solid 2px #0000001d;
        width: 100%;
        background-color: #00000012;
        margin-top: 0.5vh;
        display: flex;
        align-content: center;
        padding: 2rem; 

        h2{
            font-weight: bold;
            font-size: 30px;
            text-transform: uppercase;
            float: left; 
            background-color: transparent; 
            margin-left: 1vw; 
        }
    }

 
    
`

export const Conteudo = styled.div`
    
    &.MensagemDefault{
        
    }

    &.AcompanhamentoFisico{

    }

    &.AcompanhamentoNutricional{
        
    }
`


export const SecoesHome = styled.div`
    height: fit-content;
    border-bottom: solid 2px #0000001d;
    border-top: solid 2px #0000001d;
    width: 100%;
    background-color: #00000012;
    margin-top: 0.5vh;
    display: flex;
    align-content: center;
    padding: 2rem;
    
    h2{
        font-weight: bold;
        font-size: 30px;
        text-transform: uppercase;
        float: left; 
        background-color: transparent; 
        margin-left: 1vw;
    }
`

export const MensagemDefault = styled.div`
    background-color: transparent;
    justify-content: center;
    margin-left: 18%;
    padding: 3rem;
    
    h3{
        display: flex;
        width: 55vw;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        font-weight: bold;
        font-size: 30px;
        background-color: transparent;  
    }

    button{
        background-color: transparent;
        display: flexbox;
        width: fit-content;
        margin-top: 3vh;

        div{
            border-radius: 20px;
            background-color: white;
            height: 100px;
            width: 100px;
            border: solid 20px white;
            background-image: url(${Adicionar});
            background-size: contain;
            background-repeat: no-repeat;
            margin-left: 23vw;
        }
        p{
            border-radius: 10px;
            background-color: #A6D6C3;
            font-weight: bold;
            color: white;
            padding: 4px;
            margin-top: 3vh;
            width: 15vw;
            font-size: 22px;
            margin-left: 19vw
        }
    }
    
`

export const ContainerButton = styled.div`
    display: inline-flex;
    margin-top: 4vh;
    width: 86%;
    margin-left: 1%;
    justify-content: space-between;

    button{
    align-items: center;
    justify-items: center;
    display: inline-flex;

    &.icone{
        background-color: #00000020;
        border-radius: 5px;
        height: 38px;
        width: 38px;
        padding: 5px;
        float: left;
    }
    &.compartilhar{
        background-color: transparent
    }

    img{
    background-color: transparent;
    }
} 
`

export const DiarioNutricional = styled.div`
    background-color: white;
    border-radius: 20px;
    width: fit-content;
    padding: 10px;
    margin-top: 10vh;
`
    

