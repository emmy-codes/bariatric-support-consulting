import './App.css';
import Navbar from '../src/Components/Navbar';
import HamburgerMenu from '../src/Components/HamburgerMenu';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import MyMission from '../src/Components/MyMission';
import MyServices from '../src/Components/MyServices';
import CTA from '../src/Components/CTA';
import FAQ from '../src/Components/FAQ';
import Footer from '../src/Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HamburgerMenu />
      <Home />
      <About />
      <MyMission />
      <MyServices />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
