import React, { useState } from 'react';
import './animation.css'
import Button from '../../components/UI/button/button'
const Transition = () => {
    const [opacityState, setOpacity] = useState(1)
    const [scaleState, setScale] = useState(1)
    const onHide = () => {
        setOpacity(0)
    }
    const onScale = () => {
        setScale(scaleState > 1 ? 1 : 1.2)
    }
    const styles = {
        transition: 'all 1s ease-out'
    }
    return (
        <div className='box' style={{ ...styles, opacity: opacityState, transform: `scale(${scaleState})` }}>
            <h1>Animation</h1>
            <h2>Css Animation with ReactJs</h2>
            <div className='btn'>
                <Button btnType='danger' clicked={onHide}>Hide</Button>
                <Button clicked={onScale}>Scale</Button>
            </div>
        </div>
    )
}

export default Transition