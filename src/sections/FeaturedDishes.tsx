import IMAGES from '../data/images';

export default function FeaturedDishes() {
  // Função para rolar suavemente até o menu e você pode integrar para disparar o filtro correto se tiver um estado global
  const handleCategoryClick = (id: string) => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Se futuramente quiser despachar um evento customizado para mudar a categoria ativa no MenuSection:
      window.dispatchEvent(new CustomEvent('changeMenuCategory', { detail: id }));
    }
  };

  return (
    <section className="relative bg-[#0F0F0F] py-24 md:py-32 overflow-hidden px-6 lg:px-16">
      
      {/* Título da Seção Centralizado */}
      <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory tracking-wide">
          O que oferecemos
        </h2>
      </div>

      {/* Grid de Categorias Estilo Carní (Escalonado Asymmetric) */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
        
        {/* CATEGORIA 1: À La Carte */}
        <div 
          onClick={() => handleCategoryClick('alacarte')}
          className="group cursor-pointer flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2"
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md border border-white/5 shadow-xl mb-6">
            <img 
              src={IMAGES.dish1} 
              alt="Cardápio À La Carte" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Textura geométrica sutil no topo e base da imagem interna se desejar emular o detalhe de linhas */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl font-light text-ivory mb-2 tracking-wide group-hover:text-brass transition-colors">
            À La Carte
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/60">
            Cardápio À La Carte
          </span>
        </div>

        {/* CATEGORIA 2: Executivo (Rebaixado verticalmente no desktop para criar o efeito mosaico) */}
        <div 
          onClick={() => handleCategoryClick('executivo')}
          className="group cursor-pointer flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2 md:mt-12"
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md border border-white/5 shadow-xl mb-6">
            <img 
              src={IMAGES.dish2} 
              alt="Cardápio Executivo" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl font-light text-ivory mb-2 tracking-wide group-hover:text-brass transition-colors">
            Executivo
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/60">
            Almoço Executivo
          </span>
        </div>

        {/* CATEGORIA 3: Bebidas */}
        <div 
          onClick={() => handleCategoryClick('bebidas')}
          className="group cursor-pointer flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2"
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md border border-white/5 shadow-xl mb-6">
            <img 
              src={IMAGES.dish3} 
              alt="Cardápio de Bebidas e Drinks" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl font-light text-ivory mb-2 tracking-wide group-hover:text-brass transition-colors">
            Bebidas
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brass/60">
            Cardápio de Drinks
          </span>
        </div>

      </div>
    </section>
  );
}