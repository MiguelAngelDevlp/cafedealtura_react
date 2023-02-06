import './TwoSection.css'
import InfoBox from '../InfoBox/InfoBox'
import iconList from '../assets/check.png'


import iconTransporter from '../assets/camion.png'
import presentIcon from '../assets/regalo.png'


const TwoSection = () => {


    return (
        <div id='section2'>
            <h3>Café con las mejores condiciones</h3>
            <div id='inf-item'>
                <InfoBox
                    src={iconList}
                    title={'Recibe tu pedido sin preocuparte'}
                    text={'Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.'}>

                </InfoBox>

                <InfoBox
                    src={iconTransporter}
                    title={'Envío en 24/48h'}
                    text={'Pide tu café antes de las 12h y lo recibirás al día siguiente.'}>

                </InfoBox>

                <InfoBox
                    src={presentIcon}
                    title={'Descuentos y beneficios'}
                    text={'Cada dos meses, te regalamos ina bolsa de nuevo origen sorpresa, para que lo descubras junto a nosotros.'}>

                </InfoBox>
            </div>

        </div>
    )
}

export default TwoSection