import { Lock, Eye, Code } from "lucide-react";
import StaggeredChildren from "@/animations/StaggeredChildren";
import "./TrustSecurity.css";

const TrustSecurity = () => {
  // Security lab logos (would normally be images, using text placeholders)

  const badges = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Open-Source Audited",
      description: "Code publicly available and audited by security experts"
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "No-Logs Policy",
      description: "We don't store your messages or metadata"
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Zero-Knowledge Architecture",
      description: "Even we can't access your encrypted messages"
    }
  ];

  return (
    <section id="trust-security" className="py-24 px-4 bg-gradient-to-b from-shamir-dark to-shamir-darker relative overflow-hidden">
      <div className="container mx-auto relative z-10">
          <h2 className="text-center font-bold text-3xl md:text-4xl mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Trusted Security
            </span>
          </h2>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            Shamir's security protocols have been thoroughly vetted by independent experts 
            and leading cryptography researchers.
          </p>
        
        {/* Security lab logos */}
        
        {/* Security badges */}
        <StaggeredChildren 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          delayBetween={200}
        >
          {badges.map((badge, index) => (
                <div 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center group hover:border-shamir-neon/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center bg-shamir-neon/10 text-shamir-neon w-12 h-12 rounded-full mb-4 group-hover:bg-shamir-neon/20 transition-colors">
                    {badge.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{badge.title}</h3>
                  <p className="text-gray-400">{badge.description}</p>
                </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default TrustSecurity;
