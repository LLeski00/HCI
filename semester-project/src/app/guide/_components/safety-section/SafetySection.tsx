import { FC } from "react";

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
    return (
        <section>
            <h2>{safetySectionHeader}</h2>
            <ul>
                <li>{safetySectionItem1}</li>
                <li>{safetySectionItem2}</li>
                <li>{safetySectionItem3}</li>
                <li>{safetySectionItem4}</li>
                <li>{safetySectionItem5}</li>
            </ul>
        </section>
    );
};

export default SafetySection;
