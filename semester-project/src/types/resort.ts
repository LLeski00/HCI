import { Coordinates } from "./coordinate";

type Resort = {
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
    adultPrice: number;
    youthPrice: number | null;
    review: number | null;
};

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
    adultPrice: number;
    youthPrice: number | null;
    review: number | null;
    coordinates: Coordinates;
};

export type { Resort, ResortInfo };
