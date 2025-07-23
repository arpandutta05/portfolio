import { GraduationCap, Calendar, MapPin } from "lucide-react"
import ScrollReveal from "./ScrollReveal"
import DocumentViewer from "./DocumentViewer"

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "JIS College of Engineering, Kalyani",
      grade: "6.91 CGPA (Till 5th Sem)",
      year: "2022-2026",
      status: "Pursuing",
      image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=JIS+College",
      color: "from-blue-500 to-purple-500",
      documents: [
        {
          name: "Admission Letter.pdf",
          url: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Admission+Letter",
          type: "application/pdf",
        },
        {
          name: "Semester 1 Marksheet.pdf",
          url: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Sem+1+Marksheet",
          type: "application/pdf",
        },
        {
          name: "College ID Card.jpg",
          url: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=College+ID",
          type: "image/jpeg",
        },
        {
          name: "College Photo.jpg",
          url: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=College+Building",
          type: "image/jpeg",
        },
      ],
    },
    {
      degree: "Higher Secondary",
      institution: "Basirhat Town High School (WBCHSE)",
      grade: "81%",
      year: "2022",
      status: "Completed",
      image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=High+School",
      color: "from-green-500 to-blue-500",
      documents: [
        {
          name: "HS Admit Card.pdf",
          url: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=HS+Admit+Card",
          type: "application/pdf",
        },
        {
          name: "HS Marksheet.pdf",
          url: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=HS+Marksheet",
          type: "application/pdf",
        },
        {
          name: "School Photo.jpg",
          url: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=School+Building",
          type: "image/jpeg",
        },
      ],
    },
    {
      degree: "Secondary",
      institution: "Rampur P.D.S.S. Niketan (WBBSE)",
      grade: "77%",
      year: "2020",
      status: "Completed",
      image: "https://via.placeholder.com/400x300/F97316/FFFFFF?text=Secondary+School",
      color: "from-orange-500 to-red-500",
      documents: [
        {
          name: "Madhyamik Admit Card.pdf",
          url: "https://via.placeholder.com/600x400/F97316/FFFFFF?text=Madhyamik+Admit+Card",
          type: "application/pdf",
        },
        {
          name: "Madhyamik Marksheet.pdf",
          url: "https://via.placeholder.com/600x400/F97316/FFFFFF?text=Madhyamik+Marksheet",
          type: "application/pdf",
        },
      ],
    },
  ]

  return (
    <section
      id="education"
      className="py-16 sm:py-20 px-4 bg-gradient-to-br from-slate-800/30 via-purple-800/20 to-indigo-800/30"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Educational Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <ScrollReveal key={index} animation="fade-left" delay={index * 200}>
              <div className="group relative overflow-hidden bg-white/5 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl border border-white/10 transition-all duration-700 hover:scale-105">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative overflow-hidden">
                    <img
                      src={edu.image || "/placeholder.svg"}
                      alt={edu.institution}
                      className="w-full h-48 sm:h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  </div>

                  <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div
                        className={`bg-gradient-to-br ${edu.color} p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 lg:mb-0">{edu.degree}</h3>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-medium text-sm sm:text-base">{edu.year}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                          <p className="text-base sm:text-lg text-gray-300">{edu.institution}</p>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}
                          >
                            {edu.grade}
                          </div>
                          <span
                            className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${
                              edu.status === "Pursuing"
                                ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                                : "bg-gradient-to-r from-gray-400 to-gray-600 text-white"
                            }`}
                          >
                            {edu.status}
                          </span>
                        </div>

                        <DocumentViewer documents={edu.documents} title={edu.degree.split(" ")[0]} />
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
  )
}

export default Education
