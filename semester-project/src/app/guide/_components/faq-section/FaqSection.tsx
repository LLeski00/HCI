
"use client"
import { FC, useState } from "react";
import '@/app/guide/guide.css';

interface FaqSectionProps {
    faqSectionHeader: string;
    faqSectionQuestion1: string;
    faqSectionAnswer1: string;
    faqSectionQuestion2: string;
    faqSectionAnswer2: string;
    faqSectionQuestion3: string;
    faqSectionAnswer3: string;
    faqSectionQuestion4: string;
    faqSectionAnswer4: string;
    faqSectionQuestion5: string;
    faqSectionAnswer5: string;
}

const FaqSection: FC<FaqSectionProps> = ({
    faqSectionHeader,
    faqSectionQuestion1,
    faqSectionAnswer1,
    faqSectionQuestion2,
    faqSectionAnswer2,
    faqSectionQuestion3,
    faqSectionAnswer3,
    faqSectionQuestion4,
    faqSectionAnswer4,
    faqSectionQuestion5,
    faqSectionAnswer5,
}) => {

    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggle = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const faqs = [
        { question: faqSectionQuestion1, answer: faqSectionAnswer1 },
        { question: faqSectionQuestion2, answer: faqSectionAnswer2 },
        { question: faqSectionQuestion3, answer: faqSectionAnswer3 },
        { question: faqSectionQuestion4, answer: faqSectionAnswer4 },
        { question: faqSectionQuestion5, answer: faqSectionAnswer5 },
    ];

    return (
        <section className="section-content blue">
            <h3>{faqSectionHeader}</h3>
            <p>Most asked questions people ask</p>
            <div className="questions-section">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndexes.includes(index) ? "open" : ""}`}
                    >
                        <div
                            className="faq-question"
                            onClick={() => toggle(index)}
                        >
                            {faq.question}
                        </div>
                        {openIndexes.includes(index) && (
                            <div className="faq-answer">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>

        </section>
    );
};

export default FaqSection;
