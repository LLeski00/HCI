import ResortCard from "@/components/resortCard/resortCard";
import {
    PlannerResultResort,
    PlannerResults as PlannerResultsType,
} from "@/types/planner";
import { FC } from "react";

interface PlannerResultsProps {
    results: PlannerResultsType;
}

const PlannerResults: FC<PlannerResultsProps> = ({ results }) => {
    if (!results.bestMatch || !results.cheapest || !results.closest)
        return <p>No results available for the given form</p>;

    const resultResort = (
        title: string,
        plannerResult: PlannerResultResort
    ) => {
        return (
            <div className="planner-result-resort">
                <h2>{title}:</h2>
                <ResortCard resort={plannerResult.resort} />
                <p>
                    Distance: {plannerResult.distance.toFixed(2)} km, Total
                    cost: {plannerResult.totalCost.toFixed(2)} €
                </p>
            </div>
        );
    };

    return (
        <div>
            {resultResort("Best Match", results.bestMatch)}
            {resultResort("Cheapest", results.cheapest)}
            {resultResort("Closest", results.closest)}
        </div>
    );
};

export default PlannerResults;
