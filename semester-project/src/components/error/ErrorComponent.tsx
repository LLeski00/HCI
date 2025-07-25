import styles from "./errorComponent.module.css";

const ErrorComponent = ({ error }: { error: Error }) => {
    return (
        <div className={styles.errorComponent}>
            <h2>Error</h2>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorComponent;
