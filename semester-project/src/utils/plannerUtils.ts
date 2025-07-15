import { ResortInfo } from "@/types/resort";
import { getTotalDistance } from "./getDistance";

export function calculateResortScores(
    resorts: ResortInfo[]
): Record<string, number> {
    const scores: Record<string, number> = {};
    const priceWeight: number = 0.5;
    const slopeWeight: number = 0.5;
    const maxPrice: number = 120;
    const maxSlopeLength: number = 600;

    resorts.forEach((resort) => {
        const adultPrice: number = resort.adultPrice;

        const totalSlopeLength: number = getTotalDistance(
            resort.easySlopes ?? 0,
            resort.intermediateSlopes ?? 0,
            resort.difficultSlopes ?? 0
        );

        const priceScore: number = priceWeight * (1 - adultPrice / maxPrice);
        const slopeScore: number =
            slopeWeight * (totalSlopeLength / maxSlopeLength);
        const totalScore: number = priceScore + slopeScore;

        scores[resort.id] = totalScore;
    });

    return scores;
}
