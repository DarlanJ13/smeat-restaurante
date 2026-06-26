import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from 'lucide-react';
import RevealSection from '../hooks/useReveal';

const WHATSAPP_NUMBER = '5519998805368';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de fazer uma reserva no Smeat.'
);

export default function Contact() {
  return (
    <section id="contato" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RevealSection className="mb-16 text-center lg:mb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-brass">
            Contato
          </p>
          <h2 className="text-balance text-4xl font-medium leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
            Visite o Smeat
          </h2>
        </RevealSection>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <RevealSection>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-brass/30 text-brass">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ivory/40">
                    Endereço
                  </p>
                  <p className="mt-1 text-lg leading-relaxed text-ivory">
                    Av. Brasil, 1234
                    <br />
                    Centro, Rio Claro — SP
                    <br />
                    CEP 13500-000
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-brass/30 text-brass">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ivory/40">
                    Horários
                  </p>
                  <p className="mt-1 text-lg leading-relaxed text-ivory">
                    Terça a Sábado
                    <br />
                    18:00 — 23:00
                  </p>
                  <p className="mt-1 text-sm text-ivory/50">
                    Segunda e Domingo — Fechado
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-brass/30 text-brass">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ivory/40">
                    Telefone / WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-lg text-ivory transition-colors hover:text-brass"
                  >
                    +55 (19) 99880-5368
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-brass/30 text-brass">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ivory/40">
                    E-mail
                  </p>
                  <a
                    href="mailto:reservas@smeat.co"
                    className="mt-1 block text-lg text-ivory transition-colors hover:text-brass"
                  >
                    reservas@smeat.co
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center border border-ivory/10 text-ivory/70 transition-colors hover:border-brass hover:text-brass"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center border border-ivory/10 text-ivory/70 transition-colors hover:border-brass hover:text-brass"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={150}>
            <div className="overflow-hidden border border-ivory/10 bg-ink-soft p-1">
              <iframe
                title="Localização Smeat"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14706.63246018491!2d-47.5633754!3d-22.40567455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7db5cb3d12345%3A0xabcdef1234567890!2sRio%20Claro%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="480"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
