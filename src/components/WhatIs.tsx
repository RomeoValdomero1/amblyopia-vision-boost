
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Home, Users, Brain } from "lucide-react";

export default function WhatIs() {
  const benefits = [
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Sin cirugías",
      description: "Mejora tu visión sin intervenciones quirúrgicas"
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Accesible desde casa",
      description: "Realiza tu tratamiento desde la comodidad de tu hogar"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Para todas las edades",
      description: "Apto para niños y adultos de 7 a 90 años"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Beneficios adicionales",
      description: "Mejora en visión, memoria y concentración"
    }
  ];

  return (
    <section id="que-es" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Qué es Amblyopia Treatment?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos una empresa líder en rehabilitación visual. Ofrecemos un software que trata la ambliopía 
            mediante videojuegos interactivos con optotipos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
