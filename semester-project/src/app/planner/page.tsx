"use client";

import HeroSection from "@/components/hero/hero";
import PlannerForm from "./_components/planner-form/PlannerForm";
import PlannerResults from "./_components/planner-results/PlannerResults";
import { usePlanner } from "@/hooks/usePlanner";

export default function Planner() {
    const { formData, setFormData, results, loading, error } = usePlanner();

    return (
        <div>
            <HeroSection
                description="Planner"
                titleBottom="Planner"
                titleTop="Planner"
            />
            <h1>Planner</h1>
            {formData ? (
                loading ? (
                    <p>Loading results...</p>
                ) : error ? (
                    <p style={{ color: "red" }}>{error}</p>
                ) : (
                    results && <PlannerResults results={results} />
                )
            ) : (
                <PlannerForm setFormData={setFormData} />
            )}
        </div>
    );
}
