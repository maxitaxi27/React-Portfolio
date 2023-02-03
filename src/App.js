import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";


function App() {
  const[selectedPage, setSelectedPage] = useState('home');
  /* Zustand gibt an, auf welcher Seite der Navigation man sich gerade befindet */
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  /* Vergleicht, ob Browser größer oder kleiner ist als 1060px */
 
  return <div className="app bg-deep-blue">
    <Navbar selectedPage = {selectedPage} setSelectedPage = {selectedPage}/>
  </div>

  ;
}

export default App;
