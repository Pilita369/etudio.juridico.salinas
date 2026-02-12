import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Consulta de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:contacto@estudiosalinas.com.ar?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="font-body text-xs font-semibold tracking-[0.3em] text-gold uppercase">Contacto</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Estamos para ayudarlo
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold" />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">Dirección</h4>
                <p className="font-body text-sm text-muted-foreground">Neuquén, Argentina</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">Email</h4>
                <p className="font-body text-sm text-muted-foreground">contacto@estudiosalinas.com.ar</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <h4 className="font-heading text-base font-semibold text-foreground">Teléfono</h4>
                <p className="font-body text-sm text-muted-foreground">(0299) 000-0000</p>
              </div>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="flex items-center justify-center rounded-lg border border-border bg-card p-12">
              <div className="text-center">
                <p className="font-heading text-xl font-semibold text-foreground">¡Mensaje enviado!</p>
                <p className="mt-2 font-body text-sm text-muted-foreground">
                  Nos pondremos en contacto a la brevedad.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-body text-sm font-medium text-gold underline underline-offset-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-lg border border-border bg-card p-8">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-body text-sm font-medium text-foreground">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded border border-input bg-background px-4 py-2.5 font-body text-sm text-foreground outline-none transition-colors focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-body text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded border border-input bg-background px-4 py-2.5 font-body text-sm text-foreground outline-none transition-colors focus:border-gold"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block font-body text-sm font-medium text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded border border-input bg-background px-4 py-2.5 font-body text-sm text-foreground outline-none transition-colors focus:border-gold resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded bg-primary px-6 py-3 font-body text-sm font-semibold tracking-wider text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
