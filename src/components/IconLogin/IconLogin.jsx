import Button from "../Button/Button"
import "./IconLogin.css"



const IconLogin = ({src, text}) => {

    return (
            <div id="iconPhone">
                <img className="small" src={src} alt="Icon Telephone" id="phone-icon" />
                <p>{text}</p>
            </div>
    )
}

export default IconLogin