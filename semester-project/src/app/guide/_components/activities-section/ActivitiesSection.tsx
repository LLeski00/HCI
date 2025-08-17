import { FC } from 'react';

interface ActivitiesSectionProps {
  activitiesSectionHeader: string;
  activitiesSectionItem1: string;
  activitiesSectionItem2: string;
  activitiesSectionItem3: string;

  activitiesAction1: string;
  activitiesAction2: string;
  activitiesAction3: string;
  activitiesAction4: string;
  activitiesAction5: string;
}

const ActivitiesSection: FC<ActivitiesSectionProps> = ({
  activitiesSectionHeader,
  activitiesSectionItem1,
  activitiesSectionItem2,
  activitiesSectionItem3,
  activitiesAction1,
  activitiesAction2,
  activitiesAction3,
  activitiesAction4,
  activitiesAction5,
}) => {
  const items = [
    activitiesSectionItem1,
    activitiesSectionItem2,
    activitiesSectionItem3,
  ];

  const actions = [
    activitiesAction1,
    activitiesAction2,
    activitiesAction3,
    activitiesAction4,
    activitiesAction5,
  ];

  return (
    <section className="section-content blue">
      <h3>{activitiesSectionHeader}</h3>
      <p>Skiing isn’t everything – enjoy the culture too!</p>

      <div className="content-wrapper">
        <ul className="list-content info">
          {items.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
          <div className="list-content activities">
            {actions.map((action, index) => (
              <li key={index}>
                <div className="check-icon apres">❯</div>
                <span>{action}</span>
              </li>
            ))}
          </div>
        </ul>
        <div className="image-container">
          <img src="./images/apresSki.jpg" alt="apres ski" />
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
