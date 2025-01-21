import { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";

export const metadata: Metadata = {
    title: "Destination",
};

type DestinationProps = {
    params: { id: string };
};

/*async function getDestination(id: string): Promise<ResortInfo> {
    const data = await fetch(`${process.env.BASE_API_URL}/${id}`);
    return data.json();
}*/

export default async function DestinationDestination({
    params,
}: DestinationProps) {
    const destination = await getSkiResort(params.id);
    console.log(destination);

    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <Navbar />
            <article className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
                
            </article>
        </main>
    );
}

function getSkiResort(id: string) {
    return id;
}
