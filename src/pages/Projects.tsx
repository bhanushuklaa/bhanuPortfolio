
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive charts, and responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      tech: ["JavaScript", "Chart.js", "OpenWeather API"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative design, smooth animations, and modern web development practices.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling features, and performance tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tech: ["Vue.js", "D3.js", "Express.js"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Mobile Banking App",
      description: "Secure mobile banking interface with transaction history, budget tracking, and modern financial management tools.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      tech: ["React Native", "Redux", "Node.js"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white flex-1">
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex-1">
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
