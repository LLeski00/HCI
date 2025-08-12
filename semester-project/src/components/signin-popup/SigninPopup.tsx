import React from "react";
import styles from "./signin-popup.module.css";

interface SigninPopupProps {
    onClose: () => void;
    signinUrl?: string;
}

const SigninPopup: React.FC<SigninPopupProps> = ({ onClose, signinUrl = "/signin" }) => {
    return (
        <div className={styles.popupOverlay} onClick={onClose}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                <h3>Please sign in</h3>
                <p>You need to be signed in to leave a review.</p>
                <div className={styles.popupButtons}>
                    <button onClick={onClose}>Close</button>
                    <a href={signinUrl} className={styles.signInLink}>Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default SigninPopup;
