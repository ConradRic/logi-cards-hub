import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LogisticsCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
  variant?: "default" | "hero";
}

export const LogisticsCard = ({ 
  title, 
  description, 
  icon: Icon, 
  route,
  variant = "default" 
}: LogisticsCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div 
      className={variant === "hero" ? "logistics-hero-card" : "logistics-card"}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`
          p-4 rounded-2xl 
          ${variant === "hero" 
            ? "bg-white/20 backdrop-blur-sm" 
            : "bg-primary/10"
          }
        `}>
          <Icon 
            size={32} 
            className={variant === "hero" ? "text-white" : "text-primary"} 
          />
        </div>
        
        <div className="space-y-2">
          <h3 className={`
            font-semibold text-lg
            ${variant === "hero" ? "text-white" : "text-foreground"}
          `}>
            {title}
          </h3>
          <p className={`
            text-sm opacity-80
            ${variant === "hero" ? "text-white" : "text-muted-foreground"}
          `}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};