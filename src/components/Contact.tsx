import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg">
          I'm always open to discussing frontend engineering, Angular, or
          opportunities to work on interesting problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:mohamedAshrafIbraheem@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium"
          >
            <FaEnvelope className="w-5 h-5" />
            Email me!
          </a>
          <a
            href="tel:+201114185027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors font-medium"
          >
            <FaPhone className="w-5 h-5" />
            Call me!
          </a>
        </div>

        <div className="flex gap-6 mt-8">
          <a
            href="https://github.com/MohamedAshrafIbraheem97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamedashrafibraheem/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
