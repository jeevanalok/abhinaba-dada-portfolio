import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import pattern from "@/assets/pattern.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-bg relative overflow-hidden">
      {/* Diamond Pattern Background */}
      <div
        className="absolute inset-0 opacity-100 bg-[#20352F]/97"
        style={{
          backgroundImage: `url(${pattern.src})`,
        }}
      />
      <HeroSection />

      <Navigation />
    </div>
  );
}
