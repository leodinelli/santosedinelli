import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//voltar pra cima
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() =>{
        window.scrollTo(0,0); //00 px
    }, [pathname]);

    return null;
};

export default ScrollToTop;