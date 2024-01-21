import React, { useReducer } from "react";
import { useOutlet } from "react-router-dom";
import { Navbar } from "../../shared/layout/Navbar/Navbar";
// import { Sidebar } from "../../shared/layout/Sidebar/Sidebar";
// import AuthContext from "../../shared/services/providers/auth.context";

const Main = () => {

    const outlet = useOutlet();
    // const navigation = useNavigation();
    return <React.Fragment>
        <div className='site-wrapper'>
            <div className='top-wrap'>
                <Navbar />
                <div className="main-content" id="main">
                {/* {navigation.state==='loading' &&<p>Loading....</p>} */}
                    {outlet}
                </div>
            </div>
        </div>
    </React.Fragment>
}
export { Main };