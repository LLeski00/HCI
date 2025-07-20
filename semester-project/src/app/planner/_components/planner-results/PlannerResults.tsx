import { PlannerResults as PlannerResultsType } from "@/types/planner";
import { FC } from "react";

interface PlannerResultsProps {
    results: PlannerResultsType;
}

const PlannerResults: FC<PlannerResultsProps> = ({ results }) => {
    if (!results.bestMatch || !results.cheapest || !results.closest)
        return <p>No results available for the given form</p>;

    return (
        <div>
            <h2>The best match:</h2>
            <p>
                {results.bestMatch.name}, {results.bestMatch.country}
            </p>
            <h2>The cheapest:</h2>
            <p>
                {results.cheapest.name}, {results.cheapest.country}
            </p>
            <h2>The closest:</h2>
            <p>
                {results.closest.name}, {results.closest.country}
            </p>
        </div>
    );
};

export default PlannerResults;
