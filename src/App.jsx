import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import './App.css';  
import Home from './pages/Home';
import Navbar from './Components/Navbar'
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/> 
    <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>

   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
