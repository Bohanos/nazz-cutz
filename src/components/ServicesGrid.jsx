export default function ServicesGrid({ onBookClick }) {
  const services = [
    { name: "PRECISION FADE", price: "$50", desc: "Expert blending and razor-sharp detailing." },
    { name: "BEARD SCULPT", price: "$35", desc: "Professional shaping, trimming, and conditioning." },
    { name: "THE WORKS", price: "$75", desc: "Full cut, beard sculpt, and hot towel finish." },
  ];

  return (
    <section id="services" className="bg-background px-6 py-20 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-text mb-12 text-center">
          PROFESSIONAL <span className="text-primary">SERVICES.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <button 
              key={index} 
              onClick={onBookClick}
              className="bg-secondary p-8 rounded-2xl border border-accent hover:scale-105 transition-transform duration-300 flex flex-col justify-between text-left cursor-pointer w-full"
            >
              <div>
                <h3 className="text-2xl font-black text-text mb-4">{service.name}</h3>
                <p className="text-slate-400 mb-6">{service.desc}</p>
              </div>
              <div className="text-3xl font-black text-accent">{service.price}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}