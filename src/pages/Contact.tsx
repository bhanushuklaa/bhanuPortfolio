
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Twitter, Phone, PhoneCall, MessageCircleMore } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[120px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-gray-300 mb-6">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you're a company looking to hire, or you're a fellow developer 
                  looking to collaborate, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-purple-400">sonushukla588777@gmail.com</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-purple-400">+91-9696023201</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-purple-400">Varanasi, UP, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-transform duration-300 hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="https://github.com/bhanushuklaa" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="flex items-center space-x-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                      <Github size={16} />
                      <span>GitHub</span>
                    </Button>
                  </a>

                  <a href="https://www.linkedin.com/in/bhanushuklaa/?original_referer=https%3A%2F%2Fgithub.com%2F" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="flex items-center space-x-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </Button>
                  </a>

                  <a href="https://wa.me/919696023201" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="flex items-center space-x-1 border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
                      <MessageCircleMore size={16} />
                      <span>WhatsApp</span>
                    </Button>
                  </a>

                  <a href="https://twitter.com/#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="flex items-center space-x-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                      <Twitter size={16} />
                      <span>Twitter</span>
                    </Button>
                  </a>

                  <a href="tel:+919999999999">
                    <Button variant="outline" size="sm" className="flex items-center space-x-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                      <PhoneCall size={16} />
                      <span>Call</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
