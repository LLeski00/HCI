'use client';

import { User } from '@/types/user';
import styles from './userHeader.module.css';
import Link from 'next/link';

interface UserHeaderProps {
  user: User;
}

export default function UserHeader({ user }: UserHeaderProps) {
  if (!user) return;

  return (
    <Link href="/profile" className={styles.userHeaderSection}>
      <img
        src={user.profile_image || '/images/profile.png'}
        alt="Profile picture"
        className={styles.userImage}
      />
      <p>{user.name}</p>
    </Link>
  );
}
