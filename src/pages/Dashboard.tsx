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
import { OrganicCard } from "@/components/OrganicCard";
import personWorking from "@/assets/person-working.png";

const Dashboard = () => {
  const modules = [
    {
      title: "TMS",
      description: "Sistema de Gestão",
      icon: Truck,
      route: "/tms",
      size: "large" as const,
      position: { top: "10%", right: "15%" }
    },
    {
      title: "Veículos",
      description: "Cadastro de veículos",
      icon: Car,
      route: "/veiculos",
      size: "medium" as const,
      position: { top: "20%", right: "35%" }
    },
    {
      title: "Motoristas",
      description: "Gestão de motoristas",
      icon: User,
      route: "/motoristas",
      size: "small" as const,
      position: { top: "35%", right: "25%" }
    },
    {
      title: "Produtos",
      description: "Cadastro de produtos",
      icon: Package,
      route: "/produtos",
      size: "medium" as const,
      position: { top: "40%", right: "45%" }
    },
    {
      title: "Armazém",
      description: "Controle de estoque", 
      icon: Warehouse,
      route: "/armazem",
      size: "medium" as const,
      position: { top: "50%", right: "15%" }
    },
    {
      title: "Frota",
      description: "Gestão de frota",
      icon: Settings,
      route: "/frota",
      size: "small" as const,
      position: { top: "60%", right: "35%" }
    },
    {
      title: "Calculadora",
      description: "Cálculo de fretes",
      icon: Calculator,
      route: "/calculadora",
      size: "medium" as const,
      position: { top: "65%", right: "25%" }
    },
    {
      title: "Análise",
      description: "Relatórios",
      icon: BarChart3,
      route: "/analise",
      size: "small" as const,
      position: { top: "75%", right: "45%" }
    }
  ];

  return (
    <div className="organic-layout">
      {/* Organic Background Shapes */}
      <div className="organic-shape w-96 h-96 bg-primary top-0 -right-32" />
      <div className="organic-shape w-64 h-64 bg-primary-glow -top-10 right-1/3" />
      <div className="organic-shape w-80 h-80 bg-primary bottom-0 -left-20" />
      <div className="organic-shape w-52 h-52 bg-primary-glow bottom-1/4 left-1/4" />

      {/* Header */}
      <div className="relative z-20 text-center pt-16 pb-8">
        <h1 className="text-6xl font-bold text-primary mb-4">
          SOFTWARES DE LOGÍSTICA
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Plataforma completa para gestão logística e controle de frotas
        </p>
      </div>

      {/* Cards Container */}
      <div className="cards-container">
        <div className="relative h-[600px]">
          {modules.map((module, index) => (
            <OrganicCard
              key={index}
              title={module.title}
              description={module.description}
              icon={module.icon}
              route={module.route}
              size={module.size}
              position={module.position}
            />
          ))}
        </div>
      </div>

      {/* Person Illustration */}
      <div className="absolute bottom-16 left-8 z-20">
        <img 
          src={personWorking} 
          alt="Professional working on logistics software" 
          className="w-80 h-80 object-contain"
        />
      </div>
    </div>
  );
};

export default Dashboard;