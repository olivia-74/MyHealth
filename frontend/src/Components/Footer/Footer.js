import LogoFooter from "../../Assets/logoSimplesBranco.png"
import { ContainerFooter } from "./styledFooter";

function Footer(){
    return(
        <>
        <ContainerFooter>
            <img src={LogoFooter}/>
        </ContainerFooter>
        </>
    )
}

export default Footer;