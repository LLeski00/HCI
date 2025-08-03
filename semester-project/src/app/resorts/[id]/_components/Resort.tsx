import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";
import { ResortInfo } from "@/types/resort";
import { getResortById } from "@/api/resort";
import ResortDetailsView from "./resort-details-view/ResortDetailsView";

export const metadata: Metadata = {
    title: "Resort",
};

type ResortProps = {
    params: { id: string };
};

export default async function Resort({ params }: ResortProps) {
    const resort: ResortInfo | null = await getResortById(params.id);
    if (!resort) {
        return <div>Resort not found</div>;
    }

    return (
        <Suspense fallback={<Loading />}>
            <ResortDetailsView resort={resort} />
        </Suspense>
    );
}
