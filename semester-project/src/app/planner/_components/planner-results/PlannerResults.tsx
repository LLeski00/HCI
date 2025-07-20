import ResortCard from "@/components/resortCard/resortCard";
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
            <ResortCard resort={results.bestMatch.resort} />
            <p>
                Distance: {results.bestMatch.distance.toFixed(2)} km, Total
                cost: {results.bestMatch.totalCost.toFixed(2)} €
            </p>
            <h2>The cheapest:</h2>
            <ResortCard resort={results.cheapest.resort} />
            <p>
                Distance: {results.cheapest.distance.toFixed(2)} km, Total cost:{" "}
                {results.cheapest.totalCost.toFixed(2)} €
            </p>
            <h2>The closest:</h2>
            <ResortCard resort={results.closest.resort} />
            <p>
                Distance: {results.closest.distance.toFixed(2)} km, Total cost:{" "}
                {results.closest.totalCost.toFixed(2)} €
            </p>
        </div>
    );
};

export default PlannerResults;
