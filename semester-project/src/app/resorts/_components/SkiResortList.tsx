//import Pagination from "./pagination";
"use client";
import ResortCard from "../../../components/resort-card/ResortCard";
import { FilterProps } from "../types/filter";
import { getTotalDistance, parseDistanceRange } from "@/utils/getDistance";
import Pagination from "./pagination/pagination";
import { useState } from "react";
import { ResortInfo } from "@/types/resort";
import { useAuth } from "@/context/AuthContext";
import { useFavourites } from "@/hooks/useFavourites";

type ResortsListProps = {
    destinations: ResortInfo[];
    filterData: FilterProps;
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 20;

export default function SkiResortsList({
    destinations,
    filterData,
}: ResortsListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const { user } = useAuth();
    const { favouriteIds } = useFavourites(user?.id ?? null);

    const handleScroll = (page: number) => {
        setCurrentPage(page);
        window.scrollTo(0, 700);
    };
    //const pagesCount = Math.ceil(destinations.length / PAGE_SIZE);

    const filterResorts = () => {
        let resortsToDisplay = [...destinations];

        if (filterData.resortFilter) {
            resortsToDisplay = resortsToDisplay.filter((resort) =>
                resort.name
                    .toLowerCase()
                    .includes(filterData.resortFilter.toLowerCase())
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
                resortsToDisplay.sort(
                    (a, b) => Number(a.adultPrice) - Number(b.adultPrice)
                );
                break;
            case "price-desc":
                resortsToDisplay.sort(
                    (a, b) => Number(b.adultPrice) - Number(a.adultPrice)
                );
                break;
            case "review-asc":
                resortsToDisplay.sort(
                    (a, b) => Number(a.review) - Number(b.review)
                );
                break;
            case "review-desc":
                resortsToDisplay.sort(
                    (a, b) => Number(b.review) - Number(a.review)
                );
                break;
            default:
                break;
        }

        return resortsToDisplay;
    };

    const filteredResorts = filterResorts();
    const pagesCount = Math.ceil(filteredResorts.length / PAGE_SIZE);

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const resortsToDisplay = filteredResorts.slice(startIndex, endIndex);

    return (
        <>
            <ul className="ski-resorts-list">
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
                    initialPage={currentPage}
                    pagesCount={pagesCount}
                    onChange={handleScroll}
                />
            </div>
        </>
    );
}
