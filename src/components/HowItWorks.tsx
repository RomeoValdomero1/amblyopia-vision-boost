
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "El paciente se tapa el ojo sano",
      description: "Inicia la terapia cubriendo el ojo dominante para fortalecer el ojo con ambliopía."
    },
    {
      number: "02",
      title: "Usa el software 30 minutos diarios",
      description: "Sesiones breves pero efectivas, de lunes a viernes."
    },
    {
      number: "03",
      title: "El software se adapta a cada usuario",
      description: "Personalizado según edad y nivel visual para maximizar resultados."
    },
    {
      number: "04",
      title: "Seguimiento de progreso constante",
      description: "Monitoreo detallado para evaluar y ajustar el tratamiento."
    }
  ];

  const modalities = [
    {
      color: "bg-secondary",
      title: "Corta distancia",
      description: "Ideal para mejorar la visión en tareas de cerca como lectura"
    },
    {
      color: "bg-amber-400",
      title: "Larga distancia",
      description: "Perfecto para potenciar la visión de objetos lejanos"
    },
    {
      color: "bg-blue-500",
      title: "Mantenimiento",
      description: "Diseñado para conservar los avances logrados"
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo funciona el tratamiento?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y efectivo que puedes seguir desde cualquier dispositivo con Internet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <img 
              src="/placeholder.svg"
              alt="Paciente usando el software"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">Modalidades de tratamiento</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modalities.map((mode, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg bg-white shadow-md border-t-4 hover:shadow-lg transition-shadow"
                style={{ borderTopColor: `var(--${index === 0 ? 'secondary' : index === 1 ? 'amber-400' : 'blue-500'})` }}
              >
                <div className={`w-3 h-3 rounded-full mb-4 ${mode.color}`}></div>
                <h4 className="font-bold text-xl mb-2">{mode.title}</h4>
                <p className="text-gray-600">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-6">
          <p className="text-xl font-medium mb-4">
            "Usá el software desde cualquier dispositivo con internet"
          </p>
          <Button variant="outline" className="group">
            Conocer más sobre el tratamiento
            <MoveRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
