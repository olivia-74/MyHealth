import styled from "styled-components";

export const Barra = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5vh 2vw 0vh 2vw;

    button{
        border-radius: 5px;
        height: 38px;
        padding: 5px;
        align-items: center;
        font-weight: bold;
        
        &.icone{
            float: left;
            background-color: #00000020;           
            width: 38px;
            display: flex;
            
            img{
                background-color: transparent;
            }

            p{
                margin-left: 1vw;
                background-color: hotpink;
                display: flex;
                white-space: nowrap;
                font-size: 18px;
            }
        }

        &.compartilhar{
            align-items: center;
            justify-items: center;
            background-color: #A6D6C3;
            color: white;

        }
    }
`

export const Container = styled.div`
    border-bottom: solid 2px #0000001d;
    border-top: solid 2px #0000001d;
    background-color: #00000012;
    display: flex;
    align-content: center;
    flex-direction: column;
    margin-top: 10vh;
    padding: 20px;
`

// export const Container = styled.div`
//    background-color: transparent;

//     header{
//         margin-top: -9vh;
//         background-color: transparent;
//         height: fit-content;
//         display: flex;
//         margin-bottom: 5vh;

//         h3{
//             font-weight: bold;
//             font-size: 25px;
//             float: left; 
//             background-color: transparent; 
//         }  

//         button{
//             display: flex;
//             justify-content: space-between;
//             background-color: transparent;

//             &.icone{
//                 float: left;
//                 background-color: #00000020;
//                 border-radius: 5px;
//                 height: 38px;
//                 width: 38px;
//                 padding: 5px;
//                 display: flex;
//                 align-items: center;
            
//                 margin-right: 0.5vw;
            
//                 img{
//                     background-color: transparent;
//                 }
//             }

//             &.compartilhar{
//                 float: right;
//                 width: fit-content;
//                 background-color: hotpink;

//             }
//         }
//     }

    

//     div{
//         width: 100%;
//         display: flex;
//         justify-content: center;
//         align-items:center;
//         flex-direction:column;
//         background-color: transparent;
//     }
// `

