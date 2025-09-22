import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertTriangle, Brain, TrendingUp, Zap } from "lucide-react";

const TelemetryModule = () => {
  const mockTelemetryData = [
    { sensor: "Battery Voltage", value: "14.2V", status: "normal", trend: "stable" },
    { sensor: "Solar Array Current", value: "3.8A", status: "normal", trend: "increasing" },
    { sensor: "Reaction Wheel Speed", value: "2,847 RPM", status: "warning", trend: "decreasing" },
    { sensor: "Star Tracker Temp", value: "-12°C", status: "normal", trend: "stable" },
    { sensor: "Transmitter Power", value: "25.6W", status: "critical", trend: "decreasing" },
    { sensor: "Gyroscope X-Axis", value: "0.003°/s", status: "normal", trend: "stable" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "critical":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      default:
        return <Activity className="h-4 w-4 text-success" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "critical":
        return <Badge variant="destructive" className="text-xs">Critical</Badge>;
      case "warning":
        return <Badge className="bg-warning text-black text-xs">Warning</Badge>;
      default:
        return <Badge className="bg-success text-white text-xs">Normal</Badge>;
    }
  };

  return (
    <Card className="glow-card h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          Telemetry Anomaly Detection
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Real-time spacecraft subsystem monitoring
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockTelemetryData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/30 border border-border/50">
              <div className="flex items-center gap-3">
                {getStatusIcon(item.status)}
                <div>
                  <p className="font-medium text-sm">{item.sensor}</p>
                  <p className="text-xs text-muted-foreground">Current: {item.value}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3" />
                  {item.trend}
                </div>
                {getStatusBadge(item.status)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <span className="font-medium text-sm">Active Alert</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Transmitter Power anomaly detected at 14:32 UTC. Reconstruction error: 0.87. 
            Suggested cause: Solar panel degradation or power distribution fault.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TelemetryModule;