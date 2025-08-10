"use client"

import Link from "next/link";
import styles from './sidebar.module.css';
import { usePathname } from "next/navigation";
import { links } from "@/constants/profile-links";
import { Page } from "@/types/page";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
    const router = useRouter();
    const { signOut } = useAuth();

    const handleLogout = async () => {
        await signOut();
        toast.success("Sucessfully logged out!");
        router.push("/");
    };

    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul>
                    {links.map((link, index) => (processLink(link, index, pathname)))}
                    <li>
                        <button className={`${styles.navLink} ${styles.logout}`}
                            onClick={handleLogout}>Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}