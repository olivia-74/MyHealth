// import LandingPage from "./Pages/LandingPage/LandingPage"
import { ChakraProvider } from '@chakra-ui/react'
import GlobalStyle from "./styledGlobal";
// import Home from "./Pages/Home/Home";
// import LogIn from "./Pages/LogIn/LogIn";

import Rotas from "./Routes/Rotas"
// import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <>
    <GlobalStyle />
    <ChakraProvider>
      {/* <LandingPage/> */}
      {/* <Home/> */}
      {/* <LogIn/> */}
      <Rotas/>
      

    </ChakraProvider>
    
    </>
  );
}

export default App;
