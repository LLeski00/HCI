import Link from "next/link";
import styles from "./button.module.css";

interface CustomButtonProps {
    text: string;
    href?: string;
    type?: "button" | "submit";
}

export function Button({ text, href, type = "button" }: CustomButtonProps) {
    if (href) {
        return (
            <button type={type} className={styles.customButton}>
                <Link href={href}>{text}</Link>
            </button>
        );

    }
    return (
        <button type={type} className={styles.customButton}>
            {text}
        </button>
    );
}
