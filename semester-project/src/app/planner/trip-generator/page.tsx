import { Navbar } from "@/app/components/navbar/navbar";
import { PlannerNavbar } from "../components/plannerNavbar";

export default function TripGenerator() {
    return (
        <div>
            <Navbar />
            <PlannerNavbar />
            <h1>
                Generate a trip
            </h1>
        </div>
    );
}
