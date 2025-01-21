import type { Metadata } from "next";
import { getResorts } from "./_lib/api";
import Pagination from "./_components/pagination";
import { Navbar } from "../../components/navbar/navbar";
import "./destinations.css";

type DestinationPageProps = {
    searchParams: { page: string };
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 6;

export const metadata: Metadata = {
    title: "Destination",
};

function processSkiResort(resort:any) {
    return (
            <div key={resort.id} className="resort-container">
                <div className="resort-location">
                    <h3>{resort.name}</h3>
                    <p>{resort.country}</p>
                </div>
                <div className="resort-info">
                    <div className="image-container">
                        <img src="/images/1.jpg" />
                    </div>
                    <div className="resort-details">
                        <p><strong>Elevation Range:</strong> {resort.elevation}</p>
                        <p><strong>Beginner:</strong> {resort.easySlopes}</p>
                        <p><strong>Intermediate:</strong> {resort.intermediateSlopes}</p>
                        <p><strong>Advanced:</strong> {resort.difficultSlopes}</p>
                        <p><strong>Adult Price:</strong> {resort.adultPrice ? `${resort.adultPrice} $` : "Not available"}</p>
                        <p><strong>Rating:</strong> {resort.review}</p>
                    </div>
                </div>
            </div>
    );
};


export default async function DestinationPage({searchParams}: DestinationPageProps) {
    const pagesCount = Math.ceil(620 / PAGE_SIZE);

    const currentPage = Math.min(
        /^[1-9][0-9]*$/.test(searchParams.page) ? Number(searchParams.page) : 1,
        pagesCount
    );
    const _start = (currentPage - 1) * PAGE_SIZE;
    const _limit = PAGE_SIZE;

    const destinations = await getResorts({ _start, _limit });

    return (
        <main className="flex flex-col flex-1 max-w-3xl m-auto items-center p-10">
            <Navbar />
            <h1 className="text-6xl font-extrabold tracking-tight mb-10">
                Ski resorts
            </h1>
            <Pagination currentPage={currentPage} pagesCount={pagesCount} />
            <ul className="w-full space-y-4">
                {destinations.map(processSkiResort)}
            </ul>
        </main>
    );
}