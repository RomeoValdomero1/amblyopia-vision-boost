
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria D.",
    role: "Paciente",
    image: "/lovable-uploads/17f7d676-e914-4f91-819a-26969498e174.png",
    quote: "Recuperé mi visión sin pasar por el quirófano."
  },
  {
    id: 2,
    name: "Patricio",
    role: "Paciente",
    image: "/placeholder.svg",
    quote: "Nunca creí que un juego podría mejorar mi visión."
  },
  {
    id: 3,
    name: "Natalia",
    role: "Paciente",
    image: "/placeholder.svg",
    quote: "Recuperar la visión me cambió la vida."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Testimonios de pacientes y médicos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Avatar className="w-24 h-24 border-4 border-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="flex justify-center">
                      <Quote className="h-6 w-6 text-primary rotate-180" />
                    </div>
                    <p className="text-lg italic">{testimonial.quote}</p>
                    <div className="pt-2">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
