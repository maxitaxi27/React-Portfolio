import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
/* Ermöglicht Springen auf der Webseite */
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({selectedPage, setSelectedPage}) => {
    const[isMenuToggled, setIsMenuToggled] = useState(false);
    /* Prüft ob, Mobilgerät, anzeige des Navbar-Menüs */
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px");

return(
    <nav className ={'z-40 w-full fixed to-0 py-6'}></nav>
      /* py Padding von 24px, z-40 erscheint ganz oben*/
      
    )
}