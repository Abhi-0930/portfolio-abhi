import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Shield, Brain, Award, Calendar, ArrowRight, Menu, X, Server } from 'lucide-react';
import project1 from './assets/Project1.png'
import project2 from './assets/Project2.jpg'
import project3 from './assets/Project3.png'
import project4 from './assets/Project4.png'
import resume from './assets/Resume.pdf'
import myimg from './assets/myimg.png'

// Hero Section Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [counts, setCounts] = useState({ projects: 0, experience: 0, technologies: 0 });
  
  const roles = [
    "Full Stack Developer",
    "Cyber Security Analyst", 
    "AI Tools Expert"
  ];

  const targetCounts = { projects: 50, experience: 1, technologies: 15 };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let timeout;
    
    if (isTyping) {
      // Typing animation
      if (displayText.length < roles[currentRole].length) {
        timeout = setTimeout(() => {
          setDisplayText(roles[currentRole].slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait then start clearing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Clearing animation
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Finished clearing, move to next role
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  // Counter animation effect
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        setCounts(prev => {
          const newCounts = { ...prev };
          let allComplete = true;

          Object.keys(targetCounts).forEach(key => {
            if (newCounts[key] < targetCounts[key]) {
              newCounts[key] = Math.min(
                newCounts[key] + Math.ceil(targetCounts[key] / steps),
                targetCounts[key]
              );
              allComplete = false;
            }
          });

          if (allComplete) {
            clearInterval(timer);
          }

          return newCounts;
        });
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto text-center transform transition-all duration-1000 pt-20 sm:pt-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Professional Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-4 tracking-tight">
              Abhishek
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 mb-4 min-h-[2.5rem] flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className={`ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}>|</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Specializing in AI-driven applications and cybersecurity solutions. 
              Building scalable, innovative digital experiences that drive business growth.
            </p>
          </div>
          
          {/* Professional Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">
                {counts.projects}+
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">
                {counts.experience}+
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">
                {counts.technologies}+
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">Technologies</div>
            </div>
          </div>
          
          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={resume}
              download="Abhishek_Resume.pdf"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 min-w-[200px]"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </a>
            <a 
              href="#contact"
              className="group border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-w-[200px] bg-white/50 backdrop-blur-sm"
            >
              <Mail size={20} className="group-hover:animate-pulse" />
              Let's Connect
            </a>
          </div>
          

        </div>
      </div>
      
      {/* Professional Scroll Indicator - Moved Down */}
      <div className="absolute -bottom-20 sm:bottom-32 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center bg-white/50 backdrop-blur-sm">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Professional Photo */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src= {myimg} 
                  alt="Abhishek - Full Stack Developer"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
            
            {/* About Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-800">
                  Passionate Developer & Problem Solver
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm a passionate Full Stack Developer with hands-on expertise in building dynamic and scalable web applications using the MERN stack and Next.js. I enjoy developing clean, responsive UIs and secure backend systems that deliver real value to users.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With a strong foundation in cybersecurity, I bring a security-first approach to everything I build, ensuring both performance and protection. My journey in tech started with curiosity and has evolved into a passion for creating impactful solutions.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Alongside academics, I'm actively involved in startup-driven product development, where I've contributed to building platforms that solve real-world problems — from AI-powered solutions to educational tools. I'm driven by collaboration and a desire to create tech that bridges ideas with execution.
                </p>
              </div>
              
              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium text-slate-700">Available for opportunities</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-slate-700">Remote work ready</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-purple-600">
                  <MapPin size={18} />
                  <span className="text-slate-700">Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Calendar size={18} />
                  <span className="text-slate-700">Open to new challenges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 75 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "HTML", level: 100 },
        { name: "CSS", level: 100 },
        { name: "Tailwind CSS", level: 100 },
        { name: "Figma", level: 85 }
      ]
    },
    {
      id: 'backend',
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 92 },
        { name: "REST APIs", level: 90 },
        { name: "JWT Authentication", level: 95 }
      ]
    },
    {
      id: 'database',
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 75 },
        { name: "Cloudinary", level: 85 }
      ]
    },
    {
      id: 'cybersecurity',
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
      isLearning: true,
      skills: [
        { name: "Penetration Testing", level: 78 },
        { name: "Web Application Security (OWASP)", level: 80 },
        { name: "Social Engineering", level: 90 },
        { name: "Kali Linux", level: 80 },
        { name: "Cisco Packet Tracer", level: 87 }
      ]
    },
    {
      id: 'tools',
      title: "Tools & Technologies",
      icon: <Brain className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 95 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 100 },
        { name: "Python", level: 80 },
        { name: "C++", level: 70 }
      ]
    },
    {
      id: 'creative',
      title: "Creative Skills",
      icon: <Award className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Graphic Design (Canva, Photoshop)", level: 85 },
        { name: "Video Editing (CapCut, VN Editor)", level: 90 },
        { name: "UI Prototyping (Figma, Framer)", level: 80 },
        { name: "Social Media Marketing", level: 95 }
      ]
    },
    {
      id: 'soft',
      title: "Soft Skills",
      icon: <Award className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Communication & Presentation", level: 90 },
        { name: "Team Leadership & Collaboration", level: 95 },
        { name: "Problem Solving & Decision Making", level: 88 },
        { name: "Time Management & Task Prioritization", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit of technical and creative skills that enable me to build 
            innovative solutions and deliver exceptional user experiences.
          </p>
        </div>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${
                activeCategory === category.id ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white mb-4 shadow-lg`}>
                  {category.icon}
                </div>
                <div className="text-center mb-2">
                  <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
                  {category.isLearning && (
                    <div className="mt-2">
                      <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md animate-pulse inline-block">
                        Learning Phase
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-slate-300 to-slate-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid gap-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-slate-800 text-lg">{skill.name}</span>
                      <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Why These Skills Matter
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              My diverse skill set enables me to handle projects from concept to deployment. 
              From frontend development to cybersecurity, I bring a holistic approach to problem-solving 
              that combines technical expertise with creative thinking and strong collaboration skills.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-purple-600">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="font-medium">Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="font-medium">Security-First Approach</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="font-medium">Creative Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const Projects = () => {
  const projects = [
    {
      title: "SAAS Application",
      description: "Smart to-do app with task tracking, auth, and billing — built with Next.js and integrated with Clerk & Stripe.",
      tech: ["Next.js", "Prisma", "Stripe", "Clerk"],
      image: project1,
      github: "https://github.com/Abhi-0930/saas-template",
      category: "Full Stack"
    },
    {
      title: "AI Mental Health Therapy Bot",
      description: "An AI-driven mental health therapy bot that uses facial and voice analysis for emotional support. I contributed as the web and security developer, handling the frontend, integrating with backend APIs, and ensuring secure implementation and data protection.",
      tech: ["Generative AI", "Flask", "NLP", "MERN Stack"],
        image: project2,
        github: "https://github.com/Abhi-0930/mental-health-therapy-bot",
      category: "AI & Security"
    },
    {
      title: "Food Delivery Website",
      description: "A full-stack food delivery platform with user and admin panels, secure payments, authentication, and real-time order management — built using the MERN stack and Stripe.",
      tech: ["React.js", "Stripe", "MongoDB", "Tailwind CSS", "Node.js", "Express.js"],
      image: project3,
      github: "https://github.com/Abhi-0930/mern-food-delivery",
      category: "Web App"
    },
    {
      title: "AI Resume Builder",
      description: "AI-powered resume builder that generates personalized, ATS-friendly content using Gemini API. Includes real-time preview, content suggestions, and a clean UI built with React and Tailwind.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Gemini API"],
      image: project4,
      github: "https://github.com/Abhi-0930/AI-Resume-Builder.git",
      category: "AI/Web App"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating full-stack development skills, 
            AI integration, and innovative problem-solving approaches.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="overflow-hidden rounded-2xl h-full">
              {/* Project Image */}
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                
                {/* GitHub Link Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-800 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors duration-300 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-100">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Link */}
                <div className="flex items-center justify-between">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium group/link"
                  >
                    <Github size={18} className="group-hover/link:scale-110 transition-transform duration-300" />
                    <span>View on GitHub</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  <div className="flex items-center gap-1 text-slate-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Want to See More?
            </h3>
            <p className="text-slate-600 mb-6">
              Check out my GitHub profile for more projects and contributions to open-source.
            </p>
            <a 
              href="https://github.com/Abhi-0930/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const Experience = () => {
  const experiences = [
    {
      company: "Coding Cubs",
      role: "Design Team Lead",
      duration: "Aug 2024 – Jan 2025",
      description: "Promoted from team member to Design Team Lead, where I led UI/UX design efforts, coordinated with developers, and ensured timely execution of design deliverables. Oversaw team collaboration, task distribution, and design quality across multiple web-based projects."
    },
    {
      company: "Prodigy InfoTech",
      role: "Web Developer Intern",
      duration: "Sep 2024 – Oct 2024",
      description: "Completed a 2-month remote internship focused on full-stack web development using the MERN stack. Built responsive user interfaces, implemented secure authentication, and followed best practices for writing clean, maintainable, and security-conscious code."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-purple-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">{exp.role}</h3>
                    <span className="text-purple-600 font-medium">{exp.duration}</span>
                  </div>
                  <h4 className="text-lg text-purple-600 mb-3">{exp.company}</h4>
                  <p className="text-slate-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Achievements Section Component
const Achievements = () => {
  const achievements = [
    {
      title: "VisionAVA Hackathon Top Performer",
      description: "Recognized for developing an innovative healthcare solution leveraging the MERN stack, NLP, and Generative AI.",
      icon: <Award className="w-8 h-8" />,
      category: "Competition",
      year: "2025"
    },
    {
      title: "Student Tribe Certified - Cybersecurity",
      description: "Practical and theoretical knowledge in cybersecurity covering core concepts such as networking, ethical hacking, security protocols, penetration testing, soc  and risk management.",
      icon: <Shield className="w-8 h-8" />,
      category: "Certification",
      year: "2024"
    },
    {
      title: "Cisco Packet Tracer",
      description: "Gained hands-on experience in configuring routers, switches, and simulating secure, scalable network topologies using Cisco Packet Tracer.",
      icon: <Brain className="w-8 h-8" />,
      category: "Certification",
      year: "2024"
    },
    {
      title: "Networking Basics",
      description: "Learned the concepts of networking and how to use the command line to configure routers and switches.",
      icon: <Database className="w-8 h-8" />,
      category: "Certification",
      year: "2023"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Recognition for excellence in technology, security, and innovation across various domains.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="relative bg-white rounded-2xl m-0.5 h-full flex flex-col">
                <div className="p-8 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {achievement.category}
                          </span>
                          <span className="text-slate-400 text-sm font-medium">
                            {achievement.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                          {achievement.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    {achievement.description}
                  </p>
                  
                  {/* Bottom Decoration */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Verified</span>
                    </div>
                    <div className="text-slate-400 text-sm">
                      <span className="font-medium">Achievement #{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:abhishek.j3094@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects 
            and create amazing digital experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-purple-600 font-medium">Email</div>
                  <div className="text-slate-800 font-semibold">abhishek.j3094@gmail.com</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-purple-600 font-medium">Phone</div>
                  <div className="text-slate-800 font-semibold">+91 63021 60783</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-purple-600 font-medium">Location</div>
                  <div className="text-slate-800 font-semibold">Hyderabad, India</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/abhishek-jujjuvarapu-556899276" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md">
                  <Linkedin className="w-6 h-6 text-white group-hover:animate-pulse" />
                </a>
                <a href="https://github.com/Abhi-0930/" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md">
                  <Github className="w-6 h-6 text-white group-hover:animate-pulse" />
                </a>
                <a href="mailto:abhishek.j3094@gmail.com" className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md">
                  <Mail className="w-6 h-6 text-white group-hover:animate-pulse" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/60 text-slate-800 placeholder-slate-500 px-6 py-4 rounded-xl border border-slate-200 focus:border-purple-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/60 text-slate-800 placeholder-slate-500 px-6 py-4 rounded-xl border border-slate-200 focus:border-purple-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-white/60 text-slate-800 placeholder-slate-500 px-6 py-4 rounded-xl border border-slate-200 focus:border-purple-400 focus:outline-none transition-all duration-300 backdrop-blur-sm resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 group shadow-lg"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500">
            © 2025 Abhishek. All rights reserved. 
          </p>
        </div>
      </div>
    </section>
  );
};

// Education Section Component
const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence",
      institution: "Anurag University",
      duration: "2022 - 2026",
      gpa: "7.2",
      description: "Specialized in software engineering, data structures, algorithms, and modern web technologies. Active participation in coding competitions and hackathons.",
      achievements: ["Hackathon Winner", "Design Team Lead", "Web Developer Intern"]
    },
    {
      degree: "Intermediate",
      field: "Science (MPC)",
      institution: "Narayana Junior College",
      duration: "2020 - 2022",
      gpa: "8.5",
      description: "Focused on Mathematics, Physics, and Computer Science. Developed strong analytical and problem-solving skills.",
      achievements: []
    },
    {
      degree: "Secondary School",
      field: "SSC",
      institution: "Bethany Academy",
      duration: "2008 - 2020",
      gpa: "9.8",
      description: "Completed secondary education with distinction. Developed foundation in core subjects and extracurricular activities.",
      achievements: ["3x singing competition winner", "2x carrom competition winner","1x chess competition runner"]
    }
  ];



  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Educational Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My academic path has been driven by curiosity and a passion for technology, 
            building a strong foundation for my career in software development.
          </p>
        </div>



        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content Card */}
                <div className="ml-16 bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-2">
                        {edu.field}
                      </p>
                      <p className="text-slate-600 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0 text-right">
                      <div className="text-sm text-slate-500 mb-1">{edu.duration}</div>
                      <div className="text-2xl font-bold text-green-600">
                        {edu.gpa} GPA
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <span 
                        key={achIndex}
                        className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-blue-100"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="font-bold text-xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Portfolio.
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-5 py-2.5 rounded-xl font-medium text-slate-700 hover:text-blue-600 transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-4/5 transition-all duration-300 rounded-full"></div>
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-300"
            >
              <div className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
              }`}></div>
              <div className={`absolute w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></div>
              <div className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
              }`}></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200/50 bg-white/95 backdrop-blur-xl">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </div>
  );
};

export default App;