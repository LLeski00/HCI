import { FC } from 'react';

interface TimeSectionProps {
  timeSectionHeader: string;
  timeSectionItem1: string;
  timeSectionItem2: string;
  timeSectionItem3: string;
}

const TimeSection: FC<TimeSectionProps> = ({
  timeSectionHeader,
  timeSectionItem1,
  timeSectionItem2,
  timeSectionItem3,
}) => {
  const timeItems = [timeSectionItem1, timeSectionItem2, timeSectionItem3];

  return (
    <section className="section-content blue">
      <h3>{timeSectionHeader}</h3>
      <p>
        European ski season runs from late November to April, but the best time
        depends on your goals:
      </p>

      <div className="content-wrapper">
        <div>
          <ul className="list-content light">
            {timeItems.map((item, index) => (
              <li key={index}>
                <div className="check-icon">✓</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="section-footer">
            Tip: Always check live snow conditions for your chosen resort!
          </div>
        </div>

        <div className="image-container">
          <img src="/images/season.jpg" alt="season" />
        </div>
      </div>
    </section>
  );
};

export default TimeSection;
