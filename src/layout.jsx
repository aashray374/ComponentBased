import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './nav.jsx'

function Layout(){
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout 