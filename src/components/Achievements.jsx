import { Trophy, FileText, Award } from "lucide-react"
import { Button } from "./ui/Button"
import ScrollReveal from "./ScrollReveal"
import DocumentViewer from "./DocumentViewer"

const Achievements = () => {
  const achievements = [
    {
      title: "Winner JISTech2k23",
      description:
        "Achieved First Position from CSE department at JISTech2k23 for our innovative IoT project Smart Shopping Trolley.",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      type: "Competition",
      documents: [
        {
          name: "Winner Certificate.pdf",
          url: "https://via.placeholder.com/600x400/EAB308/FFFFFF?text=Winner+Certificate",
          type: "application/pdf",
        },
        {
          name: "Competition Photo.jpg",
          url: "https://via.placeholder.com/600x400/EAB308/FFFFFF?text=Competition+Photo",
          type: "image/jpeg",
        },
        {
          name: "Project Presentation.pdf",
          url: "https://via.placeholder.com/600x400/EAB308/FFFFFF?text=Project+Presentation",
          type: "application/pdf",
        },
      ],
    },
    {
      title: "Patent Published",
      description: "Published a patent for Smart Shopping Trolley.",
      icon: Award,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      type: "Patent",
      documents: [
        {
          name: "Patent Certificate.pdf",
          url: "https://via.placeholder.com/600x400/A855F7/FFFFFF?text=Patent+Certificate",
          type: "application/pdf",
        },
        {
          name: "Patent Application.pdf",
          url: "https://via.placeholder.com/600x400/A855F7/FFFFFF?text=Patent+Application",
          type: "application/pdf",
        },
      ],
    },
    {
      title: "Research Paper Published",
      description: "Published a research paper for DocScribd in LJSREM e-Journal.",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      type: "Publication",
      documents: [
        {
          name: "Research Paper.pdf",
          url: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Research+Paper",
          type: "application/pdf",
        },
        {
          name: "Publication Certificate.pdf",
          url: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Publication+Certificate",
          type: "application/pdf",
        },
      ],
    },
  ]

  return (
    <section id="achievements" className="py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Achievements & Publications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <ScrollReveal key={index} animation="zoom-in" delay={index * 200}>
                <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-80`}></div>
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl"></div>

                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${achievement.color} text-white`}
                      >
                        {achievement.type}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{achievement.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{achievement.description}</p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 mb-4"
                    >
                      View Details
                    </Button>

                    <DocumentViewer documents={achievement.documents} title={achievement.title} />
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
                  ></div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
