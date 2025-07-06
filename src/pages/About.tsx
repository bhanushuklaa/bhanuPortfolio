import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Zap, Cloud, Cpu, Layout } from "lucide-react";

const skillIcons: Record<string, JSX.Element> = {
  Python: <Code size={18} className="text-yellow-300" />,
  "Flask/Django": <Server size={18} className="text-pink-300" />,
  "Fast API's": <Zap size={18} className="text-green-400" />,
  AWS: <Cloud size={18} className="text-orange-300" />,
  "Server Concept": <Cpu size={18} className="text-purple-300" />,
  Frontend: <Layout size={18} className="text-blue-300" />,
};

const AnimatedCounter = ({ value, isPercentage = false }: { value: number; isPercentage?: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let totalMilSecDur = 1000;
    let incrementTime = (totalMilSecDur / end) * 10;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}{isPercentage ? "%" : "+"}</>;
};

const About = () => {
  const skills = [
    { name: "Python", level: 80 },
    { name: "Flask/Django", level: 85 },
    { name: "Fast API's", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Server Concept", level: 70 },
    { name: "Frontend", level: 65 },
  ];

  const stats = [
    { value: 20, label: "Projects Completed", color: "text-purple-400" },
    { value: 1, label: "Years Experience", color: "text-pink-400" },
    { value: 90, label: "Time Management", color: "text-blue-400", isPercentage: true },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Started working on drone flight planning",
      description: "Implemented WPML & KML generation tools."
    },
    {
      year: "2024",
      title: "Backend system with FastAPI",
      description: "Built a scalable geospatial planner with modular logic."
    },
    {
      year: "2025",
      title: "Expanded to full-stack",
      description: "Integrated React with backend API for full dynamic UI."
    }
  ];

  useEffect(() => {
    const bars = document.querySelectorAll(".skill-bar");
    bars.forEach((bar: any) => {
      const percentage = bar.getAttribute("data-percentage");
      if (percentage) {
        bar.style.width = percentage;
      }
    });
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16 animate-fade-in-up delay-100">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-2">My Story</h3>
              <p className="text-gray-300 leading-relaxed space-y-3">
                I'm a backend developer with a strong focus on building scalable, high-performance applications.<br /><br />
                My journey started with Python, and over the years I've specialized in frameworks like FastAPI and Django.<br /><br />
                I've worked extensively on geospatial projects, especially in drone mapping and flight planning systems.<br /><br />
                I have hands-on experience with photogrammetry workflows using EXIF-based drone image analysis.<br /><br />
                I also work with AWS (Lambda, S3, DynamoDB) and Google Cloud to deploy secure, scalable systems.<br /><br />
                I follow clean code principles, modular design patterns, and test-driven practices across my projects.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-4 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2 text-white font-medium">
                        {skillIcons[skill.name] || <Code size={18} className="text-white" />}<span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-purple-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-2 rounded-full skill-bar transition-all duration-1000 ease-out"
                        data-percentage={`${skill.level}%`}
                        style={{
                          width: "0%",
                          backgroundImage: "linear-gradient(to right, #a855f7, #ec4899)",
                          boxShadow: "0 0 10px rgba(168,85,247,0.5), 0 0 20px rgba(236,72,153,0.3)",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-2xl font-bold text-white mb-2">What I Do</h3>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in full-stack development, creating responsive web applications,
                  and bringing designs to life with clean, efficient code. I love solving complex
                  problems and learning new technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16 space-y-8 animate-fade-in-up delay-150">
          <h3 className="text-2xl font-bold text-white text-center mb-4">Experience Timeline</h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative p-4 border border-white/10 rounded-lg bg-white/5 shadow-md hover:shadow-purple-500/30 transition-transform duration-300 transform hover:-translate-y-1">
                <span className="absolute top-4 right-4 text-purple-300 font-semibold text-sm md:text-base">
                  {item.year}
                </span>
                <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up delay-200">
          {stats.map((stat, i) => (
            <Card
              key={i}
              className="bg-white/10 backdrop-blur-md border-white/20 text-center p-6 shadow-md hover:shadow-white/20 transition-transform duration-300 hover:scale-105"
            >
              <CardContent>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedCounter value={stat.value} isPercentage={stat.isPercentage} />
                </div>
                <div className="text-white font-semibold">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
