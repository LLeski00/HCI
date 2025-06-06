import { getPlannerResults } from "@/api/planner";
import {
    PlannerFormData,
    PlannerResults as PlannerResultsType,
} from "@/types/planner";
import { FC } from "react";

interface PlannerResultsProps {
    formData: PlannerFormData;
}

const PlannerResults: FC<PlannerResultsProps> = async ({ formData }) => {
    const results: PlannerResultsType = await getPlannerResults(formData);

    return (
        <>
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
        </>
    );
};

export default PlannerResults;
