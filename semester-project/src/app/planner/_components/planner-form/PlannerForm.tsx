"use client";

import { PlannerFormData } from "@/types/planner";
import { FC, useState } from "react";

interface PlannerFormProps {
    setFormData: Function;
}

const PlannerForm: FC<PlannerFormProps> = ({ setFormData }) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    function isFormValid(event: React.FormEvent<HTMLFormElement>): boolean {
        if (
            event.currentTarget.endDate.value <
            event.currentTarget.startDate.value
        ) {
            setErrorMessage("End date cannot be before start date.");
            return false;
        }

        if (errorMessage) setErrorMessage(null);
        return true;
    }

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isFormValid(event)) return;

        const formData: PlannerFormData = {
            startDate: new Date(event.currentTarget.startDate.value),
            endDate: new Date(event.currentTarget.endDate.value),
            numOfPeople: parseInt(event.currentTarget.numOfPeople.value),
            budget: parseFloat(event.currentTarget.budget.value),
            currentLocation: event.currentTarget.currentLocation.value,
        };
        setFormData(formData);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Start date:
                <input type="date" name="startDate" required />
            </label>
            <label>
                End date:
                <input type="date" name="endDate" required />
            </label>
            <label>
                Number of people:
                <input type="number" name="numOfPeople" min={1} required />
            </label>
            <label>
                Budget:
                <input type="number" name="budget" min={10} required />
            </label>
            <label>
                Current location:
                <input type="text" name="currentLocation" required />
            </label>
            <button type="submit">Generate</button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
    );
};

export default PlannerForm;
