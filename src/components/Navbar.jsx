export default function Navbar({ onBookClick }) {
  const googleFormUrl = "https://docs.google.com/forms/your-form-link-here";
  const logo = "https://res.cloudinary.com/z3qujb2c/image/upload/v1784601357/logo_ms9uie.jpg";

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Nazz Cutz Logo" className="h-8 w-8 md:h-10 md:w-10" />
        <span className="text-xl md:text-2xl font-black tracking-tighter text-indigo-500">
          NAZZ CUTZ
        </span>
      </div>

      <div className="hidden md:flex gap-8 font-medium text-slate-300 text-sm">
        <a href="#services" className="hover:text-lime-400 transition">SERVICES</a>
        <a href="#vibe" className="hover:text-lime-400 transition">THE VIBE</a>
        <a href="#location" className="hover:text-lime-400 transition">LOCATION</a>
      </div>

      <a href="#booking">
        <button 
          onClick={onBookClick}
          className="bg-lime-400 text-slate-950 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold hover:bg-lime-300 transition-transform active:scale-95"
        >
          GET IN LINE
        </button>
      </a>
    </nav>
  );
}