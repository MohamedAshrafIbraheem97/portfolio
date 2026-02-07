const skillGroups = [
  {
    title: "Core Fundamentals",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Angular 17–19", "RxJS", "NgRx (familiar)", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Angular Expertise",
    skills: [
      "Standalone Components",
      "Signals & Reactive Patterns",
      "Reactive Forms & Validation",
      "Routing, Guards, Interceptors",
      "Lazy Loading",
      "REST API Integration",
    ],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      "Feature-based Structure",
      "Component Composition",
      "State Management",
      "Clean Code Practices",
      "Code Migration & Refactoring",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Responsive Design"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-surface">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">Skills</h2>
        
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-md text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;