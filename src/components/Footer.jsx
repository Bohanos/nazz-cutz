export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Name */}
        <div className="text-2xl font-black tracking-tighter text-text">
          NAZZ<span className="text-primary">CUTZ</span>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 text-sm">
          © {currentYear} Nazz Cutz. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="text-slate-400 hover:text-accent transition-colors">Facebook</a>
          <a href="#" className="text-slate-400 hover:text-accent transition-colors">TikTok</a>
        </div>
      </div>
    </footer>
  );
}