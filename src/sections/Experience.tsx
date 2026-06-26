import IMAGES from '../data/images';

export default function Experience() {
  return (
    <section id="experiencia" className="relative bg-[#0F0F0F] py-24 md:py-32 overflow-hidden px-6 lg:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* COLUNA DA ESQUERDA: Textos e Contato */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brass font-medium mb-3">
            Nossa História
          </span>
          
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 w-full">
            <span className="h-[1px] w-8 bg-brass/40" />
            <span className="text-[10px] text-brass">♦</span>
            <span className="h-[1px] w-8 bg-brass/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory leading-[1.2] mb-6 max-w-md">
            Uma reverência pela arte da carne
          </h2>

          <div className="font-sans text-sm sm:text-base text-ivory/60 font-light leading-relaxed space-y-4 max-w-md mb-8">
            <p>
              Fundado na crença de que as melhores refeições começam muito antes do prato, o Smeat trabalha com um círculo seleto de fazendas que criam o gado com paciência e cuidado.
            </p>
            <p>
              Fazemos a maturação in-house, desossamos sob demanda e assamos sobre lenha viva — um processo que não pode ser apressado.
            </p>
          </div>

          <div className="mt-4 flex flex-col items-center lg:items-start gap-1 border-t border-white/5 pt-6 w-full max-w-md">
            <span className="font-mono text-[11px] uppercase tracking-widest text-ivory/40">Fale Conosco</span>
            <a 
              href="https://wa.me/5519998805368" 
              target="_blank" 
              rel="noreferrer" 
              className="font-serif text-xl sm:text-2xl text-brass hover:text-ivory transition-colors duration-300 tracking-wide mt-1"
            >
              +55 19 99880-5368
            </a>
          </div>
        </div>

        {/* COLUNA DA DIREITA: Mosaico Corrigido para a foto da raiz */}
        <div className="lg:col-span-7 relative w-full h-[550px] sm:h-[650px] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
          
          <div className="absolute left-4 lg:left-12 top-10 bottom-10 w-48 opacity-[0.03] pointer-events-none select-none z-0 hidden sm:block bg-[radial-gradient(#F57C21_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Imagem PRINCIPAL: Sua foto real (fachada.jpg) */}
          <div className="absolute right-4 sm:right-12 lg:right-4 top-0 w-[60%] h-[90%] z-10 overflow-hidden rounded-md border border-white/5 shadow-2xl">
            <img 
              src={IMAGES.fachada} 
              alt="Fachada real do restaurante Smeat" 
              className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-103"
            />
          </div>

          {/* Imagem SECUNDÁRIA: Alterado de atmosphere para steak para bater com seu images.ts */}
          <div className="absolute left-4 sm:left-8 bottom-6 w-[48%] h-[50%] z-20 overflow-hidden rounded-md border-2 border-[#0F0F0F] shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            <img 
              src={IMAGES.steak || IMAGES.hero} 
              alt="Corte de carne nobre na parrilla" 
              className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}