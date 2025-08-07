
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
    ];

    return (
        <section className="faq-section">
            <h2>{faqSectionHeader}</h2>
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
        </section>
    );
};

export default FaqSection;
