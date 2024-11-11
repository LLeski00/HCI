import Image from "next/image";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-custom-bg bg-cover bg-center  h-[600px]"> 
        <div className="absolute inset-0 bg-black opacity-20 h-[600px]"></div>
        <div className="relative z-10 text-center text-white">
          <Navbar />
          <h1 className="text-left text-4xl md:text-8xl font-bold py-12 drop-shadow-lg whitespace-pre-line mt-48 md:mt-28 ml-10 pb-0">
            Your ski{"\n"}adventure awaits!
          </h1>
          <div className="absolute bottom-6 left-12 h-[2px] bg-white w-[60%]"></div>

          <div className="text-white pt-6 flex">
            <p className="pl-12">PLAN A SKI TRIP THAT FITS YOUR STYLE AND BUDGET</p>
          </div>
        </div>
      </section>

      <div className="px-8 py-16">
        <h2 className="text-4xl font-bold">More Content Below</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra orci vel mauris iaculis, non laoreet lorem egestas.
        </p>
      </div>
    </div>
  );
}