import { 
  Truck, 
  Car, 
  User, 
  Package, 
  Warehouse, 
  Settings, 
  Calculator, 
  BarChart3 
} from "lucide-react";
import { LogisticsCard } from "@/components/LogisticsCard";

const Dashboard = () => {
  const modules = [
    {
      title: "TMS",
      description: "Sistema de Gestão de Transporte",
      icon: Truck,
      route: "/tms",
      variant: "hero" as const
    },
    {
      title: "Veículos",
      description: "Cadastro e controle de veículos",
      icon: Car,
      route: "/veiculos"
    },
    {
      title: "Motoristas",
      description: "Gestão de motoristas",
      icon: User,
      route: "/motoristas"
    },
    {
      title: "Produtos",
      description: "Cadastro de produtos",
      icon: Package,
      route: "/produtos"
    },
    {
      title: "Armazém",
      description: "Controle de estoque",
      icon: Warehouse,
      route: "/armazem"
    },
    {
      title: "Gestão de Frota",
      description: "Monitoramento da frota",
      icon: Settings,
      route: "/frota"
    },
    {
      title: "Calculadora",
      description: "Cálculo de fretes",
      icon: Calculator,
      route: "/calculadora"
    },
    {
      title: "Análise",
      description: "Relatórios e gráficos",
      icon: BarChart3,
      route: "/analise"
    }
  ];

  return (
    <div className="min-h-screen bg-logistics-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow opacity-10" />
        <div className="relative container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">
              SOFTWARES DE LOGÍSTICA
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plataforma completa para gestão logística e controle de frotas
            </p>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container mx-auto px-6 pb-12">
        <div className="logistics-grid">
          {modules.map((module, index) => (
            <LogisticsCard
              key={index}
              title={module.title}
              description={module.description}
              icon={module.icon}
              route={module.route}
              variant={module.variant}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-10 right-10 opacity-10 pointer-events-none">
        <Truck size={120} className="text-primary" />
      </div>
    </div>
  );
};

export default Dashboard;