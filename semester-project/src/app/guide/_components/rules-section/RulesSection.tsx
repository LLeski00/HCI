import { FC } from "react";

interface RulesSectionProps {
    rulesSectionHeader: string;
    rulesSectionItem1: string;
    rulesSectionItem2: string;
    rulesSectionItem3: string;
    rulesSectionItem4: string;
}

const RulesSection: FC<RulesSectionProps> = ({
    rulesSectionHeader,
    rulesSectionItem1,
    rulesSectionItem2,
    rulesSectionItem3,
    rulesSectionItem4,
}) => {
    return (
        <section>
            <h2>{rulesSectionHeader}</h2>
            <ul>
                <li>{rulesSectionItem1}</li>
                <li>{rulesSectionItem2}</li>
                <li>{rulesSectionItem3}</li>
                <li>{rulesSectionItem4}</li>
            </ul>
        </section>
    );
};

export default RulesSection;
