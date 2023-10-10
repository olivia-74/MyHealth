import styled from "styled-components";
import Adicionar from "../../Assets/iconeAdicionar.png"


export const Mensagem = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    width: 20vw;
    justify-content: center;
    height: fit-content;
    width: 20vw;
    text-align: center;

    border-bottom: solid 2px #0000001d;
    border-top: solid 2px #0000001d;
    background-color: #00000012;
    display: flex;
    align-content: center;
    flex-direction: column;
    margin-top: 10vh;
    padding: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    
    
    h3{
        display: flex;
        width: 55vw;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        font-weight: bold;
        font-size: 25px;
        background-color: transparent;  
    }

    button{
        background-color: transparent;
        display: flex;
        flex-direction: column;
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
            margin-left: 4vw;
        }
        p{
            border-radius: 10px;
            background-color: #A6D6C3;
            font-weight: bold;
            color: white;
            padding: 4px;
            margin-top: 3vh;
            width: 15vw;
            font-size: 20px;
        }
    }
    
`