import {
    PlannerFormData,
    PlannerResults as PlannerResultsType,
} from "@/types/planner";
import { FC } from "react";
import { getPlannerResults } from "../../_lib/planner";

interface PlannerResultsProps {
    formData: PlannerFormData;
}

const PlannerResults: FC<PlannerResultsProps> = async ({ formData }) => {
    const results: PlannerResultsType = await getPlannerResults(formData);

    return <></>;
};

export default PlannerResults;
