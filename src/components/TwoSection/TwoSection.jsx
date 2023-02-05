import './TwoSection.css'
import InfoBox from '../InfoBox/InfoBox'



const TwoSection = () => {



    return (<div id='section2'>
        <h3>Café con las mejores condiciones</h3>
        <div id='inf-item'>
            <InfoBox
                imagen={'./assets/iconList.png'}
                title={'Recibe tu pedido sin preocuparte'}
                text={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'}>

            </InfoBox>

            <InfoBox
                imagen={'./assets/iconTransporter.svg'}
                title={'Envío en 24/48h'}
                text={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'}>

            </InfoBox>

            <InfoBox
                imagen={'./assets/presentIcon.png'}
                title={'Descuentos y beneficios'}
                text={'Cada dos meses, te regalamos ina bolsa de nuevo origen sorpresa, para que lo descubras junto a nosotros.'}>

            </InfoBox>
        </div>

    </div>)
}

export default TwoSection