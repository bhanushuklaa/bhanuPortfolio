import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter, PhoneCall, MessageCircleMore } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in-up transition-all duration-700 hover:shadow-xl hover:scale-[1.01]">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 animate-fade-in-up">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="animate-fade-in-up delay-100">
                    <label className="block text-white text-sm font-medium mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 transition-all duration-300 focus:scale-105"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="animate-fade-in-up delay-150">
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 transition-all duration-300 focus:scale-105"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="animate-fade-in-up delay-200">
                  <label className="block text-white text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 transition-all duration-300 focus:scale-105"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="animate-fade-in-up delay-300">
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 min-h-[120px] transition-all duration-300 focus:scale-105"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <div className="animate-fade-in-up delay-400">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 mt-6 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-fade-in-up delay-100">
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

            <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-transform duration-300 hover:scale-105 animate-fade-in-up delay-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  {/* Social Buttons */}
                  {[
                    { href: "https://github.com/bhanushuklaa", label: "GitHub", icon: <Github size={16} />, color: "purple" },
                    { href: "https://www.linkedin.com/in/bhanushuklaa/", label: "LinkedIn", icon: <Linkedin size={16} />, color: "purple" },
                    { href: "https://wa.me/919696023201", label: "WhatsApp", icon: <MessageCircleMore size={16} />, color: "green" },
                    { href: "https://twitter.com/#", label: "Twitter", icon: <Twitter size={16} />, color: "purple" },
                    { href: "tel:+919999999999", label: "Call", icon: <PhoneCall size={16} />, color: "blue" }
                  ].map(({ href, label, icon, color }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className={`flex items-center space-x-1 border-${color}-400 text-${color}-400 hover:bg-${color}-400 hover:text-white`}>
                        {icon}
                        <span>{label}</span>
                      </Button>
                    </a>
                  ))}
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
