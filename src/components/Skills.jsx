import { Badge } from "./ui/Badge"
import { Code, Database, Wrench, Layers } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "JavaScript", "HTML", "CSS"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      badgeColors: ["bg-blue-500", "bg-cyan-500", "bg-indigo-500", "bg-purple-500", "bg-pink-500", "bg-red-500"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js"],
      icon: Layers,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      badgeColors: ["bg-green-500", "bg-emerald-500", "bg-teal-500", "bg-cyan-600", "bg-blue-600", "bg-indigo-500"],
    },
    {
      title: "Databases & Storage",
      skills: ["MongoDB", "MySQL", "Supabase"],
      icon: Database,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      badgeColors: ["bg-purple-500", "bg-pink-500", "bg-rose-500", "bg-red-500", "bg-orange-500"],
    },
    {
      title: "Tools & Platforms",
      skills: ["VSCode", "Google Colab", "Git", "GitHub", "Vercel"],
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      badgeColors: [
        "bg-orange-500",
        "bg-red-500",
        "bg-yellow-500",
        "bg-amber-500",
        "bg-lime-500",
        "bg-green-600",
        "bg-teal-600",
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-16 px-4 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <ScrollReveal key={categoryIndex} animation="zoom-in" delay={categoryIndex * 200}>
                <div className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-80`}></div>
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl"></div>

                  <div className="relative z-10 p-6 sm:p-8 h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{category.title}</h3>
                    </div>
              
                    <div className="space-y-2 sm:space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <ScrollReveal
                          key={skillIndex}
                          animation="fade-left"
                          delay={categoryIndex * 200 + skillIndex * 100}
                        >
                          <Badge
                            className={`w-full justify-center py-2 px-3 sm:px-4 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm ${category.badgeColors[skillIndex % category.badgeColors.length]}`}
                          >
                            {skill}
                          </Badge>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
                  ></div>

                  <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal animation="fade-up" delay={800}>
          <div className="mt-12 sm:mt-16 relative h-24 sm:h-32 overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-scroll-left space-x-4 sm:space-x-6">
                {[...Array(3)].map((_, repeatIndex) => (
                  <div key={repeatIndex} className="flex space-x-4 sm:space-x-6">
                    {skillCategories
                      .flatMap((cat) => cat.skills)
                      .map((skill, index) => (
                        <div
                          key={`${repeatIndex}-${index}`}
                          className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg text-sm sm:text-base hover:scale-110 transition-transform duration-300"
                        >
                          {skill}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-purple-800/30 to-indigo-800/40"></div>
    </section>
  )
}

export default Skills
