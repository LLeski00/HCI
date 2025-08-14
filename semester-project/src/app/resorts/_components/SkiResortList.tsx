//import Pagination from "./pagination";
"use client";
import ResortCard from "../../../components/resort-card/ResortCard";
import { FilterProps } from "../types/filter";
import { getTotalDistance, parseDistanceRange } from "@/utils/getDistance";
import Pagination from "./pagination/pagination";
import { useEffect, useMemo, useState } from "react";
import { ResortInfo } from "@/types/resort";
import { User } from "@/types/user";

type ResortsListProps = {
    destinations: ResortInfo[];
    filterData: FilterProps;
    user: User | null;
    favouriteIds: string[] | null;
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 20;

export default function SkiResortsList({
    destinations,
    filterData,
    user,
    favouriteIds,
}: ResortsListProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const filteredResorts = useMemo(() => {
        let resortsToDisplay = [...destinations];

        if (filterData.resortFilter) {
            resortsToDisplay = resortsToDisplay.filter((resort) =>
                resort.name.toLowerCase().includes(filterData.resortFilter.toLowerCase())
            );
        }

        if (filterData.countryFilter.length > 0) {
            resortsToDisplay = resortsToDisplay.filter((resort) =>
                filterData.countryFilter.includes(resort.country)
            );
        }

        if (filterData.rangeFilter && filterData.rangeFilter !== "remove") {
            resortsToDisplay = resortsToDisplay.filter((resort) => {
                const totalSlopeDistance = getTotalDistance(
                    resort.easySlopes ?? 0,
                    resort.intermediateSlopes ?? 0,
                    resort.difficultSlopes ?? 0
                );
                const { min, max } = parseDistanceRange(filterData.rangeFilter);
                return totalSlopeDistance >= min && totalSlopeDistance <= max;
            });
        }

        switch (filterData.sortFilter) {
            case "price-asc":
                resortsToDisplay.sort((a, b) => Number(a.adultPrice) - Number(b.adultPrice));
                break;
            case "price-desc":
                resortsToDisplay.sort((a, b) => Number(b.adultPrice) - Number(a.adultPrice));
                break;
            case "rating-asc":
                resortsToDisplay.sort((a, b) => Number(a.review) - Number(b.review));
                break;
            case "rating-desc":
                resortsToDisplay.sort((a, b) => Number(b.review) - Number(a.review));
                break;
            default:
                break;
        }

        return resortsToDisplay;
    }, [destinations, filterData]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        document.getElementById("ski-resorts")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const params = new URLSearchParams();
        if (currentPage !== 1) params.set("page", currentPage.toString());

        const newUrl = params.toString()
            ? `/resorts?${params.toString()}`
            : "/resorts";
        window.history.pushState({}, "", newUrl);
    }, [filterData, currentPage]);

    useEffect(() => setCurrentPage(1), [filterData]);

    //const filteredResorts = filterResorts();
    const pagesCount = Math.ceil(filteredResorts.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const resortsToDisplay = filteredResorts.slice(startIndex, endIndex);

    return (
        <>
            <ul className="ski-resorts-list"
                id="ski-resorts">
                {resortsToDisplay &&
                    resortsToDisplay.map((resort) => (
                        <ResortCard
                            key={resort.id}
                            resort={resort}
                            user={user}
                            isFavourite={
                                favouriteIds?.includes(resort.id) ?? false
                            }
                        />
                    ))}
            </ul>
            <div className="pagination">
                <Pagination
                    currentPage={currentPage}
                    totalPages={pagesCount}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
}
