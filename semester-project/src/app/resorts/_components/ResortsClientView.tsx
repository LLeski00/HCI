"use client";
import { useState } from "react";
import { FilterProps } from "../types/filter";
import FilterByName from "./filters/filterByName";
import FilterByCountry from "./filters/filterByCountry";
import FilterByRange from "./filters/filterByRange";
import FilterToSort from "./filters/filterToSort";
import SkiResortsList from "./SkiResortList";
import { ResortInfo } from "@/types/resort";
import { useFavourites } from "@/hooks/useFavourites";
import { useAuth } from "@/context/AuthContext";
import Loading from "@/components/loading/Loading";

export default function ResortsClientView({
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
    const { user } = useAuth();
    const { favouriteIds, isLoading } = useFavourites(user?.id ?? null);

    if (isLoading) {
        return <Loading />;
    }

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
                    user={user}
                    favouriteIds={favouriteIds}
                />
            </div>
        </>
    );
}
