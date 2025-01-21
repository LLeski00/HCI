type PagingInfo = {
    _start?: number;
    _limit?: number;
};

export type Destination = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE);

async function getDestinationsCount(): Promise<number> {
    // https://jsonplaceholder.typicode.com/destinations/?_start=5&_limit=8
    const data = await fetch(`${process.env.BASE_API_URL}/?_limit=1`, {
        method: "HEAD",
    });
    let count: string | number = data.headers.get("x-total-count") || "1";
    count = parseInt(count, 10);
    return count;
}

async function getDestinations({
    _start = 0,
    _limit = PAGE_SIZE,
}: PagingInfo): Promise<Destination[]> {
    const data = await fetch(
        `${process.env.BASE_API_URL}/?_start=${_start}&_limit=${_limit}`
    );
    return data.json();
}

export { getDestinations, getDestinationsCount };