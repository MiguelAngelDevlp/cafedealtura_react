import EndFooter from "../../components/EndFooter/EndFooter"
import Footer from "../../components/Footer/Footer"
import FourSect from "../../components/FourSect/FourSect"
import Help from "../../components/Help/Help"
// import HelpForm from "../../components/HelpForm/HelpForm"
import OneSection from "../../components/OneSection/OneSection"
import ThreeSection from "../../components/ThreeSection/ThreeSection"
import TwoSection from "../../components/TwoSection/TwoSection"
import HeroImage from '../../components/assets/Heroimage.png'
import HeroImages from '../../components/assets/HeroImg.png'
import Button from "../../components/Button/Button"


const Homepage = () => {

    return (
        <div className="App">
            <OneSection
                title={'El mejor café del mundo, ahora en tu casa.'}
                src={HeroImage}
                subtitle='De la planta a tu taza'
                parr={'Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.'}>
                bu ={<Button className={'btn-main'} text='Descubrir origenes' />}
                bu2 = {<Button className={'btn-main2'} text='Comprar café' />}
            </OneSection>
            <TwoSection />
            <ThreeSection />
            <FourSect />
            <OneSection
                subtitle='Pruébalo en nuestro coffee shop'
                src={HeroImages}
                parr={'Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento'}>
            </OneSection>
            <Help />
            <Footer />
           
        </div>)
}


export default Homepage
