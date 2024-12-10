"use client";

import Link from "next/link";
import styles from "./button.module.css"

interface CustomButtonProps {
    text: string;
    href: string;
}

export function Button({ text, href } : CustomButtonProps) {

    return (
        <div>
            <button type="button" className={styles.customButton}>
                <Link href={href}>{text}</Link>
            </button>
        </div>
    );
}
