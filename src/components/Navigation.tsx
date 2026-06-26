import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa o estado assim que passa da altura da barra de endereço (cerca de 36px)
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
      
      {/* TOPBAR SUPERIOR (Fica no topo absoluto da página e SOME no scroll) */}
      <div className="w-full bg-[#090909] border-b border-white/10 py-2.5 px-6 lg:px-16 flex justify-between items-center text-[11px] font-sans tracking-wider text-white/80">
        <div className="hidden md:flex items-center gap-1 font-light">
          <span>Av. Dr. Antônio Carlos Couto de Barros, 1400 - Jardim Conceição - Campinas/SP</span>
        </div>
        
        <div className="flex items-center justify-end gap-6 ml-auto font-light">
          <a href="https://wa.me/5519984051623" target="_blank" rel="noreferrer" className="hover:text-brass transition-colors">
            +55 19 98405-1623
          </a>
          <a href="mailto:contato@smeak.com.br" className="hover:text-brass transition-colors">
            contato@smeak.com.br
          </a>
        </div>
      </div>

      {/* NAVBAR PRINCIPAL (Fixa no topo apenas após passar o Topbar) */}
      <nav className={`w-full px-6 lg:px-16 py-5 flex items-center justify-between transition-all duration-300 z-50 ${
        isScrolled 
          ? 'fixed top-0 left-0 bg-black/95 shadow-xl backdrop-blur-md border-b border-white/5 animate-slide-down' 
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

        {/* LINKS DE CATEGORIAS */}
        <div className="hidden md:flex items-center font-sans text-[11px] font-semibold tracking-[0.25em] uppercase">
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors px-3 py-1">
            À La Carte
          </button>
          <span className="text-white/30 select-none text-[9px] font-thin">|</span>
          
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors px-3 py-1">
            Executivo
          </button>
          <span className="text-white/30 select-none text-[9px] font-thin">|</span>
          
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors px-3 py-1">
            Bebidas
          </button>
          <span className="text-white/30 select-none text-[9px] font-thin">|</span>
          
          <button onClick={() => handleScrollToSection('oferecemos')} className="text-brass hover:text-white transition-colors px-3 py-1">
            Carta de Vinhos
          </button>
        </div>

        {/* RESERVAS */}
        <div>
          <a 
            href="https://wa.me/5519984051623"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-brass/90 hover:bg-white text-black font-sans text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-sm transition-all duration-300 font-semibold"
          >
            Reservar Mesa
          </a>
        </div>

      </nav>
    </header>
  );
}