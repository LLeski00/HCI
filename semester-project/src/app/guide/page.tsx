import Loading from "@/components/loading/Loading";
import { Suspense } from "react";
import GuidePageContent from "./_components/guide-page-content/GuidePageContent";
import HeroSection from "@/components/hero/Hero";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
    return (
        <div>
            <HeroSection
                titleTop=""
                titleBottom="YOUR OWN SKI GUIDE"
                description="Find all skiing informations you will ever need"
                backgroundImage="/images/2.jpg"
            />
            <h1>Guide for skiers</h1>
            <Suspense fallback={<Loading />}>
                <GuidePageContent />
            </Suspense>
            <Footer />
        </div>
    );
}
