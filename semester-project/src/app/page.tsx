import HeroSection from "@/components/hero/hero";
import { Footer } from "../components/footer/footer";
import "./home.css";
import TearEffect from "@/components/tearEffect/tearEffect";
import HomeSection from "./_components/home-section/HomeSection";
import DestinationsSection from "./_components/destinations-section/DestinationsSection";
import PlannerSection from "./_components/planner-section/PlannerSection";
import ReviewsSection from "./_components/reviews-section/ReviewsSection";

export default function Home() {
    return (
        <div className="">
            <HeroSection
                titleTop="YOUR SKI"
                titleBottom="ADVENTURE AWAITS!"
                description="PLAN A SKI TRIP THAT FITS YOUR STYLE AND BUDGET"
                backgroundImage="/images/4.jpg"
            />
            <TearEffect isHero={true} />
            <HomeSection />
            <TearEffect blueBackground={true} />
            <DestinationsSection />
            <TearEffect />
            <PlannerSection />
            <TearEffect blueBackground={true} />
            <ReviewsSection />
            <Footer />
        </div>
    );
}
