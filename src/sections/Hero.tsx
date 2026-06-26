import IMAGES from '../data/images';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-black"
    >
      {/* Imagem de Fundo com Gradiente de Escurecimento Embutido */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Corte premium grelhado em chama aberta em ambiente sofisticado"
          className="h-full w-full object-cover opacity-50 select-none pointer-events-none"
          loading="eager"
        />
        {/* Camada de sombra para dar leitura ao texto e isolar o topo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10">
        <div className="max-w-3xl">
          {/* Subtítulo com espaçamento ultra-wide elegante */}
          <p className="animate-fade mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-brass">
            Fogo &middot; Arte &middot; Sabor
          </p>
          
          {/* Título Corrigido com Tipografia Imponente */}
          <h1 className="animate-fade-up text-balance font-serif text-5xl font-light leading-[1.1] text-ivory sm:text-7xl lg:text-8xl">
            O fogo encontra o <br />
            <span className="italic text-brass font-normal">refinamento</span>
          </h1>
          
          {/* Texto de Apoio Suave e Elegante */}
          <p className="animate-fade-up mt-6 max-w-xl text-balance font-sans text-base leading-relaxed text-ivory/60 font-light sm:text-lg">
            Smeat é uma experiência steakhouse premium construída em torno da
            chama aberta, ingredientes excepcionais e o teatro silencioso da
            cozinha.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contato" className="btn-primary text-center">
              Reservar mesa
            </a>
            <a href="#menu" className="btn-outline text-center">
              Ver o menu
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de Rolar mais minimalista */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-ivory/30 lg:flex">
        <span className="text-[9px] uppercase tracking-[0.25em]">Rolar</span>
        <span className="h-16 w-px bg-gradient-to-b from-ivory/30 to-transparent" />
      </div>
    </section>
  );
}