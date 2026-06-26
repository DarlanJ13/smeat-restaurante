import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Monitora o scroll para aplicar o fundo opaco na navbar principal
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
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full z-50 flex flex-col">
      
      {/* TOPBAR SUPERIOR - Ocultada totalmente no mobile (hidden) e visível apenas no desktop (md:flex) */}
      <div className="hidden md:flex w-full bg-[#090909] border-b border-white/10 py-2.5 px-6 lg:px-16 justify-between items-center text-[11px] font-sans tracking-wider text-white/80">
        <div className="flex items-center gap-1 font-light">
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

      {/* NAVBAR PRINCIPAL - Ajustada para colar no topo zero no mobile */}
      <nav className={`w-full px-6 lg:px-16 py-5 md:py-6 flex items-center justify-between transition-all duration-300 z-50 ${
        isScrolled 
          ? 'fixed top-0 left-0 bg-black/95 shadow-xl backdrop-blur-md border-b border-white/5' 
          : 'absolute top-0 md:top-[37px] left-0 bg-transparent' // No mobile começa exatamente no top-0
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

        {/* LINKS DESKTOP */}
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
          
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors px-4 py-1">
            Carta de Vinhos
          </button>
        </div>

        {/* BOTÃO HAMBÚRGUER MOBILE */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-brass transition-colors focus:outline-none p-1 z-50"
          aria-label="Abrir Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-[1.5px] bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-[1.5px] bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-[1.5px] bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

      </nav>

      {/* MENU LATERAL MOBILE */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-6 text-center font-sans text-base font-medium tracking-[0.25em] uppercase">
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors py-2 block w-full">
            À La Carte
          </button>
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors py-2 block w-full">
            Executivo
          </button>
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors py-2 block w-full">
            Bebidas
          </button>
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors py-2 block w-full">
            Carta de Vinhos
          </button>
          
          <div className="w-12 h-[1px] bg-white/10 my-4" />
          
          <span className="text-[11px] text-white/50 lowercase tracking-normal font-light">
            contato@smeat.com.br
          </span>
        </div>
      </div>

    </header>
  );
}