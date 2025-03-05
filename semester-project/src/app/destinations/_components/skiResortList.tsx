//import Pagination from "./pagination";
import ResortCard from "./resortCard";
import { ResortInfo } from "../types/resort";

type ResortsListProps = {
    destinations: ResortInfo[];
};

export default function SkiResortsList({ destinations} : ResortsListProps){

    return(
    <>
        <ul className="ski-resorts-list">
            {destinations && destinations.map((resort) => (
                <ResortCard key={resort.id} resort={resort} />
            ))}
        </ul>
        <div className="pagination">
            {/*<Pagination currentPage={currentPage} pagesCount={pagesCount} />*/}
        </div>
    </>
    )
}
