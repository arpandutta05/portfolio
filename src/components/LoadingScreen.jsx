"use client"

import { useEffect, useState } from "react"
import { Coffee, Code, Sparkles } from "lucide-react"

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)

  const loadingTexts = [
    "Brewing fresh code...",
    "Initializing tea protocols...",
    "Loading awesome projects...",
    "Preparing portfolio magic...",
    "Almost ready to impress...",
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
  }, [onLoadingComplete, loadingTexts.length])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-spin-slow p-1">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AD
              </div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full p-2 animate-bounce">
            <Coffee className="w-4 h-4 text-white" />
          </div>
          <Sparkles className="absolute -bottom-1 -left-1 w-6 h-6 text-yellow-400 animate-pulse" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-2 animate-pulse">{loadingTexts[currentText]}</h2>

        <div className="w-80 max-w-sm mx-auto mb-4">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="text-gray-300 text-sm font-medium">{progress}%</div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
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
