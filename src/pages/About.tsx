
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "UI/UX Design", level: 85 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
                <p className="text-gray-300 leading-relaxed">
                  I started my journey in web development 5 years ago, driven by curiosity and a passion for technology. 
                  What began as a hobby quickly became my profession, and I've never looked back since.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in full-stack development, creating responsive web applications, 
                  and bringing designs to life with clean, efficient code. I love solving complex problems 
                  and learning new technologies.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-white">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center p-6">
            <CardContent>
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-white font-semibold">Projects Completed</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center p-6">
            <CardContent>
              <div className="text-4xl font-bold text-pink-400 mb-2">5+</div>
              <div className="text-white font-semibold">Years Experience</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center p-6">
            <CardContent>
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-white font-semibold">Client Satisfaction</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
