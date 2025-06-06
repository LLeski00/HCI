"use client";

import HeroSection from "@/components/hero/hero";
import PlannerForm from "./_components/planner-form/PlannerForm";
import { useState } from "react";
import { PlannerFormData } from "@/types/planner";
import PlannerResults from "./_components/planner-results/PlannerResults";

export default function Home() {
    const [formData, setFormData] = useState<PlannerFormData | null>(null);

    return (
        <div>
            <HeroSection
                description="Planner"
                titleBottom="Planner"
                titleTop="Planner"
            />
            <h1>Planner</h1>
            {formData ? (
                <PlannerResults formData={formData} />
            ) : (
                <PlannerForm setFormData={setFormData} />
            )}
        </div>
    );
}
