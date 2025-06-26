import { db } from "@/db/drizzle";
import { blogs } from "@/db/schemas/blog";
import { Blog, BlogReq } from "@/types/blog";

export async function getAllBlogs(): Promise<Blog[]> {
    const data = await db.select().from(blogs);
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
