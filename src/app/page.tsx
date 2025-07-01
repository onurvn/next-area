import Benefits from "@/app/home/Benefits";
import Connect from "@/app/home/Connect";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Specification from "@/app/home/Specification";
import TrustedBy from "@/app/home/TrustedBy";
import Words from "@/app/home/Words";
import MapYourSuccess from "./home/MapYourSuccess";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-start justify-center min-h-screen bg-white">
      <Navbar />
      <br />
      <Hero />
      <TrustedBy />
      <Benefits />
      <Words />
      <Specification />
      <MapYourSuccess />
      <Connect />
      <Footer />
    </div>
  );
}
