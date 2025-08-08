"use client";
import { FC } from "react";

interface GearSectionProps {
    gearSectionHeader: string;
    gearSectionItem1: string;
    gearSectionItem2: string;
    gearSectionItem3: string;
    gearSectionItem4: string;
    gearSectionItem5: string;
    gearSectionItem6: string;
    gearSectionItem7: string;
}

const GearSection: FC<GearSectionProps> = ({
    gearSectionHeader,
    gearSectionItem1,
    gearSectionItem2,
    gearSectionItem3,
    gearSectionItem4,
    gearSectionItem5,
    gearSectionItem6,
    gearSectionItem7,
}) => {
    const items = [
        gearSectionItem1,
        gearSectionItem2,
        gearSectionItem3,
        gearSectionItem4,
        gearSectionItem5,
        gearSectionItem6,
        gearSectionItem7,
    ];

    const downloadChecklist = () => {
        const checklist = items.map(item => `- ☐ ${item}`).join("\n");
        const blob = new Blob([checklist], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `${gearSectionHeader.replace(/\s+/g, "_")}_checklist.txt`;
        a.click();

        URL.revokeObjectURL(url);
    };

    return (
        <section className="section-content blue">

            <div className="gear-section-header">
                <h3>{gearSectionHeader}</h3>
                <button onClick={downloadChecklist}>
                    Download Checklist
                </button>
            </div>

            <div className="content-wrapper">
                <ul className="list-content">
                    {items.map((item, index) => (
                        <li key={index}>
                            <div className="check-icon">✓</div>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="image-container">
                    <img
                        src="./images/skiGear1.jpg"
                        alt={gearSectionHeader}
                    />
                </div>
            </div>
        </section>
    );
};

export default GearSection;