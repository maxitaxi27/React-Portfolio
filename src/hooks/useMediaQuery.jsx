import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect (() => {
        const media = window.matchMedia(query);
        if(media.matches !== matches){
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventlistener("resize",listener);
        return () => window.removeEventlistener("resize", listener);

    }, [matches, query])

    return matches;
}

export default useMediaQuery;

/* Aufnahme der Query & wenn Bedingung für Bildschirmgröße erreicht ist */