"use client"

import { useState } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import Certificates from "./components/Certificates"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Quotes from "./components/Quotes"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import MouseTrail from "./components/MouseTrail"
import LoadingScreen from "./components/LoadingScreen"
import Hackathons from "./components/Hackathons"
import AnimatedBackground from "./components/AnimatedBackground"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <main className="min-h-screen relative transition-opacity duration-500">
        <AnimatedBackground />
        <MouseTrail />
        <Navigation />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Hackathons />
        <Achievements />
        <Certificates />
        <Quotes />
        <section id="SECTION_ID" className="bg-black/55 backdrop-blur-lg rounded-3xl shadow-6xl p-6 border border-blue/90">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
