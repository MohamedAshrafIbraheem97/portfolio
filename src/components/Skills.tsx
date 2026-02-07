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
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "SCSS", icon: SiSass },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layout,
    skills: [
      { name: "Angular (latest)", icon: SiAngular },
      { name: "RxJS", icon: SiReactivex },
      { name: "NgRx", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
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
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
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
                      {skill.icon && <skill.icon className="w-4 h-4 text-accent" />}
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