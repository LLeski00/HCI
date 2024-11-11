"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Page = {
    title : string,
    path : `/${string}`,
}

const pages : Page[] = [
    {
        title: "HOME",
        path: "/"
    },
    {
        title: "DESTINATIONS",
        path: "/destinations",
      },
      {
        title: "PLANNER",
        path: "/planner",
      },
      {
        title: "CONTACT US",
        path: "/contact",
      },
]

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
export function Navbar() { 
    const pathname = usePathname();
    
    return (
      <div className="flex flex-grow justify-between pt-8">
        <h3 className="pl-8 text-2xl font-bold mr-auto">SNOWFLOW</h3>
        <ul className="flex flex-1 justify-center space-x-5 drop-shadow-lg text-0">
            {pages.map((page, index) => processPage(page, index, pathname))}
        </ul>
        <Link href="/login">
          <button className="mr-6 ml-12 w-[8vw] bg-orange-400 rounded-xl h-[5vh]">LOGIN</button>
        </Link>
      </ div>
     );
}
 