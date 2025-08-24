import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OrganicCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
  onHover?: (title: string, description: string) => void;
  onLeave?: () => void;
}

export const OrganicCard = ({ 
  title, 
  description, 
  icon: Icon, 
  route,
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

  return (
    <div 
      className="w-20 h-20 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl w-full h-full flex items-center justify-center">
        <Icon size={24} className="text-white" />
      </div>
    </div>
  );
};