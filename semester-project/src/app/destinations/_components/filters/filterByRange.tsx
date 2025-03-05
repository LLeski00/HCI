import { FilterDataProps } from "../../types/filter";
import "./filters.css";

const distanceRange = ["0-20", "20-50", "50-80", "80-150",  "150+", "remove"];

export default function FilterByRange ({ filterData, setFilterData }: FilterDataProps) {

    return ( 
        <>
            <div className="filter-container">
                <h4>Filter by ski slope length</h4>
                <div className="filter-content">
                {distanceRange.map((range) => (
                    <label key={range} className="button-item">
                        <input type="radio"
                               value={range}
                               checked={filterData.rangeFilter === range}
                               onChange={(e) => setFilterData({...filterData, rangeFilter: e.target.value})}
                        />
                        {range} km
                    </label>
                    ))}
                </div>
                
                
            </div>
        </>
     );
}