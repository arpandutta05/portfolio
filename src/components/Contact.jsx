import { Mail, Phone, Linkedin, Github, MapPin, Send, LucideInstagram, InstagramIcon, X, TwitterIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/Button"
import { Card, CardContent } from "./ui/Card"
import ScrollReveal from "./ScrollReveal"
import { Instagram, Twitter } from "react-feather"

const Contact = () => {
  const [showForm, setShowForm] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9547835404",
      href: "tel:+919547835404",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      label: "Mail",
      value: "arpandutta.in@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=arpandutta.in@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "arpandutta2k26",
      href: "https://linkedin.com/in/arpandutta2k26",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "arpandutta05",
      href: "https://github.com/arpandutta05",
      color: "from-orange-500 to-red-500",
    },
    {
      icon:() => (
    <img
      src="https://img.icons8.com/ios7/512/FFFFFF/twitterx.png" // replace with your actual image path
      alt="X"
      className="w-6 h-6 object-contain"
    />
  ),
      label: "X (Twitter)",
      value: "romioarpan",
      href: "https://x.com/romioarpan",
      color: "from-gray-800 to-black",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "romio.arpan",
      href: "https://www.instagram.com/romio.arpan/",
      color: "from-pink-500 via-red-500 to-yellow-500",
    },
  ]

  return (
    <section
      id="contact"
      className="py-16 px-4 relative"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss new opportunities?!
              <p>
              I'd love to hear from you!!
              </p>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={200}>
          <div className="text-center mb-8 sm:mb-12">
            <Card className="inline-block bg-white/10 backdrop-blur-lg border-white/20 text-white hover:scale-105 transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  <span className="text-base sm:text-lg">Kalyani, West Bengal, India</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <ScrollReveal key={index} animation="fade-up" delay={300 + index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white/10 backdrop-blur-lg border-white/20 hover:scale-105">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div
                        className={`bg-gradient-to-br ${contact.color} p-3 sm:p-4 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{contact.label}</h3>
                        <a
                          href={contact.href}
                          className={`text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:${contact.color} hover:bg-clip-text transition-all duration-300 text-base sm:text-lg break-all`}
                          target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
                          rel={
                            contact.label === "LinkedIn" || contact.label === "GitHub"
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal animation="zoom-in" delay={700}>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 border border-white/20 hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Ready to Start Something Amazing?!
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'm always excited
                to connect with fellow developers and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setShowForm(!showForm)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </Button>
                <a
                  href="tel:9547835404"
                  className="flex items-center justify-center px-6 py-2 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Schedule Call
                </a>
              </div>

              {showForm && (
                <form
                  action="https://formspree.io/f/xovldvqk"
                  method="POST"
                  className="mt-8 grid gap-4 text-left"
                >
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name : "
                    required
                    className="p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
                  />
                  <input
                    type="tel"
                    name="Phone No"
                    placeholder="Mobile No : "
                    className="p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
                  />
                  <input
                    type="email"
                    name="Mail"
                    placeholder="Mail ID :"
                    required
                    className="p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
                  />
                  <input
                    type="text"
                    name="Feedback / Reason"
                    placeholder="Feedback / Reason :"
                    className="p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
                  />
                  <textarea
                    name="Message"
                    rows={4}
                    placeholder="Message :"
                    required
                    className="p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300"
                  ></textarea>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Submit
                  </Button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={900}>
          <div className="text-center mt-6 sm:mt-12 pt-6 sm:pt-6 border-t border-white/20">
            <p className="text-gray-400 text-sm sm:text-base">© 2025 - &lt;Arpan Dutta /&gt; Crafted with ❤️ and lots of ☕</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
