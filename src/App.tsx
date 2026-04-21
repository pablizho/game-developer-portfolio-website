import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Games from "./components/Games";
import About from "./components/About";
import Devlog from "./components/Devlog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <Navbar />
      <Hero />
      <Games />
      <About />
      <Devlog />
      <Contact />
      <Footer />
    </div>
  );
}
