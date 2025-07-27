import { Award, Download, Eye, FolderOpen, Star, Calendar } from "lucide-react"
import { Button } from "./ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import ScrollReveal from "./ScrollReveal"
import DocumentViewer from "./DocumentViewer"

const Certificates = () => {
  const certificates = [
    // {
    //   title: "Full Stack Web Development",
    //   issuer: "Coursera",
    //   date: "2023",
    //   image: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Full+Stack+Certificate",
    //   color: "from-blue-500 to-cyan-500",
    //   type: "Course Completion",
    //   documents: [
    //     {
    //       name: "Certificate.pdf",
    //       url: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Full+Stack+Certificate",
    //       type: "application/pdf",
    //     },
    //     {
    //       name: "Course Completion Badge.png",
    //       url: "https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Badge",
    //       type: "image/png",
    //     },
    //   ],
    // },
    // {
    //   title: "Machine Learning Specialization",
    //   issuer: "Stanford University",
    //   date: "2023",
    //   image: "https://via.placeholder.com/300x200/A855F7/FFFFFF?text=ML+Certificate",
    //   color: "from-purple-500 to-pink-500",
    //   type: "Specialization",
    //   documents: [
    //     {
    //       name: "ML Specialization Certificate.pdf",
    //       url: "https://via.placeholder.com/600x400/A855F7/FFFFFF?text=ML+Certificate",
    //       type: "application/pdf",
    //     },
    //     {
    //       name: "Course 1 Certificate.pdf",
    //       url: "https://via.placeholder.com/600x400/A855F7/FFFFFF?text=Course+1+Certificate",
    //       type: "application/pdf",
    //     },
    //   ],
    // },
    // {
    //   title: "React Developer Certification",
    //   issuer: "Meta",
    //   date: "2023",
    //   image: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=React+Certificate",
    //   color: "from-green-500 to-emerald-500",
    //   type: "Professional Certificate",
    //   documents: [
    //     {
    //       name: "React Certificate.pdf",
    //       url: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=React+Certificate",
    //       type: "application/pdf",
    //     },
    //     {
    //       name: "Meta Badge.png",
    //       url: "https://via.placeholder.com/300x300/10B981/FFFFFF?text=Meta+Badge",
    //       type: "image/png",
    //     },
    //   ],
    // },
    // {
    //   title: "AWS Cloud Practitioner",
    //   issuer: "Amazon Web Services",
    //   date: "2023",
    //   image: "https://via.placeholder.com/300x200/F97316/FFFFFF?text=AWS+Certificate",
    //   color: "from-orange-500 to-red-500",
    //   type: "Cloud Certification",
    //   documents: [
    //     {
    //       name: "AWS Certificate.pdf",
    //       url: "https://via.placeholder.com/600x400/F97316/FFFFFF?text=AWS+Certificate",
    //       type: "application/pdf",
    //     },
    //     {
    //       name: "AWS Badge.png",
    //       url: "https://via.placeholder.com/300x300/F97316/FFFFFF?text=AWS+Badge",
    //       type: "image/png",
    //     },
    //   ],
    // },
    // {
    //   title: "Python for Data Science",
    //   issuer: "IBM",
    //   date: "2022",
    //   image: "https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Python+Certificate",
    //   color: "from-indigo-500 to-purple-500",
    //   type: "Data Science",
    //   documents: [
    //     {
    //       name: "Python Certificate.pdf",
    //       url: "https://via.placeholder.com/600x400/6366F1/FFFFFF?text=Python+Certificate",
    //       type: "application/pdf",
    //     },
    //     {
    //       name: "IBM Badge.png",
    //       url: "https://via.placeholder.com/300x300/6366F1/FFFFFF?text=IBM+Badge",
    //       type: "image/png",
    //     },
    //   ],
    // },
    // {
    //   title: "IoT Fundamentals",
    //   issuer: "Cisco",
    //   date: "2022",
    //   image: "https://via.placeholder.com/300x200/14B8A6/FFFFFF?text=IoT+Certificate",
    //   color: "from-teal-500 to-blue-500",
    //   type: "Technology",
    //   documents: [
    //     {
    //       name: "IoT Certificate.pdf",
    //       url: "https://via.placeholder.com/600x400/14B8A6/FFFFFF?text=IoT+Certificate",
    //       type: "application/pdf",
    //     },
    //     {
    //       name: "Cisco Badge.png",
    //       url: "https://via.placeholder.com/300x300/14B8A6/FFFFFF?text=Cisco+Badge",
    //       type: "image/png",
    //     },
    //   ],
    // },
  ]

  return (
    <section
      id="certificates"
      className="py-16 sm:py-20 px-4 bg-gradient-to-br from-amber-50/5 via-orange-50/5 to-red-50/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L60 40L70 50L60 60z' fill='%23f59e0b' fillOpacity='0.3'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Certificates & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-red-400 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Professional certifications and continuous learning journey
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={200}>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg p-6 mb-8 border border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl">
                  <FolderOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Certificate Drive</h3>
                  <p className="text-gray-300">All earned certificates and achievements</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg">
                <Download className="w-4 h-4 mr-2" />
                Download All
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <ScrollReveal key={index} animation="rotate-in" delay={index * 100}>
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 border-0 bg-white/5 backdrop-blur-lg border-white/10 hover:scale-105">
                <div className="absolute top-4 left-4 z-20">
                  <div
                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-bold shadow-lg`}
                  >
                    {cert.type}
                  </div>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>

                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/90 text-gray-900 hover:bg-white shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 border-white text-gray-900 hover:bg-white shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                    {cert.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-300 font-medium">{cert.issuer}</p>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className={`w-full bg-gradient-to-r ${cert.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white mb-4`}
                  >
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>

                  <DocumentViewer documents={cert.documents} title={cert.title} />
                </CardContent>

                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={800}>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Total Certificates", value: "15+", color: "from-blue-500 to-cyan-500" },
              { label: "Specializations", value: "5", color: "from-purple-500 to-pink-500" },
              { label: "Professional Certs", value: "8", color: "from-green-500 to-emerald-500" },
              { label: "Learning Hours", value: "200+", color: "from-orange-500 to-red-500" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Certificates
