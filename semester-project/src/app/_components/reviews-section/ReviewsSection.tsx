import { Button } from '@/components/button/Button';
import { Rating } from '@/components/rating/Rating';
import Image from 'next/image';
import { FC } from 'react';

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
      <h2>{header}</h2>
      <article>{article}</article>
      <div className="reviews">
        <div className="review">
          <div className="review-image-container">
            <Image src="/images/User2.jpeg" alt="User2" fill />
          </div>
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
          <div className="review-image-container">
            <Image src="/images/User3.jpeg" alt="User3" fill />
          </div>
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
          <div className="review-image-container">
            <Image src="/images/User1.jpeg" alt="User1" fill />
          </div>
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
