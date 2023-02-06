import HelpForm from "../HelpForm/HelpForm"
import './Help.css'




const Help = () => {


    return (
        <div id="help">

            <div id="finalConteiner">
                <h5>Entra en contacto con nosotros</h5>
                <p>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>

                <br/>

                <p>También puedes ponerte en contacto con nosotros en nuestra dirección o a través del teléfono de la tienda.</p>
                <br/>
                <p>742 Evergreen Terrace <br /> Springfield, OR 12345</p>
                <br/>
                <div class="help">
                    <img src="./assets/Icon.png" alt="Icon" />
                    <p>+1 (555) 123-4567</p>
                </div>

                <div class="help">
                    <img id="loguito" src="./assets/mailIcon.svg" alt="Mail Icon" />
                    <p>support@example.com</p>
                </div>
                <br/>
                <br/>
                <div>
                    <p>¿Buscas un trabajo?<span id="getJob">Ver nuestras ofertas</span></p>
                </div>
            </div>

            <HelpForm/>



        </div>
    )
}

export default Help