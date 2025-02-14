import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
function App() {

  return (
    <div className='w-screen h-screen box-border font-serif overflow-x-hidden'>
      <div className='w-[1200px] mx-auto'>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
