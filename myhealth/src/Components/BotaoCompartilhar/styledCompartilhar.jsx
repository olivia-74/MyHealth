import styled from "styled-components";

export const Botao = styled.div`
    align-content: center;
    align-items: center;
    justify-items: center;
        
    background-color: #A6D6C3;
    border-radius: 5px;
    padding: 6px;
    width: fit-content;
    position: absolute;
    font-weight: bold; 
    color: white;
    display: flex;
`

export const ConteudoModal = styled.div`
    display: flexbox;
    justify-content: center;
    padding: 0vh 20vh 2vh 20vh;

    h2{
        font-size: 25px;
        font-weight: bold;
    }

    input{
        width: 100%;
        border-bottom: solid 1px;
        border-color: #0000004c;
        margin: 5vh 0vh 4vh 0vh;
        justify-self: center;

        &:focus{
            border-bottom: solid 3px;
            border-color: #A6D6C3;
        }
    }

    button{
        border-radius: 25px;
        padding: 5px 20px 5px 20px;
        background-color: #a6d6c3b3;
        color: white;
        float: right;
        font-size: 20px;
        font-weight: bold;
        margin-top: 3vh;
        margin-right: 2vw;
    }
    
`