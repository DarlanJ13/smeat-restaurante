import IMAGES from '../data/images';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F0F0F] px-6"
    >
      {/* Imagem de Fundo Imersiva (Visual de Revista / Gastronomia de Luxo) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Corte premium grelhado em chama aberta em ambiente sofisticado"
          className="h-full w-full object-cover opacity-35 select-none pointer-events-none scale-105 transition-transform duration-[10000ms] ease-out animate-pulse-slow"
          loading="eager"
        />
        {/* Vinheta Editorial (Gradiente radial + linear que foca o centro e escurece as bordas) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]/70" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* Conteúdo Centralizado Baseado no Layout do Carní */}
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center flex flex-col items-center justify-center pt-20">
        
        {/* Subtítulo com espaçamento ultra-wide elegante */}
        <p className="animate-fade mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-brass sm:text-xs">
          Fogo &middot; Arte &middot; Sabor
        </p>
        
        {/* Título com Tipografia de Alta Gastronomia */}
        <h1 className="animate-fade-up text-balance font-serif text-4xl font-light leading-[1.15] text-ivory sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">
          O fogo encontra o <br />
          <span className="italic font-serif font-normal text-brass">refinamento</span>
        </h1>
        
        {/* Texto de Apoio Centralizado e Fluido */}
        <p className="animate-fade-up mt-8 max-w-xl text-balance font-sans text-sm leading-relaxed text-ivory/60 font-light sm:text-base md:text-lg">
          Smeat é uma experiência steakhouse premium construída em torno da
          chame aberta, ingredientes excepcionais e o teatro silencioso da
          cozinha artesanal.
        </p>
        
        {/* Botões de Ação com Alinhamento Otimizado */}
        <div className="mt-10 flex flex-col gap-4 w-full max-w-xs sm:max-w-none sm:flex-row sm:justify-center sm:gap-6">
          <a 
            href="#contato" 
            className="btn-primary text-center px-8 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(245,124,33,0.2)] rounded-[8px]"
          >
            Reservar mesa
          </a>
          <a 
            href="#menu" 
            className="btn-outline text-center px-8 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-ivory hover:text-black rounded-[8px]"
          >
            Ver o menu
          </a>
        </div>
      </div>

      {/* Linha Indicadora de Rolar Lateral/Vertical Ultra Minimalista */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-ivory/20 lg:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono">Rolar</span>
        <div className="h-12 w-px bg-gradient-to-b from-ivory/30 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brass animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}