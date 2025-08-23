import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OrganicCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
  size?: "small" | "medium" | "large";
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

export const OrganicCard = ({ 
  title, 
  description, 
  icon: Icon, 
  route,
  size = "medium",
  position
}: OrganicCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  const sizeClasses = {
    small: "w-48 h-36",
    medium: "w-56 h-44",
    large: "w-64 h-52"
  };

  return (
    <div 
      className={`
        absolute logistics-card ${sizeClasses[size]}
        flex flex-col items-center justify-center text-center space-y-3
      `}
      style={position}
      onClick={handleClick}
    >
      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
        <Icon size={size === "large" ? 36 : size === "small" ? 24 : 30} className="text-white" />
      </div>
      
      <div className="space-y-1">
        <h3 className={`font-semibold text-white ${
          size === "large" ? "text-lg" : size === "small" ? "text-sm" : "text-base"
        }`}>
          {title}
        </h3>
        <p className={`text-white/80 ${
          size === "large" ? "text-sm" : "text-xs"
        }`}>
          {description}
        </p>
      </div>
    </div>
  );
};