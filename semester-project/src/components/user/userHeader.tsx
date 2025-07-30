"use client"

import { User } from "@/types/user";
import styles from './userHeader.module.css';
import Link from "next/link";

interface UserHeaderProps {
    user: User;
}

export default function UserHeader({ user }: UserHeaderProps) {
    return (
        <Link href="/profile"
            className={styles.userHeaderSection}>
            <img
                src={user.profile_image || "/images/profile.png"}
                alt={`${user.name}'s profile picture`}
                className={styles.userImage}
            />
            <p>{user.name}</p>
        </Link>
    );
}