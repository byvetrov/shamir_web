
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-shamir-dark text-white">
      <div className="key-pattern absolute inset-0 opacity-10"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center z-10 max-w-md p-8"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-9xl font-bold mb-6 neon-text-gradient"
        >
          404
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl font-bold mb-4"
        >
          Page not found
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 mb-8"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 20px rgba(0, 245, 160, 0.4)'
          }}
          transition={{ duration: 0.3 }}
        >
          <Button 
            className="bg-shamir-neon text-black hover:bg-shamir-neon/90 transition-all duration-300 rounded-md"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
