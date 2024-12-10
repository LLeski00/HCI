import { Navbar } from "@/app/components/navbar/navbar";
import { InfoNavbar } from "../components/infoNavbar";

export default function EquipmentGuide() {
    return (
        <div className="text-center">
            <Navbar />
            <InfoNavbar />
            <h1 className="text-8xl font-extrabold py-[100px]">
                Equipment guide
            </h1>
        </div>
    );
}
