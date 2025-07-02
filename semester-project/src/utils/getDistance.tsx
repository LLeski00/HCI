export const getTotalDistance = (
    easy: number,
    intermediate: number,
    difficult: number
) => {
    return [easy, intermediate, difficult].reduce((a, b) => a + b, 0);
};
export const parseDistanceRange = (range: string) => {
    const [min, max] = range.split("-").map(Number);
    return { min, max };
};
