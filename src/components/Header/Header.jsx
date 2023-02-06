import Bag from "../Bag/Bag"
import IconLogin from "../IconLogin/IconLogin"
import IconLogo from "../IconLogo/IconLogo"
import NavList from "../NavList/NavList"
import './Header.css'
import phone from "../assets/Icon.png"
import Button from "../Button/Button"




const Header = () => {

    return (
        <div id= "header">
            <IconLogo/>
            <NavList/>
            <IconLogin 
            src={phone}
            text={'+34 919 49 05 18'}
    
            />
            <Button text={'Iniciar sesión'} />
            <Bag/>
        </div>
    )
}

export default Header