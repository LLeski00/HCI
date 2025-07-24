import { getAllResorts } from "@/api/resort";
import DestinationClientView from "./destinationClientView";
import { ResortInfo } from "@/types/resort";

const Destinations = async () => {
    const destinations: ResortInfo[] = await getAllResorts();
    if (!destinations || destinations.length === 0) {
        return <div>No destinations found</div>;
    }

    return <DestinationClientView allDestinations={destinations} />;
};

export default Destinations;
