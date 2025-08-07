"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      specialization: "Computer Science & Engineering",
      institution: "JIS College of Engineering, Kalyani",
      year: "2022-2026",
      status: "Pursuing",
      image: "https://images.shiksha.com/mediadata/images/1622622785phpNI1ygk.jpeg",
      color: "from-blue-500 to-purple-500",
    },
    {
      degree: "Higher Secondary",
      specialization: "WBCHSE",
      institution: "Basirhat Town High School",
      year: "2020 - 2022",
      status: "Completed",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiBh9i-TmILlP1F9ae1QkhYzQ7oFKbRIBD4w&s",
      color: "from-green-500 to-blue-500",
    },
    {
      degree: "Secondary",
      specialization: "WBBSE",
      institution: "Rampur P. D. S. S. Niketan",
      year: "2014 - 2020",
      status: "Completed",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXsYh3Zz9z1XNt7Vt6Gsz9qxIW90WjlH2gQ&s",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="education" className="py-16 sm:py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Educational Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Education Cards */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {education.map((edu, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 200}>
              <div className="group relative overflow-hidden bg-white/5 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 transition-all duration-700 hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="w-full lg:w-2/5 relative overflow-hidden">
                    <div className="h-64 sm:h-72 lg:h-80 xl:h-96">
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                      ></div>

                      {/* Floating Icon */}
                      <div className="absolute top-6 left-6">
                        <div
                          className={`bg-gradient-to-br ${edu.color} p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}
                        >
                          <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                    {/* Header with Year */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                          {edu.degree}
                        </h3>
                        {edu.specialization && (
                          <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                            {edu.specialization}
                          </p>
                        )}
                      </div>

                      {/* Year Badge */}
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg border border-white/20 mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                        <span className="text-sm sm:text-base font-medium text-gray-300">
                          {edu.year}
                        </span>
                      </div>
                    </div>

                    {/* Institution */}
                    <div className="flex items-start gap-3 mb-4 sm:mb-6">
                      <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                        {edu.institution}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1"></div>
                      <div
                        className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-lg ${
                          edu.status === "Pursuing"
                            ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-green-500/30"
                            : "bg-gradient-to-r from-gray-500 to-slate-600 text-white shadow-gray-500/30"
                        } backdrop-blur-sm`}
                      >
                        {edu.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
