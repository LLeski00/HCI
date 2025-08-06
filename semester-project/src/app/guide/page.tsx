import Loading from "@/components/loading/Loading";
import { Suspense } from "react";
import GuidePageContent from "./_components/guide-page-content/GuidePageContent";
import HeroSection from "@/components/hero/Hero";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
    return (
        <div>
            <HeroSection
                titleTop="YOUR SKI"
                titleBottom="ADVENTURE AWAITS!"
                description="PLAN A SKI TRIP THAT FITS YOUR STYLE AND BUDGET"
                backgroundImage="/images/4.jpg"
            />
            <h1>Guide for skiers</h1>
            <Suspense fallback={<Loading />}>
                <GuidePageContent />
            </Suspense>
            <Footer />
        </div>
    );
}
