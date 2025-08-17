import { FC } from 'react';

interface ResortDecisionSectionProps {
  resortDecisionSectionHeader: string;
  resortDecisionSectionParagraph: string;
}

const ResortDecisionSection: FC<ResortDecisionSectionProps> = ({
  resortDecisionSectionHeader,
  resortDecisionSectionParagraph,
}) => {
  return (
    <section className="section-content first">
      <h3>{resortDecisionSectionHeader}</h3>
      <p>Welcome to SnowFlow’s Guide to skiing in Europe!</p>

      <div className="content-wrapper">
        <div className="image-container">
          <img src="./images/guide.jpg" alt="guide" />
        </div>
        <p className="guide-desc">{resortDecisionSectionParagraph}</p>
      </div>
    </section>
  );
};

export default ResortDecisionSection;
