import React from 'react';

function ProgressCircle({ level, solved, total }) {
    const percentage = Math.floor((solved / total) * 100);

    const colorMap = {
        Easy: '#90ee90',
        Medium: '#ffd700',
        Hard: '#ff4500'
    };

    return (
        <div className="progress-item">
            <div
                className="circle"
                style={{
                    background: `conic-gradient(${colorMap[level]} ${percentage}%, #ffe5d9 ${percentage}%)`
                }}
            >
                <span>{solved}/{total}</span>
                <p>{level}</p>
            </div>
        </div>
    );
}

export default ProgressCircle;
