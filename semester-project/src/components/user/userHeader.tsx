'use client';

import { User } from '@/types/user';
import styles from './userHeader.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface UserHeaderProps {
  user: User;
}

export default function UserHeader({ user }: UserHeaderProps) {
  if (!user) return;

  return (
    <Link href="/profile" className={styles.userHeaderSection}>
      <div className={styles.userImageContainer}>
        <Image
          src={user.profile_image || '/images/profile.png'}
          alt="Profile picture"
          className={styles.userImage}
          fill
        />
      </div>
      <p>{user.name}</p>
    </Link>
  );
}
