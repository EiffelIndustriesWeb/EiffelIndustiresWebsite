import React from 'react'
import '../styles/about.css';
export default function ReviewCard(props) {
    return (
        <div className="reviewCard--wrapper">
            <h2 className="reviewCard--title">Testimonials</h2>
            <h3 className="reviewCard--header">{props.header}</h3>
            <label className="reviewCard--subHeader">{props.subHeader}</label>
            <p className="reviewCard--description">{props.description}</p>
            <h4 className="reviewCard--name">{props.name}</h4>
        </div>
    )
}
