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

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <main
        className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
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
        <Contact />
      </main>
    </>
  )
}

export default App
