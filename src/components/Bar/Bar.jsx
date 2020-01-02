import React, { useState, useEffect } from 'react';
import "./Bar.css";

function Bar( { width, barColor, initialBarWidth, classes, setBarIsCompleted, setBarValue } ) {

    const [barWidth, setBarWidth] = useState(initialBarWidth ? initialBarWidth : 0);
    const [pressed, setPressed] = useState(false);
    const [onMoving, setOnMoving] = useState(barWidth ? "onMoving" : "");
    const [completed, setCompleted] = useState(false);
    const [barIsWorking, setBarIsWorking] = useState(true);

    // Activer le mouvement
    const togglePressed = event => {
        setPressed(!pressed);
        setOnMoving("onMoving")
    }
    // Eteindre la barre
    const notMoving = e => {
        if (barWidth < 1) setOnMoving("");
        setPressed(false);
    }
    // Gestion des mouvements (telephone, ordinateur)
    const moveBar = event => {
        if (barIsWorking) {
            const eventType = event.type;
            const bar = event.currentTarget;
            let percentageConverted = undefined;
            let minimum = undefined;
            if (pressed) {
                setOnMoving("onMoving");

                if (eventType.includes("mouse")) {
                    const pixelsBarWidth = bar.offsetWidth * (barWidth / 100);
                    const w = pixelsBarWidth + event.movementX;
                    percentageConverted = (w / bar.offsetWidth) * 100;
                } else if (eventType.includes("touch")) {
                    const position = event.touches[0].clientX - bar.getClientRects()[0].x;
                    percentageConverted = (position / bar.offsetWidth) * 100;
                }

                minimum = Math.min(percentageConverted, 100);
                setBarWidth(Math.max(0, minimum));
            }
        }
    }

    useEffect(() => {
        const isCompleted = barWidth === 100;
        if (setBarIsCompleted) {
            setBarIsCompleted(isCompleted);
            setBarIsWorking(!isCompleted);
        }
        if (setBarValue) setBarValue(Math.floor(barWidth));
        setCompleted(isCompleted);
    }, [barWidth])

    return (
        <div
            className={`${onMoving} bar-container ${classes ? classes: ""}`}
            onMouseMove={moveBar}
            onMouseUp={(event) => { notMoving(event) }}
            onMouseLeave={(event) => notMoving(event)}
            onTouchEnd={(event) => { notMoving(event) }}
            onTouchCancel={(event) => { notMoving(event) }}
            onTouchMove={moveBar}
            style={{ "--bar-color": `var(--${barColor})`, width: `${width}%` }}
        >
            <div
                className={`begin`}
                /* onMouseDown={() => { togglePressed() }}
                onTouchStart={() => { togglePressed() }} */
            ></div>
            <div
                className={`bar`}
                style={{ width: `${barWidth}%` }}
            >
                <div 
                    className="bar-tooltip" 
                    onMouseDown={() => { togglePressed() }}
                    onTouchStart={() => { togglePressed() }}
                ></div>
            </div>
        </div>
    )
}

export default Bar;
