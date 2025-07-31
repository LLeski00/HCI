import { Coordinates } from "./coordinate";

type ResortInfo = {
        id: string;
        name: string;
        country: string;
        images: string[] | null;
        description: string | null;
        elevation: string | null;
        easySlopes: number | null;
        intermediateSlopes: number | null;
        difficultSlopes: number | null;
        skiLift: number | null;
        adultPrice: number | null;
        youthPrice: number | null;
        review: number | null;
        coordinates: Coordinates;
};

type ResortInfoWithoutCoordinates = Omit<ResortInfo, "coordinates">;

export { type ResortInfo, type ResortInfoWithoutCoordinates };
