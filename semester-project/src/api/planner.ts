import { PlannerFormData, PlannerResults } from "@/types/planner";
import { getResortsInsideBudget } from "./resort";
import { calculateResortScores } from "@/utils/plannerUtils";
import { ResortInfo } from "@/types/resort";
import { calculateDistance } from "@/utils/coordinatesUtils";

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
    const maxScore: number = Math.max(...Object.values(scores));
    const bestMatch: ResortInfo = resortsInsideBudget.find(
        (r) => scores[r.id] === maxScore
    )!;
    const minPrice: number = Math.min(
        ...resortsInsideBudget.map((r) => r.adultPrice)
    );
    const cheapest: ResortInfo = resortsInsideBudget.find(
        (r) => r.adultPrice === minPrice
    )!;
    const minDistance: number = Math.min(
        ...resortsInsideBudget.map((r) =>
            calculateDistance(r.coordinates, formData.currentLocation)
        )
    );
    const closest: ResortInfo = resortsInsideBudget.find(
        (r) =>
            calculateDistance(r.coordinates, formData.currentLocation) ===
            minDistance
    )!;

    return {
        bestMatch,
        cheapest,
        closest,
    };
}
