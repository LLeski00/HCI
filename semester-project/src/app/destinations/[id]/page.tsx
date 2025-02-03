import { Metadata } from "next";
import HeroSection from "@/components/hero/hero";
import { getResortById } from "../_lib/api";
import { FaPersonSkiing, FaMountain  } from "react-icons/fa6";
import { TbAerialLift } from "react-icons/tb";

export const metadata: Metadata = {
    title: "Destination",
};

type DestinationProps = {
    params: { id: string, name: string };
};

async function getSkiResort(id: string) {
    const resort = getResortById(id);
    return resort;
}

export default async function DestinationDestination({
    params,
}: DestinationProps) {
    const destination = await getSkiResort(params.id);
    if (!destination) {
        return <div>Destination not found</div>;
    }

    return (
        <>
            <HeroSection titleTop="" 
                        titleBottom={destination.name} 
                        description={destination.country} 
                        backgroundImage="/images/2.jpg"/>

            <main>
                <div className="info-description">
                    <p>{destination.description}</p>
                </div>
                <div className="info-container">
                    <div className="info-content">
                        <div className="info-item">
                            <FaMountain />
                            <p>{destination.elevation}</p>
                        </div>
                        <div className="info-item">
                            <TbAerialLift />
                            <p>{destination.skiLift}</p>
                        </div>
                        <div className="info-item">
                            <FaPersonSkiing />
                            <p>easy slopes: {destination.easySlopes}</p>   
                            <p>intermediate slopes: {destination.intermediateSlopes}</p>
                            <p>difficult slopes: {destination.difficultSlopes}</p>
                        </div>
                        
                    </div>
                    <div className="tear-effect"></div>
                    
                </div>
                <div className="information-content">
                    <div className="information-item">
                        <h2>Price</h2>
                        <p>Adults: {destination.adultPrice}</p>
                        <p>Children: {destination.youthPrice}</p>
                    </div>
                </div>
            </main>
        </>
    );
}

