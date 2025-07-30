"use client";
import { useState } from "react";
import { FilterProps } from "../types/filter";
import SkiResortsList from "./skiResortList";
import FilterByName from "./filters/filterByName";
import FilterByCountry from "./filters/filterByCountry";
import FilterByRange from "./filters/filterByRange";
import FilterToSort from "./filters/filterToSort";
import { ResortInfo } from "@/types/resort";

export default function DestinationClientView({
    allDestinations,
}: {
    allDestinations: ResortInfo[];
}) {
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
                        <FilterByName
                            filterData={filterData}
                            setFilterData={setFilterData}
                        />
                        <FilterToSort
                            filterData={filterData}
                            setFilterData={setFilterData}
                        />
                        <FilterByCountry
                            filterData={filterData}
                            setFilterData={setFilterData}
                        />
                        <FilterByRange
                            filterData={filterData}
                            setFilterData={setFilterData}
                        />
                    </div>
                </aside>
                <SkiResortsList
                    destinations={allDestinations}
                    filterData={filterData}
                />
            </div>
        </>
    );
}
