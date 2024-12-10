"use client";

import Link from "next/link";
import styles from "./customButton.module.css"

interface CustomButtonProps {
    text: string;
    href: string;
}

export function CustomButton({ text, href} : CustomButtonProps) {

    return (
        <div>
            <button type="button" className={styles.customButton}>
                <Link href={href}>{text}</Link>
            </button>
        </div>
    );
}
