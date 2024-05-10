import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from './componets/Hero';
import Download from './componets/Download';
import Inner from './componets/Inner';
import Soccer from './componets/Soccer';
import About from './componets/About';
import Myths from './componets/Myths';
import Footer from './componets/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="App">
<Hero/>
<Download/>
<Inner/>
<Soccer/>
<About/>
<Myths/>
<Footer/>

    </div>
  );
}

export default App;
