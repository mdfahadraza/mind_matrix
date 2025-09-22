import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, AlertTriangle, Navigation, Shield, Waves, HelpCircle } from "lucide-react";

const OrbitalModule = () => {
  const mockConjunctions = [
    {
      id: "CONJ_001",
      primaryObject: "STARLINK-4285",
      secondaryObject: "COSMOS-2251 DEB",
      tca: "2024-09-16 18:45:32 UTC",
      missDistance: "127m",
      probability: 8.7e-5,
      riskLevel: "medium"
    },
    {
      id: "CONJ_002", 
      primaryObject: "HUBBLE SPACE TELESCOPE",
      secondaryObject: "SL-3 R/B(2)",
      tca: "2024-09-17 02:12:15 UTC",
      missDistance: "89m",
      probability: 2.3e-4,
      riskLevel: "high"
    },
    {
      id: "CONJ_003",
      primaryObject: "ISS",
      secondaryObject: "H-2A DEB",
      tca: "2024-09-17 14:33:41 UTC", 
      missDistance: "234m",
      probability: 1.2e-5,
      riskLevel: "low"
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-destructive text-white";
      case "medium": 
        return "bg-warning text-black";
      case "low":
        return "bg-success text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "high":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "medium":
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      default:
        return <Shield className="h-4 w-4 text-success" />;
    }
  };

  return (
    <Card className="glow-card h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          Orbital Collision Risk Visualizer
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Conjunction analysis & avoidance recommendations
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-accent/30 rounded-lg border border-border/50 text-center">
            <div className="text-2xl font-bold text-foreground mb-1">1,847</div>
            <div className="text-xs text-muted-foreground">Active Objects</div>
          </div>
          
          <div className="p-4 bg-accent/30 rounded-lg border border-border/50 text-center">
            <div className="text-2xl font-bold text-warning mb-1">23</div>
            <div className="text-xs text-muted-foreground">Conjunctions</div>
          </div>
          
          <div className="p-4 bg-accent/30 rounded-lg border border-border/50 text-center">
            <div className="text-2xl font-bold text-destructive mb-1">2</div>
            <div className="text-xs text-muted-foreground">High Risk</div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-sm mb-3">Priority Conjunctions</h4>
          {mockConjunctions.map((conj) => (
            <div key={conj.id} className="p-3 rounded-lg bg-accent/20 border border-border/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {getRiskIcon(conj.riskLevel)}
                  <Badge variant="outline" className="text-xs">{conj.id}</Badge>
                </div>
                <Badge className={`text-xs ${getRiskColor(conj.riskLevel)}`}>
                  {conj.riskLevel.toUpperCase()}
                </Badge>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground">Primary:</p>
                    <p className="font-medium">{conj.primaryObject}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Secondary:</p>
                    <p className="font-medium">{conj.secondaryObject}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-muted-foreground">TCA:</p>
                    <p className="font-mono text-xs">{conj.tca}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Miss Distance:</p>
                    <p className="font-bold">{conj.missDistance}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Probability:</p>
                    <p className="font-mono">{conj.probability.toExponential(1)}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="text-xs h-7">
                  <Navigation className="h-3 w-3 mr-1" />
                  Plot Trajectory
                </Button>
                <Button size="sm" variant="outline" className="text-xs h-7">
                  <HelpCircle className="h-3 w-3 mr-1" />
                  Suggest Maneuver
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="font-medium text-sm">Maneuver Recommendation</span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            HST conjunction with debris requires avoidance maneuver. Recommended ΔV: 0.3 m/s prograde at TCA-6h.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Optimal RA/DEC shift: +0.02° / -0.01° | Risk reduction: 87%
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrbitalModule;