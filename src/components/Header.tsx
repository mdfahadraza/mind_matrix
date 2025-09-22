import { Satellite, Radar, Shield, Settings, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Rocket className="h-8 w-8 text-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">MIND MATRIX</h1>
                <p className="text-sm text-muted-foreground">Integrated Space Monitoring Platform</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="status-indicator status-active"></div>
              <span className="text-sm text-muted-foreground">Systems Operational</span>
            </div>
            
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;