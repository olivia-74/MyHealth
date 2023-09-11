import styled from "styled-components";


export const Header = styled.header`
    height: 10vh;
    background-color: #A6D6C3;
    justify-content: center;
    display:flex;
    padding: 2px;

    img{
        height: 100%;
        align-self: center;
    }
`

export const Imagem = styled.img`
    display: flex;
    float: right;
    height: 80vh;
    margin-right:5vw;
`

export const Card = styled.div`
    display: inline-block;
    width: 30vw;
    margin-left: 13vw;
    margin-top: 5vh;
    border-radius: 30px;
    height: fit-content;
    padding: 5vh 4vh 5vh 4vh;
    justify-content: center;
    color: black;
    font-size: 18px;
    margin-bottom: 10vh;
    background-color: white;
    border: solid 4px #C3DCD2;

    label{
        background-color: white;
    }

    form {
        background-color: #ffffff;
        }

    h1{
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 3vh;
        color:#A6D6C3;
        background-color: white;
    }

    input{
        background-color: #ffffff;
        border: solid 2px #ffffff;
        border-radius: 30px;
        width: 100%;
        padding: 1vh;
        padding-left: 2vw;
        margin-top: 0.5vh;
        margin-bottom: 3.5vh;
        display: block; 
        border: solid 5px #C3DCD2;
    }

`

export const BotaoEntrar = styled.button`
    background: none;
    border: 6px solid;
    border-radius: 30px;
    padding: 5px 65px 5px 65px;
    margin-top: 1.5vh;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    color:#C3DCD2;
    margin-left: 3vw;

    &:hover{
            background-color: #C3DCD2;
            color: white;
            border-color: #C3DCD2;
        }
`

export const Footer = styled.footer`
    background-color: #A6D6C3;
    height: 5vh;
    width: 100%;
    justify-content: center;
    bottom: 0px; 
    display: flex;
    padding: 2px;

    img{
        height: 100%;
        background-color: #A6D6C3; 
    }
`







