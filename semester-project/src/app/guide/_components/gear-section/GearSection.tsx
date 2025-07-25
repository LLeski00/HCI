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
    return (
        <section>
            <h2>{gearSectionHeader}</h2>
            <ul>
                <li>{gearSectionItem1}</li>
                <li>{gearSectionItem2}</li>
                <li>{gearSectionItem3}</li>
                <li>{gearSectionItem4}</li>
                <li>{gearSectionItem5}</li>
                <li>{gearSectionItem6}</li>
                <li>{gearSectionItem7}</li>
            </ul>
        </section>
    );
};

export default GearSection;
