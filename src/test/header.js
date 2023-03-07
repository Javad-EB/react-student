import React from 'react'

const Header = (props) => {
    return (
        <header>
            <h1 data-testid="h1Tag" className='h1-class'>{props.text}</h1>
            <button data-testid='ok-button' type='submit' disabled>ok</button>
        </header>
    )
}

export default Header