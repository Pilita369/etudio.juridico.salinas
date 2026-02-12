import heroBg from "@/assets/fotos/oficina-amplia.jpg";
import logoSalinas from "@/assets/fotos/logo.salinas.png";

const HeroSection = () => (
  <section
    id="inicio"
    /*
      Acá defino el alto del hero.
      - min-h-screen hace que ocupe toda la pantalla.
      - pb-24 agrega espacio abajo (esto te da el “aire” debajo de los botones).
      Si quiero más aire: subo a pb-32.
    */
    className="relative flex min-h-screen items-center justify-center overflow-hidden pb-24 md:pb-28"
  >
    {/* Fondo */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="h-full w-full object-cover" />

      /*
        Acá oscurezco el fondo para que el logo y el texto se lean.
        - Más oscuro: bg-primary/70
        - Más claro:  bg-primary/45
      */
      <div className="absolute inset-0 bg-primary/55" />
    </div>

    {/* Contenido */}
    <div
      /*
        Acá centro todo el contenido y lo separo del header.
        pt-24 evita que el logo quede escondido bajo el header fijo.
        Si el header es más alto, subo pt-28.
      */
      className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center pt-24 md:pt-28 animate-fade-in-up"
    >
      {/* ✅ Logo centrado y MÁS grande */}
      <div className="mb-10 flex justify-center">
        <img
          src={logoSalinas}
          alt="Estudio Jurídico Salinas"
          /*
            🔥 Acá controlo el tamaño del logo sin romper el layout.
            Uso max-h para que crezca, pero sin descontrolar el diseño.

            Si lo quiero aún más grande:
            - max-h-[260px] md:max-h-[340px] lg:max-h-[440px]
          */
          className="
            w-auto
            max-h-[300px]
            md:max-h-[430px]
            lg:max-h-[340px]
            drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]
          "
          loading="eager"
        />
      </div>

      {/* Línea dorada */}
      <div className="mx-auto mb-6 h-px w-20 bg-gold" />

      {/* Ubicación */}
      <p className="font-body text-lg font-light tracking-widest text-primary-foreground/80 uppercase">
        Neuquén · Argentina
      </p>

      {/* Texto */}
      <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-primary-foreground/90 md:text-lg">
        Asesoramiento legal integral con amplia experiencia. Confianza, compromiso y excelencia profesional.
      </p>

      {/* Botones */}
      <div
        /*
          Acá puedo controlar el espacio arriba y abajo de los botones.
          - mt-12 separa del texto
          - mb-10 agrega aire debajo de los botones (esto es lo que pediste)
          Si querés más aire abajo: subo a mb-16.
        */
        className="mt-12 mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <a
          href="#juridica"
          className="rounded bg-gold px-10 py-3 font-body text-sm font-semibold tracking-wider text-gold-foreground uppercase transition-opacity hover:opacity-90"
        >
          Nuestros Servicios
        </a>

        <a
          href="/coworking"
          className="rounded border border-primary-foreground/30 px-10 py-3 font-body text-sm font-semibold tracking-wider text-primary-foreground uppercase transition-colors hover:border-primary-foreground/60"
        >
          Coworking
        </a>
      </div>

      {/* 
        Acá dejo un espacio extra opcional abajo por si querés más “aire”.
        Si no lo querés, lo podés borrar.
      */}
      <div className="h-6 md:h-10" />
    </div>
  </section>
);

export default HeroSection;
