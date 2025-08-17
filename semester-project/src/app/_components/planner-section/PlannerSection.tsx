import { Button } from '@/components/button/Button';
import { FC } from 'react';

interface PlannerSectionProps {
  header: string;
  paragraph: string;
  stepSectionHeader: string;
  stepSectionHeader1: string;
  stepSectionParagraph1: string;
  stepSectionHeader2: string;
  stepSectionParagraph2: string;
  stepSectionHeader3: string;
  stepSectionParagraph3: string;
}

const PlannerSection: FC<PlannerSectionProps> = ({
  header,
  paragraph,
  stepSectionHeader,
  stepSectionHeader1,
  stepSectionParagraph1,
  stepSectionHeader2,
  stepSectionParagraph2,
  stepSectionHeader3,
  stepSectionParagraph3,
}) => {
  return (
    <section className="planner-section">
      <div className="title-content">
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>

      <article className="planner-content">
        <div className="steps-container">
          <h2>{stepSectionHeader}</h2>
          <div className="step-content">
            <p className="step-number">01</p>
            <h3>{stepSectionHeader1}</h3>
            <p>{stepSectionParagraph1}</p>
          </div>

          <div className="step-content">
            <p className="step-number">02</p>
            <h3>{stepSectionHeader2}</h3>
            <p>{stepSectionParagraph2}</p>
          </div>

          <div className="step-content">
            <p className="step-number">03</p>
            <h3>{stepSectionHeader3}</h3>
            <p>{stepSectionParagraph3}</p>
          </div>
          <Button text="START TRIP" href="/planner" />
        </div>
        <div className="home-image-container">
          <img src="/images/snowboarding.jpg" alt="snowboarding" />
        </div>
      </article>
    </section>
  );
};

export default PlannerSection;
