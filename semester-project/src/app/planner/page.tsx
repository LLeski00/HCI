"use client";

import HeroSection from "@/components/hero/hero";
import PlannerForm from "./_components/planner-form/PlannerForm";
import PlannerResults from "./_components/planner-results/PlannerResults";
import { usePlanner } from "@/hooks/usePlanner";
import Loading from "@/components/loading/Loading";

export default function Planner() {
    const { formData, setFormData, results, loading, error } = usePlanner();

    return (
        <div>
            <HeroSection
                description="Fill in the form and get best matches!"
                titleBottom="Planner"
                titleTop=""
                backgroundImage="/images/2.jpg"
            />
            {formData ? (
                loading ? (
                    <Loading />
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
