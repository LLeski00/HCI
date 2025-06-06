import { PlannerFormData, PlannerResults } from "@/types/planner";
import { getResortsUnderPrice } from "./resort";
import { calculateResortScores } from "@/utils/plannerUtils";
import { ResortInfo } from "@/types/resort";

export async function getPlannerResults(
    formData: PlannerFormData
): Promise<PlannerResults> {
    const numOfDays: number =
        formData.endDate.getDate() - formData.startDate.getDate() + 1;
    const budgetPerDay: number = formData.budget / numOfDays;
    const resortsInsideBudget: ResortInfo[] = await getResortsUnderPrice(
        budgetPerDay
    );

    if (resortsInsideBudget.length === 0) return {} as PlannerResults;

    const scores: Record<string, number> =
        calculateResortScores(resortsInsideBudget);

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

    // TODO: Implement distance calculation based on formData.currentLocation
    const closest: ResortInfo = resortsInsideBudget[0];

    return {
        bestMatch,
        cheapest,
        closest,
    };
}
