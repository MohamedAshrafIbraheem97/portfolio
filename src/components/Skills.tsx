import { 
  SiAngular, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiReactivex
} from "react-icons/si";
import { Code2, Layout, Workflow, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Core Fundamentals",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "SCSS", icon: SiSass, color: "#CC6699" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layout,
    skills: [
      { name: "Angular (latest)", icon: SiAngular, color: "#DD0031" },
      { name: "RxJS", icon: SiReactivex, color: "#B7178C" },
      { name: "NgRx", icon: SiAngular, color: "#BA2BD2" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Angular Expertise",
    icon: SiAngular,
    skills: [
      { name: "Standalone Components" },
      { name: "Signals & Reactive Patterns" },
      { name: "Reactive Forms & Validation" },
      { name: "Routing, Guards, Interceptors" },
      { name: "Lazy Loading" },
      { name: "REST API Integration" },
    ],
  },
  {
    title: "Architecture & Patterns",
    icon: Workflow,
    skills: [
      { name: "Feature-based Structure" },
      { name: "Component Composition" },
      { name: "State Management" },
      { name: "Clean Code Practices" },
      { name: "Code Migration & Refactoring" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code" },
      { name: "Chrome DevTools" },
      { name: "Responsive Design" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-surface">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">Skills</h2>
        
        <div className="space-y-10">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.title}>
                <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
                  <GroupIcon className="w-4 h-4" />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm bg-secondary rounded-md text-foreground flex items-center gap-2"
                    >
                      {skill.icon && <skill.icon className="w-4 h-4" style={{ color: skill.color }} />}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;