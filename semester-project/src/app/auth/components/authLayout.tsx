// components/AuthLayout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="auth-container">
            <div className="overlay" />
            <div className="auth-section">
                <div className="auth-image"></div>
                <div className="auth-box">{children}</div>
            </div>
        </div>
    );
}
