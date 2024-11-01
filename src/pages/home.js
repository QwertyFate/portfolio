import React from "react";
import ParticleBG from "../components/ParticleBG";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="relative">
            <ParticleBG />
            <div className="relative">
                <NavBar />
                <Outlet />
            </div>
            
        </div>
    )
};

export default HomePage;