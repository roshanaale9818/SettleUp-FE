import React from "react";
import { useOutlet } from "react-router-dom";
import { Navbar } from "../../shared/layout/Navbar/Navbar";
import Footer from "../../shared/layout/Footer/Footer";



const Main = () => {
    const outlet = useOutlet();
    return <React.Fragment>
        <div className='site-wrapper'>
            <div className='top-wrap'>
                <Navbar />
                <div className="main-content" id="main">
                    {outlet}
                </div>
                <Footer />
            </div>
        </div>
    </React.Fragment>
}
export { Main };