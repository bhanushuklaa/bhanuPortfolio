import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Backend Developer",
      company: "Botlab Dynamics",
      period: "2024 - Present",
      description: "I'm a backend developer passionate about building scalable geospatial and drone-tech solutions using Python, FastAPI, and Django. With hands-on experience in  photogrammetry, and API design,I love turning complex systems into intuitive, cloud-ready applications.",
    },
    {
      title: "Summer Training",
      company: "Techpile Technology Pvt. Ltd.",
      period: "2021 - 2022",
      description: "Developed responsive websites and web applications for various clients. Specialized in Django Framework using Python.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      school: "GL Bajaj Instiute of Technology and Management",
      period: "2022 - 2025",
      description: "Focused on software engineering, algorithms, and web development. Graduated with honors.",
    },
    {
      degree: "Diploma in Computer Science",
      school: "Ambition Institute of Technology",
      period: "2019-2022",
      description: "Successfully Completed Diploma in CSE with great learning and enthusiasm mind.",
    },
  ];

  const certifications = [
    "Six months of Internship",
    "Summer Training in Django Framwork",
    "i3India Certificate for Cyber Security",
    "Rinex Certificate for Full Stack Developer",
    "CCC Certificate by NIELIT",
    "Hackathon at Neuro Nest",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Resume</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Professional experience, education, and skills that define my journey as a Developer.
          </p>
          <a href="/BhanuResume.pdf" download className="inline-block">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </div>

        <div className="space-y-16">
          {/* Work Experience */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Work Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white/20 transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        <p className="text-purple-400 font-semibold">{job.company}</p>
                      </div>
                      <span className="text-gray-400 font-medium">{job.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white/20 transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-purple-400 font-semibold">{edu.school}</p>
                      </div>
                      <span className="text-gray-400 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-white/20 transition-transform duration-300 hover:scale-105"
                >
                  <CardContent className="p-4 text-center">
                    <p className="text-white font-semibold">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
