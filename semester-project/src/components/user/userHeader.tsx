import { User } from "@/types/user";
import styles from './userHeader.module.css';

interface UserHeaderProps {
    user: User;
}

export default function UserHeader({ user }: UserHeaderProps) {
    return (
        <div className={styles.userHeaderSection}>
            <img
                src={user.profile_image || "/images/profile.png"}
                alt={`${user.name}'s profile picture`}
                className={styles.userImage}
            />
            <p>{user.name}</p>
        </div>
    );
}