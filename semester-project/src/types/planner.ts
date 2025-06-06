import { ResortInfo } from "./resort";

export interface PlannerFormData {
    startDate: Date;
    endDate: Date;
    numOfPeople: number;
    budget: number;
    currentLocation: string;
}

export interface PlannerResults {
    bestMatch: ResortInfo;
    cheapest: ResortInfo;
    closest: ResortInfo;
}
