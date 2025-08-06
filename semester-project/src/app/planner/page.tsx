"use client";

import HeroSection from "@/components/hero/Hero";
import PlannerForm from "./_components/planner-form/PlannerForm";
import PlannerResults from "./_components/planner-results/PlannerResults";
import { usePlanner } from "@/hooks/usePlanner";
import Loading from "@/components/loading/Loading";
import { useEffect, useRef } from "react";

export default function Planner() {
    const { formData, setFormData, results, loading, error } = usePlanner();
    const resultsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (results && !loading && resultsRef.current) {
            resultsRef?.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }, [results]);

    return (
        <div>
            <HeroSection
                description="Fill in the form and get best matches!"
                titleBottom="Planner"
                titleTop=""
                backgroundImage="/images/2.jpg"
            />
            <PlannerForm setFormData={setFormData} />
            {formData && (
                loading ? (
                    <Loading />
                ) : error ? (
                    <p style={{ color: "red" }}>{error}</p>
                ) : (
                    results && (
                        <div ref={resultsRef}>
                            <PlannerResults results={results} />
                        </div>
                    )
                )
            )}
        </div>
    );
}
