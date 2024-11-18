import { Navbar } from "@/app/components/navbar";
import { InfoNavbar } from "../components/infoNavbar";

export default function BeginnerGuide() {
    return (
        <div className="text-center">
            <Navbar />
            <InfoNavbar />
            <h1 className="text-8xl font-extrabold py-[100px]">
                Beginner guide
            </h1>
        </div>
    );
}
