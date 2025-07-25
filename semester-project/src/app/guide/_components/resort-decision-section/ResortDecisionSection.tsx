import { FC } from "react";

interface ResortDecisionSectionProps {
    resortDecisionSectionHeader: string;
    resortDecisionSectionParagraph: string;
}

const ResortDecisionSection: FC<ResortDecisionSectionProps> = ({
    resortDecisionSectionHeader,
    resortDecisionSectionParagraph,
}) => {
    return (
        <section>
            <h2>{resortDecisionSectionHeader}</h2>
            <p>{resortDecisionSectionParagraph}</p>
        </section>
    );
};

export default ResortDecisionSection;
