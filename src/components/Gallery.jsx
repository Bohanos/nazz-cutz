import { useState, useEffect } from 'react';

export default function Gallery() {
  const galleryImages = [
    "https://res.cloudinary.com/z3qujb2c/image/upload/v1784601357/logo_ms9uie.jpg",
    "https://res.cloudinary.com/z3qujb2c/image/upload/v1784601357/shop_s_interior_ulkhp7.jpg",
    "https://res.cloudinary.com/z3qujb2c/image/upload/v1784601322/Hair_style2_ecjbq2.png",
    "https://res.cloudinary.com/z3qujb2c/image/upload/v1784601321/Hair_style_1_kyouns.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section id="vibe" className="bg-background px-6 py-20 md:px-8 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-black text-text mb-12 text-center">
        THE <span className="text-accent">VIBE</span>
      </h2>
      
      {/* Container restricted to show only one item */}
      <div className="relative max-w-2xl mx-auto">
        <div className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-accent transition-all duration-300">
          <img 
            src={galleryImages[currentIndex]} 
            alt={`Nazz Cutz Gallery ${currentIndex + 1}`} 
            className="w-full h-80 object-cover transition-opacity duration-1000 ease-in-out" 
          />
        </div>
        
        {/* Optional: Indicator dots to show progress */}
        <div className="flex justify-center gap-2 mt-4">
          {galleryImages.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-accent' : 'bg-slate-600'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}