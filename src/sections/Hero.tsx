import { useState, useEffect } from 'react';
import IMAGES from '../data/images';

const SLIDES = [
  {
    image: IMAGES.dish1, // Certifique-se que aponta para uma bela foto de carne na parrilha
    tagline: 'EXPERIÊNCIA GASTRONÔMICA',
    title: 'Carnes Nobres na Parrilha',
    subtitle: 'Venha com a família e aproveite',
  },
  {
    image: IMAGES.dish2, // Foto de aperitivos/entradas crocantes
    tagline: 'EXPERIÊNCIA GASTRONÔMICA',
    title: 'Aperitivos Incríveis',
    subtitle: 'Venha Experimentar',
  },
  {
    image: IMAGES.bebida, // Foto do drink premium de altíssima qualidade
    tagline: 'EXPERIÊNCIA GASTRONÔMICA',
    title: 'Drinks Maravilhosos',
    subtitle: 'Experimente cada um deles',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000); // Muda de slide a cada 6 segundos automaticamente
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="home" className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* IMAGENS DE FUNDO COM TRANSIÇÃO SUAVE */}
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-60 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-[6000ms]`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay escuro sutil para destacar a tipografia branca */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50" />
        </div>
      ))}

      {/* CONTEÚDO TEXTUAL CENTRALIZADO */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 select-none">
        <span className="font-sans text-[11px] sm:text-xs tracking-[0.4em] uppercase text-brass/90 mb-4 animate-fade-in">
          {SLIDES[current].tagline}
        </span>
        
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide max-w-4xl leading-tight mb-6">
          {SLIDES[current].title}
        </h1>
        
        <p className="font-sans text-xs sm:text-sm tracking-[0.2em] text-white/70 font-light max-w-lg">
          {SLIDES[current].subtitle}
        </p>
      </div>

      {/* NAVEGAÇÃO: SETA ESQUERDA */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-colors text-2xl font-light"
        aria-label="Slide anterior"
      >
        ❮
      </button>

      {/* NAVEGAÇÃO: SETA DIREITA */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white transition-colors text-2xl font-light"
        aria-label="Próximo slide"
      >
        ❯
      </button>

      {/* INDICADORES DE PAGINAÇÃO SUBTIS NO RODAPÉ DO BANNER */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-6 bg-brass' : 'w-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>

    </section>
  );
}