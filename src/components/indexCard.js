import React from 'react'

export default function IndexCard(props) {
    return (
        <div className="index-card--wrapper">
            <img src={props.icon} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.copy}</p>
        </div>
    )
}
