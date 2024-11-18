import { Navbar } from "@/app/components/navbar";
import { PlannerNavbar } from "../components/plannerNavbar";

export default function TripGenerator() {
    return (
        <div className="text-center">
            <Navbar />
            <PlannerNavbar />
            <h1 className="text-8xl font-extrabold py-[100px]">
                Generate a trip
            </h1>
        </div>
    );
}
