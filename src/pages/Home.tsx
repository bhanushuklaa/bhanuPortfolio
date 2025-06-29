
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Backend Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center space-y-8 px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Bhanu Pratap Shukla
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        <div className="animate-fade-in animation-delay-300">
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 text-justify">
          I primarily work with <b>Flask, Django</b>, and <b>FastAPI</b>. Working with modern technologies that support <b>CI/CD pipeline integration</b>. Recently, I've been learning serverless architecture using <b>AWS Lambda and DynamoDB</b>. I also use GrapesJS for drag-and-drop interfaces. I have experience with various AWS services such as <b>S3, EC2, and Lambda, as well as Google Cloud Platform</b>. Additionally, I've built several web applications using Django, WebRTC, TailwindCSS, and other modern tools.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-500">
          <Link to="/projects">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              View My Work
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </Button>
          </Link>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-10 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Home;
