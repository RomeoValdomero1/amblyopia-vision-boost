
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformá tu visión. Tratamiento efectivo para el ojo vago sin cirugías
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Estimula tu visión con nuestra tecnología avanzada desde la comodidad de tu hogar
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Empezar tratamiento
            </Button>
          </div>
          <div className="relative animate-fade-in-up delay-200">
            <img
              src={"/lovable-uploads/090817d6-1327-439e-8341-2b0478395023.png"}
              alt="Paciente usando el software de Amblyopia Treatment"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
