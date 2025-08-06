import styles from "./not-found.module.css";
import { Button } from "@/components/button/Button";

const NotFoundPage = () => {
    return (
        <div className={styles.notFoundPage}>
            <h1>404 - Not Found</h1>
            <p>The destination does not exist.</p>
            <Button text="Go to Home" href="/" />
        </div>
    );
};

export default NotFoundPage;
