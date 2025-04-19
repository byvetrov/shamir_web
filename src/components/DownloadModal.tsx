
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DownloadModal = ({ open, onOpenChange }: DownloadModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-shamir-darker border-white/10">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-colors hover:text-shamir-neon focus:outline-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Device</h2>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {/* iOS Card */}
            <div className="group p-4 rounded-xl border border-white/10 bg-shamir-dark/50 hover:shadow-[0_0_20px_rgba(0,245,160,0.1)] transition-all hover:-translate-y-1">
              <div className="flex flex-col items-center gap-4">
                <Apple className="w-12 h-12 text-white" />
                <p className="text-sm text-gray-400">Download on the App Store</p>
                <Button 
                  className="w-full bg-shamir-neon text-black hover:bg-shamir-neon/90 hover:shadow-[0_0_20px_rgba(0,245,160,0.3)]"
                  onClick={() => window.open("https://apps.apple.com/app/shamir", "_blank")}
                >
                  Get on iOS
                </Button>
              </div>
            </div>

            {/* Android Card */}
            <div className="group p-4 rounded-xl border border-white/10 bg-shamir-dark/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all hover:-translate-y-1">
              <div className="flex flex-col items-center gap-4">
                <Smartphone className="w-12 h-12 text-white" />
                <p className="text-sm text-gray-400">Get it on Google Play</p>
                <Button 
                  className="w-full bg-shamir-blue text-white hover:bg-shamir-blue/90 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=shamir", "_blank")}
                >
                  Get on Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadModal;
