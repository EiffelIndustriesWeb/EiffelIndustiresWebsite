import React from 'react'
import '../styles/index.css'

export default function IndexCard(props) {
    return (
        <div className="index-card--wrapper">
            <img className="index-card--icon" src={props.icon} alt={props.title} />
            <h3 className="index-card--title">{props.title}</h3>
            <p>{props.copy}</p>
        </div>
    )
}
