import React, { useState, useEffect } from 'react'
import ReviewCard from './reviewCard'
export default function ReviewUi(props) {
    const [index, setIndex] = useState(0)
    const [seconds, setSeconds] = useState(0);

    const length = 2

    // SlideShow timer
    useEffect(() => {
        setTimeout(() => {
            if (seconds < 100) {
                setSeconds(seconds + 1)
            }
            else {
                setSeconds(0)
                index === length ? setIndex(0) : setIndex(index + 1)
            }
        }, [seconds]);
    })

    return (
        <div className="review-Ui--wrapper">
            {index === 0 && <ReviewCard
                header="Analyze a Structural Issue"
                subHeader="Structural Engineer"
                description="Sam was very thorough in his evaluation of my house's structural issue. He provided a detailed report, which explained my options."
                name="Joanna R. in Phoenix, AZ"
            />}
            {index === 1 && <ReviewCard
                header="Analyze a Structural Issue"
                subHeader="Structural Engineer"
                description="Sam is one of the best in the industry. Being a former architect myself, I would highly recommend him for any structural needs you may have for your project."
                name="Rikki H. in Chandler, AZ"
            />}
            {index === 2 && <ReviewCard
                header="Analyze a Structural Issue"
                subHeader="Structural Engineer"
                description="“Sam was great to work with. He really involves you in the proposal phase and takes time to explain the engineering aspects of the project. He has an ‘I'm here to help’ attitude. Highly..."
                name="Alex M. in Gilbert, AZ"
            />}
        </div>
    )
}
