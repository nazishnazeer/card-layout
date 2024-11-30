import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Apply from "./components/Apply";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Apply/>
    </div>
  );
}
