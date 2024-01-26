import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <main>
        
            <div id='hero'>
          <Hero/></div>
          
          <div id='Programs'>
          <Programs/></div>

          <div id='Plans'>
          <Plans/></div>

          <div id='Testimonials'>
          <Testimonials/></div>

          <div id='Join'>
          <Join/></div>
          </main>
          <Footer/>
    </div>
  );
}

export default App;