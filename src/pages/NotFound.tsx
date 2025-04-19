import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="text-center z-10 max-w-md p-8">
        <div className="text-9xl font-bold mb-6 neon-text-gradient">404</div>
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Button 
          className="bg-shamir-neon text-black hover:bg-shamir-neon/90 hover:shadow-[0_0_20px_theme('colors.shamir.neon')] transition-all"
          onClick={() => window.location.href = '/'}
        >
          <Home className="mr-2 h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
