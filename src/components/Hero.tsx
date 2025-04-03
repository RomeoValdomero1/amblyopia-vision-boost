
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformá tu visión
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Tratamiento efectivo para el ojo vago sin cirugías
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Empezar tratamiento
            </Button>
          </div>
          <div className="relative animate-fade-in-up delay-200 flex justify-center">
            <img
              src="/lovable-uploads/17f7d676-e914-4f91-819a-26969498e174.png"
              alt="Paciente usando Amblyopia Treatment"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
