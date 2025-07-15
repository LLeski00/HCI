"use server";

import { db } from "@/db/drizzle";
import { blogs } from "@/db/schemas/blog";
import { BlogInfo, BlogReq } from "@/types/blog";
import { getUserById } from "./user";
import { getResortById } from "@/app/destinations/_lib/api";

export async function getAllBlogs(): Promise<BlogInfo[]> {
    const dbBlogs = await db.select().from(blogs);

    const data: BlogInfo[] = await Promise.all(
        dbBlogs.map(async (blog) => ({
            id: blog.id,
            user: await getUserById(blog.userId),
            resort: await getResortById(blog.resortId),
            text: blog.text,
        }))
    );

    return data;
}

export async function createBlog(blog: BlogReq): Promise<void> {
    await db.insert(blogs).values({
        id: crypto.randomUUID(),
        userId: blog.userId,
        resortId: blog.resortId,
        text: blog.text,
    });
}
