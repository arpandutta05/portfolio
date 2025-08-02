"use client"

import { useState, useEffect } from "react"
import { Menu, X, Coffee } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Participation", href: "#hackathons" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certificates", href: "#certificates" },  
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-slate-900/90 backdrop-blur-md shadow-2xl border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
          
            {/* <Coffee className="w-6 h-6 text-amber-400" /> */}
            <div className="text-xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              &lt;Arpan Dutta /&gt;
            </div>
            
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 hover:bg-clip-text transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white hover:text-purple-400 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg rounded-lg shadow-2xl mt-2 py-4 border border-purple-500/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

// export const metadata = {
//   title: "Arpan Dutta - Portfolio",
//   description: "Welcome to my portfolio website. Explore my projects, skills, and experiences.",
//   keywords: "Arpan Dutta, portfolio, web developer, projects, skills, achievements",
//   author: "Arpan Dutta",
//   viewport: "width=device-width, initial-scale=1.0",
//   robots: "index, follow",
//   "google-site-verification": "your-verification-code",
//   "og:title": "Arpan Dutta - Portfolio",
//   "og:description": "Welcome to my portfolio website. Explore my projects, skills, and experiences.",
//   "og:image": "/path-to-your-image.jpg",
//   "og:url": "https://yourwebsite.com",
//   "twitter:card": "summary_large_image",
//   "twitter:title": "Arpan Dutta - Portfolio",
//   "twitter:description": "Welcome to my portfolio website. Explore my projects, skills, and experiences.",
//   "twitter:image": "/path-to-your-image.jpg",
// }

// className="py-16 px-4 relative"
