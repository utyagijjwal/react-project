import './App.css';
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection';
import Ujjwal from './Components/Ujjwal';
import Education from './Components/Education';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <Ujjwal/>
    <Education/>
    <Footer/>
    </div>
  );
}

export default App;
