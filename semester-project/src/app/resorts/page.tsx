import { getAllResorts } from "./_lib/api";
import "./resorts.css";
import HeroSection from "@/components/hero/hero";
import { Footer } from "@/components/footer/footer";
import ResortClientView from "./_components/ResortClientView";
import { ResortInfo } from "@/types/resort";

export default async function ResortsPage() {
    const destinations: ResortInfo[] = await getAllResorts();

    return (
        <>
            <HeroSection
                titleTop="EUROPE"
                titleBottom="SKI RESORTS"
                description="Find the best resorts in Europe"
                backgroundImage="/images/2.jpg"
            />

            <main>
                <ResortClientView allDestinations={destinations} />
            </main>

            <Footer />
        </>

    );
}
