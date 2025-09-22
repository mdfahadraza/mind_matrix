import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Eye, Star, Zap, AlertCircle, Snail, View } from "lucide-react";

const ImageModule = () => {
  const mockDetections = [
    { 
      id: "IMG_001", 
      timestamp: "14:28:15 UTC", 
      ra: "23h 14m 32s", 
      dec: "+41° 16' 09\"", 
      classification: "Transient", 
      confidence: 0.94,
      anomalyScore: 0.87
    },
    { 
      id: "IMG_002", 
      timestamp: "14:31:42 UTC", 
      ra: "05h 35m 17s", 
      dec: "-16° 42' 38\"", 
      classification: "Galaxy", 
      confidence: 0.99,
      anomalyScore: 0.23
    },
    { 
      id: "IMG_003", 
      timestamp: "14:33:09 UTC", 
      ra: "12h 29m 45s", 
      dec: "+32° 18' 44\"", 
      classification: "Artifact", 
      confidence: 0.78,
      anomalyScore: 0.91
    },
  ];

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case "Transient":
        return "bg-warning text-black";
      case "Artifact":
        return "bg-destructive text-white";
      case "Galaxy":
        return "bg-success text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="glow-card h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5 text-primary" />
          Image Anomaly & Object Detection
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Astronomical transient detection & classification
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-accent/30 rounded-lg border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Processing Rate</span>
            </div>
            <p className="text-2xl font-bold text-primary">847</p>
            <p className="text-xs text-muted-foreground">images/hour</p>
          </div>
          
          <div className="p-4 bg-accent/30 rounded-lg border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-warning" />
              <span className="text-sm font-medium">Detections</span>
            </div>
            <p className="text-2xl font-bold text-warning">23</p>
            <p className="text-xs text-muted-foreground">candidates today</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium text-sm mb-3">Recent Detections</h4>
          {mockDetections.map((detection) => (
            <div key={detection.id} className="p-3 rounded-lg bg-accent/20 border border-border/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">{detection.id}</Badge>
                  <span className="text-xs text-muted-foreground">{detection.timestamp}</span>
                </div>
                <Badge className={`text-xs ${getClassificationColor(detection.classification)}`}>
                  {detection.classification}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-muted-foreground">Position:</p>
                  <p className="font-mono">RA: {detection.ra}</p>
                  <p className="font-mono">Dec: {detection.dec}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Scores:</p>
                  <p>Confidence: {(detection.confidence * 100).toFixed(1)}%</p>
                  <p>Anomaly: {(detection.anomalyScore * 100).toFixed(1)}%</p>
                </div>
              </div>
              
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="text-xs h-7">
                  <View className="h-3 w-3 mr-1" />
                  View Image
                </Button>
                <Button size="sm" variant="outline" className="text-xs h-7">
                  <Snail className="h-3 w-3 mr-1" />
                  Inspect
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4 text-warning" />
            <span className="font-medium text-sm">Priority Target</span>
          </div>
          <p className="text-sm text-muted-foreground">
            High-confidence transient detected in field NGC 2394. Grad-CAM analysis shows strong activation in central region. Recommend follow-up observation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageModule;