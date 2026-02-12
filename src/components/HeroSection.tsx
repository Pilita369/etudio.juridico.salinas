import heroBg from "@/assets/fotos/oficina-amplia.jpg";
import logoSalinas from "@/assets/fotos/logo.salinas.png";

const HeroSection = () => (
  <section
    id="inicio"
    /*
      Acá fijo el hero a una pantalla exacta. Así el fondo NO “crece”.
      Si quiero que sea un poquito más alto: cambio h-screen por min-h-screen.
    */
    className="relative h-screen overflow-hidden"
  >
    {/* Fondo */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="h-full w-full object-cover" />
      {/* Acá aplico el tinte/oscurecido para que el contenido se lea */}
      <div className="absolute inset-0 bg-primary/55" />
    </div>

    {/* ✅ Logo gigante “anclado” arriba (NO pisa el texto) */}
    <div
      /*
        Acá posiciono el logo arriba de todo en el hero.
        Lo centro y lo dejo en un área fija, para que nunca choque con el texto.
      */
      className="pointer-events-none absolute left-1/2 top-24 z-10 w-full -translate-x-1/2"
    >
      <div className="mx-auto flex justify-center px-6">
        <img
          src={logoSalinas}
          alt="Estudio Jurídico Salinas"
          /*
            Acá hago el logo bien grande sin romper el layout:
            - max-h limita el alto para que NO invada el texto
            - w-auto mantiene proporción
            Si lo quiero aún más grande, subo los max-h.
          */
          className="
            w-auto
            max-h-[220px]
            md:max-h-[280px]
            lg:max-h-[320px]
            drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]
          "
          loading="eager"
        />
      </div>
    </div>

    {/* ✅ Texto + botones “anclados” abajo */}
    <div
      /*
        Acá anclo el texto y botones abajo, así siempre quedan separados del logo.
        Si quiero más aire abajo: aumento bottom-12 a bottom-16.
      */
      className="absolute inset-x-0 bottom-12 z-10 px-6 text-center"
    >
      <div className="mx-auto max-w-3xl">
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
            Acá doy aire debajo de los botones.
            Si querés más espacio: pb-6 -> pb-10.
          */
          className="mt-10 flex flex-col items-center gap-4 pb-6 sm:flex-row sm:justify-center"
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
      </div>
    </div>
  </section>
);

export default HeroSection;
