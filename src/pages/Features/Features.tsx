import { UserX, Lock, Clock, BellOff } from "lucide-react";
import StaggeredChildren from "@/animations/StaggeredChildren";


import "./Features.css";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
        <div className="feature-card group transition-all duration-300 hover:border-shamir-neon/20 hover:shadow-[0_0_15px_rgba(0,245,160,0.1)] hover:-translate-y-1">
          <div className="feature-icon group-hover:bg-shamir-neon/20 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: <UserX className="h-6 w-6" />,
      title: "Truly Anonymous",
      description: "No phone numbers or emails required. Create your secure identity with just a tap."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "End-to-End Encryption",
      description: "Next-level privacy powered by Shamir's Secret Sharing algorithm. Your messages are for your eyes only."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Self-Destructing Chats",
      description: "Set messages to auto-erase on your schedule. Leave no trace behind."
    },
    {
      icon: <BellOff className="h-6 w-6" />,
      title: "Stealth Mode",
      description: "Invisible notifications, hidden app icon. Keep your privacy even on your own device."
    }
  ];

  return (
    <section id="features" className="features-section">

      <div className="container mx-auto relative z-10">
          <h2 className="text-center font-bold text-3xl md:text-4xl mb-6 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Advanced Security Features
            </span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            We’ve built Shamir with the most cutting‑edge encryption and privacy technologies to ensure your communications remain absolutely confidential.
          </p>

        <StaggeredChildren
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          delayBetween={150}
          baseDelay={200}
        >
          {features.map((feature, index) => (
            <FeatureCard
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

export default FeaturesGrid;
