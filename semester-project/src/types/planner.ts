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
    bestMatch: PlannerResultResort | null;
    cheapest: PlannerResultResort | null;
    closest: PlannerResultResort | null;
}

export interface PlannerResultResort {
    resort: ResortInfo;
    distance: number;
    totalCost: number;
}
