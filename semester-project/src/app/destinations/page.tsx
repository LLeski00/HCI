/*import type { Metadata } from "next";*/
import { getResorts } from "./_lib/api";
import Pagination from "./_components/pagination";
import type { ResortInfo } from "./_lib/api";
import "./destinations.css";
import Link from "next/link";
import HeroSection from "@/components/hero/hero";

import { FaPersonSkiing } from "react-icons/fa6";
import { TbAerialLift } from "react-icons/tb";
import { GiTwoCoins } from "react-icons/gi";
import { Footer } from "@/components/footer/footer";

type DestinationPageProps = {
    searchParams: { page: string };
};

const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 20;

/*export const metadata: Metadata = {
    title: "Destination",
};*/

const getTotalDistance = (easy: string, intermediate: string, difficult: string) => {
    return [easy, intermediate, difficult]
      .map((slope) => parseInt(slope)) 
      .reduce((a, b) => a + b, 0); 
  };
  

function processSkiResort(resort: ResortInfo) {
    if(!resort)
        return null;

    return (
            <div key={resort.id} className="resort-container">
                <Link href={`/destinations/${resort.id}`}>

                    <div className="resort-image-container">
                        <img src="/images/1.jpg" />
                    </div>

                    <div className="resort-details">

                        <div className="resort-title-content">
                            <h4>{resort.name || ""}<span>({resort.country || ""})</span></h4>
                            {/*<p>({resort.country})</p>*/}
                        </div>

                        <div className="resort-info">

                            <div className="resort-info-item">
                                <FaPersonSkiing />
                                <span>{getTotalDistance(resort.easySlopes ?? '0', resort.intermediateSlopes ?? '0', resort.difficultSlopes ?? '0')} km</span>
                            </div>
                            <div className="resort-info-item">
                                <TbAerialLift />
                                <span>{resort.skiLift || 0}</span>
                            </div>
                            <div className="resort-info-item">
                                <GiTwoCoins />
                                <span>{resort.adultPrice || "Price not available"}</span>
                            </div>

                        </div>

                        <div className="details-button">
                            <button>Details</button>
                        </div>
                    </div>
              
                </Link>
            </div>
    );
};


export default async function DestinationPage({searchParams}: DestinationPageProps) {
    const pagesCount = Math.ceil(620 / PAGE_SIZE);

    const currentPage = Math.min(
        /^[1-9][0-9]*$/.test(searchParams.page) ? Number(searchParams.page) : 1,
        pagesCount
    );
    const _start = (currentPage - 1) * PAGE_SIZE;
    const _limit = PAGE_SIZE;

    const destinations : ResortInfo[] = await getResorts({ _start, _limit });

    return (
        <>
            <HeroSection titleTop="EUROPE SKI" 
                            titleBottom="DESTINATIONS" 
                            description="Find the best resorts in Europe" 
                            backgroundImage="/images/2.jpg"/>

            <main>
                <div className="info-description">
                    <p>Europe is home to some of the most breathtaking ski resorts in the world, offering a blend of thrilling slopes, stunning alpine landscapes, and charming mountain villages. From the majestic peaks of the Alps to the snow-capped ranges of the Pyrenees and beyond, the continent provides an unparalleled experience for skiers and snowboarders of all skill levels.<br/><br/>
                        Whether you&apos;re carving through powdery trails in the famous Swiss resort of Zermatt, enjoying the lively après-ski scene in France&apos;s Chamonix, or exploring Austria&apos;s vast ski circuits in St. Anton, each destination boasts a unique blend of world-class facilities, rich cultural heritage, and scenic beauty. With modern lift systems, luxurious accommodations, and activities ranging from off-piste adventures to family-friendly snow parks, European ski resorts cater to every type of traveler.<br/><br/>
                        For those seeking more than just skiing, these resorts often offer spa retreats, gourmet dining experiences, and opportunities to soak in the charm of historic alpine towns. Europe&apos;s ski season typically runs from December to April, making it the perfect winter getaway for adventurers and leisure seekers alike.<br/><br/>
                        No matter your preferences, Europe&apos;s diverse range of ski resorts promises an unforgettable winter wonderland experience.</p>
                </div>
                <div className="info-container">
                    
                    <div className="info-content"></div>
                    <div className="tear-effect"></div>
                    
                </div>
                

                <div className="ski-resorts-page">
                    <div className="sidebar">
                        <h3>FILTERS</h3>
                    </div>
                    <ul className="ski-resorts-list">
                        {destinations && destinations.map((destination:ResortInfo)=>processSkiResort(destination))}
                    </ul>

                    <div className="pagination">
                        <Pagination currentPage={currentPage} pagesCount={pagesCount} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
        
    );
}