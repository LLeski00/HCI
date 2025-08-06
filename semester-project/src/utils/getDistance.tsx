export const getTotalDistance = (
    easy: number,
    intermediate: number,
    difficult: number
) => {
    const total = [easy, intermediate, difficult].reduce((a, b) => a + b, 0);
    return Math.round(total * 100) / 100;
};

export const parseDistanceRange = (range: string) => {
    const [min, max] = range.split("-").map(Number);
    return { min, max };
};
