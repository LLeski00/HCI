"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schemas/user";
import { eq } from "drizzle-orm";

export interface UpdateUserProfileData {
        userId: string;
        name?: string;
        bio?: string | null;
        profile_image?: string;
}

export async function updateUserProfile(data: UpdateUserProfileData) {
        const { userId, ...infoToUpdate } = data;

        await db.update(users).set(infoToUpdate).where(eq(users.id, userId));

        const updatedUser = await db
                .select()
                .from(users)
                .where(eq(users.id, userId));

        return updatedUser;
}
