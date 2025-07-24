import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TrustBadgeProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const TrustBadge = ({ size = 'medium', className = '' }: TrustBadgeProps) => {
  const surgeonImages = [
    "/lovable-uploads/df81b1c1-8962-4387-8b4d-eb3c00c33ab3.png",
    "/lovable-uploads/0fb1a8a3-3715-454b-bd05-17fba3ea5b54.png", 
    "/lovable-uploads/ad7b46b2-3fee-4983-85f7-224d7d137f50.png",
    "/lovable-uploads/c3119989-89ec-47c6-96d9-f141b39002fa.png",
    "/lovable-uploads/eb997c5a-00ba-4881-aac1-e8fe95edc47a.png"
  ];

  const sizeConfig = {
    small: {
      container: "space-y-2 py-3",
      avatars: "w-8 h-8",
      avatarOverlap: "-ml-2",
      stars: "w-3 h-3",
      text: "text-xs"
    },
    medium: {
      container: "space-y-3 py-4",
      avatars: "w-12 h-12",
      avatarOverlap: "-ml-3",
      stars: "w-4 h-4",
      text: "text-sm"
    },
    large: {
      container: "space-y-4 py-6",
      avatars: "w-16 h-16",
      avatarOverlap: "-ml-4",
      stars: "w-6 h-6",
      text: "text-base"
    }
  };

  const config = sizeConfig[size];

  return (
    <div className={`flex flex-col items-center ${config.container} ${className}`}>
      {/* Overlapping Avatars */}
      <div className="flex items-center">
        {surgeonImages.map((image, index) => (
          <Avatar 
            key={index} 
            className={`${config.avatars} border-2 border-blue-600 shadow-md ${index > 0 ? config.avatarOverlap : ''}`}
          >
            <AvatarImage 
              src={image} 
              alt={`Surgeon ${index + 1}`}
              className="object-cover object-center"
            />
            <AvatarFallback className="bg-slate-200 text-slate-600 text-sm font-medium">
              DR
            </AvatarFallback>
          </Avatar>
        ))}
      </div>

      {/* Stars Rating */}
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index} 
            className={`${config.stars} fill-yellow-400 text-yellow-400`}
          />
        ))}
      </div>

      {/* Trust Text */}
      <p className={`text-slate-600 font-bold ${config.text} text-center`}>
        TRUSTED BY 500+ SURGEONS
      </p>
    </div>
  );
};

export default TrustBadge;