import { ArrowLeft, Package, Plus, Search, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Produtos = () => {
  const navigate = useNavigate();

  const produtos = [
    { id: 1, nome: "Smartphone XYZ", codigo: "SPH001", categoria: "Eletrônicos", estoque: 150 },
    { id: 2, nome: "Notebook ABC", codigo: "NTB002", categoria: "Informática", estoque: 45 },
    { id: 3, nome: "Tênis Esportivo", codigo: "TNS003", categoria: "Calçados", estoque: 89 },
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
          <h1 className="text-3xl font-bold text-primary">Cadastro de Produtos</h1>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Buscar produtos..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Novo Produto
          </Button>
        </div>

        <div className="grid gap-4">
          {produtos.map((produto) => (
            <Card key={produto.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{produto.nome}</h3>
                    <p className="text-sm text-muted-foreground">Código: {produto.codigo}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{produto.categoria}</p>
                  <p className="text-xs text-muted-foreground">Estoque: {produto.estoque} un.</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produtos;