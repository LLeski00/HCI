import Link from 'next/link';
import styles from './button.module.css';

interface CustomButtonProps {
  text: string;
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  text,
  href,
  type = 'button',
  disabled = false,
}: CustomButtonProps) {
  if (href) {
    return (
      <button type={type} className={styles.customButton} disabled={disabled}>
        <Link href={href}>{text}</Link>
      </button>
    );
  }
  return (
    <button type={type} className={styles.customButton} disabled={disabled}>
      {text}
    </button>
  );
}
