import { ResortInfo } from "@/types/resort";
import { getTotalDistance } from "./getDistance";
import { getDaysDifference } from "./dateUtils";
import { PlannerFormData, PlannerResults } from "@/types/planner";
import { calculateDistance } from "./coordinatesUtils";
import { Coordinates } from "@/types/coordinate";
import { getResortsInsideBudget } from "@/api/resort";

export async function getPlannerResults(
    formData: PlannerFormData
): Promise<PlannerResults> {
    const resortsInsideBudget: ResortInfo[] = await getResortsInsideBudget(
        formData
    );

    if (resortsInsideBudget.length === 0) return {} as PlannerResults;

    const scores: Record<string, number> = calculateResortScores(
        resortsInsideBudget,
        formData.currentLocation
    );
    const bestResort = getBestResort(resortsInsideBudget, scores);
    const closestResort = getClosestResort(
        resortsInsideBudget,
        formData.currentLocation
    );
    const cheapestResort = getCheapestResort(resortsInsideBudget, formData);
    const plannerResults: PlannerResults = formatPlannerResults(
        bestResort,
        closestResort,
        cheapestResort,
        formData
    );

    return {
        bestMatch: plannerResults.bestMatch,
        cheapest: plannerResults.cheapest,
        closest: plannerResults.closest,
    };
}

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

function getBestResort(
    resorts: ResortInfo[],
    scores: Record<string, number>
): ResortInfo {
    const maxScore: number = Math.max(...Object.values(scores));
    const bestMatch: ResortInfo = resorts.find(
        (r) => scores[r.id] === maxScore
    )!;
    return bestMatch;
}

function getClosestResort(
    resorts: ResortInfo[],
    currentLocation: Coordinates
): ResortInfo {
    const minDistance: number = Math.min(
        ...resorts.map((r) => calculateDistance(r.coordinates, currentLocation))
    );
    const closest: ResortInfo = resorts.find(
        (r) => calculateDistance(r.coordinates, currentLocation) === minDistance
    )!;
    return closest;
}

function getCheapestResort(
    resorts: ResortInfo[],
    formData: PlannerFormData
): ResortInfo {
    let cheapest = resorts[0];
    let minCost = calculateTotalCost(
        cheapest.coordinates,
        cheapest.adultPrice,
        formData
    );

    for (let i = 1; i < resorts.length; i++) {
        const currentCost = calculateTotalCost(
            resorts[i].coordinates,
            resorts[i].adultPrice,
            formData
        );
        if (currentCost < minCost) {
            minCost = currentCost;
            cheapest = resorts[i];
        }
    }

    return cheapest;
}

function formatPlannerResults(
    bestResort: ResortInfo,
    closestResort: ResortInfo,
    cheapestResort: ResortInfo,
    formData: PlannerFormData
): PlannerResults {
    return {
        bestMatch: {
            resort: bestResort,
            distance: calculateDistance(
                bestResort.coordinates,
                formData.currentLocation
            ),
            totalCost: calculateTotalCost(
                bestResort.coordinates,
                bestResort.adultPrice,
                formData
            ),
        },
        closest: {
            resort: closestResort,
            distance: calculateDistance(
                closestResort.coordinates,
                formData.currentLocation
            ),
            totalCost: calculateTotalCost(
                closestResort.coordinates,
                closestResort.adultPrice,
                formData
            ),
        },
        cheapest: {
            resort: cheapestResort,
            distance: calculateDistance(
                cheapestResort.coordinates,
                formData.currentLocation
            ),
            totalCost: calculateTotalCost(
                cheapestResort.coordinates,
                cheapestResort.adultPrice,
                formData
            ),
        },
    };
}
