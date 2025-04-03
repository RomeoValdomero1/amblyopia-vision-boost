
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { group: 'Niños (7-12)', improvement: 95 },
  { group: 'Adolescentes (13-18)', improvement: 85 },
  { group: 'Adultos (19-45)', improvement: 70 },
  { group: 'Mayores (46+)', improvement: 60 },
];

const chartConfig = {
  improvement: {
    label: "Mejora en agudeza visual",
    color: "#1E88E5",
  },
};

export default function Results() {
  return (
    <section id="resultados" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados comprobados</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Más de 600 pacientes tratados desde 2008 con mejoras significativas en su visión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-center">
                <span className="text-5xl font-bold text-primary">602</span>
                <p className="text-gray-600 mt-2">Pacientes tratados</p>
              </div>
              <div className="flex justify-around mt-8">
                <div className="text-center">
                  <span className="text-2xl font-bold">7-71</span>
                  <p className="text-gray-600 text-sm">Rango de edad</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold">100%</span>
                  <p className="text-gray-600 text-sm">Con mejoras</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-l-4 border-secondary">
              <p className="text-lg font-medium">
                "Todos los pacientes mejoraron al menos dos líneas de agudeza visual"
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Beneficios adicionales reportados:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  Mayor velocidad de lectura
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  Mejor coordinación visomotora
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  Aumento en la concentración
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  Disminución de dolores de cabeza
                </li>
              </ul>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="group" />
                <YAxis 
                  label={{ value: '% de efectividad', angle: -90, position: 'insideLeft' }} 
                  domain={[0, 100]}
                />
                <Bar dataKey="improvement" fill="#1E88E5" name="Mejora en agudeza visual" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
