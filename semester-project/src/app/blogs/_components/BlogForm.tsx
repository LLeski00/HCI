"use client";

import { ResortInfo } from "@/app/destinations/types/resort";
import { Blog, BlogReq } from "@/types/blog";
import { FC } from "react";
import Select from "react-select";

interface BlogFormProps {
    resorts: ResortInfo[];
}

const BlogForm: FC<BlogFormProps> = ({ resorts }) => {
    const resortOptions = resorts.map((resort) => ({
        value: resort.id,
        label: resort.name,
    }));

    if (!resorts || resorts.length === 0) {
        return (
            <p>
                Couldn't load the blog form as there are no resorts available.
            </p>
        );
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget);
        const blogText: string = formData.get("blog") as string;
        const resortId: string = formData.get("resort") as string;
        const newBlog: BlogReq = {
            userId: "currentUserId", // Replace with actual user ID logic
            resortId: resortId,
            text: blogText,
        };

        //TODO: Implement the API call to post the new blog
        console.log("New blog submitted:", newBlog);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <Select
                    name="resort"
                    options={resortOptions}
                    placeholder="Select a resort"
                    isSearchable
                    required
                />
            </label>
            <label>
                <textarea name="blog" required></textarea>
            </label>
            <button type="submit">Post</button>
        </form>
    );
};

export default BlogForm;
