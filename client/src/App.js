import './App.css';
import Home from './pages/Home';
import Nav from '../src/components/Nav/nav.js';
import Footer from '../src/components/Footer/footer.js';
import Hero from '../src/components/Hero/hero.js';



function App() {
  
  return (
    <div>
        <Nav />
        <Hero />
        <Home />
        <Footer />
    </div>
  );
}

export default App;