import React, { useState } from 'react'
import "../styles/page.css"
import "../styles/global.css"

export default function BoxInfo({ title, description }) {
    const [open, setOpen] = useState(false)

    return (
        <div onClick={() => setOpen(!open)} className="service-box--container">
            <h4 className="service-box--title">{title}</h4>
            {open && <p className="page--text">{description}</p>}
        </div>
    )
}
