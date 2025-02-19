import Contact from "./Contact"
import Gallery from "./Gallery"
import HeroSection from "./HeroSection"
import Projects from "./Projects"
import Skills from "./Skills"

const Body = () => {
  return (
    <div className="max-w-screen">
      <HeroSection/>
      <Projects/>
      <Skills/>
      <Gallery/> 
      <Contact/>
    </div>
  )
}

export default Body;
