export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-3xl text-ivory">Smeat</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/50">
              Uma experiência steakhouse premium. Fogo, ingredientes
              excepcionais e o teatro silencioso da cozinha.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-ivory/40">
                Endereço
              </p>
              <address className="mt-4 not-italic text-sm leading-relaxed text-ivory/70">
                Av. Brasil, 1234
                <br />
                Rio Claro — SP
              </address>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-ivory/40">
                Funcionamento
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">
                Ter — Sáb
                <br />
                18:00 — 23:00
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-ivory/40">
                Contato
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ivory/70">
                reservas@smeat.co
                <br />
                +55 (19) 99880-5368
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-ivory/10 pt-8 sm:flex-row">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} Smeat. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-ivory/50">
            <a href="#" className="transition-colors hover:text-brass">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-brass">
              Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-brass">
              Acessibilidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
