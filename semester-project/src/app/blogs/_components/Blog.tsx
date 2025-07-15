import { BlogInfo } from "@/types/blog";
import { FC } from "react";

interface BlogProps {
    blog: BlogInfo;
}

const Blog: FC<BlogProps> = ({ blog }) => {
    return (
        <div className="blog">
            <p>User: {blog.user.name}</p>
            <p>Resort: {blog.resort ? blog.resort.name : "Unknown"}</p>
            <p>Text: {blog.text}</p>
        </div>
    );
};

export default Blog;
