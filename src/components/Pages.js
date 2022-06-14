import React from "react";
import Info from "./Info";
import Button from "./Button";
import About from "./About";
import Interest from "./Interest";
import Image from "../images/profile.jpg";

function Pages(){
    return(
        <main className="card-info">
            <div className="profile-info">
                <img src={ Image }/>
            </div>
            <div className="text-info">
                <Info />
                <Button />
                <About />
                <Interest />
            </div>
        </main>
    );
}

export default Pages;