import Loading from "../../Assets/loadingGif.gif"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import { PaginaErro } from "./styledError"

function Error (){
    return(
        <>
        <Header/>
        <PaginaErro>
          <img src={Loading} alt="loading..." />
            {/* <p>erro!</p>   */}
        </PaginaErro>
        <Footer/>
        </>
        
    )
}
export default Error