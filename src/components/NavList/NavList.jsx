import { Link } from "react-router-dom"
import "./NavList.css"


const NavList = ({className}) => {


    return (
        <nav className={className}>
            <ul>
                <li><Link to= {'/Shop'}>Tienda</Link></li>
                <li>Suscripción</li>
                <li>Para empresas</li>
                <li>Sobre nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
}

export default NavList