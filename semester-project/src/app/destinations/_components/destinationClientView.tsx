"use client"
import { useState } from "react";
import { ResortInfo } from "../types/resort";
import { FilterProps } from "../types/filter";
import SkiResortsList from "./skiResortList";
import FilterByName from "./filters/filterByName";
import FilterByCountry from "./filters/filterByCountry";

export default function DestinationClientView ({allDestinations}: {allDestinations: ResortInfo[]}) {
    const [filterData, setFilterData] = useState<FilterProps>({
        resortFilter: "",
        sortFilter: "",
        countryFilter: [],
        rangeFilter: "",
    });

    return (
        <>  
            <div className="ski-resorts-page">
                <aside>
                    <h3>FILTERS</h3>
                    <div className="filters-box">
                        <FilterByName filterData={filterData} setFilterData={setFilterData} />
                        <FilterByCountry filterData={filterData} setFilterData={setFilterData} />
                        {/*<SearchBar filterData={filterData} setFilterData={setFilterData} />
                        <SortFilter filterData={filterData} setFilterData={setFilterData}/>
                        <CountryFilter filterData={filterData} setFilterData={setFilterData} /> 
                        <RangeFilter filterData={filterData} setFilterData={setFilterData}/>*/}
                    </div>
                </aside>
                <SkiResortsList destinations={allDestinations}
                                filterData={filterData} />
            </div>
        </>
      );
}