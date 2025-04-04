
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Es para adultos también?",
    answer: "Sí, nuestro tratamiento es efectivo para personas de todas las edades, desde niños de 7 años hasta adultos de 90 años."
  },
  {
    question: "¿Necesito receta médica?",
    answer: "Recomendamos consultar primero con su oftalmólogo, aunque no es obligatorio para iniciar el tratamiento."
  },
  {
    question: "¿Qué necesito para usarlo?",
    answer: "Solo necesita un dispositivo con conexión a internet, como una computadora, tablet o smartphone."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre nuestro tratamiento
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
