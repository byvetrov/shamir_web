import { Brain, Users, Shield } from "lucide-react";
import StaggeredChildren from "@/animations/StaggeredChildren";
import ParallaxLayer from "@/animations/ParallaxLayer";
import "./ExclusiveFeatures.css";

interface SpotlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const SpotlightCard = ({ icon, title, description, delay = 0 }: SpotlightCardProps) => {
  return (
      <div className="relative group p-6 rounded-xl overflow-hidden transition-all duration-300 ease-in-out will-change-transform hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-shamir-neon/5 to-shamir-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-xl"></div>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl group-hover:border-white/10 transition-colors duration-300 ease-in-out"></div>
        
        <div className="absolute inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-shamir-neon/30 via-shamir-blue/30 to-shamir-neon/30 animate-[spin_4s_linear_infinite] blur-xl opacity-70"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-shamir-neon mb-5 transition-transform duration-300 ease-in-out group-hover:scale-110">{icon}</div>
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-shamir-neon transition-colors duration-300 ease-in-out">{title}</h3>
          <p className="text-gray-400 transition-opacity duration-300 ease-in-out group-hover:text-gray-300">{description}</p>
        </div>
      </div>
  );
};

const UniqueFunctionality = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Disposable Identities",
      description: "Create unlimited burner identities with AI-generated profiles that leave no trace back to you."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-Party Secret-Share Groups",
      description: "Set up secure groups requiring multiple members to unlock encrypted messages for ultimate security."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Zero-Knowledge Architecture",
      description: "Our servers store only encrypted data we can't access. No metadata, no logs, no traces."
    }
  ];

  return (
    <section id="unique-functions" className="py-16 px-4 bg-gradient-to-b from-shamir-darker to-shamir-dark relative overflow-hidden -mt-1">
      <ParallaxLayer speed={0.2} className="opacity-10">
        <div className="absolute inset-0 key-pattern"></div>
      </ParallaxLayer>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center mb-16 gap-6">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">
              <span className="neon-text-gradient">Exclusive Features</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-shamir-neon to-shamir-blue mb-6"></div>
            <p className="text-gray-400 text-lg">
              Shamir goes beyond standard messaging apps with exclusive functionality 
              you won't find anywhere else, powered by cutting-edge cryptography.
            </p>
        </div>
        
        <StaggeredChildren 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          delayBetween={150}
        >
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default UniqueFunctionality;
