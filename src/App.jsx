import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    
      <div className='w-screen h-screen box-border font-serif overflow-x-hidden'>
        <div className='w-full mx-auto'>
          <Header />
          <Routes>
            <Route path="/about" element={<HeroSection />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Skills />} /> 
          </Routes>
          <Body />
          <Footer />
        </div>
      </div>
    
  );
}


export default App
