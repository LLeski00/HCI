import Link from "next/link";
import type { Destination } from "../_lib/api";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/app/components/navbar/navbar";

export const metadata: Metadata = {
    title: "Destination",
};

type DestinationProps = {
    params: { id: string };
};

async function getDestination(id: string): Promise<Destination> {
    const data = await fetch(`${process.env.BASE_API_URL}/${id}`);
    return data.json();
}

export default async function DestinationDestination({
    params,
}: DestinationProps) {
    const destination = await getDestination(params.id);
    const { id, title, body } = destination;
    if (!id) {
        notFound();
    }
    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <Navbar />
            <article className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <Link
                    href="/destinations"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to all
                    destinations
                </Link>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
                    Destination {id}: {title}
                </h1>
                <p>{body}</p>
            </article>
        </main>
    );
}