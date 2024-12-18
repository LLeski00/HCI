import type { Metadata } from "next";
import Link from "next/link";
import { getDestinations, getDestinationsCount } from "./_lib/api";
import type { Destination } from "./_lib/api.tsx";
import Pagination from "./_components/pagination";
import { Navbar } from "../components/navbar/navbar";

type DestinationPageProps = {
    searchParams: { page: string };
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 6;

export const metadata: Metadata = {
    title: "Destination",
};

function processDestination(destination: Destination) {
    const { id, title } = destination;
    return (
        <li key={id} className="mb-4">
            <Link
                href={`/destinations/${id}`}
                className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Destination {id}: {title}
                </h2>
                <p className="font-normal text-gray-700">
                    Click to read more about this fascinating topic...
                </p>
            </Link>
        </li>
    );
}

export default async function DestinationPage({
    searchParams,
}: DestinationPageProps) {
    const destinationsCount = await getDestinationsCount();
    const pagesCount = Math.ceil(destinationsCount / PAGE_SIZE);
    // Ensure the page number is a positive integer.
    const currentPage = Math.min(
        /^[1-9][0-9]*$/.test(searchParams.page) ? Number(searchParams.page) : 1,
        pagesCount
    );
    const _start = (currentPage - 1) * PAGE_SIZE;
    const _limit = PAGE_SIZE;

    const destinations = await getDestinations({ _start, _limit });
    return (
        <main className="flex flex-col flex-1 max-w-3xl m-auto items-center p-10">
            <Navbar />
            <h1 className="text-6xl font-extrabold tracking-tight mb-10">
                Destination
            </h1>
            <Pagination currentPage={currentPage} pagesCount={pagesCount} />
            <ul className="w-full space-y-4">
                {destinations.map(processDestination)}
            </ul>
        </main>
    );
}
