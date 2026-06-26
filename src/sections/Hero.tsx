import IMAGES from '../data/images';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      <div className="image-overlay absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Corte premium grelhado em chama aberta em ambiente sofisticado"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10">
        <div className="max-w-3xl">
          <p className="animate-fade mb-4 text-xs font-medium uppercase tracking-widest text-brass">
            Fogo · Arte · Sabor
          </p>
          <h1 className="animate-fade-up text-balance text-6xl font-medium leading-[0.95] text-ivory sm:text-7xl lg:text-8xl">
            O fogo encontra a
            <span className="block italic text-brass">refinamento</span>
          </h1>
          <p className="animate-fade-up mt-8 max-w-xl text-balance text-base leading-relaxed text-ivory/70 sm:text-lg">
            Smeat é uma experiência steakhouse premium construída em torno da
            chama aberta, ingredientes excepcionais e o teatro silencioso da
            cozinha.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contato" className="btn-primary">
              Reservar mesa
            </a>
            <a href="#menu" className="btn-outline">
              Ver o menu
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/40 lg:flex">
        <span className="text-[10px] uppercase tracking-widest">Rolar</span>
        <span className="h-12 w-px bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  );
}
