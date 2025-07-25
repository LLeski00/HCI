import { FC } from "react";

interface LearningSectionProps {
    learningSectionHeader: string;
    learningSectionParagraph: string;
}

const LearningSection: FC<LearningSectionProps> = ({
    learningSectionHeader,
    learningSectionParagraph,
}) => {
    return (
        <section>
            <h2>{learningSectionHeader}</h2>
            <p>{learningSectionParagraph}</p>
        </section>
    );
};

export default LearningSection;
