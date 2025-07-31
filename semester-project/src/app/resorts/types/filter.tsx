type FilterProps = {
    resortFilter: string;
    sortFilter: string;
    countryFilter: string[];
    rangeFilter: string;
};

type FilterDataProps  = {
    filterData: FilterProps;
    setFilterData: React.Dispatch<React.SetStateAction<FilterProps>>;
};
export type {FilterProps, FilterDataProps};