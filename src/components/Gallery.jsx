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
      
      <div className="relative max-w-6xl mx-auto">
        <div 
          className="flex transition-transform duration-1000 ease-in-out gap-6"
          
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        >
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] flex-shrink-0"
            >
              <div className="group relative overflow-hidden rounded-xl border border-slate-700 hover:border-accent transition-all duration-300">
                <img 
                  src={img} 
                  alt={`Nazz Cutz Gallery ${index + 1}`} 
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}