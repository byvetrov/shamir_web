import React, {useState, useEffect} from "react";
import {Github, Facebook, Twitter, Instagram, Monitor} from "lucide-react";
import StaggeredChildren from "@/animations/StaggeredChildren";
import {useIntersectionObserver} from "@/hooks/useIntersectionObserver";
import {FaAndroid} from "react-icons/fa";
import {motion} from "framer-motion";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    const {ref, isIntersecting} = useIntersectionObserver({threshold: 0.2});
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isIntersecting) setIsVisible(true);
    }, [isIntersecting]);

    const socialLinks = [
        {icon: <Twitter className="w-5 h-5"/>, href: "#", label: "Twitter"},
        {icon: <Facebook className="w-5 h-5"/>, href: "#", label: "Facebook"},
        {icon: <Instagram className="w-5 h-5"/>, href: "#", label: "Instagram"},
        {icon: <Github className="w-5 h-5"/>, href: "#", label: "GitHub"},
    ];

    const legalLinks = [
        {name: "Privacy Policy", href: "#"},
        {name: "Terms of Service", href: "#"},
        {name: "Open‑Source Repository", href: "#", icon: <Github className="w-4 h-4 ml-1"/>},
    ];

    return (
        <footer
            id="download"
            ref={ref}
            className="py-16 px-4 bg-shamir-darker relative"
            style={{
                transition: "transform 0.8s ease-out, filter 1s ease-out, opacity 0.8s ease-out",
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                filter: isVisible ? "blur(0)" : "blur(8px)",
                opacity: isVisible ? 1 : 0,
            }}
        >
            <div className="container mx-auto">
                {/* Logo and Tagline */}
                <div className="text-center mb-12">
                    <div className="text-3xl font-bold mb-3 neon-text-gradient">Shamir</div>
                    <p className="text-gray-400 max-w-md mx-auto">
                        The world's most secure anonymous messenger<br/>
                        built on threshold cryptography
                    </p>

                    {/* Download buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-12">
                        {/* App Store */}
                        <a
                            href="#"
                            className="w-full sm:w-auto px-6 py-3 bg-shamir-neon text-black rounded-lg font-medium
               hover:shadow-[0_0_20px_rgba(0,245,160,0.3)] transition-all
               flex items-center justify-center group"
                        >
                            <svg
                                className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-[2px]"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {/* ...путь Apple... */}
                            </svg>
                            App Store
                        </a>

                        {/* Google Play */}
                        <a
                            href="#"
                            className="w-full sm:w-auto px-6 py-3 border border-shamir-blue text-white rounded-lg font-medium
               hover:bg-shamir-blue/10 transition-all
               flex items-center justify-center group"
                        >
                            <FaAndroid className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-[2px]"/>
                            Google Play
                        </a>

                        {/* Web версия */}
                        <a
                            href="https://app.messages.ltd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-6 py-3 border border-shamir-blue text-white rounded-lg font-medium
               hover:bg-shamir-blue/10 transition-all
               flex items-center justify-center group"
                        >
                            <Monitor
                                className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1"/>
                            Web версия
                        </a>
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
                                className="w-10 h-10 flex items-center justify-center rounded-full
                           border border-white/10 text-gray-400 hover:text-shamir-neon
                           hover:border-shamir-neon/50 hover:shadow-[0_0_10px_rgba(0,245,160,0.2)]
                           transition-all"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </StaggeredChildren>
                </div>

                {/* Legal links */}
                <div className="flex flex-col md:flex-row justify-center items-center
                          gap-y-4 md:gap-x-8 mb-8 text-sm text-gray-400">
                    {legalLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="hover:text-shamir-neon transition-colors flex items-center"
                        >
                            {link.name}
                            {link.icon}
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
