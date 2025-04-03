
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo funciona</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h3 className="font-bold">Usa el software</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h3 className="font-bold">Tus bajadas desde cualquier dispositivo con internet</h3>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xl font-bold text-primary">+500</div>
                  <div className="text-sm text-gray-600">pacientes tratados desde 2008</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">MEJORA</div>
                  <div className="text-sm text-gray-600">en agudeza visual</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xl font-bold text-primary">EXPERIENCIA</div>
                <div className="text-sm text-gray-600">Casos de 7 hasta 30 años</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/17f7d676-e914-4f91-819a-26969498e174.png"
              alt="Mascota de Amblyopia Treatment"
              className="w-48 h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-white rounded-lg shadow border-t-4 border-t-green-500">
            <div className="w-3 h-3 bg-green-500 rounded-full mb-4"></div>
            <h4 className="font-bold text-xl mb-2">Corta distancia</h4>
            <p className="text-gray-600">Ideal para mejorar la visión en tareas de cerca como lectura</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow border-t-4 border-t-amber-400">
            <div className="w-3 h-3 bg-amber-400 rounded-full mb-4"></div>
            <h4 className="font-bold text-xl mb-2">Larga distancia</h4>
            <p className="text-gray-600">Perfecto para potenciar la visión de objetos lejanos</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow border-t-4 border-t-blue-500">
            <div className="w-3 h-3 bg-blue-500 rounded-full mb-4"></div>
            <h4 className="font-bold text-xl mb-2">Mantenimiento</h4>
            <p className="text-gray-600">Diseñado para conservar los avances logrados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
