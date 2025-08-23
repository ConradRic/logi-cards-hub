import { ArrowLeft, Truck, MapPin, Route, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TMS = () => {
  const navigate = useNavigate();

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
          <h1 className="text-3xl font-bold text-primary">Sistema de Gestão de Transporte (TMS)</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Controle de Frotas</h3>
                <p className="text-sm text-muted-foreground">Gerencie veículos e rotas</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Rastreamento</h3>
                <p className="text-sm text-muted-foreground">Localização em tempo real</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Route className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Otimização de Rotas</h3>
                <p className="text-sm text-muted-foreground">Planejamento inteligente</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Agendamentos</h3>
                <p className="text-sm text-muted-foreground">Controle de entregas</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TMS;