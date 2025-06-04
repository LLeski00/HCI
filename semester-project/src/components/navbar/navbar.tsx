"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/navbar/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

type Page = {
    title: string;
    path: `/${string}`;
};

const pages: Page[] = [
    {
        title: "HOME",
        path: "/",
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
        title: "INFO",
        path: "/info",
    },
    {
        title: "CONTACT US",
        path: "/contact",
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

                <span
                    className={`${styles.underline} ${isActive ? styles.underlineActive : ""
                        }`}
                />
            </Link>
        </li>
    );
}
export function Navbar() {
    const pathname = usePathname();
    const navClass =
        pathname === "/"
            ? styles.navbar
            : `${styles.navbar} ${styles.navBackground}`;

    return (
        <div className={navClass}>
            <h3 className={styles.logo}>SNOWFLOW</h3>
            <ul className={styles.navList}>
                {pages.map((page, index) => processPage(page, index, pathname))}
            </ul>
            <GiHamburgerMenu />
            <Link href="/auth/signin" className={styles.loginButton}>SIGN IN</Link>
        </div>
    );
}
