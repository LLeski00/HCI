import { Metadata } from "next";
import Resort from "./_components/Resort";

export const metadata: Metadata = {
    title: "Resort",
};

type ResortProps = {
    params: { id: string };
};

export default async function ResortPage({ params }: ResortProps) {
    return (
        <>
            <Resort params={params} />
        </>
    );
}
