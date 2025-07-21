"use client";

import { getCoordinates } from "@/app/api/coordinate";
import { Coordinates } from "@/types/coordinate";
import { PlannerFormData } from "@/types/planner";
import { FC, useState } from "react";
import { Country, getData } from "country-list";

interface PlannerFormProps {
    setFormData: Function;
}

const PlannerForm: FC<PlannerFormProps> = ({ setFormData }) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const today = new Date().toISOString().split("T")[0];
    const countries: Country[] = getData();

    function isFormValid(form: HTMLFormElement): boolean {
        const startDate = new Date(form.startDate.value);
        const endDate = new Date(form.endDate.value);

        if (endDate < startDate) {
            setErrorMessage("End date cannot be before start date.");
            return false;
        }

        setErrorMessage(null);
        return true;
    }

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form: HTMLFormElement = event.currentTarget;

        if (!isFormValid(form)) return;

        const currentLocation = form.city.value + ", " + form.country.value;
        const coordinates: Coordinates | null = await getCoordinates(
            currentLocation
        );

        if (!coordinates) {
            setErrorMessage("Invalid current location. Please try again.");
            return;
        }

        const formData: PlannerFormData = {
            startDate: new Date(form.startDate.value),
            endDate: new Date(form.endDate.value),
            numOfPeople: parseInt(form.numOfPeople.value),
            budget: parseFloat(form.budget.value),
            currentLocation: coordinates,
        };
        setFormData(formData);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {" "}
            <label>
                Start date:
                <input type="date" name="startDate" min={today} required />
            </label>
            <label>
                End date:
                <input type="date" name="endDate" min={today} required />
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
                Country:
                <select name="country" required>
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                City:
                <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    required
                />
            </label>
            <button type="submit">Generate</button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
    );
};

export default PlannerForm;
