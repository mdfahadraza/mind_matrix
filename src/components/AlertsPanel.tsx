import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, AlertTriangle, Clock, CheckCircle } from "lucide-react";

const AlertsPanel = () => {
  const mockAlerts = [
    {
      id: "ALT_001",
      type: "telemetry",
      severity: "critical",
      title: "Transmitter Power Anomaly",
      description: "Power output 23% below nominal, reconstruction error: 0.87",
      timestamp: "14:32:15 UTC",
      source: "SATCOM-7",
      acknowledged: false
    },
    {
      id: "ALT_002", 
      type: "collision",
      severity: "high",
      title: "High Risk Conjunction",
      description: "HST-COSMOS debris conjunction, P_c = 2.3e-4",
      timestamp: "14:28:42 UTC",
      source: "Orbital Analysis",
      acknowledged: false
    },
    {
      id: "ALT_003",
      type: "image", 
      severity: "medium",
      title: "Transient Candidate Detected",
      description: "Confidence: 94%, Position: 23h 14m 32s +41° 16' 09\"",
      timestamp: "14:28:15 UTC", 
      source: "Survey Telescope",
      acknowledged: true
    },
    {
      id: "ALT_004",
      type: "telemetry",
      severity: "low",
      title: "Reaction Wheel Degradation",
      description: "Speed decreasing trend detected, within operational limits",
      timestamp: "14:25:33 UTC",
      source: "ATTITUDE-SYS",
      acknowledged: true
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-destructive text-white";
      case "high":
        return "bg-destructive/80 text-white";
      case "medium":
        return "bg-warning text-black";
      case "low":
        return "bg-success text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "telemetry":
        return "🛰️";
      case "collision":
        return "🌍";
      case "image":
        return "📷";
      default:
        return "⚠️";
    }
  };

  return (
    <Card className="glow-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Active Alerts
          </div>
          <Badge variant="outline" className="text-primary">
            {mockAlerts.filter(alert => !alert.acknowledged).length} Unacknowledged
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {mockAlerts.map((alert) => (
            <div key={alert.id} className={`p-3 rounded-lg border transition-all ${
              alert.acknowledged 
                ? "bg-accent/20 border-border/30 opacity-75" 
                : "bg-accent/40 border-border/50"
            }`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{getTypeIcon(alert.type)}</span>
                  <Badge className={`text-xs ${getSeverityColor(alert.severity)}`}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {alert.id}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {alert.timestamp}
                </div>
              </div>
              
              <div className="mb-2">
                <h4 className="font-medium text-sm mb-1">{alert.title}</h4>
                <p className="text-xs text-muted-foreground">{alert.description}</p>
                <p className="text-xs text-muted-foreground mt-1">Source: {alert.source}</p>
              </div>
              
              <div className="flex items-center gap-2">
                {alert.acknowledged ? (
                  <div className="flex items-center gap-1 text-xs text-success">
                    <CheckCircle className="h-3 w-3" />
                    Acknowledged
                  </div>
                ) : (
                  <Button size="sm" variant="outline" className="text-xs h-6">
                    Acknowledge
                  </Button>
                )}
                <Button size="sm" variant="outline" className="text-xs h-6">
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Alert correlation active</span>
            <span>Last update: 14:33:42 UTC</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;