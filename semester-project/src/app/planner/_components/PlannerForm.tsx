"use client";

import { PlannerFormData } from "@/types/planner";
import { FC } from "react";

interface PlannerFormProps {
    formData: PlannerFormData;
    setFormData: Function;
    handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const PlannerForm: FC<PlannerFormProps> = ({
    formData,
    setFormData,
    handleFormSubmit,
}) => {
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, type, value } = event.target;
        let newValue: unknown;

        switch (type) {
            case "number":
                newValue = parseFloat(value);
                break;
            case "date":
                newValue = new Date(value);
                break;
            default:
                newValue = value;
                break;
        }

        setFormData((prev: PlannerFormData) => {
            return {
                ...prev,
                [name]:
                    name === "startDate" || name === "endDate"
                        ? new Date(value)
                        : value,
            };
        });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Start date:
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate.toDateString()}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                End date:
                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate.toDateString()}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Number of people:
                <input
                    type="number"
                    name="numOfPeople"
                    value={formData.numOfPeople}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Budget:
                <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Current location:
                <input
                    type="text"
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Generate</button>
        </form>
    );
};

export default PlannerForm;
