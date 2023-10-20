import styled from "styled-components";

export const CorFundo = styled.div`
        margin: 0;
        padding: 0;
        outline: 0;
        background-color: #ffffff;
`

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
    margin-right: 5vw;
`

export const BotaoCadastro = styled.button`
    display: flex;
    float: left;
    background-color: #F5C20A;
    width: 25vw;
    height: 8vh;
    margin-left: 15.5vw;
    margin-top: 5vh;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    font-weight: bold;

    &:hover{
        text-decoration: underline 2px;
    }
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
    background-color: #C3DCD2;

    h1{
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 3vh;
        color: white;
        background-color: #C3DCD2;
    }

    label{
            background-color: #C3DCD2;
         }

    form {
            background-color: #C3DCD2;
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
        border: solid 5px #ffffff;
        
        &:focus{
            outline: #c3dcd252;
        }
    }

    button{
        background: none;
        border: 6px solid;
        border-radius: 30px;
        padding: 5px 65px 5px 65px;
        margin-top: 1.5vh;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        color: white;
        margin-left: 6vw; 

        &:hover{
            background-color: #ffffff3a;
        }
    }
`

export const Footer = styled.footer`
    background-color: #A6D6C3;
    height: 5vh;
    width: 100%;
    justify-content: center;
    position: fixed; 
    bottom: 0px; 
    display: flex;
    padding: 2px;

    img{
        height: 100%;
        background-color: #A6D6C3;
    }
`
