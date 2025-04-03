
import { Logo } from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <a href="#que-es" className="text-gray-600 hover:text-primary">Que es</a>
            <a href="#como-funciona" className="text-gray-600 hover:text-primary">Cómo funciona</a>
            <a href="#resultados" className="text-gray-600 hover:text-primary">Resultados</a>
            <a href="#faq" className="text-gray-600 hover:text-primary">FAQ</a>
            <a href="#contacto" className="text-gray-600 hover:text-primary">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
