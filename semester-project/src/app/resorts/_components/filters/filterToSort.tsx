import { FilterDataProps } from "../../types/filter";

export default function FilterToSort  ({ filterData, setFilterData }: FilterDataProps) {

    return ( 
        <div className="filter-container sort" >
            <h4>Sort resorts by</h4>
            <select className="filter-content search-input sort" onChange={(e) => setFilterData({...filterData, sortFilter: e.target.value})}>
                <option value="">Sort by: </option>
                <option value="price-asc">Price (asc)</option>
                <option value="price-desc">Price (desc)</option>
                <option value="review-asc">Review (asc)</option>
                <option value="review-desc">Review (desc)</option> 
            </select>
        </div>
     );
}