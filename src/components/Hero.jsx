export default function Hero({ onBookClick }) {
  const interiorImageUrl = "https://res.cloudinary.com/z3qujb2c/image/upload/v1784601357/shop_s_interior_ulkhp7.jpg";
  
  return (
    <section className="bg-background px-6 py-12 md:px-8 md:py-20 flex flex-col md:flex-row items-stretch justify-between gap-10">
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center w-full text-center md:text-left">
        <h1 className="text-5xl md:text-8xl font-black text-text leading-[1.1] tracking-tighter mb-6">
          ELEVATE YOUR STYLE.<br />
          <span className="text-primary">NAZZ CUTZ.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
          Premium grooming in Croydon North. Experience the precision of professional services.
        </p>
        
        {/* Updated: Added onClick={onBookClick} */}
        <a 
          href="#booking"
          onClick={onBookClick}
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition w-full md:w-auto text-center"
        >
          Book Your Session
        </a>
      </div>

      {/* Right Visual */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="bg-secondary p-2 rounded-2xl border border-slate-700 shadow-2xl w-full">
          <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden">
            <img src={interiorImageUrl} alt="Nazz Cutz Interior" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}