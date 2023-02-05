import Button from "../Button/Button"
import "./IconLogin.css"


const IconLogin = () => {

    return (
        <div id="logIn">
            <div id="iconPhone">
                <img src="./assets/Icon.png" alt="Icon Telephone" id="phone" />
                <p>+34 919 49 05 18</p>
            </div>


            <Button text={'Iniciar sesión'} />

        </div>
    )
}

export default IconLogin