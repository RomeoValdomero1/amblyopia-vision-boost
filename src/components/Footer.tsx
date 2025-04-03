
import { Logo } from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Logo />
          <p className="text-sm text-gray-600">
            © {currentYear} Amblyopia Treatment. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-primary">Política de privacidad</a>
            <a href="#" className="text-gray-600 hover:text-primary">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
