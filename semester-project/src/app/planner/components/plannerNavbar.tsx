"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
    title: string;
    path: `/${string}`;
};

const pages: Page[] = [
    {
        title: "TRAVEL PACKAGES",
        path: "/planner/travel-packages",
    },
    {
        title: "TRIP GENERATOR",
        path: "/planner/trip-generator",
    },
    {
        title: "SOLO PLANNING",
        path: "/planner/solo-planning",
    },
];

function processPage(page: Page, index: number, pathname: string) {
    const isActive = pathname === page.path;

    return (
        <li key={index}>
            <Link
                href={page.path}
                className={`relative py-2 px-4 transition-all duration-300 ${
                    isActive ? "text-orange-400 font-extrabold" : "text-cyan-50"
                }`}
            >
                {page.title}

                {/* Underline effect */}
                <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-orange-400 transition-transform duration-300 ease-in-out transform ${
                        isActive ? "w-full" : "w-0"
                    }`}
                />
            </Link>
        </li>
    );
}
export function PlannerNavbar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-grow justify-between pt-8">
            <ul className="flex flex-1 justify-center space-x-5 drop-shadow-lg text-0">
                {pages.map((page, index) => processPage(page, index, pathname))}
            </ul>
        </div>
    );
}
