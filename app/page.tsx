import AnimatedHeading from "@/components/animations/headingAnimation";
import AnimatedBackground from "@/components/animations/backgroundAnimation";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Background animation (client) */}
      <AnimatedBackground />

      {/* Animated heading & navbar (client) */}
      <AnimatedHeading />
    </main>
  );
}
