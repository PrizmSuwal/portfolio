import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/Aboutme/Aboutme';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects/>
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
