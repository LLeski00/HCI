import { Navbar } from "@/app/components/navbar/navbar";
import { PlannerNavbar } from "../components/plannerNavbar";

export default function SoloPlanning() {
    return (
        <div className="text-center">
            <Navbar />
            <PlannerNavbar />
            <h1 className="text-8xl font-extrabold py-[100px]">
                Solo planning
            </h1>
        </div>
    );
}
