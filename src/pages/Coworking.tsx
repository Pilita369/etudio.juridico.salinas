import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Building2,
  Briefcase,
  DoorOpen,
  GraduationCap,
  Laptop,
  Monitor,
  Presentation,
  Rocket,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

// Acá importo mis fotos reales para la página Coworking
import recepcion from "@/assets/fotos/recepcion.jpg";
import salaReuniones from "@/assets/fotos/sala-reuniones.jpg";
import oficina1 from "@/assets/fotos/oficina-1.jpg";
import oficina2 from "@/assets/fotos/oficina-2.jpg";
import oficinaAmplia from "@/assets/fotos/oficina-amplia.jpg";

const spaces = [
  {
    icon: Monitor,
    title: "Puestos Compartidos",
    desc: "Escritorios equipados en un ambiente colaborativo, ideal para el trabajo diario.",
  },
  {
    icon: Building2,
    title: "Oficinas Privadas",
    desc: "Espacios cerrados para quienes necesitan mayor privacidad y concentración.",
  },
  {
    icon: DoorOpen,
    title: "Sala de Reuniones",
    desc: "Ambientes reservables para reuniones con clientes, videoconferencias y mediaciones.",
  },
  {
    icon: Presentation,
    title: "Sala de Conferencias",
    desc: "Espacio amplio para seminarios, capacitaciones, workshops y eventos.",
  },
];

const audience = [
  { icon: Rocket, label: "Emprendedores" },
  { icon: Laptop, label: "Freelancers" },
  { icon: Briefcase, label: "Profesionales independientes" },
  { icon: Users, label: "Equipos pequeños" },
  { icon: GraduationCap, label: "Estudiantes avanzados" },
];

const values = [
  {
    title: "Comunidad",
    desc: "Conecta con otros profesionales y encuentra oportunidades de colaboración y networking.",
  },
  {
    title: "Productividad",
    desc: "Espacios diseñados para maximizar tu concentración y eficiencia en el trabajo diario.",
  },
  {
    title: "Flexibilidad",
    desc: "Planes adaptables a tus necesidades, sin contratos a largo plazo ni complicaciones.",
  },
  {
    title: "Networking",
    desc: "Eventos y actividades para expandir tu red de contactos profesionales y generar oportunidades.",
  },
];

// ✅ Carrusel simple con fade (aparece/desaparece)
const ImageCarousel = ({
  images,
  intervalMs = 3200,
}: {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}) => {
  // Acá guardo qué imagen está activa
  const [index, setIndex] = useState(0);

  // Acá hago que cambie sola cada X milisegundos
  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [images.length, intervalMs]);

  // Acá preparo 3 imágenes para desktop (se ve más pro)
  const visible = useMemo(() => {
    const a = images[index];
    const b = images[(index + 1) % images.length];
    const c = images[(index + 2) % images.length];
    return { a, b, c };
  }, [images, index]);

  return (
    <div className="container mx-auto max-w-6xl px-6 lg:px-12">
      {/* 
        Acá NO muestro título ni texto (“fotos reales”), como pediste.
        Solo dejo que las imágenes se vean y vayan pasando.
      */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <figure className="overflow-hidden rounded-xl bg-muted shadow-sm">
          <img
            src={visible.a.src}
            alt={visible.a.alt}
            // Acá puedo ajustar tamaño del carrusel en la página /coworking
            className="h-72 w-full object-cover transition-opacity duration-700"
            loading="lazy"
          />
        </figure>

        <figure className="hidden overflow-hidden rounded-xl bg-muted shadow-sm sm:block">
          <img
            src={visible.b.src}
            alt={visible.b.alt}
            className="h-72 w-full object-cover transition-opacity duration-700"
            loading="lazy"
          />
        </figure>

        <figure className="hidden overflow-hidden rounded-xl bg-muted shadow-sm lg:block">
          <img
            src={visible.c.src}
            alt={visible.c.alt}
            className="h-72 w-full object-cover transition-opacity duration-700"
            loading="lazy"
          />
        </figure>
      </div>

      {/* Dots (indicador) */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a imagen ${i + 1}`}
            onClick={() => setIndex(i)}
            className={[
              "h-2.5 w-2.5 rounded-full transition-all",
              i === index ? "bg-gold w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
};

const Coworking = () => {
  // Acá defino el orden del carrusel (si quiero cambiar qué se ve primero, lo cambio acá)
  const gallery = [
    { src: recepcion, alt: "Recepción del coworking" },
    { src: salaReuniones, alt: "Sala de reuniones" },
    { src: oficina1, alt: "Oficina - escritorio y detalles" },
    { src: oficinaAmplia, alt: "Oficina amplia y luminosa" },
    { src: oficina2, alt: "Atención profesional en oficina" },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section (foto real) */}
        <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={oficinaAmplia} alt="Coworking" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/65 to-foreground/35" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center animate-fade-in-up">
            <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              Coworking Salinas
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-background md:text-5xl lg:text-6xl">
              Espacios para crear y crecer
            </h1>
            <p className="mt-5 font-body text-lg leading-relaxed text-background/85 md:text-xl">
              Espacio de trabajo compartido en Neuquén para emprendedores, freelancers y profesionales.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#espacios"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 font-body text-sm font-semibold tracking-wider text-gold-foreground uppercase transition-opacity hover:opacity-90"
              >
                Conoce el espacio
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Acá mando directo al carrusel sin texto */}
              <a
                href="#galeria"
                className="inline-flex items-center gap-2 rounded-full border border-background/40 px-8 py-3 font-body text-sm font-semibold tracking-wider text-background uppercase transition-colors hover:border-background/70"
              >
                Ver fotos
              </a>
            </div>
          </div>
        </section>

        {/* ¿Qué es Coworking Salinas? */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                ¿Qué es Coworking Salinas?
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gold" />
              <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
                Más que un lugar de trabajo, somos una comunidad. Un espacio moderno y funcional en Neuquén donde
                profesionales de todos los rubros pueden trabajar, colaborar y crecer juntos.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
                >
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Espacios Disponibles */}
        <section id="espacios" className="section-padding bg-secondary">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">
                Nuestros Espacios
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-secondary-foreground md:text-4xl">
                Espacios disponibles
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {spaces.map((space) => (
                <div
                  key={space.title}
                  className="flex gap-5 rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <space.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">
                      {space.title}
                    </h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-muted-foreground">
                      {space.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Carrusel sin título ni texto */}
        <section id="galeria" className="section-padding bg-background">
  {/* 
    Acá no pongo títulos ni texto. 
    Solo dejo que las imágenes pasen como un trencito continuo.
  */}
  <div className="container mx-auto max-w-6xl px-6 lg:px-12">
    <div className="relative overflow-hidden">
      {/* Degradados laterales (efecto pro) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

      {/* 
        Acá armo el trencito:
        - duplico la lista para continuidad
        - pauso al hover
      */}
      <div
        className="flex w-max gap-4 animate-train hover:[animation-play-state:paused]"
        style={{ animationDuration: "24s" }}
      >
        {[...gallery, ...gallery].map((img, i) => (
          <figure
            key={`${img.alt}-${i}`}
            className="relative overflow-hidden rounded-xl bg-muted shadow-sm"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="
                h-80 w-[420px] object-cover
                transition-transform duration-500
                hover:scale-[1.08]
              "
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </div>

    {/* Keyframes embebidos */}
    <style>
      {`
        @keyframes train {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-train {
          animation-name: train;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}
    </style>
  </div>
</section>


        {/* ¿Para quién es? */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              ¿Para quién es?
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
            <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-muted-foreground">
              Nuestro espacio está pensado para todo aquel que necesita un lugar profesional, cómodo y conectado para trabajar.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {audience.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3"
                >
                  <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  <span className="font-body text-sm font-medium text-card-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              ¿Listo para empezar?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-primary-foreground/75">
              Reservá tu espacio o consultá por nuestros planes y servicios. Estamos para ayudarte.
            </p>
            <a
              href="/#contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-10 py-3.5 font-body text-sm font-semibold tracking-wider text-gold-foreground uppercase transition-opacity hover:opacity-90"
            >
              Contactanos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Coworking;
