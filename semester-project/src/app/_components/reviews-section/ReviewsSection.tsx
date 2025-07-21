import { Button } from "@/components/button/button";
import { Rating } from "@/components/rating/rating";
import { FC } from "react";

interface ReviewsSectionProps {
    header: string;
    article: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
}

const ReviewsSection: FC<ReviewsSectionProps> = ({
    header,
    article,
    paragraph1,
    paragraph2,
    paragraph3,
}) => {
    return (
        <section className="review-section">
            <h3>{header}</h3>
            <article>{article}</article>
            <div className="reviews">
                <div className="review">
                    <img src="/images/User2.jpeg" alt="" />
                    <p>
                        <strong>Chamonix, France</strong>: &quot;{paragraph1}
                        &quot;
                    </p>
                    <div className="rating">
                        <p>Alex P.</p>
                        <Rating rating={5} />
                    </div>
                </div>
                <div className="review">
                    <img src="/images/User3.jpeg" alt="" />
                    <p>
                        <strong>St. Anton, Austria</strong>: &quot;{paragraph2}
                        &quot;
                    </p>
                    <div className="rating">
                        <p>Sophie K.</p>
                        <Rating rating={5} />
                    </div>
                </div>
                <div className="review">
                    <img src="/images/User1.jpeg" alt="" />
                    <p>
                        <strong>Zermatt, Switzerland</strong>: &quot;
                        {paragraph3}&quot;
                    </p>
                    <div className="rating">
                        <p>Leona P.</p>
                        <Rating rating={4} />
                    </div>
                </div>
            </div>
            <Button text="CONNECT" href="/planner" />
        </section>
    );
};

export default ReviewsSection;
