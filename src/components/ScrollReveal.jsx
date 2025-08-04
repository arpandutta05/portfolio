"use client"

import { useEffect, useRef, useState } from "react"

const ScrollReveal = ({ children, animation = "fade-up", delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        } else {
          setIsVisible(false) // <-- Reset when out of view
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out"

    switch (animation) {
      case "fade-up":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
      case "fade-down":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`
      case "fade-left":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`
      case "fade-right":
        return `${baseClasses} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`
      case "zoom-in":
        return `${baseClasses} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`
      case "zoom-out":
        return `${baseClasses} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
      case "rotate-in":
        return `${baseClasses} ${isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-12"}`
      default:
        return `${baseClasses} ${isVisible ? "opacity-100" : "opacity-0"}`
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}

export default ScrollReveal
