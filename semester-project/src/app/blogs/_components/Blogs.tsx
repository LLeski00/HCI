import { getAllBlogs } from "@/api/blog";
import { Blog as BlogType } from "@/types/blog";
import Blog from "./Blog";
import { ResortInfo } from "@/app/destinations/types/resort";
import { getAllResorts } from "@/app/destinations/_lib/api";
import dynamic from "next/dynamic";

const BlogForm = dynamic(() => import("./BlogForm"), { ssr: false });

const Blogs = async () => {
    const blogs: BlogType[] = await getAllBlogs();
    const resorts: ResortInfo[] = await getAllResorts();

    return (
        <div className="blogs">
            <h1>Blogs</h1>
            <h2>Post your new blog:</h2>
            <BlogForm resorts={resorts} />
            {blogs.length > 0 ? (
                blogs.map((blog) => <Blog blog={blog} key={blog.id} />)
            ) : (
                <p>There are currently no blogs.</p>
            )}
        </div>
    );
};

export default Blogs;
