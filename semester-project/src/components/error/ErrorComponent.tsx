import { Button } from "../button/Button";
import styles from "./errorComponent.module.css";

const ErrorComponent = ({ error }: { error: Error }) => {
    return (
        <div className={styles.errorComponent}>
            <h1>Error</h1>
            <p>{error.message}</p>
            <Button text="Go to Home" href="/" />
        </div>
    );
};

export default ErrorComponent;
