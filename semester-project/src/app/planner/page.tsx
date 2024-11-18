import { Navbar } from "@/app/components/navbar";
import { PlannerNavbar } from "./components/plannerNavbar";

export default function Home() {
    return (
        <div className="text-center">
            <Navbar />
            <PlannerNavbar />
            <h1 className="text-8xl font-extrabold py-[100px]">Planner</h1>
        </div>
    );
}
