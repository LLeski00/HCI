import { ResortInfo } from "@/types/resort";
import { getTotalDistance } from "./getDistance";

export function calculateResortScores(
    resorts: ResortInfo[]
): Record<string, number> {
    const scores: Record<string, number> = {};

    resorts.forEach((resort) => {
        const adultPrice: number = resort.adultPrice;

        const totalSlopeLength: number = getTotalDistance(
            resort.easySlopes ?? 0,
            resort.intermediateSlopes ?? 0,
            resort.difficultSlopes ?? 0
        );

        const priceScore: number = 0.5 * (1 - adultPrice / 120);
        const slopeScore: number = 0.5 * (totalSlopeLength / 600);
        const totalScore: number = priceScore + slopeScore;

        scores[resort.id] = totalScore;
    });

    return scores;
}
