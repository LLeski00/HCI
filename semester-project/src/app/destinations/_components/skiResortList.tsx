//import Pagination from "./pagination";
"use client";
import ResortCard from "./resortCard";
import { ResortInfo } from "../types/resort";
import { FilterProps } from "../types/filter";
import { getTotalDistance, parseDistanceRange } from "@/utils/getDistance";
import Pagination from "./pagination/pagination";
import { useState } from "react";

type ResortsListProps = {
    destinations: ResortInfo[];
    filterData: FilterProps;
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 20;

export default function SkiResortsList({ destinations, filterData} : ResortsListProps){
    const [currentPage, setCurrentPage] = useState(1);
    const handleScroll = (page: number) => {
        setCurrentPage(page);
        window.scrollTo(0,700);
    }
    //const pagesCount = Math.ceil(destinations.length / PAGE_SIZE);
    
    const filterResorts = () => {
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
                    resort.easySlopes ?? '0',
                    resort.intermediateSlopes ?? '0',
                    resort.difficultSlopes ?? '0'
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
            case "review-asc":
                resortsToDisplay.sort((a, b) => Number(a.review) - Number(b.review));
                break;
            case "review-desc":
                resortsToDisplay.sort((a, b) => Number(b.review) - Number(a.review));
                break;
            default:
                break;
          }

        const indexOfLastResort = currentPage * PAGE_SIZE;
        const indexOfFirstResort = indexOfLastResort - PAGE_SIZE;

        return resortsToDisplay.slice(indexOfFirstResort, indexOfLastResort);
    }

    const resortsToDisplay = filterResorts();

    return(
    <>
        <ul className="ski-resorts-list">
            {resortsToDisplay && resortsToDisplay.map((resort) => (
                <ResortCard key={resort.id} resort={resort} />
            ))}
        </ul>
        <div className="pagination">
        <Pagination initialPage={currentPage}
                    pagesCount={Math.ceil(destinations.length / PAGE_SIZE)}
                    onChange={handleScroll} // Passes setCurrentPage as the handler
                />
            {/*<Pagination currentPage={currentPage} pagesCount={pagesCount} />*/}
        </div>
    </>
    )
}
