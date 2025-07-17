"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/navbar/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Page } from "@/types/page";
import { pages } from "@/constants/pages";
import { useAuth } from "@/context/AuthContext";

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
    const { user } = useAuth();
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
            {user ? (
                <div className={`${styles.profileSection} ${styles.signinSection}`}>
                    <img src={user.profile.profile_image || "/images/profile.png"}
                        className={styles.profileImage} />
                    <p>{user.profile.name}</p>
                </div>
            ) : (
                <Link href="/auth/signin" className={`${styles.signinSection} ${styles.loginButton}`}>
                    SIGN IN
                </Link>
            )}

        </div>
    );
}
