import { db } from "@/db/drizzle";
import { blogs } from "@/db/schemas/blog";
import { Blog } from "@/types/blog";

export async function getAllBlogs(): Promise<Blog[]> {
    const data = await db.select().from(blogs);
    return data;
}
