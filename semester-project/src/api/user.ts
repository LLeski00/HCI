"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schemas/user";
import { User } from "@/types/user";
import { eq } from "drizzle-orm";

export async function getUserById(userId: string): Promise<User | null> {
    try {
        const dbData = await db
            .select()
            .from(users)
            .where(eq(users.id, userId));

        if (dbData.length === 0) return null;

        const user: User = {
            id: dbData[0].id,
            email: dbData[0].email,
            name: dbData[0].name,
            profile_image: dbData[0].profile_image,
        };

        return user;
    } catch (error) {
        throw new Error("Error fetching user by ID: " + error);
    }
}
