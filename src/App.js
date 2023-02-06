import './App.css';
import Header from './components/Header/Header';
import OneSection from './components/OneSection/OneSection';
import TwoSection from './components/TwoSection/TwoSection';
import ThreeSection from './components/ThreeSection/ThreeSection';
import FourSect from './components/FourSect/FourSect';
import Help from './components/Help/Help';
import Footer from './components/Footer/Footer';
import Heroimage from './components/assets/Heroimage.png'
import Heroimages from './components/assets/HeroImg.png'
import EndFooter from './components/EndFooter/EndFooter';



function App() {
  return (
    <div className="App">
      <Header />
      <OneSection
        title={'El mejor café del mundo, ahora  en tu casa.'}
        src={Heroimage}
        subtitle='De la planta a tu casa'
        parr={'Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.'}>
      </OneSection>
      <TwoSection />
      <ThreeSection />
      <FourSect />
      <OneSection
        subtitle='Pruébalo en nuestro coffee shop'
        src={Heroimages}
        parr={'Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento'}>
      </OneSection>
            <Help/>
            {/* <Footer/> */}
            {/* <EndFooter/> */}
    </div>
  );
}

export default App;
