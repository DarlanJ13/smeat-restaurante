import RevealSection from '../hooks/useReveal';

export default function Experience() {
  return (
    <section id="experiencia" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <RevealSection>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-brass">
              A experiência
            </p>
            <h2 className="text-balance text-4xl font-medium leading-[1.1] text-ivory sm:text-5xl lg:text-6xl">
              Uma reverência pela arte da carne
            </h2>
          </RevealSection>

          <RevealSection delay={150} className="flex flex-col justify-center">
            <div className="space-y-6 leading-relaxed text-ivory/70">
              <p>
                Fundado na crença de que as melhores refeições começam muito
                antes do prato, o Smeat trabalha com um círculo seleto de
                fazendas que criam o gado com paciência e cuidado. Fazemos a
                maturação in-house, desossamos sob demanda e assamos sobre
                lenha viva — um processo que não pode ser apressado.
              </p>
              <p>
                Cada detalhe, do peso dos talheres à temperatura dos pratos, é
                calibrado para honrar o ingrediente. O resultado não é apenas um
                jantar, mas uma experiência lenta e deliberada.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-ivory/10 pt-8">
              <div>
                <p className="font-serif text-3xl font-medium text-ivory">45</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-ivory/50">
                  Dias de maturação
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-ivory">12</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-ivory/50">
                  Fazendas parceiras
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium text-ivory">1</p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-ivory/50">
                  Chama aberta
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
