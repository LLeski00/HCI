import { Coordinates } from "./coordinate";
import { ResortInfo } from "./resort";

export interface PlannerFormData {
    startDate: Date;
    endDate: Date;
    numOfPeople: number;
    budget: number;
    currentLocation: Coordinates;
}

export interface PlannerResults {
    bestMatch: ResortInfo | null;
    cheapest: ResortInfo | null;
    closest: ResortInfo | null;
}
