import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-4 pt-20 pb-12">
      <div className="container max-w-3xl">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="font-mono text-accent text-sm mb-4">
            Frontend Engineer
          </p>
        </div>
        
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Mohamed Ashraf Ibraheem
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          I build scalable, maintainable frontend systems with Angular. 
          I care about code quality, clear architecture, and solutions that last.
        </p>
        
        <div 
          className="flex flex-wrap gap-4 mb-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://github.com/MohamedAshrafIbraheem97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors font-medium text-sm"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohamedashrafibraheem/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors font-medium text-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="mailto:mohamedashrafibraheem@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium text-sm"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
        </div>

        <div 
          className="animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-sm text-muted-foreground font-mono">
            Currently at{" "}
            <span className="text-foreground">MICEtribe</span>
            {" "}· Cairo, Egypt
          </p>
        </div>
      </div>

      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
        style={{ animationDelay: "0.7s" }}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;