export const getTotalDistance = (easy: string, intermediate: string, difficult: string) => {
    return [easy, intermediate, difficult]
      .map((slope) => parseInt(slope)) 
      .reduce((a, b) => a + b, 0); 
  };
export const parseDistanceRange = (range: string) => {
    const [min, max] = range.split("-").map(Number);
    return { min, max };
};