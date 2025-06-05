import { PlannerFormData } from "@/types/planner";
import { FC } from "react";

interface PlannerFormProps {
    setFormData: Function;
}

const PlannerForm: FC<PlannerFormProps> = ({ setFormData }) => {
    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData: PlannerFormData = {
            startDate: new Date(event.currentTarget.startDate.value),
            endDate: new Date(event.currentTarget.endDate.value),
            numOfPeople: parseInt(event.currentTarget.numOfPeople.value),
            budget: parseFloat(event.currentTarget.budget.value),
            currentLocation: event.currentTarget.currentLocation.value,
        };
        console.log("Form submitted with data:", formData);
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
                <input type="number" name="numOfPeople" required />
            </label>
            <label>
                Budget:
                <input type="number" name="budget" required />
            </label>
            <label>
                Current location:
                <input type="text" name="currentLocation" required />
            </label>
            <button type="submit">Generate</button>
        </form>
    );
};

export default PlannerForm;
