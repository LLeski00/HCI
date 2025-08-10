"use client"

import { getBestRatedResorts } from "@/api/resort";
import { Button } from "@/components/button/Button";
import Carousel from "@/components/carousel/Carousel";
import Loading from "@/components/loading/Loading";
import { ResortInfo } from "@/types/resort";
import { FC, useEffect, useState } from "react";

interface DestinationsSectionProps {
    header: string;
}

const DestinationsSection: FC<DestinationsSectionProps> = ({ header }) => {
    const [bestResorts, setBestResorts] = useState<ResortInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchBestResorts() {
            const resorts = await getBestRatedResorts();
            if (resorts) {
                setBestResorts(resorts);
            }
            setLoading(false);
        }

        fetchBestResorts();
    }, []);

    if (loading) return <Loading />

    return (
        <section className="home-destinations-section">
            <h1>{header}</h1>

            <div className="destination-carousel">
                <Carousel
                    data={bestResorts}
                    mode="resorts" />
            </div>

            <Button text="VIEW MORE" href="/resorts" />
        </section>
    );
};

export default DestinationsSection;
