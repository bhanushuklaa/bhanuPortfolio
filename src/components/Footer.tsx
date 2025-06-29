import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 relative">
          
          {/* Brand Section (Left) */}
          <div className="space-y-4 md:w-1/2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating innovative digital experiences with modern technologies. 
              Passionate about clean code with serverless concept.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/bhanushuklaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/bhanushuklaa/?original_referer=https%3A%2F%2Fgithub.com%2F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:sonushukla588777@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info - Right Corner */}
          <div className="space-y-4 md:w-1/2 md:max-w-xs ml-auto">
            <h4 className="text-white font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-purple-400" />
                <span className="text-gray-400 text-sm">sonushukla588777@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-purple-400" />
                <span className="text-gray-400 text-sm">+91- 9696023201</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-gray-400 text-sm">Varanasi, UP, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Bhanu Pratap Shukla ❤️ Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
