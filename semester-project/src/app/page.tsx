import HeroSection from "@/components/hero/hero";
import { Button } from "../components/button/button";
import { Footer } from "../components/footer/footer";
import { Rating } from "../components/rating/rating";
import "./home.css";

export default function Home() {
    return (
        <div className="">
            <HeroSection titleTop="YOUR SKI"
                         titleBottom="ADVENTURE AWAITS!" 
                         description="PLAN A SKI TRIP THAT FITS YOUR STYLE AND BUDGET" 
                         backgroundImage="/images/4.jpg"/>

            <section className="home-section">
                <div className="text-content">
                    <h2>
                        Everything you need to <br />
                        know in one place
                    </h2>
                    <p>
                        Embark on your next snowy adventure with <br />
                        ease! Discover top ski resorts <br />
                        in Europe, compare features, and plan your dream
                        trip—all <br />
                        in one place. From family-friendly slopes to <br />
                        thrilling alpine runs, we have everything you <br />
                        need to make your ski vacation unforgettable. <br />
                        Start exploring today!
                    </p>
                    <Button text="EXPLORE" href="/" />
                </div>
                <div className="image-container">
                    <img src="/images/skiing.jpg" />
                </div>
            </section>
            <section className="home-destinations-section">
                <h1>Explore popular destinations</h1>
                {/*slideshow */}
                <div className="home-destinations">
                    <div className="home-destination">
                        <h4>Les 2 alpes, France</h4>
                        <img src="/images/austria.jpg" />
                    </div>
                    <div className="home-destination">
                        <h4>Alta Badia, Italy</h4>
                        <img src="/images/altaBadia.jpg" />
                    </div>
                    <div className="home-destination">
                        <h4>Val Torens, Italy</h4>
                        <img src="/images/valtores.jpg" />
                    </div>
                </div>
                <Button text="VIEW MORE" href="/" />
            </section>

            <section className="planner-section">
                <div className="title-content">
                    <h1>Your personal ski planner</h1>
                    <p>
                        Let our smart planner design your perfect ski trip in
                        minutes. Tell us your preferences and we will do the
                        rest!
                    </p>
                </div>

                <article>
                    <div className="steps-container">
                        <h2>How it works</h2>
                        <div className="step-content">
                            <p className="step-number">01</p>
                            <h3>Find your destination</h3>
                            <p>
                                Let us know which location you would love to
                                explore
                            </p>
                        </div>

                        <div className="step-content">
                            <p className="step-number">02</p>
                            <h3>Set your budget</h3>
                            <p>
                                Give us your desired budget and we will find you
                                best fit
                            </p>
                        </div>

                        <div className="step-content">
                            <p className="step-number">03</p>
                            <h3>Select and adjust the plan</h3>
                            <p>
                                Choose a plan that was made for you and adjust
                                it if needed
                            </p>
                        </div>
                        <Button text="START TRIP" href="/planner" />
                    </div>

                    <div className="image-container">
                        <img
                            src="/images/snowboarding.jpg"
                            className="image-content"
                        />
                    </div>
                </article>
            </section>

            <section className="review-section">
                <h3>Hear From Fellow Skiers!</h3>
                <article>
                    Get insider tips and honest reviews from skiers <br />
                    who have been there. <br />
                    See what others loved (or did not) <br />
                    about their favorite resorts and share your own <br />
                    experience after your trip!
                </article>
                <div className="reviews">
                    <div className="review">
                        <img src="/images/User2.jpeg" alt="" />
                        <p>
                            <strong>Chamonix, France</strong>: &quot;Amazing
                            slopes and breathtaking views. Perfect for advanced
                            skiers!&quot;
                        </p>
                        <div className="rating">
                            <p>Alex P.</p>
                            <Rating rating={5} />
                        </div>
                    </div>
                    <div className="review">
                        <img src="/images/User3.jpeg" alt="" />
                        <p>
                            <strong>St. Anton, Austria</strong>: &quot;The
                            nightlife here is unbeatable, and the powder was
                            incredible&quot;
                        </p>
                        <div className="rating">
                            <p>Sophie K.</p>
                            <Rating rating={5} />
                        </div>
                    </div>
                    <div className="review">
                        <img src="/images/User1.jpeg" alt="" />
                        <p>
                            <strong>Zermatt, Switzerland</strong>: &quot;A bit
                            pricey, but the skiing and the Matterhorn views were
                            worth it!&quot;
                        </p>
                        <div className="rating">
                            <p>Leona P.</p>
                            <Rating rating={4} />
                        </div>
                    </div>
                </div>
                <Button text="CONNECT" href="/planner" />
            </section>
            <Footer />
        </div>
    );
}
