import { Button } from "@/components/button/button";

const HomeSection = () => {
    return (
        <section className="home-section">
            <div className="text-content">
                <h2>
                    Everything you need to <br />
                    know in one place
                </h2>
                <p>
                    Embark on your next snowy adventure with ease! Discover top
                    ski resorts in Europe, compare features, and plan your dream
                    trip—all in one place. From family-friendly slopes to
                    thrilling alpine runs, we have everything you need to make
                    your ski vacation unforgettable. Start exploring today!
                </p>
                <Button text="EXPLORE" href="/" />
            </div>
            <div className="image-container">
                <img src="/images/skiing.jpg" />
            </div>
        </section>
    );
};

export default HomeSection;
