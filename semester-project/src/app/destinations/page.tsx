import "./destinations.css";
import HeroSection from "@/components/hero/hero";
import { Footer } from "@/components/footer/footer";
import Destinations from "./_components/Destinations";
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";

export default async function DestinationPage() {
    return (
        <>
            <HeroSection
                titleTop="EUROPE SKI"
                titleBottom="DESTINATIONS"
                description="Find the best resorts in Europe"
                backgroundImage="/images/2.jpg"
            />

            <main>
                <Suspense fallback={<Loading />}>
                    <Destinations />
                </Suspense>
            </main>

            <Footer />
        </>
    );
}
