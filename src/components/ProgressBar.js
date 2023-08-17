import React, { useEffect, useState } from 'react'
import { MAX, MIN } from '../constants'

const ProgressBar = ({ value = 0, onComplete = () => { } }) => {
    const [percent, setPercent] = useState(value)
    
    useEffect(() => {
        setPercent(Math.min(MAX, Math.max(value, MIN)))
        
        if (value >= MAX) {
            onComplete()
        }
    },[value])

    return (
        <div className="progress">
            <span
                style={{ color: percent > 49 ? "white" : "black" }}>
                {percent.toFixed(2)}%
            </span>
            <div
                // style={{ width: `${percent}%` }}
                style={{
                    transform: `scaleX(${percent / 100})`,
                    transformOrigin: "left"
                }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent.toFixed(2)}
            />
        </div>
    )
}

export default ProgressBar