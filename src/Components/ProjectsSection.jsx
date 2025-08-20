import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";


const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Gym Website",
      description:
        "This is a demo website of a gym created using only HTML & CSS",
      image: "../src/Assets/project1.png",
      tags: ["HTML", "CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/hasibul2048/gym-website",
    },
    {
      id: 2,
      title: "Weather App",
      description: "This app showes the weather of different cities",
      image: "../src/Assets/project2.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/hasibul2048/weather-app",
    },
    {
      id: 3,
      title: "Emoji Rating",
      description:
        "This is a rating app. Where the emoji changes according to the ratings",
      image: "../src/Assets/project3.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/hasibul2048/emoji-rating",
    },
    {
      id: 4,
      title: "Simple Calculator",
      description: "This one is just a simple calculator",
      image: "../src/Assets/project4.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/hasibul2048/Simple-Calculator",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          created with attention to detail, performance and user experiance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/20 text-secoundary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20}/>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/hasibul2048" className="cosmic-button w-fit flex items-center mx-auto gap-5" target="_blank">
          Check my github <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
