import { Navbar } from "@/components/navbar/navbar";
import { PlannerNavbar } from "./components/plannerNavbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <PlannerNavbar />
            <h1>Planner</h1>
        </div>
    );
}
