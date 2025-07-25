import { useEffect, useRef, useState } from "react";
import { Github, Video, Link as LinkIcon } from "lucide-react";

const hackathons = [
  {
    title: "Binary",
    location: "Kalyani, Nadia",
    description:
      "Developed GestureSlide — interactive gesture-based presentation tool with a dashboard and real-time annotations.",
    links: [
      { label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
      { label: "Video", url: "#", icon: <Video className="w-4 h-4 mr-1" /> },
    ],
  },
  {
    title: "StatusCode1",
    location: "Kolkata, West Bengal",
    description:
      "Organ donation web app for transparent scheduling and communication with hospitals.",
    links: [
      { label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
      { label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
    ],
  },
  {
    title: "Diversion 2k25",
    location: "Kolkata, West Bengal",
    description:
      "Meeting scheduler with auto reminders and shared attendee lists.",
    links: [
      { label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
      { label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
    ],
  },
  {
    title: "Level SuperMind",
    location: "Mumbai, Maharashtra",
    description:
      "Generated kundlis based on user data with astrological insights.",
    links: [
      { label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
      { label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
    ],
  },
  {
    title: "Diversion 2k25",
    location: "Kolkata, West Bengal",
    description:
      "Meeting scheduler with auto reminders and shared attendee lists.",
    links: [
      { label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
      { label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
    ],
  },
  {
    title: "Diversion 2k24",
    location: "Kolkata, West Bengal",
    description:
      "TouchMap: CV-based map exploration with interactive education games.",
    links: [
      { label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
      { label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
    ],
  },
  {
    title: "Diversion 2k25",
    location: "Kolkata, West Bengal",
    description:
      "Meeting scheduler with auto reminders and shared attendee lists.",
    links: [
      { label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
      { label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
    ],
  },
];

function HackathonCard({ hackathon, isActive }) {
  return (
    <div
      className={`min-w-[240px] sm:min-w-[260px] max-w-[300px] bg-gradient-to-br from-purple-800 to-indigo-900 text-white rounded-3xl shadow-2xl p-6 border border-purple-500 relative transition-transform duration-500 ease-in-out transform ${
        isActive ? "scale-105 z-10" : "scale-95 opacity-80"
      }`}
      style={{ marginTop: isActive ? "0px" : "40px", marginBottom: isActive ? "0px" : "40px" }}
    >
      <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 h-14 w-1 bg-gradient-to-b from-emerald-400 to-indigo-500" />
      <h3 className="text-xl font-bold text-emerald-300 mb-2 text-center">{hackathon.title}</h3>
      <p className="text-sm text-violet-300 italic mb-3 text-center">{hackathon.location}</p>
      <p className="text-sm text-purple-100 mb-4 text-center">{hackathon.description}</p>
      <div className="flex flex-wrap gap-3 justify-center">
        {hackathon.links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-emerald-400 text-emerald-300 hover:bg-emerald-500 hover:text-white rounded-full transition inline-flex items-center"
          >
            {link.icon} {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function HackathonTimelineHorizontal() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scroll = scrollRef.current;
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % hackathons.length;
      const card = scroll.children[nextIndex];
      if (card) {
        scroll.scrollTo({
          left: card.offsetLeft - scroll.offsetWidth / 2 + card.offsetWidth / 2,
          behavior: "smooth",
        });
      }
      setCurrentIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="hackathons" className="px-5 py-10 bg-gradient-to-br from-[#08001f] to-[#130f40] overflow-hidden relative">
      <h2 className="text-4xl font-bold text-center mb-6 text-pink-300">
        Hackathons I've <span className="text-emerald-400">Conquered</span>
      </h2>
      <p className="text-center text-purple-300 mb-10 max-w-3xl mx-auto">
        From local to national level hackathons, each experience sharpened my
        skills and proved my passion for building under pressure.
      </p>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-6 px-6 pb-16"
        style={{ scrollBehavior: "smooth" }}
      >
        {hackathons.map((hackathon, index) => (
          <HackathonCard
            key={index}
            hackathon={hackathon}
            isActive={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
