import { Navbar } from "@/app/components/navbar";
import Image from "next/image";
import { InfoNavbar } from "../components/infoNavbar";

export default function SkiEvents() {
    return (
        <div className="text-center">
            <Navbar />
            <InfoNavbar />
            <h1 className="text-8xl font-extrabold py-[100px]">Ski events</h1>
        </div>
    );
}
