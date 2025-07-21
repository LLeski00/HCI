import { Button } from "@/components/button/button";

const PlannerSection = () => {
    return (
        <section className="planner-section">
            <div className="title-content">
                <h1>Your personal ski planner</h1>
                <p>
                    Let our smart planner design your perfect ski trip in
                    minutes. Tell us your preferences and we will do the rest!
                </p>
            </div>

            <article>
                <div className="steps-container">
                    <h2>How it works</h2>
                    <div className="step-content">
                        <p className="step-number">01</p>
                        <h3>Find your destination</h3>
                        <p>
                            Let us know which location you would love to explore
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
                            Choose a plan that was made for you and adjust it if
                            needed
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
    );
};

export default PlannerSection;
