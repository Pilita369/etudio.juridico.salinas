import { Scale, Briefcase, Users, ShieldCheck } from "lucide-react";

const services = [
  { icon: Scale, title: "Derecho Civil", desc: "Contratos, obligaciones, sucesiones y derechos reales." },
  { icon: Briefcase, title: "Derecho Laboral", desc: "Asesoramiento a empleadores y trabajadores en todas las instancias." },
  { icon: Users, title: "Derecho de Familia", desc: "Divorcios, alimentos, régimen de visitas y adopciones." },
  { icon: ShieldCheck, title: "Asesoramiento Integral", desc: "Consultoría legal preventiva para personas y empresas." },
];

const LegalSection = () => (
  <section id="juridica" className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl">
      <div className="mb-16 text-center">
        <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">Área Jurídica</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Servicios Legales
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
          Con una sólida formación y vasta experiencia, nuestro equipo brinda soluciones jurídicas
          eficaces, priorizando siempre la defensa de los intereses de nuestros clientes.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
          >
            <s.icon className="mb-4 h-8 w-8 text-gold" strokeWidth={1.5} />
            <h3 className="font-heading text-xl font-semibold text-card-foreground">{s.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LegalSection;
