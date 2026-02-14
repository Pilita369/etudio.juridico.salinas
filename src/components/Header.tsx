import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoSalinas from "@/assets/fotos/logo.salinas.png";

/*
  ✅ Acá defino los links del header:
  - Los que son secciones usan "#..." (SIN "/") para no romper GitHub Pages.
  - Los que son rutas usan Link to="/coworking" (HashRouter lo vuelve #/coworking).
*/
const navLinks = [
  { label: "Inicio", href: "#inicio", route: false },
  { label: "Área Jurídica", href: "#juridica", route: false },
  { label: "Coworking", href: "/coworking", route: true },
  { label: "Contacto", href: "#contacto", route: false },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /*
    ✅ Acá activo el efecto vidrio más fuerte cuando hago scroll.
    Si quiero que cambie antes o después, ajusto el 40.
  */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /*
    ✅ Acá hago scroll suave a las secciones.
    Esto evita que el navegador intente navegar a otra URL y me genere 404.
  */
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Acá cierro el menú mobile si estaba abierto
    setOpen(false);

    const id = href.replace("#", "");
    const el = document.getElementById(id);

    // Si existe el elemento, hago scroll suave
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Acá actualizo el hash para que quede lindo en la URL
      window.location.hash = href;
    }
  };

  return (
    <header
      /*
        ✅ Header vidrio transparente:
        - Arriba de todo: más transparente
        - Con scroll: más sólido + sombra
      */
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "backdrop-blur-xl transition-all duration-300",
        "border-b border-white/10",
        scrolled ? "bg-primary/60 shadow-lg" : "bg-white/10",
      ].join(" ")}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* ✅ Logo izquierda */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoSalinas}
            alt="Estudio Jurídico Salinas"
            /*
              Acá puedo modificar el tamaño del logo del header.
              - más chico: h-8
              - normal: h-10
              - grande: h-12
            */
            className="h-10 w-auto"
            loading="eager"
          />
        </Link>

        {/* ✅ Menú desktop */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((l) =>
            l.route ? (
              <Link
                key={l.href}
                to={l.href}
                /*
                  Acá puedo modificar estilo del menú:
                  tamaño, color, tracking, hover.
                */
                className="font-body text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleSectionClick(e, l.href)}
                className="font-body text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        {/* ✅ Botón mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Menú mobile desplegable */}
      {open && (
        <nav className="flex flex-col gap-4 bg-primary/80 backdrop-blur-xl px-6 pb-6 md:hidden">
          {navLinks.map((l) =>
            l.route ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleSectionClick(e, l.href)}
                className="font-body text-sm font-medium tracking-wider text-white/80 uppercase transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
