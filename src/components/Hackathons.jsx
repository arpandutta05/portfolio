"use client"

import { Calendar, Users, Code, Trophy, MapPin, Clock, User, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { Badge } from "./ui/Badge"
import ScrollReveal from "./ScrollReveal"

const Hackathons = () => {
  const hackathons = [
    {
      name: "Smart India Hackathon 2024",
      date: "December 15-16, 2024",
      location: "IIT Kharagpur",
      type: "National Hackathon",
      about:
        "A 36-hour national level hackathon organized by the Government of India to solve real-world problems using innovative technology solutions.",
      experience:
        "An incredible journey of non-stop coding, brainstorming, and collaboration. The pressure was intense but the learning experience was unmatched. We worked with cutting-edge technologies and received mentorship from industry experts.",
      projectName: "HealthCare AI Assistant",
      team: ["Arpan Chowdhury", "Rahul Sharma", "Priya Das", "Amit Kumar"],
      role: "Full Stack Developer & Team Lead",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "MongoDB"],
      achievement: "Finalist - Top 10",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "TechFest IIT Bombay 2024",
      date: "January 12-14, 2024",
      location: "IIT Bombay, Mumbai",
      type: "Technical Festival",
      about:
        "Asia's largest science and technology festival featuring competitions, exhibitions, and workshops across various domains of technology and innovation.",
      experience:
        "Participated in multiple events including coding competitions and robotics challenges. The scale of the event was massive with participants from across the globe. Great networking opportunities with tech enthusiasts.",
      projectName: "Smart Campus Navigation System",
      team: ["Arpan Chowdhury", "Sneha Roy", "Vikash Singh"],
      role: "Frontend Developer & UI/UX Designer",
      technologies: ["React Native", "Firebase", "Google Maps API", "Node.js"],
      achievement: "2nd Runner Up",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "HackCBS 6.0",
      date: "October 21-22, 2023",
      location: "Shaheed Sukhdev College of Business Studies, Delhi",
      type: "Inter-College Hackathon",
      about:
        "One of Delhi's premier hackathons focusing on building solutions for social good and technological advancement with themes around sustainability and innovation.",
      experience:
        "My first major hackathon experience! The energy was electric with teams working around the clock. Learned about rapid prototyping and the importance of presenting ideas effectively to judges.",
      projectName: "EcoTrack - Carbon Footprint Tracker",
      team: ["Arpan Chowdhury", "Ananya Gupta", "Rohit Mehta", "Sakshi Jain"],
      role: "Backend Developer & Database Designer",
      technologies: ["Django", "PostgreSQL", "React", "Chart.js", "AWS"],
      achievement: "Best Sustainability Solution",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "CodeFest NIT Durgapur",
      date: "March 18-19, 2024",
      location: "NIT Durgapur",
      type: "Technical Festival",
      about:
        "Annual technical festival of NIT Durgapur featuring competitive programming, hackathons, and technical workshops conducted by industry professionals.",
      experience:
        "Intense competitive programming rounds followed by a 24-hour hackathon. The problem statements were challenging and required innovative thinking. Great exposure to algorithmic problem solving.",
      projectName: "StudyBuddy - Collaborative Learning Platform",
      team: ["Arpan Chowdhury", "Deepak Kumar", "Riya Chatterjee"],
      role: "Full Stack Developer",
      technologies: ["MERN Stack", "Socket.io", "WebRTC", "Redis"],
      achievement: "Winner - Best Technical Implementation",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Hack36 IIITA",
      date: "February 10-11, 2024",
      location: "IIIT Allahabad",
      type: "Open Innovation Hackathon",
      about:
        "36-hour hackathon promoting open source development and innovation. Focus on creating solutions that can benefit the broader developer community.",
      experience:
        "Amazing community of open source enthusiasts. Learned about collaborative development and the importance of documentation. The mentors were very supportive throughout the event.",
      projectName: "DevConnect - Developer Networking Platform",
      team: ["Arpan Chowdhury", "Arjun Patel", "Meera Sharma", "Karan Joshi"],
      role: "Frontend Lead & Product Manager",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      achievement: "Most Innovative Solution",
      color: "from-red-500 to-rose-500",
    },
    {
      name: "InOut 9.0 Hackathon",
      date: "November 25-26, 2023",
      location: "IIIT Vadodara",
      type: "Student Hackathon",
      about:
        "Gujarat's biggest student-run hackathon focusing on building products that solve real-world problems with emphasis on user experience and scalability.",
      experience:
        "First time working with a completely remote team during the hackathon. Learned about effective remote collaboration and agile development practices under time constraints.",
      projectName: "FarmTech - Smart Agriculture Solution",
      team: ["Arpan Chowdhury", "Nisha Agarwal", "Suresh Yadav"],
      role: "IoT Developer & System Architect",
      technologies: ["Arduino", "ESP32", "React", "Flask", "MySQL"],
      achievement: "3rd Place Overall",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="hackathons" className="py-16 sm:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-indigo-900/50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hackathons & TechFests
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Journey through competitive coding, innovation challenges, and collaborative problem-solving experiences
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="relative">
            <div
              className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 snap-x snap-mandatory"
              style={{ scrollBehavior: "smooth" }}
            >
              {hackathons.map((hackathon, index) => (
                <div key={index} className="flex-none w-80 sm:w-96 snap-start">
                  <Card
                    className={`h-full bg-gradient-to-br ${hackathon.color} p-1 hover:scale-105 transition-all duration-500 shadow-2xl`}
                  >
                    <div className="bg-slate-900/90 backdrop-blur-lg rounded-lg h-full p-6 border border-white/10">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-3">
                          <Badge className="bg-white/20 text-white border-white/30 text-xs">{hackathon.type}</Badge>
                          <div className={`p-2 rounded-full bg-gradient-to-r ${hackathon.color}`}>
                            <Code className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        <CardTitle className="text-xl font-bold text-white mb-2 leading-tight">
                          {hackathon.name}
                        </CardTitle>

                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-cyan-400" />
                            <span>{hackathon.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span>{hackathon.location}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            About Event
                          </h4>
                          <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">{hackathon.about}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            My Experience
                          </h4>
                          <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">{hackathon.experience}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                            <Code className="w-4 h-4" />
                            Project Details
                          </h4>
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-white">{hackathon.projectName}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-300">
                              <User className="w-3 h-3" />
                              <span className="font-medium">Role:</span>
                              <span>{hackathon.role}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Team Members
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {hackathon.team.map((member, idx) => (
                              <Badge key={idx} className="text-xs bg-white/10 text-gray-300 border-white/20">
                                {member}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-1">
                            {hackathon.technologies.map((tech, idx) => (
                              <Badge
                                key={idx}
                                className={`text-xs bg-gradient-to-r ${hackathon.color} text-white border-0`}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div
                          className={`p-3 rounded-lg bg-gradient-to-r ${hackathon.color} bg-opacity-20 border border-white/20`}
                        >
                          <div className="flex items-center gap-2 text-sm font-semibold text-white">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            Achievement: {hackathon.achievement}
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {hackathons.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-colors cursor-pointer"
                ></div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={400}>
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20 hover:scale-105 transition-all duration-500">
              <Code className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Innovation Through Competition</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Each hackathon has been a stepping stone in my journey, teaching me to think fast, code efficiently, and
                collaborate effectively under pressure. The thrill of building something meaningful in just 24-48 hours
                never gets old!
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default Hackathons
