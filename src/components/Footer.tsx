const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2025 Julien Raad. Tous droits réservés.</p>
        <p className="flex items-center gap-1">
          Développé avec <span className="text-primary">♥</span> et Unity
        </p>
      </div>
    </footer>
  );
};

export default Footer;
