"use server";
import { db } from "@/db/drizzle";
import { favouriteResorts } from "@/db/schemas/favourite-resort";
import { FavouriteResortReq } from "@/types/favouriteResort";
import { and, eq } from "drizzle-orm";

export async function getFavouriteResortIdsByUserId(
    userId: string
): Promise<string[]> {
    const dbData = await db
        .select({ resort_id: favouriteResorts.resort_id })
        .from(favouriteResorts)
        .where(eq(favouriteResorts.user_id, userId));

    const favourites = dbData.map((item) => item.resort_id);

    return favourites;
}

export async function handleFavouriteResort(
    favouriteResort: FavouriteResortReq
): Promise<void> {
    const existingFavourite = await db
        .select()
        .from(favouriteResorts)
        .where(
            and(
                eq(favouriteResorts.resort_id, favouriteResort.resortId),
                eq(favouriteResorts.user_id, favouriteResort.userId)
            )
        );

    if (existingFavourite.length > 0) {
        await db
            .delete(favouriteResorts)
            .where(
                and(
                    eq(favouriteResorts.resort_id, favouriteResort.resortId),
                    eq(favouriteResorts.user_id, favouriteResort.userId)
                )
            );
    } else {
        await db.insert(favouriteResorts).values({
            id: crypto.randomUUID(),
            user_id: favouriteResort.userId,
            resort_id: favouriteResort.resortId,
        });
    }
}
