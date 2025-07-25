import { getAllResorts } from "./_lib/api";
import "./destinations.css";
import HeroSection from "@/components/hero/hero";
import { Footer } from "@/components/footer/footer";
import DestinationClientView from "./_components/destinationClientView";
import { ResortInfo } from "@/types/resort";

export default async function DestinationPage() {
    const destinations: ResortInfo[] = await getAllResorts();

    return (
        <>
            <HeroSection
                titleTop="EUROPE SKI"
                titleBottom="DESTINATIONS"
                description="Find the best resorts in Europe"
                backgroundImage="/images/2.jpg"
            />

            <main>
                <DestinationClientView allDestinations={destinations} />
            </main>

            <Footer />
        </>
    );
}
