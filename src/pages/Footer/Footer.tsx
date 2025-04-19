
import { Github, Facebook, Twitter, Instagram } from "lucide-react";
import StaggeredChildren from "@/animations/StaggeredChildren";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState, useEffect } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true);
    }
  }, [isIntersecting]);
  
  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" }
  ];
  
  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Open-Source Repository", href: "#", icon: <Github className="w-4 h-4 ml-1" /> }
  ];

  return (
    <footer 
      id="download" 
      className="py-16 px-4 bg-shamir-darker relative"
      // @ts-ignore - using ref from useIntersectionObserver
      ref={ref}
      style={{
        transition: 'transform 0.8s ease-out, filter 1s ease-out, opacity 0.8s ease-out',
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        filter: isVisible ? 'blur(0)' : 'blur(8px)',
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="container mx-auto">
        {/* Logo and tagline */}
        <div className="text-center mb-12">
          <div className="text-3xl font-bold mb-3 neon-text-gradient">Shamir</div>
          <p className="text-gray-400 max-w-md mx-auto">
            The world's most secure anonymous messenger 
            built on threshold cryptography
          </p>
          
          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-12">
            <button className="px-6 py-3 bg-shamir-neon text-black rounded-lg font-medium hover:shadow-[0_0_20px_rgba(0,245,160,0.3)] transition-all flex items-center justify-center group">
              <svg className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-[2px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.5234 12.0264C17.5086 9.34752 19.7734 8.00122 19.8477 7.94727C18.6523 6.21289 16.7969 5.96387 16.1328 5.94873C14.4922 5.7666 12.9141 6.89648 12.0781 6.89648C11.2266 6.89648 9.94922 5.96387 8.55664 5.98975C6.75 6.01562 5.05664 7.05469 4.12109 8.6709C2.20312 11.9619 3.64062 16.8008 5.51367 19.4385C6.42773 20.7383 7.51367 22.1924 8.94336 22.125C10.3457 22.0664 10.8789 21.2148 12.5781 21.2148C14.25 21.2148 14.7656 22.125 16.2188 22.0869C17.7422 22.0664 18.6797 20.7734 19.5586 19.4951C20.625 17.9717 21.0352 16.4873 21.0586 16.416C21.0117 16.3887 17.543 15.0127 17.5234 12.0264V12.0264ZM14.541 4.01172C15.293 3.07617 15.8086 1.78711 15.6797 0.5C14.5625 0.544922 13.1953 1.2334 12.418 2.15332C11.7148 2.97949 11.082 4.31982 11.2266 5.57715C12.4805 5.6543 13.7695 4.93066 14.541 4.01172Z"/>
              </svg>
              App Store
            </button>
            <button className="px-6 py-3 border border-shamir-blue text-white rounded-lg font-medium hover:bg-shamir-blue/10 transition-all flex items-center justify-center group">
              <svg className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-[2px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.0781 15.8115l-3.0938-1.79C13.0781 13.498 12.5 14.0762 12.5 15.0215v3.5625c0 0.9453 0.5781 1.5235 1.4844 1.002l3.0938-1.791C17.9844 17.2685 17.9844 18.334 17.0781 15.8115zM21.7812 10.6465c-4.6875-2.5313-15.2812-2.2344-15.2812 0v8.3203c0 2.7188 10.5938 3.0156 15.2812 0.4844V10.6465zM10.7812 18.9668c-0.4844 0-0.8906-0.4063-0.8906-0.8907s0.4063-0.8906 0.8906-0.8906c0.4844 0 0.8907 0.4063 0.8907 0.8906S11.2656 18.9668 10.7812 18.9668zM23.5 10.5371v8.3203c0 4.0782-7.1875 5.6719-16.0938 4.2032-1.6875-0.293-2.8125-0.6797-2.8125-2.6954v-9.8671c0-2.8047 3.7188-3.9844 9.0782-3.9844C19.6094 6.5137 23.5 7.8662 23.5 10.5371zM7.0312 11.0313c0-0.4844-0.4062-0.8906-0.8906-0.8906s-0.8906 0.4063-0.8906 0.8906c0 0.4844 0.4063 0.8906 0.8906 0.8906S7.0312 11.5156 7.0312 11.0313z"/>
              </svg>
              Google Play
            </button>
          </div>
          
          {/* Social links */}
          <StaggeredChildren 
            className="flex justify-center gap-6 mt-6"
            delayBetween={100}
            baseDelay={300}
          >
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-shamir-neon hover:border-shamir-neon/50 hover:shadow-[0_0_10px_rgba(0,245,160,0.2)] transition-all"
              >
                {link.icon}
              </a>
            ))}
          </StaggeredChildren>
        </div>
        
        {/* Legal links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-8 mb-8 text-sm text-gray-400">
            {legalLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="hover:text-shamir-neon transition-colors flex items-center"
              >
                {link.name}
                {link.icon && link.icon}
              </a>
            ))}
          </div>
        
        {/* Copyright */}
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-white/5">
            <p>© {year} Shamir Secure Messenger. All rights reserved.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
