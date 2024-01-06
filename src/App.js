import './App.scss';
import Navigation from '../src/Components/Navigation';
import HamburgerMenu from '../src/Components/HamburgerMenu';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import MyMission from '../src/Components/MyMission';
import MyServices from '../src/Components/MyServices';
import CTA from '../src/Components/CTA';
import Order from './Components/Order';
import FAQ from '../src/Components/FAQ';
import Footer from '../src/Components/Footer';


function App() {
  return (
    <section className="App">
      <Navigation />
      <HamburgerMenu />
      <Home />
      <About />
      <MyMission />
      <MyServices />
      <CTA />
      <Order />
      <FAQ />
      <Footer />
    </section>
  );
}

export default App;
