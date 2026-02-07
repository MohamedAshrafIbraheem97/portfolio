const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-3xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Mohamed Ashraf Ibraheem</p>
          <p className="font-mono text-xs">Built with clarity in mind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;