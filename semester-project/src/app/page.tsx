import HeroSection from "@/components/hero/Hero";
import "./home.css";
import HomePageContent from "./_components/home-page-content/HomePageContent";
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";

export default function Home() {
    return (
        <div className="">
            <HeroSection
                titleTop="YOUR SKI"
                titleBottom="ADVENTURE AWAITS!"
                description="PLAN A SKI TRIP THAT FITS YOUR STYLE AND BUDGET"
                backgroundImage="/images/4.jpg"
            />
            <Suspense fallback={<Loading />}>
                <HomePageContent />
            </Suspense>
        </div>
    );
}
