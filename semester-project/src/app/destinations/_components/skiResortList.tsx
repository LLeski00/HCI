//import Pagination from "./pagination";
import ResortCard from "./resortCard";
import { ResortInfo } from "../types/resort";
import { FilterProps } from "../types/filter";
import { getTotalDistance, parseDistanceRange } from "@/utils/getDistance";

type ResortsListProps = {
    destinations: ResortInfo[];
    filterData: FilterProps;
};

export default function SkiResortsList({ destinations, filterData} : ResortsListProps){

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
                resortsToDisplay = resortsToDisplay.sort((a, b) => Number(a.adultPrice) - Number(b.adultPrice));
                break;
            case "price-desc":
                resortsToDisplay = resortsToDisplay.sort((a, b) => Number(b.adultPrice) - Number(a.adultPrice));
                break;
            case "review-asc":
                resortsToDisplay = resortsToDisplay.sort((a, b) => Number(a.review) - Number(b.review));
                break;
            case "review-desc":
                resortsToDisplay = resortsToDisplay.sort((a, b) => Number(b.review) - Number(a.review));
                break;
            default:
                break;
          }
        
        return resortsToDisplay;
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
            {/*<Pagination currentPage={currentPage} pagesCount={pagesCount} />*/}
        </div>
    </>
    )
}
