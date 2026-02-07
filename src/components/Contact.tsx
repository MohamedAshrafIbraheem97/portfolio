import { Github, Linkedin, Mail } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-24 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground mb-8 max-w-lg">
          I'm always open to discussing frontend engineering, Angular, 
          or opportunities to work on interesting problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:mohamedAshrafIbraheem@gmail.com" className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium">
            <Mail className="w-5 h-5" />
            ​Email me!  
          </a>
        </div>

        <div className="flex gap-6 mt-8">
          <a href="https://github.com/MohamedAshrafIbraheem97" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Profile">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/mohamedashrafibraheem/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn Profile">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>;
};
export default Contact;