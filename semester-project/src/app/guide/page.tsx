import { Footer } from "@/components/footer/footer";
import HeroSection from "@/components/hero/hero";
import Loading from "@/components/loading/Loading";
import { Suspense } from "react";
import GuidePageContent from "./_components/guide-page-content/GuidePageContent";

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
