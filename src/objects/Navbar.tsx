import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { useMobile } from "@/contexts/MobileContext";

// Импорт логотипа из локальной папки assets
// @ts-ignore
import ShamirLogo from '@/assets/shamir-logo.png';

const NavItem = ({ label, section, onClick }: { label: string; section: string; onClick?: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (onClick) onClick();
    }
  };

  return (
    <a
      href={`#${section}`}
      onClick={handleClick}
      className="text-gray-400 hover:text-shamir-neon transition-colors duration-300 px-4 py-2 text-sm rounded-md"
    >
      {label}
    </a>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isMobile, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobile();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", section: "features" },
    { label: "How It Works", section: "how-it-works" },
    { label: "Unique Functions", section: "unique-functions" },
    { label: "Download", section: "download" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 will-change-transform ${
        scrolled ? "bg-shamir-darker/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Логотип как картинка с прозрачным фоном */}
        <div className="p-[15px]">
          <img src={ShamirLogo} alt="Shamir Logo" className="w-8 h-8" />
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavItem key={item.section} label={item.label} section={item.section} />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={toggleMobileMenu}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-shamir-darker/50 rounded-full transition-all duration-300">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-shamir-darker border-shamir-neon/20 p-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center justify-between border-b border-shamir-neon/10 p-4">
                  <div className="p-[15px]">
                    <img src={ShamirLogo} alt="Shamir Logo" className="w-8 h-8" />
                  </div>
                  <span className="text-white font-bold text-xl">Shamir</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeMobileMenu}
                    className="rounded-full hover:bg-shamir-neon/10 transition-all duration-300"
                  >
                    <X className="h-5 w-5 text-shamir-neon" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <nav className="flex flex-col p-4 space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.section}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <NavItem label={item.label} section={item.section} onClick={closeMobileMenu} />
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
