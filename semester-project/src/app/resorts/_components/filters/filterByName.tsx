"use client"
import { FilterDataProps } from "../../types/filter";
import "./filters.css";

export default function FilterByName({ filterData, setFilterData }: FilterDataProps) {

    return ( 
        <>
        <div className="search-container">
            <input  className="search-input" type="text" placeholder="Search ski resorts"  onChange={(e) => setFilterData({...filterData, resortFilter: e.target.value})}/>
        </div>
        </>
    );
}
 