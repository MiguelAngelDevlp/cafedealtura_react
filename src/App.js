import './App.css';

import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Shop from './pages/HomePage/Shop';
import { ContextProvider } from './Context/Context';
import Cesta from './pages/HomePage/Cesta';
import Header from './components/Header/Header';
import Pasarela from './pages/HomePage/Pasarela';
import EndFooter from './components/EndFooter/EndFooter';
import Succes from './pages/HomePage/Succes';



function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cesta' element={<Cesta/>}/>
          <Route path='/Pasarela' element={<Pasarela/>}/>
          <Route path='/Succes' element={<Succes/>}/>
        </Routes>
      </ContextProvider>
<EndFooter/>

    </div>
  );
}

export default App;
