import { Navbar } from "@/components/navbar/navbar";
import { InfoNavbar } from "./components/infoNavbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <InfoNavbar />
            <h1>Info</h1>
        </div>
    );
}
