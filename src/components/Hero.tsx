
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformá tu visión con Amblyopia Treatment
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Tratamiento efectivo para el ojo vago sin cirugías
            </p>
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Empezar tratamiento
            </Button>
          </div>
          <div className="relative animate-fade-in-up delay-200">
            <img
              src="/lovable-uploads/bb6580ba-a86b-4f97-a343-8e51ebaa6857.png"
              alt="Mascota Amblyopia Treatment"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
