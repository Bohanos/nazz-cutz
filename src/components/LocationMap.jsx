export default function LocationMap() {
  const directionsUrl = "https://www.google.com/maps/place/Nazz+Cutz+-+Croydon+Barber/data=!4m2!3m1!1s0x6ad63125e4073f95:0xc20f9dac82ceda37";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8095594437586!2d145.29149127569272!3d-37.7710633719862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63125e4073f95%3A0xc20f9dac82ceda37!2sNazz%20Cutz%20-%20Croydon%20Barber!5e0!3m2!1sen!2sng!4v1784603113673!5m2!1sen!2sng";

  return (
    <section id="location" className="bg-background px-6 py-20 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-text mb-12 text-center">
          FIND <span className="text-primary">US.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Embed */}
          <div className="bg-secondary p-2 rounded-2xl border border-slate-700 shadow-2xl h-96">
            <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 overflow-hidden">
              <iframe 
                className="w-full h-full"
                src={mapEmbedUrl}
                allowFullScreen="" 
                loading="lazy" 
                title="Nazz Cutz Location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="bg-secondary p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold text-text mb-2">VISIT THE SHOP</h3>
              <p className="text-lg text-slate-400 mb-6">
                7/401-415 Maroondah Hwy,<br />
                Croydon North, VIC 3136
              </p>
              <a 
                href={directionsUrl}
                target="_blank" 
                rel="noreferrer"
                className="text-accent font-bold hover:underline transition"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}