import { getAllResorts } from "@/api/resort";
import { ResortInfo } from "@/types/resort";
import DestinationsClientView from "./destinationsClientView";

const Destinations = async () => {
    const destinations: ResortInfo[] = await getAllResorts();
    if (!destinations || destinations.length === 0) {
        return <div>No destinations found</div>;
    }

    return <DestinationsClientView allDestinations={destinations} />;
};

export default Destinations;
