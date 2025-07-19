import { getAllBlogs } from "@/app/api/blog";
import { BlogInfo } from "@/types/blog";
import Blog from "./Blog";
import { getAllResorts } from "@/app/destinations/_lib/api";
import dynamic from "next/dynamic";
import { ResortInfo } from "@/types/resort";
import { useAuth } from "@/context/AuthContext";

const BlogForm = dynamic(() => import("./BlogForm"), { ssr: false });

const Blogs = async () => {
    const blogs: BlogInfo[] = await getAllBlogs();
    const resorts: ResortInfo[] = await getAllResorts();
    const { user } = useAuth();

    return (
        <div className="blogs">
            <h1>Blogs</h1>
            <h2>Post your new blog:</h2>
            {user && <BlogForm resorts={resorts} />}
            {blogs.length > 0 ? (
                blogs.map((blog) => <Blog blog={blog} key={blog.id} />)
            ) : (
                <p>There are currently no blogs.</p>
            )}
        </div>
    );
};

export default Blogs;
