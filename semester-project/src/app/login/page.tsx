import { Navbar } from "@/app/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text-8xl font-extrabold py-[100px]">Login</h1>
    </div>
  );
}
