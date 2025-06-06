import { ResortInfo } from "@/app/destinations/types/resort";
import { getTotalDistance } from "./getDistance";

export function calculateResortScores(
    resorts: ResortInfo[]
): Record<string, number> {
    const scores: Record<string, number> = {};

    resorts.forEach((resort) => {
        const adultPrice = parseFloat(resort.adultPrice || "0");

        const totalSlopeLength = getTotalDistance(
            resort.easySlopes || "0",
            resort.intermediateSlopes || "0",
            resort.difficultSlopes || "0"
        );

        const priceScore = 0.5 * (1 - adultPrice / 120);
        const slopeScore = 0.5 * (totalSlopeLength / 600);
        const totalScore = priceScore + slopeScore;

        scores[resort.id] = totalScore;
    });

    return scores;
}
