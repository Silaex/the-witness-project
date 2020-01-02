import React, { useState } from 'react'
import Bar from "../Bar/Bar";

function Skill({ title, barColor, initialBarWidth }) {

    return (
        <div className="skill pad-xl">
            <h1 className="mar-l-md">{title}</h1>
            <Bar barColor={barColor} initialBarWidth={initialBarWidth} />
        </div>
    )
}

export default Skill;
