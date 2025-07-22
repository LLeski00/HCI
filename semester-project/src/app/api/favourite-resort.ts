"use server";
import { db } from "@/db/drizzle";
import { favouriteResorts } from "@/db/schemas/favourite-resort";
import { eq } from "drizzle-orm";

export async function getFavouriteResortIdsByUserId(
    userId: string
): Promise<string[]> {
    const dbData = await db
        .select({ resort_id: favouriteResorts.resort_id })
        .from(favouriteResorts)
        .where(eq(favouriteResorts.user_id, userId));

    return dbData.map((item) => item.resort_id);
}
