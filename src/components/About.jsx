import { Code, Brain, Cpu, Coffee } from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import ScrollReveal from "./ScrollReveal"

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack applications with MERN stack",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Healthcare applications and predictive models",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: Cpu,
      title: "IoT Projects",
      description: "NodeMCU and ESP32-CAM systems",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="mb-12 sm:mb-16">
            <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 place-items-center sm:gap-10 lg:gap-0">
              {/* Left: animated illustration — centered; keep right padding on mobile */}
              <div className="flex items-center justify-center w-full">
                <div className="order-1 md:order-2 relative w-full px-20 pr-10 sm:pr-12 md:pr-0 md:mr-0">
                  <div className="relative z-10 rounded-lg overflow-hidden mx-auto w-64 sm:w-80 md:w-full md:max-w-[900px]">
                    <DotLottieReact
                      // src="img/MyImage_2.jpg"
                      src="https://lottie.host/1ea00622-161d-4102-ac33-a449424558de/GgJOf7y2Ka.lottie"
                      loop
                      autoplay
                      className="w-full h-auto transform md:scale-130 md:origin-center"
                      style={{
                        maxHeight: "800px",
                        display: "block",
                        background: "transparent",
                      }}
                      background="transparent"
                    />
                  </div>

                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br transparent transform translate-x-4 translate-y-4 rounded-lg -z-10 animation"></div>
                </div>
              </div>

              {/* Right: text */}
              <div>
                <div className="flex items-center justify-center md:justify-start mb-6 md:mb-0">
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-8 border border-white/10 transition-all duration-700 hover:scale-[1.08]">
                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center md:text-left bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Who am I ?!
            </h2>
                    I am a passionate and driven individual with a strong interest in technology, software development,
                    and AI applications in healthcare. I have hands-on experience with IoT projects, including NodeMCU and
                    ESP32-CAM-based systems. I have also developed full-stack web applications using the MERN stack.
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-4 justify-between right-4">
                    I specialize in developing scalable applications using Spring Boot, Hibernate, and other Java frameworks.
                    I'm also proficient in frontend technologies like HTML, CSS, JavaScript, and have experience with IoT projects.
                  </p>

                  <div className="flex justify-end">
                    <div className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-amber-400/30">
                      {/* <Coffee className="w-5 h-5 text-amber-400" /> */}
                      <span className="text-amber-300 font-semibold text-sm"> ~ Mr. Dutta</span>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <ScrollReveal key={index} animation="slide-up" delay={index * 200}>
                <div className="group relative overflow-hidden rounded-2xl p-6 sm:p-8 hover:scale-105 transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-80`}></div>
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"></div>

                  <div className="relative z-10 text-center">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
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

export default About
