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
import { useState } from "react";
import { OrganicCard } from "@/components/OrganicCard";
import personWorking from "@/assets/person-working.png";

const Dashboard = () => {
  const [speechBubble, setSpeechBubble] = useState<{
    title: string;
    description: string;
    visible: boolean;
  }>({
    title: "",
    description: "",
    visible: false
  });

  const handleCardHover = (title: string, description: string) => {
    setSpeechBubble({
      title,
      description,
      visible: true
    });
  };

  const handleCardLeave = () => {
    setSpeechBubble(prev => ({
      ...prev,
      visible: false
    }));
  };

  const modules = [
    // Primeira fileira
    {
      title: "Veículos",
      description: "Cadastro e Controle de Veículos",
      icon: Car,
      route: "/veiculos"
    },
    {
      title: "Motoristas",
      description: "Gestão de Motoristas",
      icon: User,
      route: "/motoristas"
    },
    {
      title: "Produtos",
      description: "Cadastro de Produtos",
      icon: Package,
      route: "/produtos"
    },
    // Segunda fileira
    {
      title: "Armazém",
      description: "Controle de Estoque e Armazém", 
      icon: Warehouse,
      route: "/armazem"
    },
    {
      title: "Frota",
      description: "Gestão Completa de Frota",
      icon: Truck,
      route: "/frota"
    },
    {
      title: "Calculadora",
      description: "Cálculo de Fretes e Custos",
      icon: Calculator,
      route: "/calculadora"
    },
    // Terceira fileira
    {
      title: "Análise",
      description: "Relatórios e Gráficos",
      icon: BarChart3,
      route: "/analise"
    }
  ];

  return (
    <div className="organic-layout">
      {/* Organic Background Shapes */}
      <div className="organic-shape w-96 h-96 bg-primary top-0 -right-32" />
      <div className="organic-shape w-64 h-64 bg-primary-glow -top-10 right-1/2" />
      <div className="organic-shape w-80 h-80 bg-primary bottom-0 -left-20" />
      <div className="organic-shape w-52 h-52 bg-primary-glow bottom-1/4 left-1/3" />

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
      <div className="relative z-20 max-w-4xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Primeira fileira - 3 cards */}
          {modules.slice(0, 3).map((module, index) => (
            <OrganicCard
              key={index}
              title={module.title}
              description={module.description}
              icon={module.icon}
              route={module.route}
              onHover={handleCardHover}
              onLeave={handleCardLeave}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Segunda fileira - 3 cards */}
          {modules.slice(3, 6).map((module, index) => (
            <OrganicCard
              key={index + 3}
              title={module.title}
              description={module.description}
              icon={module.icon}
              route={module.route}
              onHover={handleCardHover}
              onLeave={handleCardLeave}
            />
          ))}
        </div>
        <div className="flex justify-center">
          {/* Terceira fileira - 1 card centralizado */}
          {modules.slice(6, 7).map((module, index) => (
            <OrganicCard
              key={index + 6}
              title={module.title}
              description={module.description}
              icon={module.icon}
              route={module.route}
              onHover={handleCardHover}
              onLeave={handleCardLeave}
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
        
        {/* Speech Bubble */}
        {speechBubble.visible && (
          <div className="absolute -top-20 left-24 z-30 animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg px-4 py-3 max-w-xs relative">
              <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
              <h4 className="font-semibold text-primary text-sm mb-1">{speechBubble.title}</h4>
              <p className="text-xs text-gray-600">{speechBubble.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;