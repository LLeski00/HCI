import ResortCard from "@/components/resort-card/ResortCard";
import { useAuth } from "@/context/AuthContext";
import { useFavourites } from "@/hooks/useFavourites";
import {
    PlannerResultResort,
    PlannerResults as PlannerResultsType,
} from "@/types/planner";
import { FC } from "react";
import styles from './planner-results.module.css';

interface PlannerResultsProps {
    results: PlannerResultsType;
}

const PlannerResults: FC<PlannerResultsProps> = ({ results }) => {
    const { user } = useAuth();
    const { favouriteIds } = useFavourites(user?.id ?? null);

    if (!results.bestMatch || !results.cheapest || !results.closest)
        return <p>No results available for the given form</p>;

    const resultResort = (
        title: string,
        plannerResult: PlannerResultResort
    ) => {
        return (
            <div className={styles.resultContainer}>
                <h3>{title}:</h3>
                <ResortCard
                    resort={plannerResult.resort}
                    user={user}
                    isFavourite={
                        favouriteIds?.includes(plannerResult.resort.id) ?? false
                    } />

                <div className={styles.infoContent}>
                    <p>Distance: {plannerResult.distance.toFixed(2)} km </p>
                    <p>Tota cost: {plannerResult.totalCost.toFixed(2)} € </p>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.plannerResultsContainer}>
            <div className={styles.itemLeft}>
                {resultResort("Cheapest", results.cheapest)}
            </div>

            <div className={styles.itemCenter}>
                {resultResort("Best Match", results.bestMatch)}
            </div>

            <div className={styles.itemRight}>
                {resultResort("Closest", results.closest)}
            </div>
        </div>
    );
};

export default PlannerResults;
