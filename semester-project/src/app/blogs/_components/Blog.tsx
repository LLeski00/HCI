import { Blog as BlogType } from "@/types/blog";
import { FC } from "react";

interface BlogProps {
    blog: BlogType;
}

const Blog: FC<BlogProps> = ({ blog }) => {
    return (
        <div className="blog">
            <h2>Blog ID: {blog.id}</h2>
            <p>User ID: {blog.userId}</p>
            <p>Resort ID: {blog.resortId}</p>
            <p>Text: {blog.text}</p>
        </div>
    );
};

export default Blog;
