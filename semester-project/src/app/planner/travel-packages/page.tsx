import { Navbar } from "@/app/components/navbar";
import Image from "next/image";
import { PlannerNavbar } from "../components/plannerNavbar";

export default function TravelPackages() {
    return (
        <div className="text-center">
            <Navbar />
            <PlannerNavbar />
            <h1 className="text-8xl font-extrabold py-[100px]">
                Travel packages
            </h1>
        </div>
    );
}
