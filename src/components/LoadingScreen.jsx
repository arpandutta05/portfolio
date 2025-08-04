"use client"

import { useEffect, useState } from "react"
import { Coffee, Code, Sparkles } from "lucide-react"

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    "Welcome to Arpan's Galaxy....",
    "Are you excited?!",
    "Almost ready to impress you...",
    "And also an advance thanks from Myself...",
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => onLoadingComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length)
    }, 800)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Background Image with Shadow Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1401568968/vector/blue-matrix-background-abstract-binary-code-wallpaper-template-for-hackathon-and-other.jpg?s=612x612&w=0&k=20&c=7WQvXlYcGvriTqRg-bQENTqDTISNnmOB5pSeprNqGBQ=')",
          filter: "brightness(0.3)",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Blobs */}
      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute -top-6 -right-6 w-16 h-16 sm:-top-32 sm:-right-32 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 sm:-bottom-32 sm:-left-32 sm:w-80 sm:h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-6 left-6 w-16 h-16 sm:top-32 sm:left-32 sm:w-80 sm:h-80 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center text-white w-full max-w-[98vw] px-2 sm:px-0">
        {/* Logo Spinner */}
        <div className="relative w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-spin-slow p-1">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
              <div className="text-lg sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AD
              </div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full p-2 animate-bounce">
            <Coffee className="w-4 h-4 text-white" />
          </div>
          <Sparkles className="absolute -bottom-1 -left-1 w-6 h-6 text-yellow-400 animate-pulse" />
        </div>

        {/* Loading Text */}
        <h2 className="text-sm sm:text-2xl font-bold text-white mb-2 animate-pulse break-words">
          {loadingTexts[currentText]}
        </h2>

        {/* Progress Bar */}
        <div className="w-full max-w-[90vw] sm:max-w-sm md:max-w-md mx-auto mb-4">
          <div className="bg-white/30 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Percentage */}
        <div className="text-gray-200 text-xs sm:text-sm font-medium">
          {progress}%
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 70}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              {i % 3 === 0 ? (
                <Code className="w-4 h-4 text-purple-400 opacity-60" />
              ) : i % 3 === 1 ? (
                <Coffee className="w-4 h-4 text-amber-400 opacity-60" />
              ) : (
                <Sparkles className="w-4 h-4 text-cyan-400 opacity-60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
