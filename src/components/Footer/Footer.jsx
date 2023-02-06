

import IconLogin from "../IconLogin/IconLogin"
import IconLogo from "../IconLogo/IconLogo"
import NavList from "../NavList/NavList"

import './Footer.css'



const Footer = () => {



    return(
        <div id='pre-footer'>

            <div id='logos-footer'>

                <IconLogo />

                <h5>Te ayudamos en</h5>

                <div id='remake-icon-number'>
                    <IconLogin
                        src={Icon}
                        text={'+34 919 49 05 18'}
                    />
                </div>

                <div id='remake-icon-mail'>
                    <IconLogin
                        src={iconImageMail}
                        text={'hola@cafedealtura.com'}
                    />
                </div>
            </div>

            <NavList className={'list-footer'} />

            <div id='listTerms'>
                <ul>
                    <li>Política de privacidad</li>
                    <li>Política de cookies</li>
                    <li>Términos y condiciones</li>
                </ul>
            </div>

        </div>
    )
}


export default Footer