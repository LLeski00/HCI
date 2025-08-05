"use client"

import Link from "next/link";
import styles from './sidebar.module.css';
import { usePathname } from "next/navigation";
import { links } from "@/constants/profile-links";
import { Page } from "@/types/page";
import UserHeader from "@/components/user/userHeader";
import { useAuth } from "@/context/AuthContext";

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
    const { user } = useAuth();

    return (
        <aside className={styles.sidebar}>
            <UserHeader user={user!} />
            <nav>
                <ul>
                    {links.map((link, index) => (processLink(link, index, pathname)))}
                </ul>
            </nav>
        </aside>
    );
}