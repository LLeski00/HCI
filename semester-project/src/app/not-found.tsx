import HeroSection from "@/components/hero/hero";

const NotFoundPage = () => {
    return (
        <div>
            <HeroSection
                titleTop="YOUR SKI"
                titleBottom="ADVENTURE AWAITS!"
                description="PLAN A SKI TRIP THAT FITS YOUR STYLE AND BUDGET"
                backgroundImage="/images/4.jpg"
            />
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFoundPage;
