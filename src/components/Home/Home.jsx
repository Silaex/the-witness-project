import React, { useEffect, useState } from 'react';
import "./Home.css";
import Skill from "../Skill/Skill";

function Home(props) {

    useEffect(() => {
        
    }, [])


    return (
        <div className="home flex center j-a-center h-100 fade-in delay-h1">
            <div className="skills w-100 flex j-start center">
                <Skill title="HTML" barColor="orange" initialBarWidth={75} />
                <Skill title="CSS" barColor="blue" initialBarWidth={75} />
                <Skill title="JS" barColor="yellow" initialBarWidth={65} />
                <Skill title="React" barColor="light-blue" initialBarWidth={50} />
            </div>
        </div>
    )
}

export default Home;
