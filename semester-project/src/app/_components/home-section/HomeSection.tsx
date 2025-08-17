import { Button } from '@/components/button/Button';
import Image from 'next/image';
import { FC } from 'react';

interface HomeSectionProps {
  header: string;
  paragraph: string;
}

const HomeSection: FC<HomeSectionProps> = async ({ header, paragraph }) => {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="title-content start">
          <h2>{header}</h2>
          <p>{paragraph}</p>
          <Button text="EXPLORE" href="/guide" />
        </div>
        <div className="home-image-container">
          <Image src="/images/skiing.jpg" alt="Skiing" fill />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
