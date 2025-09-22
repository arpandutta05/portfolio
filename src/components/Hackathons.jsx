import { useEffect, useRef, useState } from "react";
import { Github, Video, Link as LinkIcon } from "lucide-react";

const hackathons = [
	{
		title: "Binary",
		location: "KGEC,Kalyani",
		date: "2025",
		team: "Quantum Minds",
		description:
			"Smart Packaging System with IoT and AI for real-time tracking and security.",
		links: [
			{ label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
			{ label: "Video", url: "#", icon: <Video className="w-4 h-4 mr-1" /> },
		],
	},
	{
		title: "Innovocon",
		location: "JISCE, Kalyani",
		date: "2025",
		team: "TechSparks",
		description:
			"DocScribd.",
		links: [
			{ label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
			{ label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
		],
	},
	{
		title: "Hack-O-NIT",
		location: "Kolkata, West Bengal",
		date: "2024",
		team: "Quantum Minds",
		description:
			"qwerty",
		links: [
			{ label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
			{ label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
		],
	},
	// {
	// 	title: "Level SuperMind",
	// 	location: "Mumbai, Maharashtra",
	// 	description:
	// 		"Generated kundlis based on user data with astrological insights.",
	// 	links: [
	// 		{ label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
	// 		{ label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
	// 	],
	// },
	// {
	// 	title: "Diversion 2k25",
	// 	location: "Kolkata, West Bengal",
	// 	description:
	// 		"Meeting scheduler with auto reminders and shared attendee lists.",
	// 	links: [
	// 		{ label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
	// 		{ label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
	// 	],
	// },
	// {
	// 	title: "Diversion 2k24",
	// 	location: "Kolkata, West Bengal",
	// 	description:
	// 		"TouchMap: CV-based map exploration with interactive education games.",
	// 	links: [
	// 		{ label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
	// 		{ label: "Devfolio", url: "#", icon: <LinkIcon className="w-4 h-4 mr-1" /> },
	// 	],
	// },
	{
		title: "JISTech 2k23",
		location: "JISCE, Kalyani",
		description:
			"Smart Shopping Trolley",
		links: [
			{ label: "Github", url: "#", icon: <Github className="w-4 h-4 mr-1" /> },
			{ label: "Video", url: "https://youtu.be/V8KDdFkTdgU", icon: <Video className="w-4 h-4 mr-1" /> },
		],
	},
];

function HackathonCard({ hackathon, isActive }) {
	return (
		<div
			className={`min-w-[240px] sm:min-w-[260px] max-w-[300px] bg-gradient-to-br from-purple-900 to-indigo-900 text-white rounded-3xl shadow-2xl p-6 border border-purple-500 relative transition-transform duration-500 ease-in-out transform ${
				isActive ? "scale-105 z-10" : "scale-95 opacity-50"
			}`}
			style={{ marginTop: isActive ? "30px" : "45px", marginBottom: isActive ? "10px" : "30px" }}
		>
			<div className="absolute top-[-58px] left-1/2 transform -translate-x-1/2 h-14 w-1 bg-gradient-to-b from-emerald-400 to-indigo-500" />
			<h3 className="text-xl font-bold text-emerald-300 mb-2 text-center">{hackathon.title}</h3>
			<p className="text-sm text-violet-300 italic mb-3 text-center">{hackathon.location}</p>
			<p className="text-sm text-violet-300 italic mb-3 text-center">{hackathon.date}</p>
			<p className="text-sm text-violet-300 italic mb-3 text-center">{hackathon.team}</p>
			<p className="text-sm text-purple-100 mb-4 text-center">{hackathon.description}</p>
			<div className="flex flex-wrap gap-2 justify-center">
				{hackathon.links.map((link, i) => (
					<a
						key={i}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm px-2 py-2 border border-emerald-200 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-full transition inline-flex items-center"
					>
						{link.icon} {link.label}
					</a>
				))}
			</div>
		</div>
	);
}

const Hackathons = () => {
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
		<section id="hackathons" className="py-16 px-4 relative">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
						Hackathons I've Conquered
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
				</div>
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
		</section>
	);
};

export default Hackathons;
