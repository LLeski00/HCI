import React from "react";
import styles from "./signin-popup.module.css";
import Link from "next/link";

interface SigninPopupProps {
    onClose: () => void;
}

const SigninPopup: React.FC<SigninPopupProps> = ({ onClose }) => {
    return (
        <div className={styles.popupOverlay} onClick={onClose}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                <h3>Please sign in</h3>
                <p>You need to be signed in to leave a review.</p>
                <div className={styles.popupButtons}>
                    <button onClick={onClose}>Close</button>
                    <Link href="/auth/signin">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default SigninPopup;
