import { Key, Share2, MessageSquare } from "lucide-react";
import StaggeredChildren from "@/animations/StaggeredChildren";
import ParallaxLayer from "@/animations/ParallaxLayer";

interface TimelineStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  delay?: number;
}

const TimelineStep = ({ icon, title, description, index, delay = 0 }: TimelineStepProps) => {
  return (
      <div className="flex flex-col items-center text-center relative">
        {/* Step number */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-shamir-darker border border-shamir-neon/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(0,245,160,0.2)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,160,0.4)]">
            <div className="text-shamir-neon">{icon}</div>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-shamir-neon text-black flex items-center justify-center text-sm font-bold z-20">
            {index}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 mt-3 text-white">{title}</h3>
        <p className="text-gray-400 max-w-xs mx-auto">{description}</p>
      </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Key className="h-6 w-6" />,
      title: "Generate a secret share",
      description: "Create your unique cryptographic identity with threshold secret sharing."
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Share securely with contacts",
      description: "Exchange secure keys with your contacts through our zero-knowledge protocol."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Start an encrypted chat",
      description: "Begin messaging with military-grade encryption that even we can't access."
    }
  ];

  // SVG paths for key pattern
  const keyPaths = [
    "M10,30 L40,30 L45,50 L30,40 L50,70 L70,50 L60,40 M50,40 A10,10 0 1,1 70,40 A10,10 0 1,1 50,40",
    "M30,60 L50,60 L55,70 L35,80 M40,70 A5,5 0 1,1 50,70 A5,5 0 1,1 40,70"
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 px-4 bg-shamir-darker relative overflow-x-hidden">
      <ParallaxLayer speed={0.15} className="opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,245,160,0.05),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(14,165,233,0.05),transparent_25%)]"></div>
      </ParallaxLayer>
      
      <div className="container mx-auto relative z-10">
          <h2 className="text-center font-bold text-3xl md:text-4xl mb-6">
            <span className="text-glow neon-text-gradient">How It Works</span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            Shamir uses a unique cryptographic approach based on threshold secret sharing, 
            allowing unprecedented privacy and security.
          </p>
        
        {/* Timeline on desktop */}
        <div className="hidden md:block relative mb-10">
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-shamir-neon/10 via-shamir-neon/50 to-shamir-blue/50 rounded"></div>
          
          <StaggeredChildren 
            className="grid grid-cols-3 gap-8 relative"
            delayBetween={200}
          >
            {steps.map((step, index) => (
              <TimelineStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index + 1}
              />
            ))}
          </StaggeredChildren>
        </div>
        
        {/* Improved mobile layout */}
        <div className="md:hidden space-y-12">
          <StaggeredChildren delayBetween={150}>
            {steps.map((step, index) => (
              <div key={index} className="relative pb-4">
                {index !== steps.length - 1 && (
                  <div className="absolute top-16 left-1/2 w-px h-12 bg-gradient-to-b from-shamir-neon/50 to-transparent"></div>
                )}
                <div className="px-4">
                  <TimelineStep
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    index={index + 1}
                  />
                </div>
              </div>
            ))}
          </StaggeredChildren>
        </div>
        {/* Reduced circuit board graphic for better spacing */}
        <div className="w-full max-w-4xl mx-auto h-24 mt-10 relative opacity-40">
          <ParallaxLayer speed={0.3}>
            <div className="absolute inset-0 circuit-pattern"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-shamir-darker via-transparent to-shamir-darker"></div>
          </ParallaxLayer>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
