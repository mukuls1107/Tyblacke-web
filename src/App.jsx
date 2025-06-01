import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Music from "./Components/Music";
import PrayerWall from "./Components/PrayerWall";
import Merchandise from "./Components/Merchandise";
import Newsletter from "./Components/Newsletter";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Music />
      <PrayerWall />
      <Merchandise />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
