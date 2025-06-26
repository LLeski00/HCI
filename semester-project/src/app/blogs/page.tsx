import { Navbar } from "@/components/navbar/navbar";
import Blogs from "./_components/Blogs";

export default async function Home() {
    return (
        <div>
            <Navbar />
            <Blogs />
        </div>
    );
}
