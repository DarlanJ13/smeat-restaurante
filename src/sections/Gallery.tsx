import RevealSection from '../hooks/useReveal';
import IMAGES from '../data/images';

const GALLERY = [
  { src: IMAGES.interior, alt: 'Salão principal do Smeat' },
  { src: IMAGES.dish1, alt: 'Prato principal em louça escura' },
  { src: IMAGES.chef, alt: 'Chef finalizando prato' },
  { src: IMAGES.steak, alt: 'Corte grelhado na chama' },
];

export default function Gallery() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <RevealSection className="mb-16 text-center lg:mb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-brass">
            Galeria
          </p>
          <h2 className="text-balance text-4xl font-medium leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
            O ambiente
          </h2>
        </RevealSection>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {GALLERY.map((item, index) => (
            <RevealSection
              key={item.alt}
              delay={index * 100}
              className={`overflow-hidden ${
                index === 0 ? 'col-span-2' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ aspectRatio: index === 0 ? '21/9' : '4/3' }}
              />
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
