import { useState } from "react";
import "./filters.css";
import { FilterDataProps } from "../../types/filter";

const countries = ["Austria", "Italy", "Slovenia", "France", "Germany", "Switzerland"];

export default function FilterByCountry ({ filterData, setFilterData }: FilterDataProps) {
    const [activeCountry, setActiveCountry] = useState<string[]>([]);

    const handleChoice = (country: string) => {
        let updatedCountry;

        if(activeCountry.includes(country)){
            updatedCountry = activeCountry.filter((c) => c !== country);
        } else {
            updatedCountry = [...activeCountry, country];
        }
        setFilterData({...filterData, countryFilter: updatedCountry});
        setActiveCountry(updatedCountry);
    }
    return ( 
        <>
            <div className="filter-container">
                <h4>Filter by country</h4>
                <div className="filter-content">
                    {countries.map((country, index) => (
                    <div key={index} className={`country-item ${activeCountry.includes(country) ? "active" : "" }`} onClick={() => handleChoice(country)}>{country}</div>
                    ))}
                </div>
                
            </div>
        </>
     );
}