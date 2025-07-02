export function getDaysDifference(startDate: Date, endDate: Date): number {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.round((endDate.getTime() - startDate.getTime()) / msPerDay);
}
