import { ArrowLeft, Truck, Fuel, Wrench, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Frota = () => {
  const navigate = useNavigate();

  const estatisticas = [
    { titulo: "Veículos Ativos", valor: "12", icone: Truck },
    { titulo: "Em Manutenção", valor: "3", icone: Wrench },
    { titulo: "Alertas", valor: "2", icone: AlertTriangle },
  ];

  const veiculos = [
    { placa: "ABC-1234", combustivel: 85, manutencao: "Em dia", quilometragem: "125.432 km" },
    { placa: "DEF-5678", combustivel: 45, manutencao: "Vencida", quilometragem: "98.765 km" },
    { placa: "GHI-9012", combustivel: 92, manutencao: "Próxima", quilometragem: "187.543 km" },
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
          <h1 className="text-3xl font-bold text-primary">Gestão de Frota</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {estatisticas.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <stat.icone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.valor}</p>
                  <p className="text-sm text-muted-foreground">{stat.titulo}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Status da Frota</h3>
          <div className="space-y-6">
            {veiculos.map((veiculo, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold">{veiculo.placa}</h4>
                    <p className="text-sm text-muted-foreground">{veiculo.quilometragem}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    veiculo.manutencao === 'Em dia' 
                      ? 'bg-green-100 text-green-800' 
                      : veiculo.manutencao === 'Vencida'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    Manutenção: {veiculo.manutencao}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Fuel className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Combustível</span>
                      <span>{veiculo.combustivel}%</span>
                    </div>
                    <Progress value={veiculo.combustivel} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Frota;