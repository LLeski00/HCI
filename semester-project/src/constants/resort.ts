import { coordinates } from "@/db/schemas/coordinates";
import { resorts } from "@/db/schemas/ski-resorts";

const RESORT_SELECT = {
        id: resorts.id,
        name: resorts.name,
        country: resorts.country,
        description: resorts.description,
        elevation: resorts.elevation,
        easySlopes: resorts.easySlopes,
        intermediateSlopes: resorts.intermediateSlopes,
        difficultSlopes: resorts.difficultSlopes,
        skiLift: resorts.skiLift,
        adultPrice: resorts.adultPrice,
        youthPrice: resorts.youthPrice,
        review: resorts.review,
        images: resorts.images,
};

const RESORT_INFO_SELECT = {
        ...RESORT_SELECT,
        coordinates: {
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
        },
};

export { RESORT_SELECT, RESORT_INFO_SELECT };
