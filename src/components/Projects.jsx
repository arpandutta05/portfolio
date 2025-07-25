import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";
import { ExternalLink, Github, Star, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import DocumentViewer from "./DocumentViewer";

const Projects = () => {
  const projects = [
    {
      title: "CKD Prediction using ML",
      description:
        "Developed and deployed a web application using full-stack technologies to predict CKD risk and diagnose cases. Facilitated CSV upload, selection among 4 medical datasets, and download of predicted results.",
      tech: [
        "Flask",
        "XGBoost",
        "scikit-learn",
        "React",
        "Vite",
        "Tailwind CSS",
      ],
      image:
        "https://github.com/arpandutta05/CKD_Prediction/blob/main/frontend/src/assets/ckd_illustration.png?raw=true",
      liveDemo: "https://ckdprediction.vercel.app/",
      github: "https://github.com/arpandutta05/CKD_Prediction",
      color: "from-blue-500 to-cyan-500",
      featured: true,
    },
    {
      title: "DocScribd - Doctor Appointment Booking",
      description:
        "Created DocScribd, a MERN stack web app for live doctor appointment booking with role-based access for clinics and patients. Implemented JWT-based authentication and authorization mechanism.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      image:
        "https://docscribd.vercel.app/static/media/brand_logo.f58c356d3724b91d5018.png",
      liveDemo: "https://docscribd.vercel.app/",
      github: "https://github.com/arpandutta05/DocScribd",
      color: "from-green-500 to-emerald-500",
      featured: true,
    },
    {
      title: "PlantTribe - Smart Gardening Platform",
      description:
        "Built PlantTribe, a MERN stack web platform that connects gardeners, farmers, and dealers. Features image-based plant disease detection, compost tracking, and voice-assisted guidance.",
      tech: ["MERN Stack", "Razorpay", "ML", "Voice Recognition"],
      image:
        "https://via.placeholder.com/500x300/A855F7/FFFFFF?text=PlantTribe+Platform",
      liveDemo: "https://planttribe.onrender.com/",
      github: "https://github.com/arpandutta05/PlantTribe",
      color: "from-purple-500 to-pink-500",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-purple-800/30 to-indigo-800/40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-200 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Innovative solutions combining cutting-edge technology with
              real-world applications
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} animation="zoom-in" delay={index * 200}>
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 border-0 bg-white/5 backdrop-blur-lg border-white/10 hover:scale-105">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div
                      className={`flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-bold shadow-lg`}
                    >
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                )}

                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>

                  <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white shadow-lg text-xs sm:text-sm transform hover:scale-110 transition-all duration-200"
                      >
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Explore
                      </Button>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 border-white text-gray-900 hover:bg-white shadow-lg text-xs sm:text-sm transform hover:scale-110 transition-all duration-200"
                      >
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>

                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full text-white shadow-sm bg-gradient-to-r ${project.color} transform hover:scale-105 transition-transform duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <DocumentViewer
                    documents={project.documents}
                    title={project.title}
                  />
                </CardContent>

                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={600}>
          <div className="text-center mt-12 sm:mt-16">
            <a
              href="https://github.com/arpandutta05?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
