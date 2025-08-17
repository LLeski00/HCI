import Image from 'next/image';
import { FC } from 'react';

interface SafetySectionProps {
  safetySectionHeader: string;
  safetySectionItem1: string;
  safetySectionItem2: string;
  safetySectionItem3: string;
  safetySectionItem4: string;
  safetySectionItem5: string;
}

const SafetySection: FC<SafetySectionProps> = ({
  safetySectionHeader,
  safetySectionItem1,
  safetySectionItem2,
  safetySectionItem3,
  safetySectionItem4,
  safetySectionItem5,
}) => {
  const safetyItems = [
    safetySectionItem1,
    safetySectionItem2,
    safetySectionItem3,
    safetySectionItem4,
    safetySectionItem5,
  ];

  return (
    <section className="section-content">
      <h3>{safetySectionHeader}</h3>
      <p>Stay safe on and off the slopes</p>

      <div className="content-wrapper">
        <div className="image-container">
          <Image src="/images/safety.jpg" alt="safety" fill />
        </div>

        <div>
          <ul className="list-content">
            {safetyItems.map((item, index) => (
              <li key={index} className="safety-item">
                <div className="check-icon">✓</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="section-footer">
            Remember: Safety first on the slopes!
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
