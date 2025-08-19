import React, { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  //Front end
  { name: "HTML/CSS", level: 95, catagory: "frontend" },
  { name: "JavaScript", level: 95, catagory: "frontend" },
  { name: "React", level: 85, catagory: "frontend" },
  { name: "TailwindCSS", level: 75, catagory: "frontend" },
  { name: "Next.js", level: 10, catagory: "frontend" },
  { name: "TypeScript", level: 20, catagory: "frontend" },

  // Back end

  { name: "Node.js", level: 95, catagory: "backend" },
  { name: "Express.js", level: 15, catagory: "backend" },
  { name: "MongoDB", level: 45, catagory: "backend" },

  //  Tools

  { name: "Git/GitHub", level: 95, catagory: "tools" },
  { name: "Figma", level: 95, catagory: "tools" },
  { name: "VS Code", level: 95, catagory: "tools" },
];

const catagories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCatagory, setActiveCatagory] = useState("all");

  const filteredSkills = skills.filter((skill)=> activeCatagory === "all" || skill.catagory === activeCatagory
);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secoundry/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {catagories.map((catagory, key) => (
            <button
              key={key}
              onClick={()=>setActiveCatagory(catagory)}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCatagory === catagory ? "bg-primary text-primary-foreground" : "bg-secoundry/70 text-foreground hover:bg-secoundry"
              )}
            >
              {catagory}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card card-hover p-6 rounded-lg shadow-xs"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secoundry/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origine-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-small text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
