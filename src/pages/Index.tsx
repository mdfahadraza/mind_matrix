import TelemetryModule from "@/components/TelemetryModule";
import ImageModule from "@/components/ImageModule";
import OrbitalModule from "@/components/OrbitalModule";
import AlertsPanel from "@/components/AlertsPanel";
import heroImage from "@/assets/spacesight-hero.jpg";

const Index = () => {
  return (
    <main 
      className="container mx-auto px-6 py-6 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 34, 34, 0.95), rgba(34, 34, 34, 0.95)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <TelemetryModule />
        </div>
        <div>
          <AlertsPanel />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ImageModule />
        <OrbitalModule />
      </div>
    </main>
  );
};

export default Index;
