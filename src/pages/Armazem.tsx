import { ArrowLeft, Warehouse, MapPin, Package, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Armazem = () => {
  const navigate = useNavigate();

  const estatisticas = [
    { titulo: "Produtos Armazenados", valor: "2.845", icone: Package },
    { titulo: "Capacidade Utilizada", valor: "67%", icone: TrendingUp },
    { titulo: "Localizações Ativas", valor: "156", icone: MapPin },
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
          <h1 className="text-3xl font-bold text-primary">Gestão de Armazém</h1>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Movimentações Recentes</h3>
            <div className="space-y-4">
              {[
                { produto: "Smartphone XYZ", acao: "Entrada", quantidade: 50, data: "Hoje, 14:30" },
                { produto: "Notebook ABC", acao: "Saída", quantidade: 12, data: "Hoje, 13:15" },
                { produto: "Tênis Esportivo", acao: "Entrada", quantidade: 25, data: "Hoje, 11:45" },
              ].map((mov, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium">{mov.produto}</p>
                    <p className="text-sm text-muted-foreground">{mov.data}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      mov.acao === 'Entrada' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {mov.acao}: {mov.quantidade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Layout do Armazém</h3>
            <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Warehouse className="w-12 h-12 mx-auto mb-2" />
                <p>Visualização do Layout</p>
                <p className="text-sm">Mapa interativo do armazém</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Armazem;