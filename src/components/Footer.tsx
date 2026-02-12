const Footer = () => (
  <footer className="bg-primary px-6 py-10 text-center">
    <p className="font-heading text-sm font-medium text-primary-foreground/80">
      © {new Date().getFullYear()} Estudio Jurídico Salinas — Neuquén, Argentina
    </p>
    <p className="mt-1 font-body text-xs text-primary-foreground/50">
      Todos los derechos reservados.
    </p>
  </footer>
);

export default Footer;
