// components/AuthFormButton.tsx
"use client";
import '../styles/auth.css';
import Link from "next/link";

interface AuthFormButtonProps {
    loading: boolean;
    loadingText: string;
    defaultText: string;
    linkText: string;
    linkHref: string;
    linkLabel: string;
}

export default function AuthFormButton({ loading, loadingText, defaultText, linkText, linkHref, linkLabel }: AuthFormButtonProps) {
    return (
        <div className="button-container">
            <button type="submit" className="auth-button" disabled={loading}>
                {loading ? loadingText : defaultText}
            </button>
            <p className="auth-text">
                {linkText} <Link href={linkHref}>{linkLabel}</Link>
            </p>
        </div>
    );
}