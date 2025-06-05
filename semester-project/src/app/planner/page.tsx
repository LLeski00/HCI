"use client";

import HeroSection from "@/components/hero/hero";
import PlannerForm from "./_components/PlannerForm";
import { useState } from "react";
import { PlannerFormData } from "@/types/planner";

export default function Home() {
    const [formData, setFormData] = useState<PlannerFormData>({
        startDate: new Date(),
        endDate: new Date(),
        numOfPeople: 1,
        currentLocation: "",
        budget: 0,
    });

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Form submitted with data:", formData);
    }

    return (
        <div>
            <HeroSection
                description="Planner"
                titleBottom="Planner"
                titleTop="Planner"
            />
            <h1>Planner</h1>
            <PlannerForm
                formData={formData}
                setFormData={setFormData}
                handleFormSubmit={handleFormSubmit}
            />
        </div>
    );
}
