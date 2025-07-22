import { Coordinates } from "@/types/coordinate";

export async function getCoordinates(
    location: string
): Promise<Coordinates | null> {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        location
    )}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch coordinates");
        }

        const data = await response.json();
        if (data.results.length === 0) {
            return null;
        }

        const { lat, lng } = data.results[0].geometry;
        return { latitude: lat, longitude: lng };
    } catch (error) {
        console.error("Error fetching coordinates:", error);
        return null;
    }
}
