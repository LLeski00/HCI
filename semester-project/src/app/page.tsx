import { CustomButton } from "./components/customButton/customButton";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";

export default function Home() {
    return (
        <div className="">
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <Navbar />
                <div className="hero-text">
                    <h1 className="hero-heading top"> YOUR SKI</h1>
                    <h1 className="hero-heading bottom">ADVENTURE AWAITS! </h1>
                    <p> PLAN A SKI TRIP THAT FITS YOUR STYLE AND BUDGET </p>    
                </div>
            </section>

            <div className="home-section">
                <div className="text-content">
                    <h1>Everything you need to know in one place</h1>
                    <p>
                        Embark on your next snowy adventure with ease! Discover Europe's top ski resorts, compare features, and plan your dream trip—all in one place. From family-friendly slopes to thrilling alpine runs, we've got everything you need to make your ski vacation unforgettable. Start exploring today!"
                    </p>
                   <CustomButton text="EXPLORE" href="/" />
                </div>
                <div>
                   <img src="/images/skiing.jpeg"/>
                </div>
            </div>
            <div className="destination-section">
                <h1>Explore popular destinations</h1>
                {/*slideshow */}
                <div className="destinations">
                    <div>
                        <h3>Les 2 alpes, France</h3>
                        <img src="/images/austria.jpg" />
                    </div>
                    <div >
                        <h3>Alta Badia, Italy</h3>
                        <img src="/images/altaBadia.jpg" />
                    </div>
                    <div>
                        <h3>Val Torens, Italy</h3>
                        <img src="/images/valtores.jpg" />
                    </div>
                </div>
                <CustomButton text="VIEW MORE" href="/" />
                

            </div>

            <div className="planner-section">

            </div>

            <div className="review-section">

            </div>
            <Footer />
        </div>
    );
}
