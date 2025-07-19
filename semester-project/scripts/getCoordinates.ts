import { db } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { coordinates } from "@/db/schemas/coordinates";
import { resorts } from "@/db/schemas/ski-resorts";
import "dotenv/config";

async function getCoordinates(query: string) {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
                query
        )}&key=${process.env.OPENCAGE_API_KEY}`;

        try {
                const res = await fetch(url);
                if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                const results = data.results;

                if (results.length > 0) {
                        const { lat, lng } = results[0].geometry;
                        return { lat, lng };
                }
        } catch (error) {
                console.error("Error fetching coordinates:", error);
        }

        return null;
}

async function main() {
        const allResorts = await db.select().from(resorts);

        for (const resort of allResorts) {
                const existing = await db
                        .select()
                        .from(coordinates)
                        .where(eq(coordinates.resortId, resort.id));

                if (existing.length > 0) continue;

                const query = `${resort.name}, ${resort.country}`;
                const coords = await getCoordinates(query);

                if (coords) {
                        await db.insert(coordinates).values({
                                resortId: resort.id,
                                latitude: coords.lat,
                                longitude: coords.lng,
                        });
                } else {
                        console.warn(`Could not get coordinates for ${query}`);
                }

                await new Promise((r) => setTimeout(r, 1000));
        }
}

main();
