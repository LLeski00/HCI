import { FilterDataProps } from "../../types/filter";
import "./filters.css";

const distanceRange = ["0-20", "20-50", "50-80", "80-150", "150-600"];

export default function FilterByRange({ filterData, setFilterData }: FilterDataProps) {

    const handleClick = (value: string) => {
        if (filterData.rangeFilter === value) {
            setFilterData({ ...filterData, rangeFilter: "" });
        } else {
            setFilterData({ ...filterData, rangeFilter: value });
        }
    };

    return (
        <>
            <div className="filter-container">
                <h4>Filter by ski slope length</h4>
                <div className="filter-content">
                    {distanceRange.map((range) => (
                        <label key={range} className="button-item" onClick={() => handleClick(range)}>
                            <input type="radio"
                                value={range}
                                checked={filterData.rangeFilter === range}
                            />
                            {range} km
                        </label>
                    ))}
                </div>


            </div>
        </>
    );
}