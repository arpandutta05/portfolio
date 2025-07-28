"use client"

import { Coffee, Code, Heart } from "lucide-react"
import { useEffect, useState } from "react"
import ScrollReveal from "./ScrollReveal"

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0)

  const quotes = [
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      text: "Tea is liquid wisdom. Code is digital poetry.",
      author: "Anonymous Developer",
      icon: Coffee,
      color: "from-amber-500 to-orange-500",
    },
    {
      text: "The best error message is the one that never shows up.",
      author: "Thomas Fuchs",
      icon: Code,
      color: "from-green-500 to-emerald-500",
    },
    {
      text: "Debugging is twice as hard as writing the code in the first place.",
      author: "Brian Kernighan",
      icon: Code,
      color: "from-red-500 to-pink-500",
    },
    {
      text: "A cup of tea makes everything better, including code reviews.",
      author: "Tea-loving Developer",
      icon: Coffee,
      color: "from-amber-500 to-yellow-500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 1400)

    return () => clearInterval(interval)
  }, [quotes.length])

  const currentQuoteData = quotes[currentQuote]
  const IconComponent = currentQuoteData.icon

  return (
    <section className="py-16 px-4 relative">
      <div className="py-16 px-4 relative"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-amber-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Developer Wisdom
            </h2>

            <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl">
              <ScrollReveal animation="zoom-in" delay={200}>
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br ${currentQuoteData.color} flex items-center justify-center shadow-lg animate-pulse`}
                >
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={400}>
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-6 sm:mb-8 leading-relaxed transition-all duration-500">
                  "{currentQuoteData.text}"
                </blockquote>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={600}>
                <cite
                  className={`text-base sm:text-lg font-semibold bg-gradient-to-r ${currentQuoteData.color} bg-clip-text text-transparent transition-all duration-500`}
                >
                  — {currentQuoteData.author}
                </cite>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={800}>
                <div className="flex justify-center gap-2 mt-8 sm:mt-12">
                  {quotes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuote(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                        index === currentQuote
                          ? `bg-gradient-to-r ${currentQuoteData.color} scale-125`
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
              {[
                { icon: Coffee, label: "Cups of Tea", value: "∞", color: "text-amber-400" },
                { icon: Code, label: "Lines of Code", value: "10K+", color: "text-purple-400" },
                { icon: Heart, label: "Passion", value: "100%", color: "text-pink-400" },
              ].map((stat, index) => (
                <ScrollReveal key={index} animation="zoom-in" delay={1000 + index * 100}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                    <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${stat.color} mx-auto mb-2 sm:mb-3`} />
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Quotes
