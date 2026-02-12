import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, DoorOpen, Presentation } from "lucide-react";

// Acá importo una foto real para la imagen principal
import coworkingReal from "@/assets/fotos/recepcion.jpg";

// Acá importo las fotos para el “trencito”
import oficina1 from "@/assets/fotos/oficina-1.jpg";
import oficina2 from "@/assets/fotos/oficina-2.jpg";
import oficinaAmplia from "@/assets/fotos/oficina-amplia.jpg";
import salaReuniones from "@/assets/fotos/sala-reuniones.jpg";

const features = [
  {
    icon: Building2,
    title: "Oficinas Compartidas",
    desc: "Espacios equipados para profesionales del derecho con todo lo necesario para trabajar cómodamente.",
  },
  {
    icon: DoorOpen,
    title: "Sala de Reuniones",
    desc: "Ambientes privados para reuniones con clientes, mediaciones y audiencias virtuales.",
  },
  {
    icon: Presentation,
    title: "Sala de Conferencias",
    desc: "Espacio amplio para seminarios, capacitaciones y eventos del ámbito jurídico.",
  },
];

/**
 * ✅ Trencito infinito (marquee)
 * - Yo duplico las imágenes para que, cuando termina la animación, parezca continuo.
 * - Yo agrego hover:scale para hacer zoom al pasar el mouse.
 * - Yo pauso la animación cuando el usuario pasa el mouse sobre el carrusel (queda más “premium”).
 */
const InfiniteTrain = ({
  images,
  speedSeconds = 25,
}: {
  images: { src: string; alt: string }[];
  speedSeconds?: number;
}) => {
  // Acá duplico la lista para simular continuidad
  const loop = [...images, ...images];

  return (
    <div className="mt-14">
      {/* 
        Acá creo una “ventana” para que el trencito no se salga del contenedor.
        También agrego un degradado a los costados para que se vea más suave.
      */}
      <div className="relative overflow-hidden">
        {/* Degradados laterales (efecto pro) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-secondary to-transparent z-10" />

        {/* 
          Acá está la pista del trencito. 
          - animate-train: mueve horizontal
          - hover:[animation-play-state:paused]: al pasar mouse, yo pauso la animación
        */}
        <div
          className="flex w-max gap-4 animate-train hover:[animation-play-state:paused]"
          style={{ animationDuration: `${speedSeconds}s` }}
        >
          {loop.map((img, i) => (
            <figure
              key={`${img.alt}-${i}`}
              className="relative overflow-hidden rounded-xl bg-muted shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                /*
                  Acá defino el tamaño “tarjeta” del trencito.
                  Si quiero más grandes:
                  - h-56 / w-[340px]
                  Si quiero más chicos:
                  - h-36 / w-[220px]
                */
                className="
                  h-44 w-[280px] object-cover
                  transition-transform duration-500
                  hover:scale-[1.08]
                "
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>

      {/* 
        ✅ Keyframes embebidos (así no tocamos tailwind.config).
        Yo muevo desde 0 hasta -50% porque la lista está duplicada.
      */}
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
  );
};

const CoworkingSection = () => {
  // Acá defino el orden del trencito (si quiero cambiar el orden, lo cambio acá)
  const trainImages = [
    { src: oficinaAmplia, alt: "Oficina amplia y luminosa" },
    { src: salaReuniones, alt: "Sala de reuniones" },
    { src: oficina1, alt: "Oficina - escritorio y detalles" },
    { src: oficina2, alt: "Atención profesional en oficina" },
  ];

  return (
    <section id="coworking" className="section-padding bg-secondary">
      <div className="container mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Coworking Jurídico
          </p>

          {/* Acá puedo cambiar el título */}
          <h2 className="mt-4 font-heading text-3xl font-bold text-secondary-foreground md:text-4xl">
            Espacios profesionales para abogados
          </h2>

          <div className="mx-auto mt-4 h-px w-16 bg-gold" />

          {/* Acá puedo cambiar el texto */}
          <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
            Nuestro coworking jurídico ofrece un ambiente profesional y funcional para abogados,
            con espacios diseñados para optimizar tu productividad y brindar comodidad a tus clientes.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Imagen principal */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={coworkingReal}
              alt="Coworking Jurídico - imagen real"
              className="h-full w-full object-cover"
            />

            {/* Acá oscurezco un poco para que se vea elegante */}
            <div className="absolute inset-0 bg-primary/25" />
          </div>

          {/* Features + CTA */}
          <div>
            <div className="grid gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <feature.icon className="h-5 w-5 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-secondary-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-start">
              <Button asChild className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90">
                <Link to="/coworking">
                  Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* ✅ Trencito continuo + zoom */}
        <InfiniteTrain images={trainImages} speedSeconds={22} />
      </div>
    </section>
  );
};

export default CoworkingSection;
