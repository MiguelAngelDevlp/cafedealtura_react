import Bag from "../Bag/Bag"
import IconLogin from "../IconLogin/IconLogin"
import IconLogo from "../IconLogo/IconLogo"
import NavList from "../NavList/NavList"
import './Header.css'



const Header = () => {

    return (
        <div id= "header">
            <IconLogo/>
            <NavList/>
            <IconLogin/>
            <Bag/>
        </div>
    )
}

export default Header