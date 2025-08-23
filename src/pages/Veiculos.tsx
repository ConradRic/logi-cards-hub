import { ArrowLeft, Car, Plus, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Veiculos = () => {
  const navigate = useNavigate();

  const veiculos = [
    { id: 1, placa: "ABC-1234", modelo: "Mercedes Actros", tipo: "Caminhão", status: "Ativo" },
    { id: 2, placa: "DEF-5678", modelo: "Volkswagen Delivery", tipo: "Van", status: "Manutenção" },
    { id: 3, placa: "GHI-9012", modelo: "Scania R450", tipo: "Carreta", status: "Ativo" },
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
          <h1 className="text-3xl font-bold text-primary">Cadastro de Veículos</h1>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Buscar veículos..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Novo Veículo
          </Button>
        </div>

        <div className="grid gap-4">
          {veiculos.map((veiculo) => (
            <Card key={veiculo.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{veiculo.placa}</h3>
                    <p className="text-sm text-muted-foreground">{veiculo.modelo}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{veiculo.tipo}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    veiculo.status === 'Ativo' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {veiculo.status}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Veiculos;