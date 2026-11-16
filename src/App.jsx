import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import DestinationGrid from "./components/DestinationGrid"
import FAQ from "./components/FAQ"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

function App() {
  const [dark, setDark] = useState(false)
  const [selectedDestination, setSelectedDestination] = useState("")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleDestinationEnquiry = (destination) => {
    setSelectedDestination(destination);
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  };

  return (
    <div className={dark ? "dark" : ""}>
      <Navbar dark={dark} onToggle={() => setDark(!dark)}/>
      <main>
        <Hero />
        <About />
        <DestinationGrid onEnquire={handleDestinationEnquiry}/>
        <FAQ />
        <ContactForm selectedDestination={selectedDestination}/>
      </main>
      <Footer />
    </div>
  )
}

export default App
