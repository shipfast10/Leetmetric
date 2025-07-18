import React from 'react';

function StatCard({ label, value }) {
    return (
        <div className="card">
            <h4>{label}</h4>
            <p>{value}</p>
        </div>
    );
}

export default StatCard;
