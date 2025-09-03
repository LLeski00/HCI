import styles from './planner-steps.module.css';

export default function PlannerSteps() {
  const steps = [
    {
      title: 'Step 1: Tell Us About Your Trip',
      description:
        "Fill in your travel dates, number of people, budget range, and where you're starting from.",
    },
    {
      title: 'Step 2: We Find Your Perfect Ski Getaway',
      description:
        'Our system analyzes hundreds of options to match you with: closest locations, most affordable deals, and highest-rated resorts based on your criteria.',
    },
    {
      title: 'Step 3: Choose Your Favorite Option',
      description:
        'Review personalized recommendations with total trip costs calculated for your whole group across all days (including lodging, travel, and ski passes).',
    },
  ];

  return (
    <section className={styles.stepsSection}>
      <h3 className={styles.sectionTitle}>3 Easy Steps to Your Ski Vacation</h3>
      <div className={styles.stepContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepContent}>
            <div className={styles.stepNumber}>{index + 1}</div>
            <h4 className={styles.stepTitle}>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
