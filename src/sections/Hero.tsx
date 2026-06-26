import { useState, useEffect } from 'react';
import IMAGES from '../data/images';

// Array de imagens de fundo usando os links configurados no seu images.ts
const BACKGROUND_IMAGES = [
  IMAGES.hero,
  IMAGES.steak,
  IMAGES.interior,
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efeito para alternar a imagem de fundo a cada 5 segundos (Estilo Carní)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === BACKGROUND_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F0F0F] px-6"
    >
      {/* Imagens de Fundo Imersivas em Carrossel (Visual de Revista / Gastronomia de Luxo) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {BACKGROUND_IMAGES.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Corte premium grelhado em chama aberta em ambiente sofisticado - Slide ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover select-none pointer-events-none scale-105 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-35 z-10' : 'opacity-0 z-0'
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
        
        {/* Vinheta Editorial Fixa (Mantida idêntica por cima das fotos) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0F0F0F] via-transparent to-[#0F0F0F]/70" />
        <div className="absolute inset-0 z-20 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* Conteúdo Centralizado Baseado no Layout do Carní */}
      <div className="relative z-30 mx-auto w-full max-w-5xl text-center flex flex-col items-center justify-center pt-20">
        
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
          chama aberta, ingredientes excepcionais e o teatro silencioso da
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
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 text-ivory/20 lg:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono">Rolar</span>
        <div className="h-12 w-px bg-gradient-to-b from-ivory/30 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brass animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}