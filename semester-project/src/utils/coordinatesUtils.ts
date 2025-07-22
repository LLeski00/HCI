import { Coordinates } from "@/types/coordinate";

export function calculateDistance(
    location1: Coordinates,
    location2: Coordinates
): number {
    const earthRadius = 6371;

    const dLat = toRadians(location2.latitude - location1.latitude);
    const dLon = toRadians(location2.longitude - location1.longitude);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(location1.latitude)) *
            Math.cos(toRadians(location2.latitude)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c;
}

function toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}
