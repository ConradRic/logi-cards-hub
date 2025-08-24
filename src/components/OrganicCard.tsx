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
  onHover?: (title: string, description: string) => void;
  onLeave?: () => void;
}

export const OrganicCard = ({ 
  title, 
  description, 
  icon: Icon, 
  route,
  size = "medium",
  position,
  onHover,
  onLeave
}: OrganicCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  const handleMouseEnter = () => {
    onHover?.(title, description);
  };

  const handleMouseLeave = () => {
    onLeave?.();
  };

  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-20 h-20", 
    large: "w-24 h-24"
  };

  return (
    <div 
      className={`
        absolute logistics-card ${sizeClasses[size]}
        flex items-center justify-center cursor-pointer
        transition-all duration-300 hover:scale-110
      `}
      style={position}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl w-full h-full flex items-center justify-center">
        <Icon size={size === "large" ? 32 : size === "small" ? 20 : 24} className="text-white" />
      </div>
    </div>
  );
};