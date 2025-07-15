import { useState, useEffect } from "react";
import { getPlannerResults } from "@/api/planner";
import {
    PlannerFormData,
    PlannerResults as PlannerResultsType,
} from "@/types/planner";

export function usePlanner() {
    const [formData, setFormData] = useState<PlannerFormData | null>(null);
    const [results, setResults] = useState<PlannerResultsType | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (formData) {
            getResults(formData);
        }
    }, [formData]);

    function getResults(formData: PlannerFormData) {
        setLoading(true);
        setError(null);
        setResults(null);

        getPlannerResults(formData)
            .then((data) => {
                setResults(data);
            })
            .catch((err) => {
                console.error("Error fetching planner results:", err);
                setError("Failed to fetch results. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return {
        formData,
        setFormData,
        results,
        loading,
        error,
    };
}
