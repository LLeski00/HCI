"use client";

import ErrorComponent from "@/components/error/ErrorComponent";

export default function Error({ error }: { error: Error }) {
    return <ErrorComponent error={error} />;
}
