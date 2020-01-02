import React, { useState, useEffect } from 'react'
import "./Door.css";
import Bar from "../Bar/Bar";
import playSound from "../SoundEffect";
import { Redirect } from "react-router-dom";

function Door ({ setOpened }) {

    const [barIsCompleted, setBarIsCompleted] = useState(false);
    const [barValue, setBarValue] = useState(0);
    const [redirect, setRedirect] = useState(<Redirect to="/home" />);

    useEffect(() => {
        if (barIsCompleted) playSound("enter")
    }, [barIsCompleted]);

    const openTheDoor = event => {
        const realTarget = event.currentTarget;
        if (event.target === realTarget) {
            setOpened(true)
        }
    }

    return (
        <div className={`door h-100 flex column j-a-center ${ barIsCompleted ? 'fade-out delay-1' : ""}`} onAnimationEnd={openTheDoor}>
            {
                barValue ? 
                <h2>{barValue}%</h2> : 
                <h2 className="fade-in delay-h1">Drag the bar from the left to the right</h2>
            }
            <Bar barColor="white" width={50} classes="mar-v-xl" setBarIsCompleted={setBarIsCompleted} setBarValue={setBarValue} />
            { redirect }
        </div>
    )
}

export default Door;
