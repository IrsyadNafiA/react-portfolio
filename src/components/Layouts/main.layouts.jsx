import React, { useEffect } from "react";
import Navigation from "./navigation.layouts";
import Aos from 'aos'
import 'aos/dist/aos.css'

const MainLayouts = ({children}) => {

    useEffect(()=> {
        Aos.init({duration: 1500})
    }, [])
    return(
        <React.Fragment>
            <Navigation />
            {children}
        </React.Fragment>
    )
}

export default MainLayouts