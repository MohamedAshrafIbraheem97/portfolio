import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-4 pt-20 pb-12">
      <div className="container max-w-3xl">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-8">
          <div
            className="animate-fade-in flex-shrink-0"
            style={{ animationDelay: "0.1s" }}
          >
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-accent/20">
              <AvatarImage
                src="https://github.com/MohamedAshrafIbraheem97.png"
                alt="Mohamed Ashraf Ibraheem"
              />
              <AvatarFallback className="text-2xl font-semibold bg-secondary">
                MA
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1">
            <div
              className="animate-fade-in"
              style={{ animationDelay: "0.15s" }}
            >
              <p className="font-mono text-accent text-sm mb-2">
                Frontend Engineer
              </p>
            </div>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Mohamed Ashraf Ibraheem
            </h1>
          </div>
        </div>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          I build scalable, maintainable frontend systems with{" "}
          <span className="font-medium text-accent">Angular</span>. I care about
          code quality, clean architecture, and solutions that last.
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
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohamedashrafibraheem/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors font-medium text-sm"
          >
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="tel:+201114185027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors font-medium text-sm"
          >
            <FaPhone className="w-4 h-4" />
            Call me
          </a>
          <a
            href="https://wa.me/201114185027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors font-medium text-sm"
          >
            <FaWhatsapp className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="mailto:mohamedAshrafIbraheem@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium text-sm"
          >
            <FaEnvelope className="w-4 h-4" />
            Get in Touch
          </a>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-sm text-muted-foreground font-mono">
            Currently at{" "}
            <a
              href="https://micetribe.com/"
              target="_blank"
              className="text-foreground"
            >
              MICEtribe
            </a>{" "}
            · El Gouna, Egypt
          </p>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
        style={{ animationDelay: "0.7s" }}
        aria-label="Scroll to about section"
      >
        <FaArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
