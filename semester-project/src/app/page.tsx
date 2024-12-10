import { Button } from "./components/button/button";
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
                    <h2>Everything you need to know in one place</h2>
                    <p>
                        Embark on your next snowy adventure with ease! Discover top ski resorts in Europe,
                        compare features, and plan your dream trip—all in
                        one place. From family-friendly slopes to thrilling alpine runs, 
                        we have everything you need to make your ski vacation unforgettable. 
                        Start exploring today!
                    </p>
                   <Button text="EXPLORE" href="/" />
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
                        <h4>Les 2 alpes, France</h4>
                        <img src="/images/austria.jpg" />
                    </div>
                    <div >
                        <h4>Alta Badia, Italy</h4>
                        <img src="/images/altaBadia.jpg" />
                    </div>
                    <div>
                        <h4>Val Torens, Italy</h4>
                        <img src="/images/valtores.jpg" />
                    </div>
                </div>
                <Button text="VIEW MORE" href="/" />
                

            </div>

            <div className="planner-section">
                <div className="title-content">
                    <h1>Your personal ski planner</h1>
                    <p>
                        Let our smart planner design your perfect ski trip in minutes. 
                        Tell us your preferences and we will do the rest!
                    </p>
                </div>

                <div className="steps-container">
                    <h2>How it works</h2>
                    <div className="step-content">
                    <div className="step-number">01</div>
                        <h3>Find your destination</h3>
                        <p>Let us know which location you would love to explore</p>
                    </div>

                    <div className="step-content">
                        <div className="step-number">02</div>
                        <h3>Set your budget</h3>
                        <p>Give us your desired budget and we will find you best fit</p>
                    </div>

                    <div className="step-content">
                        <div className="step-number">03</div>
                        <h3>Select and adjust the plan</h3>
                        <p>Choose a plan that was made for you and adjust it if needed</p>
                    </div>
                    <Button text="START TRIP" href="/planner" />
                </div>

                <div className="image-container">
                   <img src="/images/snowboarding.jpg" className="image-content"/>
                </div>

            </div>

            <div className="review-section">

            </div>
            <Footer />
        </div>
    );
}
