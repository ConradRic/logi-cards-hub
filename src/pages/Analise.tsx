import { ArrowLeft, BarChart3, TrendingUp, TrendingDown, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Analise = () => {
  const navigate = useNavigate();

  const dadosVendas = [
    { mes: 'Jan', entregas: 120, faturamento: 45000 },
    { mes: 'Fev', entregas: 135, faturamento: 52000 },
    { mes: 'Mar', entregas: 150, faturamento: 58000 },
    { mes: 'Abr', entregas: 180, faturamento: 67000 },
    { mes: 'Mai', entregas: 165, faturamento: 61000 },
    { mes: 'Jun', entregas: 195, faturamento: 75000 },
  ];

  const estatisticas = [
    { titulo: "Entregas Mensais", valor: "195", variacao: "+15%", icone: Activity, trend: "up" },
    { titulo: "Faturamento", valor: "R$ 75.000", variacao: "+23%", icone: TrendingUp, trend: "up" },
    { titulo: "Custo Operacional", valor: "R$ 32.000", variacao: "-8%", icone: TrendingDown, trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-logistics-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/")}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-3xl font-bold text-primary">Análise e Relatórios</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {estatisticas.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{stat.valor}</p>
                  <p className="text-sm text-muted-foreground">{stat.titulo}</p>
                </div>
                <div className="text-right">
                  <div className="p-2 bg-primary/10 rounded-lg mb-2">
                    <stat.icone className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    stat.trend === 'up' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {stat.variacao}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Entregas por Mês</h3>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dadosVendas}>
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="entregas" fill="hsl(142 76% 36%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Faturamento Mensal</h3>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dadosVendas}>
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="faturamento" 
                    stroke="hsl(142 76% 36%)" 
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analise;