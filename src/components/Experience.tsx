const experiences = [
  {
    company: "MICEtribe",
    role: "Frontend Developer",
    period: "Dec 2024 – Present",
    type: "Full-time",
    description:
      "Building and maintaining Angular applications for event management. Working on complex UI systems and contributing to architecture decisions.",
  },
  {
    company: "Netways",
    role: "Frontend Developer",
    period: "Dec 2023 – Nov 2024",
    type: "Full-time",
    description:
      "Developed Angular applications with focus on scalability. Migrated legacy code to modern patterns, implemented feature-based architecture, and replaced heavy UI libraries with Tailwind-based systems.",
  },
  {
    company: "Progressio Solutions",
    role: "Frontend Developer",
    period: "Aug 2023 – Dec 2023",
    type: "Part-time",
    description:
      "Contributed to frontend development while deepening Angular expertise and learning production-level patterns.",
  },
  {
    company: "Softec International",
    role: "Frontend Developer",
    period: "Apr 2023 – Nov 2023",
    type: "Full-time",
    description:
      "First full-time frontend role. Built real-world applications, learned reactive forms, routing, and API integration. Established foundation for professional frontend work.",
  },
  {
    company: "Sia Edu",
    role: "Product Owner → Frontend Developer",
    period: "Feb 2022 – Mar 2023",
    type: "Full-time",
    description:
      "Transitioned from Product Owner to Frontend Developer. This experience gave me deep understanding of user needs, business requirements, and system-level thinking that shapes my engineering approach today.",
  },
  {
    company: "MINDEAVORS Int.",
    role: "Product Owner",
    period: "May 2021 – Mar 2022",
    type: "Full-time",
    description:
      "Managed product development, prioritized features, and worked closely with engineering teams. Built foundation for understanding how software is built at scale.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-surface">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Experience</h2>
        <p className="text-muted-foreground mb-12">
          From product ownership to frontend engineering—a deliberate transition.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <article key={`${exp.company}-${exp.period}`} className="relative md:pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent -translate-x-[3px] hidden md:block" />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                  <h3 className="font-semibold">{exp.company}</h3>
                  <span className="text-sm text-muted-foreground font-mono">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-accent text-sm mb-2">
                  {exp.role}
                  <span className="text-muted-foreground"> · {exp.type}</span>
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;