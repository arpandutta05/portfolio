"use client"

import { useEffect, useState } from "react"

const MouseTrail = () => {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newStar = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 2,
        opacity: 1,
      }

      setStars((prevStars) => {
        const updatedStars = [...prevStars, newStar].slice(-15)
        return updatedStars
      })

      setTimeout(() => {
        setStars((prevStars) => prevStars.filter((star) => star.id !== newStar.id))
      }, 1000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-ping"
          style={{
            left: star.x - star.size / 2,
            top: star.y - star.size / 2,
            width: star.size,
            height: star.size,
            animationDuration: "1s",
            animationFillMode: "forwards",
          }}
        >
          <div
            className="w-full h-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-full"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default MouseTrail
