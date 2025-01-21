"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/navbar/navbar.module.css"

type Page = {
    title: string;
    path: `/${string}`;
};

const pages: Page[] = [
    {
        title: "BEGINNER GUIDE",
        path: "/info/beginner-guide",
    },
    {
        title: "EQUIPMENT GUIDE",
        path: "/info/equipment-guide",
    },
    {
        title: "SKI EVENTS",
        path: "/info/ski-events",
    },
];

function processPage(page: Page, index: number, pathname: string) {
    const isActive =
        page.path === "/"
            ? pathname === page.path
            : pathname.startsWith(page.path);

    return (
        <li key={index} className={styles.navItem}>
            <Link
                href={page.path}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
            >
                {page.title}

                <span className={`${styles.underline} ${isActive ? styles.underlineActive : ""}`} />
            </Link>
        </li>
    );
}
export function InfoNavbar() {
    const pathname = usePathname();
    const navClass = pathname === "/" ? styles.navbar : `${styles.navbar} ${styles.navBackground}`;

    return (
        <div className={navClass}>
            <ul className={styles.navList}>
                {pages.map((page, index) => processPage(page, index, pathname))}
            </ul>
        </div>
    );
}
