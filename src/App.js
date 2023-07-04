
import './App.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Disclaimer from './components/Disclaimer';
import Platform from './components/Platform';
import MetaTrader5 from './components/MetaTrader5';
import Benefits from './components/Benefits';
import PromoBox from './components/PromoBox';

function App() {


  return (


        <div style={{overflow:'hidden'}}>

          <NavBar />
          <Header />
          <Platform/>
          <MetaTrader5/>
          <Benefits/>
          <PromoBox/>
          <Footer />
          <Disclaimer/>

      </div>
    

  );
}

export default App;
