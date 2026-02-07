import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Twitter Clone",
    description:
      "A full-featured Twitter clone built to deepen Angular skills and explore Firebase integration. Demonstrates authentication flows, real-time data handling, and state management in a complex social application context.",
    tech: ["Angular", "TypeScript", "Firebase", "SCSS"],
    github: "https://github.com/MohamedAshrafIbraheem97/twitter-clone",
    highlights: [
      "Firebase Auth & Firestore integration",
      "Real-time updates with Observables",
      "Tweet CRUD operations",
      "User profiles and following system",
    ],
  },
  {
    title: "YouTube Clone",
    description:
      "A YouTube interface clone focusing on component architecture and API consumption. Built to practice building media-heavy UIs with clean separation of concerns.",
    tech: ["Angular", "TypeScript", "REST API", "CSS"],
    github: "https://github.com/MohamedAshrafIbraheem97/youtube-clone",
    highlights: [
      "Video listing and search",
      "Lazy-loaded routes",
      "Responsive video player layout",
      "Clean component structure",
    ],
  },
  {
    title: "Weather App with Live Search",
    description:
      "A practical weather application demonstrating API integration and debounced live search. Built to improve skills in consuming external APIs and handling async data.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/MohamedAshrafIbraheem97/weather-app-with-live-search",
    highlights: [
      "Live search with debouncing",
      "Weather API integration",
      "Clean UI with loading states",
      "Error handling",
    ],
  },
  {
    title: "Meals & Ingredients (Vanilla JS)",
    description:
      "A vanilla JavaScript application for searching meals and viewing ingredients. Built to strengthen core JavaScript fundamentals without framework abstractions.",
    tech: ["JavaScript", "HTML", "CSS", "TheMealDB API"],
    github: "https://github.com/MohamedAshrafIbraheem97/Meals-and-ingredients-vanila-js",
    highlights: [
      "Pure JavaScript (no frameworks)",
      "API data fetching and rendering",
      "Dynamic DOM manipulation",
      "Search and filter functionality",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Projects</h2>
        <p className="text-muted-foreground mb-12">
          Selected work demonstrating real problem-solving and technical growth.
        </p>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article 
              key={project.title} 
              className="group pb-12 border-b border-border last:border-0 last:pb-0"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors flex-shrink-0"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                  Technical Highlights
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-sm text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary rounded text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <a
            href="https://github.com/MohamedAshrafIbraheem97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            <span>View all repositories on GitHub</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;