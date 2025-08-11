"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone, Download, Sparkles, Coffee, Instagram, Twitter, Verified } from "lucide-react"
import { Button } from "./ui/Button"

const Hero = () => {
  // Mouse trail (optional, keep if you use it elsewhere)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Typing animation for name (only once)
  const fullText = "Hii,, I'm Arpan Dutta...."
  const [typedText, setTypedText] = useState("")
  useEffect(() => {
    let i = 0
    let typingTimeout
    const typeText = () => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
        typingTimeout = setTimeout(typeText, 100)
      }
    }
    typeText()
    return () => clearTimeout(typingTimeout)
  }, [])

  // Roles auto-typing one by one
  const roles = [
    { text: "Full Stack Developer", gradient: "from-purple-400 to-pink-400" },
    { text: "AI Enthusiast", gradient: "from-cyan-400 to-blue-400" },
    { text: "IoT Explorer", gradient: "from-amber-400 to-orange-400" },
  ]
  const [roleText, setRoleText] = useState("")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    let i = 0
    let typingTimeout
    let eraseTimeout

    const typeRole = () => {
      if (i <= roles[currentRoleIndex].text.length) {
        setRoleText(roles[currentRoleIndex].text.slice(0, i))
        i++
        typingTimeout = setTimeout(typeRole, 70)
      } else {
        eraseTimeout = setTimeout(() => {
          let j = roles[currentRoleIndex].text.length
          const erase = () => {
            if (j >= 0) {
              setRoleText(roles[currentRoleIndex].text.slice(0, j))
              j--
              eraseTimeout = setTimeout(erase, 40)
            } else {
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
            }
          }
          erase()
        }, 1200)
      }
    }
    typeRole()
    return () => {
      clearTimeout(typingTimeout)
      clearTimeout(eraseTimeout)
    }
  }, [currentRoleIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-2 sm:px-4 py-10 sm:py-20 relative overflow-hidden">
      {/* Floating background dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div
              className="w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        <div className="mb-8 animate-fade-in-up">
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full animate p-1">
              <div className="w-full h-full bg-slate-900 rounded-full p-2">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/InShot_20240601_195555979-photoaidcom-cropped.jpg-zGO6RcM6MYsuhZtOHLhDDwrrHQKX0Z.png"
                  alt="Arpan Dutta - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full p-1 animate-no-bounce shadow-lg">
              <Verified className="w-9 h-9 text-white " />
            </div>
          
            <Sparkles className="absolute -bottom-1 -left-1 w-8 h-8 text-yellow-400 animate-pulse" />
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent break-words">
            {typedText}
            <span className="animate-blink">|</span>
          </h1>

          <div className="text-base xs:text-lg sm:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in-up animation-delay-300">
            <span className={`bg-gradient-to-r ${roles[currentRoleIndex].gradient} bg-clip-text text-transparent font-semibold`}>
              {roleText}
              <span className="animate-blink">|</span>
            </span>
          </div>

          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600 px-2 sm:px-4">
            Passionate about technology, software development, and AI applications in healthcare. Experienced in IoT
            projects, full-stack web development with MERN stack, and machine learning applications. Fueled by endless
            cups of tea! ☕
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 animate-fade-in-up animation-delay-900 px-2 sm:px-4">
          {/* Contact Buttons */}
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-purple-400/30 hover:border-purple-400 hover:bg-purple-500/20 text-white transition-all duration-300">
            <a href="tel:+919547835404" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              <Phone className="w-4 h-4 text-purple-400" />
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-500/20 text-white transition-all duration-300">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arpandutta.in@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-pink-400/30 hover:border-pink-400 hover:bg-pink-500/20 text-white transition-all duration-300">
            <a href="https://linkedin.com/in/arpandutta2k26" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              <Linkedin className="w-4 h-4 text-pink-400" />
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-green-400/30 hover:border-green-400 hover:bg-green-500/20 text-white transition-all duration-300">
            <a href="https://github.com/arpandutta05" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              <Github className="w-4 h-4 text-green-400" />
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-pink-400/30 hover:border-pink-400 hover:bg-pink-500/20 text-white transition-all duration-300">
            <a href="https://www.instagram.com/romio.arpan/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              <Instagram className="w-4 h-4 text-pink-400" />
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-sky-400/30 hover:border-sky-400 hover:bg-sky-500/20 text-white transition-all duration-300">
            <a href="https://x.com/romioarpan" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              <Twitter className="w-4 h-4 text-sky-400" />
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-2 xs:gap-4 animate-fade-in-up animation-delay-1200 px-2 sm:px-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <a href="https://github.com/arpandutta05?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-purple-400/30 hover:border-purple-400 hover:bg-purple-500/20 text-white transition-all duration-300 px-4">
            <div className="flex items-center space-x-2">
              <a href="https://drive.google.com/uc?export=download&id=1ZIVIYrpcdBFAWPF0CRgT6sAsuHKbUhHQ" download onClick={(e) => e.stopPropagation()} className="hover:scale-110 transition-transform" title="Download Resume">
                <Download className="w-4 h-4 text-white" />
              </a>
              <a href="https://drive.google.com/file/d/1ZIVIYrpcdBFAWPF0CRgT6sAsuHKbUhHQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="font-medium text-white hover:underline">
                View Resume
              </a>
            </div>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero