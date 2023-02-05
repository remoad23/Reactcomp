import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (

        <div className="App">
            <div className="mainPageBody">
                <Outlet />
            </div>
        </div >

    );
}

export default Layout;