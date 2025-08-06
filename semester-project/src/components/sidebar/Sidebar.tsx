"use client"

import Link from "next/link";
import styles from './sidebar.module.css';
import { usePathname } from "next/navigation";
import { links } from "@/constants/profile-links";
import { Page } from "@/types/page";

function processLink(link: Page, index: number, pathname: string) {
    const isActive = pathname === link.path;

    return (
        <li key={index}>
            <Link
                href={link.path}
                className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
            >
                {link.title}

            </Link>
        </li>
    );
}

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul>
                    {links.map((link, index) => (processLink(link, index, pathname)))}
                </ul>
            </nav>
        </aside>
    );
}