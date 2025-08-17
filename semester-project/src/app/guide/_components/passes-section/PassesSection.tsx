import Image from 'next/image';
import { FC } from 'react';

interface PassesSectionProps {
  passesSectionHeader: string;
  passesSectionItem1: string;
  passesSectionItem2: string;
  passesSectionItem3: string;
  passesSectionItem4: string;
}

const PassesSection: FC<PassesSectionProps> = ({
  passesSectionHeader,
  passesSectionItem1,
  passesSectionItem2,
  passesSectionItem3,
  passesSectionItem4,
}) => {
  const items = [
    passesSectionItem1,
    passesSectionItem2,
    passesSectionItem3,
    passesSectionItem4,
  ];

  return (
    <section className="section-content">
      <h3>{passesSectionHeader}</h3>
      <p>Each resort has different options, but here’s what to expect:</p>

      <div className="content-wrapper">
        <div className="image-container">
          <Image src="/images/skiPass.jpg" alt="Ski Pass" fill />
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

export default PassesSection;
