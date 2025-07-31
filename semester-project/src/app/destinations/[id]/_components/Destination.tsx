import { Metadata } from "next";
import { getResortById } from "@/api/resort";
import { ResortInfo } from "@/types/resort";
import DestinationClientView from "./DestinationClientView";
import "./resort.css";
export const metadata: Metadata = {
    title: "Destination",
};

type DestinationProps = {
    params: { id: string; name: string };
};

export default async function Destination({ params }: DestinationProps) {
    const destination: ResortInfo | null = await getResortById(params.id);
    if (!destination) {
        return <div>Destination not found</div>;
    }

    return (
        <>
            <DestinationClientView destination={destination} />
        </>
    );
}
