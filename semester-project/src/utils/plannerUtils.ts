import { ResortInfo } from "@/types/resort";
import { getTotalDistance } from "./getDistance";
import { getDaysDifference } from "./dateUtils";
import { PlannerFormData } from "@/types/planner";
import { calculateDistance } from "./coordinatesUtils";
import { Coordinates } from "@/types/coordinate";

export function calculateResortScores(
    resorts: ResortInfo[],
    currentLocation: Coordinates
): Record<string, number> {
    const scores: Record<string, number> = {};
    const distanceWeight: number = 0.3;
    const priceWeight: number = 0.3;
    const slopeWeight: number = 0.4;
    const maxDistance: number = 4000;
    const maxPrice: number = 120;
    const maxSlopeLength: number = 600;

    resorts.forEach((resort) => {
        const adultPrice: number = resort.adultPrice;

        const totalSlopeLength: number = getTotalDistance(
            resort.easySlopes ?? 0,
            resort.intermediateSlopes ?? 0,
            resort.difficultSlopes ?? 0
        );

        const distanceScore: number =
            distanceWeight *
            (1 -
                calculateDistance(resort.coordinates, currentLocation) /
                    maxDistance);
        const priceScore: number = priceWeight * (1 - adultPrice / maxPrice);
        const slopeScore: number =
            slopeWeight * (totalSlopeLength / maxSlopeLength);
        const totalScore: number = priceScore + slopeScore + distanceScore;

        scores[resort.id] = totalScore;
    });

    return scores;
}

export function calculateTotalCost(
    resortLocation: Coordinates,
    adultPrice: number,
    formData: PlannerFormData
): number {
    const numOfDays =
        getDaysDifference(formData.startDate, formData.endDate) + 1;
    const averageAccomodationCostPerDay = 70;
    const distance = calculateDistance(
        resortLocation,
        formData.currentLocation
    );
    const transportCostPerKilometer = 0.2;

    return (
        distance * transportCostPerKilometer +
        adultPrice * formData.numOfPeople * numOfDays +
        averageAccomodationCostPerDay * formData.numOfPeople * numOfDays
    );
}
