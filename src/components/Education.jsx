"use client";

import { GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const educationData = [
  {
    course: "B.Tech in Computer Science and Engineering",
    institution: "JIS College of Engineering, Kalyani",
    duration: "2022 - 2026",
    // score: "9.16 CGPA",
  },
  {
    course: "Higher Secondary (12th), Science",
    institution: "Basirhat Town High School (WBCHSE)",
    duration: "2020 - 2022",
    // score: "85%",
  },
  {
    course: "Secondary (10th)",
    institution: "Rampur P.D.S.S. Niketan (WBBSE)",
    duration: "2020",
    // score: "87.71%",
  },
];

const Education = () => {
  return (
    <div id="education" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl inline-flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-violet-500" />
            Education
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            My Academic Journey So Far
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <ScrollReveal key={index}>
            <div className="border-l-4 border-violet-500 pl-6 py-4 bg-slate-800/40 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">{edu.course}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.duration}</p>
              <p className="text-sm text-gray-300 font-medium">{edu.score}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Education;
