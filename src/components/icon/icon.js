import React, {useContext} from 'react';
import Light from '../../assets/images/light.png'
import Dark from '../../assets/images/dark.png'
import './icon.css'
import { ThemeContext } from '../../context/Theme/themeContext'


const Icon = (props) => {
    const themeContext = useContext(ThemeContext)
    const { lightTheme} = themeContext
    const icon = lightTheme ? Light : Dark
    return (
        <div className='Icon' style={{ height: props.height }}>
            <img src={icon} alt="icon for dark/light mode" />
        </div>
    )
}

export default React.memo(Icon)