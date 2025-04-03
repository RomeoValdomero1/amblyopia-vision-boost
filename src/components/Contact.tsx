
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Listo para transformar tu visión? Ponte en contacto con nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@ejemplo.com"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Asunto
                </label>
                <Input
                  id="subject"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button className="w-full sm:w-auto">Enviar mensaje</Button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="text-center">
              <Button variant="outline" size="lg" className="w-full mb-6">
                Comprar software
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@tratamientodeambliopia.com" className="text-gray-600 hover:text-primary">
                  info@tratamientodeambliopia.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Instagram className="h-5 w-5 text-primary" />
                <a href="#" className="text-gray-600 hover:text-primary">
                  @amblyopiatreatment
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <a href="#" className="text-gray-600 hover:text-primary">
                  www.amblyopiatreatment.com
                </a>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 pt-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
