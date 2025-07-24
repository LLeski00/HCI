import { Metadata } from "next";
import Destination from "./_components/Destination";
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Destination",
};

type DestinationProps = {
    params: { id: string; name: string };
};

export default async function DestinationPage({ params }: DestinationProps) {
    return (
        <div className={styles.destinationPage}>
            <Suspense fallback={<Loading />}>
                <Destination params={params} />
            </Suspense>
        </div>
    );
}
