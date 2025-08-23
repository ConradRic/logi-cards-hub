import { ArrowLeft, User, Plus, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Motoristas = () => {
  const navigate = useNavigate();

  const motoristas = [
    { id: 1, nome: "João Silva", cnh: "12345678901", categoria: "D", status: "Disponível" },
    { id: 2, nome: "Maria Santos", cnh: "10987654321", categoria: "E", status: "Em Viagem" },
    { id: 3, nome: "Pedro Costa", cnh: "11122334455", categoria: "C", status: "Folga" },
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
          <h1 className="text-3xl font-bold text-primary">Cadastro de Motoristas</h1>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Buscar motoristas..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Novo Motorista
          </Button>
        </div>

        <div className="grid gap-4">
          {motoristas.map((motorista) => (
            <Card key={motorista.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {motorista.nome.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{motorista.nome}</h3>
                    <p className="text-sm text-muted-foreground">CNH: {motorista.cnh}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Categoria {motorista.categoria}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    motorista.status === 'Disponível' 
                      ? 'bg-green-100 text-green-800' 
                      : motorista.status === 'Em Viagem'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {motorista.status}
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

export default Motoristas;