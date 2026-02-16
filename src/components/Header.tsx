import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoSalinas from "@/assets/fotos/logo.salinas.png";
import { Menu, X } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";

/*
  ✅ Acá defino mis links:
  - route=true: ruta real
  - route=false: sección (scroll)
*/
const navLinks = [
  { label: "Inicio", id: "inicio", route: false },
  { label: "Área Jurídica", id: "juridica", route: false },
  { label: "Coworking", href: "/coworking", route: true },
  { label: "Contacto", id: "contacto", route: false },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { goToSection } = useScrollToSection();

  /*
    ✅ Acá dejo el header SIEMPRE con efecto vidrio azul.
    No necesito cambiarlo con scroll porque vos lo querés igual siempre.
  */
  useEffect(() => {
    // cierro el menú mobile cuando se hace scroll (detalle pro)
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        backdrop-blur-xl
        bg-[#0B2A4A]/55
        border-b border-white/10
      "
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* ✅ Acá muestro el logo a la izquierda */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoSalinas}
            alt="Estudio Jurídico Salinas"
            /* ✅ Acá puedo agrandar o achicar el logo del header */
            className="h-10 w-auto md:h-12"
            loading="eager"
          />
        </Link>

        {/* ✅ Menú desktop */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((l) =>
            l.route ? (
              <Link
                key={l.label}
                to={l.href!}
                className="font-body text-sm font-medium tracking-wider text-white/90 uppercase transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.label}
                type="button"
                onClick={() => goToSection(l.id!)}
                className="font-body text-sm font-medium tracking-wider text-white/90 uppercase transition-colors hover:text-gold"
              >
                {l.label}
              </button>
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

      {/* ✅ Menú mobile */}
      {open && (
        <nav className="flex flex-col gap-4 px-6 pb-6 md:hidden bg-[#0B2A4A]/55 backdrop-blur-xl border-t border-white/10">
          {navLinks.map((l) =>
            l.route ? (
              <Link
                key={l.label}
                to={l.href!}
                onClick={() => setOpen(false)}
                className="font-body text-sm font-medium tracking-wider text-white/90 uppercase transition-colors hover:text-gold text-left"
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.label}
                type="button"
                onClick={() => {
                  setOpen(false);
                  goToSection(l.id!);
                }}
                className="font-body text-sm font-medium tracking-wider text-white/90 uppercase transition-colors hover:text-gold text-left"
              >
                {l.label}
              </button>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
