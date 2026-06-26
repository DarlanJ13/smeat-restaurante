import RevealSection from '../hooks/useReveal';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-brass py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-ink lg:px-10">
        <RevealSection>
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-ink/60">
            Reserve agora
          </p>
          <h2 className="text-balance text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl">
            Garanta sua mesa para uma noite inesquecível
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance leading-relaxed text-ink/70">
            Mesas limitadas para que cada convidado receba a atenção que merece.
            Fale conosco pelo WhatsApp ou preencha o formulário de contato.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 border border-ink bg-ink px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory transition-all duration-300 hover:bg-ink/80"
            >
              Fazer reserva
            </a>
            <a
              href="https://wa.me/5519998805368?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Smeat."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-ink/20 bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:border-ink hover:bg-ink/5"
            >
              WhatsApp
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
