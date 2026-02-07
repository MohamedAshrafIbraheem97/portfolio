const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">About</h2>
        
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a frontend engineer who transitioned from product ownership into development. 
            That background shapes how I approach code: I think about business needs, 
            user experience, and long-term maintainability—not just the next feature.
          </p>
          
          <p>
            My primary focus is <span className="text-foreground font-medium">Angular</span> (latest versions), 
            where I work with standalone components, signals, and reactive patterns. 
            I've spent real time migrating legacy codebases, replacing heavy UI libraries 
            with custom Tailwind systems, and building feature-based architectures that scale.
          </p>
          
          <p>
            I'm not a framework chaser. I focus on fundamentals—TypeScript, HTML, CSS, 
            and understanding how the browser actually works. The goal is always 
            <span className="text-foreground font-medium"> code that's explicit, testable, and easy to reason about</span>.
          </p>

          <p>
            Outside of shipping features, I'm continuously deepening my skills: 
            data structures, algorithms, accessibility, and testing. 
            I believe frontend engineering is serious work, and I treat it that way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;