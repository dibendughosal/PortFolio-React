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
    </div>
  )
}

export default Body
