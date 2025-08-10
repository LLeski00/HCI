"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/navbar/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Page } from "@/types/page";
import { pages } from "@/constants/pages";
import { useAuth } from "@/context/AuthContext";
import UserHeader from "@/components/user/userHeader";
import Loading from "../loading/Loading";
import { useEffect, useState } from "react";

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

export function Navbar() {
    const { user, isLoading } = useAuth();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navClass = `${styles.navbar} ${scrolled || pathname.startsWith("/profile") ? styles.scrolled : ""}`;
    const navItems = pages.map((page, index) => processPage(page, index, pathname));

    const authContent = isLoading ? (
        <Loading />
    ) : user ? (
        <UserHeader user={user} />
    ) : (
        <Link href="/auth/signin" className={styles.loginButton}>
            SIGN IN
        </Link>
    );

    return (
        <div className={navClass}>
            <h3 className={styles.logo}>SNOWFLOW</h3>
            <GiHamburgerMenu
                className={styles.hamburger}
                onClick={() => setIsMenuOpen(true)} />

            <ul className={`${styles.navList} ${styles.desktopView}`}>
                {navItems}
            </ul>

            <div className={styles.desktopView}>
                {authContent}
            </div>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
                <div
                    className={styles.closeButton}
                    onClick={() => setIsMenuOpen(false)}
                >
                    ✕
                </div>
                <ul>
                    {navItems}
                </ul>
                <div className={styles.mobileView}>
                    {authContent}
                </div>
            </div>
        </div>
    );
}