import { FC } from "react";

interface FaqSectionProps {
    faqSectionHeader: string;
    faqSectionQuestion1: string;
    faqSectionAnswer1: string;
    faqSectionQuestion2: string;
    faqSectionAnswer2: string;
    faqSectionQuestion3: string;
    faqSectionAnswer3: string;
}

const FaqSection: FC<FaqSectionProps> = ({
    faqSectionHeader,
    faqSectionQuestion1,
    faqSectionAnswer1,
    faqSectionQuestion2,
    faqSectionAnswer2,
    faqSectionQuestion3,
    faqSectionAnswer3,
}) => {
    return (
        <section>
            <h2>{faqSectionHeader}</h2>
            <p>
                <strong>Q:</strong>
                {faqSectionQuestion1}
            </p>
            <p>
                <strong>A:</strong>
                {faqSectionAnswer1}
            </p>
            <p>
                <strong>Q:</strong>
                {faqSectionQuestion2}
            </p>
            <p>
                <strong>A:</strong>
                {faqSectionAnswer2}
            </p>
            <p>
                <strong>Q:</strong>
                {faqSectionQuestion3}
            </p>
            <p>
                <strong>A:</strong>
                {faqSectionAnswer3}
            </p>
        </section>
    );
};

export default FaqSection;
