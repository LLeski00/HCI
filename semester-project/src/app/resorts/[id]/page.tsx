import { Metadata } from "next";
import styles from './page.module.css';
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";
import { ResortInfo } from "@/types/resort";
import ResortDetailsView from "./_components/ResortDetailsView";
import { getResortById } from "@/api/resort";

export const metadata: Metadata = {
    title: "Resort",
};

type ResortProps = {
    params: { id: string };
};

export default async function ResortPage({ params }: ResortProps) {
    const resort: ResortInfo | null = await getResortById(params.id);
    if (!resort) {
        return <div>Resort not found</div>;
    }

    return (
        <div className={styles.resortPage}>
            <Suspense fallback={<Loading />}>
                <ResortDetailsView resort={resort} />
            </Suspense>
        </div>
    );
}
