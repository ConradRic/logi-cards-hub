import { ArrowLeft, Calculator, MapPin, Truck, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Calculadora = () => {
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
          <h1 className="text-3xl font-bold text-primary">Calculadora de Frete</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Calcular Frete</h3>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="origem">Origem</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input id="origem" placeholder="CEP ou cidade" className="pl-10" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="destino">Destino</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input id="destino" placeholder="CEP ou cidade" className="pl-10" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="peso">Peso (kg)</Label>
                  <Input id="peso" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="volume">Volume (m³)</Label>
                  <Input id="volume" type="number" placeholder="0" />
                </div>
              </div>

              <div>
                <Label htmlFor="veiculo">Tipo de Veículo</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o veículo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="van">Van</SelectItem>
                    <SelectItem value="caminhao">Caminhão</SelectItem>
                    <SelectItem value="carreta">Carreta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">
                <Calculator className="w-4 h-4 mr-2" />
                Calcular Frete
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Resultado do Cálculo</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">R$ 0,00</p>
                  <p className="text-sm text-muted-foreground">Valor do Frete</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Distância:</span>
                  <span className="text-sm">-- km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tempo estimado:</span>
                  <span className="text-sm">-- horas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Combustível:</span>
                  <span className="text-sm">R$ --</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Pedágio:</span>
                  <span className="text-sm">R$ --</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Preencha os dados acima para calcular o frete
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;