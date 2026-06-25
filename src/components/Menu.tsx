export default function Menu() {

  return (
    <section id="cardapio" className="py-20 bg-brand-strawDark/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Nosso Cardápio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-coffeeDark mb-6 drop-shadow-sm">
            Sabor de verdade, feito na hora
          </h3>
          <p className="text-lg text-brand-coffee opacity-90">
            Nossos pratos são preparados com ingredientes frescos e aquele tempero regional que você procura em Confins.
            Aqui tem fartura e sabor para toda a família.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Cardápio Categoria 1 */}
          <div className="mb-12 bg-brand-straw p-8 md:p-10 rounded-[2rem] border border-brand-woodLight shadow-sm">
            <h4 className="text-2xl font-bold text-brand-coffeeDark mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-brand-orange"></span>
              Para Compartilhar
              <span className="w-8 h-px bg-brand-orange"></span>
            </h4>
            
            <div className="space-y-8">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2 gap-4">
                  <h5 className="text-xl font-bold text-brand-coffeeDark group-hover:text-brand-orange transition-colors">[Nome do Prato Principal 1]</h5>
                  <div className="flex-grow border-b-2 border-dotted border-brand-coffee/20"></div>
                  <span className="text-xl font-bold text-brand-coffeeDark">R$ --,--</span>
                </div>
                <p className="text-brand-coffee opacity-90 text-sm md:text-base">[Descrição detalhada dos ingredientes, tamanho da porção e acompanhamentos. Ex: Servido com arroz, feijão tropeiro e mandioca frita.]</p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2 gap-4">
                  <h5 className="text-xl font-bold text-brand-coffeeDark group-hover:text-brand-orange transition-colors">[Nome do Prato Principal 2]</h5>
                  <div className="flex-grow border-b-2 border-dotted border-brand-coffee/20"></div>
                  <span className="text-xl font-bold text-brand-coffeeDark">R$ --,--</span>
                </div>
                <p className="text-brand-coffee opacity-90 text-sm md:text-base">[Descrição detalhada dos ingredientes, tamanho da porção e acompanhamentos.]</p>
              </div>
            </div>
          </div>

          {/* Cardápio Categoria 2 */}
          <div className="mb-12 bg-brand-straw p-8 md:p-10 rounded-[2rem] border border-brand-woodLight shadow-sm">
            <h4 className="text-2xl font-bold text-brand-coffeeDark mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-brand-orange"></span>
              Porções e Entradas
              <span className="w-8 h-px bg-brand-orange"></span>
            </h4>
            
            <div className="space-y-8">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2 gap-4">
                  <h5 className="text-xl font-bold text-brand-coffeeDark group-hover:text-brand-orange transition-colors">[Nome da Porção 1]</h5>
                  <div className="flex-grow border-b-2 border-dotted border-brand-coffee/20"></div>
                  <span className="text-xl font-bold text-brand-coffeeDark">R$ --,--</span>
                </div>
                <p className="text-brand-coffee opacity-90 text-sm md:text-base">[Descrição da porção e molhos que acompanham.]</p>
              </div>

              <div className="group">
                <div className="flex justify-between items-baseline mb-2 gap-4">
                  <h5 className="text-xl font-bold text-brand-coffeeDark group-hover:text-brand-orange transition-colors">[Nome da Porção 2]</h5>
                  <div className="flex-grow border-b-2 border-dotted border-brand-coffee/20"></div>
                  <span className="text-xl font-bold text-brand-coffeeDark">R$ --,--</span>
                </div>
                <p className="text-brand-coffee opacity-90 text-sm md:text-base">[Descrição da porção.]</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5531990893313?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Manga%20%26%20Prosa%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-full font-bold transition-all shadow-sm md:hover:-translate-y-1"
            aria-label="Ver Cardápio Completo no WhatsApp"
          >
            Ver Cardápio Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
