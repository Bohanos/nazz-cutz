export default function BookingSection() {
  return (
    <section id="booking" className="bg-slate-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-text text-center mb-12">
          READY FOR A <span className="text-accent">FRESH CUT?</span>
        </h2>
        
        {/* Responsive Iframe Container */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-slate-700 shadow-2xl" style={{ paddingTop: '80%' }}>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfzge8KpzOtcP-xg6wdwZaHyeyviGK7Pf_fGylFUKQdYNzynA/viewform?embedded=true" 
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}