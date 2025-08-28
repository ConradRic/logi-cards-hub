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
import logisticsRobot from "@/assets/logistics-robot.png.png";

const Dashboard = () => {
  const [speechBubble, setSpeechBubble] = useState<{
    title: string;
    description: string;
    visible: boolean;
  }>({
    title: "Olá estudante, me chamo Nexus 🤖",
    description: "Seu guia aqui pelo TMS",
    visible: true
  });

  const handleCardHover = (title: string, description: string) => {
    setSpeechBubble({
      title,
      description,
      visible: true
    });
  };

  const handleCardLeave = () => {
    setSpeechBubble({
      title: "Quais processos iremos trabalhar hoje ?",
      description: "Seus calculos e analise mais rapidos e otimizados 😁",
      visible: true
    });
  };

  const modules = [
    // Primeira fileira
    {
      title: "Cadastro de Veículos 🚚",
      description: "Aqui você cadastra cada um de seus veículos !!!",
      icon: Car,
      route: "/veiculos"
    },
    {
      title: "Cadastrosde Motoristas 🪪",
      description: "Aqui você adiciona cada dado de seus motoristas !!!",
      icon: User,
      route: "/motoristas"
    },
    {
      title: "Cadastro de Produtos 📦",
      description: "Aqui você adiciona cada produto de seu estoque !!!",
      icon: Package,
      route: "/produtos"
    },
    // Segunda fileira
    {
      title: "Armazém 👷",
      description: "Aqui você monitora o seu estoque de produtos !!!", 
      icon: Warehouse,
      route: "/armazem"
    },
    {
      title: "Frota 🚘",
      description: "Aqui você administra a sua frota completa de veículos !!!",
      icon: Truck,
      route: "/frota"
    },
    {
      title: "Calculadora 🧮",
      description: "Aqui você consegue realizar cada cálculo necessário !!!",
      icon: Calculator,
      route: "/calculadora"
    },
    // Terceira fileira
    {
      title: "Análise de Resultados 📈",
      description: "Aqui você pode analisar seus ganhos e demais dados da sua empresa !!!",
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
          Transport Management System - TMS
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Plataforma completa para gestão logística e controle de frotas, armazém e funcionários !!!
        </p>
      </div>

      {/* Cards Container - Right Side */}
      <div className="absolute right-32 top-1/2 transform -translate-y-32 z-20">
        <div className="space-y-8">
          {/* Primeira fileira - 3 cards */}
          <div className="flex gap-8">
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
          
          {/* Segunda fileira - 3 cards */}
          <div className="flex gap-8">
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
          
          {/* Terceira fileira - 1 card centralizado */}
          <div className="flex justify-center">
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
      </div>

      {/* Person Illustration */}
      <div className="absolute bottom-16 left-8 z-20">
        <img 
          src={logisticsRobot} 
          alt="Nexus - Logistics Robot Assistant with safety equipment" 
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