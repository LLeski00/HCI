import { ClipLoader } from "react-spinners";
import styles from "./loading.module.css";

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <ClipLoader color="#f7a260" />
        </div>
    );
};

export default Loading;
