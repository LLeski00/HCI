import { getAllBlogs } from "@/api/blog";
import { Blog as BlogType } from "@/types/blog";
import Blog from "./Blog";

const Blogs = async () => {
    const blogs: BlogType[] = await getAllBlogs();

    return (
        <div className="blogs">
            <h1>Blogs</h1>
            {blogs.length > 0 ? (
                blogs.map((blog) => <Blog blog={blog} key={blog.id} />)
            ) : (
                <p>There are currently no blogs.</p>
            )}
        </div>
    );
};

export default Blogs;
