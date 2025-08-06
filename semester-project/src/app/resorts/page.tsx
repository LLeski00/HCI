import { getAllResorts } from "./_lib/api";
import "./resorts.css";
import HeroSection from "@/components/hero/Hero";
import ResortClientView from "./_components/ResortsClientView";
import { ResortInfo } from "@/types/resort";
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";

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
                <Suspense fallback={<Loading />}>
                    <ResortClientView allDestinations={destinations} />
                </Suspense>
            </main>
        </>
    );
}
