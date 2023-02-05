import './App.css';
import Header from './components/Header/Header';
import OneSection from './components/OneSection/OneSection';
import TwoSection from './components/TwoSection/TwoSection';
import ThreeSection from './components/ThreeSection/ThreeSection';
import FourSect from './components/FourSect/FourSect';



function App() {
  return (
    <div className="App">
      <Header />
      <OneSection
        title={'El mejor café del mundo, ahora en tu casa.'}
        subtitle='De la planta a tu casa'
        parr={'Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.'}>
      </OneSection>
      <TwoSection />
      <ThreeSection />
      {/* <FourSect /> */}
    </div>
  );
}

export default App;
