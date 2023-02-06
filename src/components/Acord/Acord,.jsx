import { useState } from 'react'
import './Acord.css'


const Acord = ({ title, text }) => {

    const [showText, setShowText] = useState(true)

    const toggleShowText = () => {
        setShowText(!showText)
    }

    return (
        <div id="accordeon">
        <h1 id = 'title-accordeon' onClick={() => toggleShowText()}>{title}
        
        </h1>
        
       
            {showText && <p id="text-accordeon">{text}</p>}

        </div>
    )
}

export default Acord