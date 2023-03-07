import React, { useState } from 'react';
import './animation.css'
import Button from '../../components/UI/button/button'
const Animation = () => {
    const [slideState, setSlide] = useState(false)
    const [flipState, setFlip] = useState(false)
    const onSlide = () => {
        setSlide(true)
        setFlip(false)
    }
    const onFlip = () => {
        setSlide(false)
        setFlip(true)
    }

    return (
        <div className={`box ${slideState ? 'slide' : null} ${flipState ? 'flip' : null}`}>
            <h1>Animation</h1>
            <h2>Css Animation with ReactJs</h2>
            <div className='btn'>
                <Button btnType='danger' clicked={onSlide}>Slide</Button>
                <Button clicked={onFlip}>Flip</Button>
            </div>
        </div >
    )
}

export default Animation