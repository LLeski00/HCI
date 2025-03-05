//import Pagination from "./pagination";
import ResortCard from "./resortCard";
import { ResortInfo } from "../types/resort";
import { FilterProps } from "../types/filter";

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
