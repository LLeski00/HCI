import { FC } from 'react';

interface SkiLevelSectionProps {
  skiLevelSectionHeader: string;
  skiLevelSectionItem1: string;
  skiLevelSectionItem2: string;
  skiLevelSectionItem3: string;
}

const SkiLevelSection: FC<SkiLevelSectionProps> = ({
  skiLevelSectionHeader,
  skiLevelSectionItem1,
  skiLevelSectionItem2,
  skiLevelSectionItem3,
}) => {
  const items = [
    skiLevelSectionItem1,
    skiLevelSectionItem2,
    skiLevelSectionItem3,
  ];
  return (
    <section className="section-content">
      <h3>{skiLevelSectionHeader}</h3>
      <p>
        SnowFlow helps you filter resorts by difficulty – just filter the
        options!
      </p>

      <div className="content-wrapper">
        <div className="image-container">
          <img src="./images/slope.jpg" alt="slope" />
        </div>

        <ul className="list-content">
          {items.map((item, index) => (
            <li key={index}>
              <div className="check-icon apres">❯</div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkiLevelSection;
