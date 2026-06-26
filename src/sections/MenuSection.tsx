import { Beef, Fish, Leaf, Wine, Dessert } from 'lucide-react';
import RevealSection from '../hooks/useReveal';
import IMAGES from '../data/images';

const CATEGORIES = [
  { id: 'cortes', label: 'Cortes', icon: Beef },
  { id: 'entradas', label: 'Entradas', icon: Leaf },
  { id: 'frutos-do-mar', label: 'Frutos do Mar', icon: Fish },
  { id: 'vinhos', label: 'Vinhos', icon: Wine },
  { id: 'sobremesas', label: 'Sobremesas', icon: Dessert },
];

const DISHES = {
  cortes: [
    { name: 'Ribeye 45 Dias', detail: ' osso, 400g, grelhado na brasa', price: 'R$ 158' },
    { name: 'Wagyu Sirloin', detail: 'A5, marmoreio intenso, 200g', price: 'R$ 225' },
    { name: 'Tomahawk para Dois', detail: 'Maturado, 900g', price: 'R$ 298' },
    { name: 'Porterhouse', detail: 'Na chapa, 600g', price: 'R$ 188' },
    { name: 'Filé Mignon', detail: 'Grass-fed, 250g', price: 'R$ 148' },
    { name: 'Bavette', detail: 'Corte do açougueiro, 300g', price: 'R$ 118' },
  ],
  entradas: [
    { name: 'Croquetes de Costela', detail: 'Maionese defumada, ervas', price: 'R$ 68' },
    { name: 'Medula à Parilla', detail: 'Pão de fermentação natural, cebola', price: 'R$ 72' },
    { name: 'Beterraba Defumada', detail: 'Queijo de cabra, nozes, vinagrete', price: 'R$ 58' },
    { name: 'Carpaccio de Filé', detail: 'Rúcula, limão, azeite trufado', price: 'R$ 84' },
  ],
  'frutos-do-mar': [
    { name: 'Camarão ao Alho', detail: 'Manteiga de ervas, pimenta', price: 'R$ 92' },
    { name: 'Polvo Grelhado', detail: 'Batatas, páprica defumada', price: 'R$ 128' },
    { name: 'Ostras Frescas', detail: 'Meia dúzia, limão e tabasco', price: 'R$ 110' },
  ],
  vinhos: [
    { name: 'Malbec Reserva', detail: 'Avalle, Argentina, 750ml', price: 'R$ 245' },
    { name: 'Cabernet Sauvignon', detail: 'Vale do Colchagua, 750ml', price: 'R$ 198' },
    { name: 'Espumante Brut', detail: 'Serra Gaúcha, 750ml', price: 'R$ 165' },
    { name: 'Tannat', detail: 'Uruguai, 750ml', price: 'R$ 210' },
  ],
  sobremesas: [
    { name: 'Petit Gâteau', detail: 'Ganache quente, sorvete de baunilha', price: 'R$ 48' },
    { name: 'Crème Brûlée', detail: 'Baunilha de Madagascar', price: 'R$ 42' },
    { name: 'Torta de Chocolate', detail: 'Cacau 70%, flor de sal', price: 'R$ 52' },
  ],
};

import { useState } from 'react';

export default function MenuSection() {
  const [active, setActive] = useState('cortes');

  return (
    <section id="menu" className="bg-ink-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RevealSection className="mb-16 text-center lg:mb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-brass">
            Menu
          </p>
          <h2 className="text-balance text-4xl font-medium leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
            Cardápio
          </h2>
        </RevealSection>

        <RevealSection>
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActive(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? 'bg-brass text-ink'
                      : 'border border-ivory/10 bg-ink text-ivory/70 hover:border-brass hover:text-ivory'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </RevealSection>

        <div className="grid gap-12 lg:grid-cols-2">
          <RevealSection>
            <div className="space-y-6">
              {DISHES[active as keyof typeof DISHES].map((dish) => (
                <div
                  key={dish.name}
                  className="group flex items-baseline justify-between border-b border-ivory/10 pb-6 transition-colors hover:border-brass/40"
                >
                  <div>
                    <p className="font-serif text-xl text-ivory transition-colors group-hover:text-brass">
                      {dish.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-ivory/50">
                      {dish.detail}
                    </p>
                  </div>
                  <span className="font-serif text-lg text-brass">
                    {dish.price}
                  </span>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={120} className="hidden lg:block">
            <img
              src={IMAGES.steak}
              alt="Prato do menu Smeat"
              className="aspect-[4/3] w-full object-cover"
            />
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
