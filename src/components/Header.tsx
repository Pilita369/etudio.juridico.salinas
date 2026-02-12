import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoSalinas from "@/assets/fotos/logo.salinas.png";

const navLinks = [
  { label: "Inicio", href: "/#inicio", route: false },
  { label: "Área Jurídica", href: "/#juridica", route: false },
  { label: "Coworking", href: "/coworking", route: true },
  { label: "Contacto", href: "/#contacto", route: false },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  /*
    Acá detecto cuando hago scroll.
    Si bajo más de 50px, activo el efecto vidrio más fuerte.
    Si quiero que cambie antes o después, modifico el número 50.
  */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      /*
        🔥 Acá controlo el efecto vidrio.

        - backdrop-blur-xl = desenfoque fuerte tipo vidrio
        - bg-white/10 = fondo transparente claro
        - bg-primary/40 cuando hago scroll (más sólido)
        - border-b para línea inferior sutil

        Si lo quiero MÁS transparente: bg-white/5
        Si lo quiero más oscuro: bg-primary/60
      */
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        backdrop-blur-xl
        border-b border-white/10
        ${scrolled ? "bg-primary/60 shadow-lg" : "bg-white/10"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        
        {/* Logo izquierda */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoSalinas}
            alt="Estudio Jurídico Salinas"
            /*
              Acá controlo el tamaño del logo del header.
              Si lo quiero más grande: h-12
              Si lo quiero más chico: h-8
            */
            className="h-10 w-auto"
          />
        </Link>

        {/* Navegación */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) =>
            link.route ? (
              <Link
                key={link.href}
                to={link.href}
                /*
                  Acá puedo modificar color y tamaño del menú.
                  text-white/80 = blanco suave
                  hover:text-gold = dorado al pasar el mouse
                */
                className="font-body text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
