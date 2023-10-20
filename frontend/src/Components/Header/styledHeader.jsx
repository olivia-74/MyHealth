import styled from "styled-components";


export const ContainerHeader = styled.header`
    border-bottom: solid 2px;
    border-color: #00000046;
    height: 7vh;
    align-content: center;
    display: flex;
    justify-content: space-between;

    img{
        height: 100%;
    }
`

export const Nav = styled.div`
    display: flex;
    align-self: center;
    margin: 0;
    padding-top: 5px; 
    padding-right: 0.5vw;
    
    img{
        background-color: transparent;
        }
`

export const BotaoNav = styled.button`
    display: inline-flex;
    align-content: center;
    justify-content: center;
    

    &.icones{
        background-color: #00000020;
        border-radius: 5px;
        height: 38px;
        width: 38px;
        padding: 5px;
        margin-right: 0.5vw;
    }

    &.perfil{
        img{
            height: 55px;
            margin-top: -10px;
            margin-left: 1vw;;
        }
    }
        
    &:hover{
        opacity: 0.5;
    }

`