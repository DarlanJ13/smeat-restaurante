import { Flame } from 'lucide-react';
import RevealSection from '../hooks/useReveal';
import IMAGES from '../data/images';

const FEATURED = [
  {
    name: 'Tomahawk para Dois',
    desc: 'Maturado por 45 dias, 900g de sabor intenso e textura macia.',
    price: 'R$ 298',
    image: IMAGES.steak,
  },
  {
    name: 'Croquetes de Costela',
    desc: 'Defumados na casa, maionese de pimenta e ervas frescas.',
    price: 'R$ 68',
    image: IMAGES.dish2,
  },
  {
    name: 'Medalhão de Filé',
    desc: '250g de filé mignon, manteiga de ervas e redução de vinho.',
    price: 'R$ 148',
    image: IMAGES.dish3,
  },
];

export default function FeaturedDishes() {
  return (
    <section className="bg-ink-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RevealSection className="mb-16 text-center lg:mb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-brass">
            Destaques
          </p>
          <h2 className="text-balance text-4xl font-medium leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
            Pratos em destaque
          </h2>
        </RevealSection>

        <div className="grid gap-8 md:grid-cols-3">
          {FEATURED.map((dish, index) => (
            <RevealSection key={dish.name} delay={index * 120}>
              <div className="group overflow-hidden bg-ink transition-colors duration-500 hover:bg-smoke">
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl text-ivory">
                      {dish.name}
                    </h3>
                    <span className="font-serif text-lg text-brass">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/50">
                    {dish.desc}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection className="mt-12 flex justify-center">
          <a href="#menu" className="btn-outline items-center gap-2">
            <Flame className="h-4 w-4" />
            Ver menu completo
          </a>
        </RevealSection>
      </div>
    </section>
  );
}
