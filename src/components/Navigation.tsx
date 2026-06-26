import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 36) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full z-50 flex flex-col">
      
      {/* TOPBAR SUPERIOR */}
      <div className="w-full bg-[#090909] border-b border-white/10 py-2.5 px-6 lg:px-16 flex justify-between items-center text-[11px] font-sans tracking-wider text-white/80">
        <div className="hidden md:flex items-center gap-1 font-light">
          <span>Av. Dr. Antônio Carlos Couto de Barros, 1400 - Jardim Conceição - Campinas/SP</span>
        </div>
        
        <div className="flex items-center justify-end gap-6 ml-auto font-light">
          <a href="https://wa.me/5519984051623" target="_blank" rel="noreferrer" className="hover:text-brass transition-colors">
            +55 19 98405-1623
          </a>
          <a href="mailto:contato@smeat.com.br" className="hover:text-brass transition-colors">
            contato@smeat.com.br
          </a>
        </div>
      </div>

      {/* NAVBAR PRINCIPAL (Com links jogados para a direita e fonte aumentada) */}
      <nav className={`w-full px-6 lg:px-16 py-6 flex items-center justify-between transition-all duration-300 z-50 ${
        isScrolled 
          ? 'fixed top-0 left-0 bg-black/95 shadow-xl backdrop-blur-md border-b border-white/5' 
          : 'absolute top-[37px] left-0 bg-transparent'
      }`}>
        
        {/* LOGO BRANDING */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-4 h-4 rotate-45 border-2 border-[#E1251B] bg-transparent flex items-center justify-center transition-transform group-hover:rotate-180 duration-500">
            <div className="w-1.5 h-1.5 bg-[#E1251B]" />
          </div>
          <span className="font-serif text-2xl tracking-wider text-white font-light uppercase">
            Smeat
          </span>
        </a>

        {/* LINKS DE CATEGORIAS ALINHADOS À DIREITA (ml-auto) E COM FONTE MAIOR */}
        <div className="hidden md:flex items-center gap-2 ml-auto font-sans text-[13px] font-medium tracking-[0.2em] uppercase">
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors px-4 py-1">
            À La Carte
          </button>
          <span className="text-white/20 select-none text-[11px] font-thin">|</span>
          
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors px-4 py-1">
            Executivo
          </button>
          <span className="text-white/20 select-none text-[11px] font-thin">|</span>
          
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors px-4 py-1">
            Bebidas
          </button>
          <span className="text-white/20 select-none text-[11px] font-thin">|</span>
          
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors px-4 py-1 text-right">
            Carta de Vinhos
          </button>
        </div>

      </nav>
    </header>
  );
}